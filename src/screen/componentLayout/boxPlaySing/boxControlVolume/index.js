import { useEffect, useState, useContext } from 'react';

import classNames from 'classnames/bind';
import styles from './style.module.scss';

import { faMicrophone, faPhotoVideo, faVolumeDown, faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-regular-svg-icons';

import SongPlayContext from '~/store/Context';

import { IconComp } from '~/component';
import { colors } from '~/assets';
const cx = classNames.bind(styles);

function BoxControlVolume() {
    const valueSong = useContext(SongPlayContext);
    const { volume, setVolume } = valueSong;

    const [valueVolume, setValueVolume] = useState(volume);
    const [isMute, setIsMute] = useState(false);

    useEffect(() => {
        if (isMute) {
            setValueVolume(0);
        } else {
            setValueVolume(volume > 50 ? volume : 50);
        }
    }, [isMute]);

    useEffect(() => {
        setVolume(valueVolume);
        if (valueVolume == 0) {
            setIsMute(true);
        }
    }, [valueVolume]);

    const handelVolume = () => {
        setIsMute(!isMute);
    };

    const handelChangeVolume = (value) => {
        setValueVolume(value);

        if (value > 0) {
            setIsMute(false);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <IconComp icon={faPhotoVideo} hoverBackgroud color={colors.BLURCOLOR} className={cx('iconVideo')} />
            <IconComp icon={faMicrophone} hoverBackgroud color={colors.WHITE} className={cx('iconMic')} />
            <IconComp icon={faSquare} hoverBackgroud color={colors.WHITE} className={cx('icon')} />
            <div className={cx('boxVolume')}>
                <div className={cx('iconVolume')}>
                    <IconComp icon={isMute ? faVolumeMute : faVolumeDown} color={colors.WHITE} onClick={handelVolume} />
                </div>
                <input
                    id="volume"
                    className={cx('volume')}
                    type="range"
                    value={valueVolume}
                    step="1"
                    min="0"
                    max="100"
                    onChange={(e) => handelChangeVolume(e.target.value)}
                />
            </div>
        </div>
    );
}

export default BoxControlVolume;
