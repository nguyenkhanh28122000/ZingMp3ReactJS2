import classNames from 'classnames/bind';
import styles from './style.module.scss';

import { colors } from '~/assets';

import { IconComp } from '~/component';
import { faCaretLeft, faCaretRight, faPause, faPlay, faRandom, faRedo } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);

function BoxControl() {
    const [isPlay, setIsPlay] = useState(false);
    const [valueAudio, setValueAudio] = useState(0);
    const [timeSong, setTimeSong] = useState(0);
    const [isRandom, setIsRandom] = useState(false);
    const [isRepeat, setIsRepeat] = useState(false);
    const [clickLeft, setClickLeft] = useState(false);
    const [clickRight, setClickRight] = useState(false);

    const secondsToHms = (timeSong) => {
        var h = Math.floor(timeSong / 3600);
        var m = Math.floor((timeSong % 3600) / 60);
        var s = Math.floor((timeSong % 3600) % 60);

        var hDisplay = h > 0 ? h + ': ' : '';
        var mDisplay = m > 0 ? (m < 10 ? '0' + m + ':' : m + ':') : '00:';
        var sDisplay = s > 0 ? (s < 10 ? '0' + s : s) : '00';

        return hDisplay + mDisplay + sDisplay;
    };

    const handelChange = (value) => {
        setValueAudio(value);
    };

    // chuyển bài
    const handelClickLeft = () => {
        setClickLeft(true);
        setTimeout(() => {
            setClickLeft(false);
        }, 300);
    };
    const handelClickRight = () => {
        setClickRight(true);
        setTimeout(() => {
            setClickRight(false);
        }, 300);
    };

    // random
    const handelClickRandom = () => {
        setIsRandom(!isRandom);
        if (isRepeat) {
            setIsRepeat(false);
        }
    };
    // repeat
    const handelClickRepeat = () => {
        setIsRepeat(!isRepeat);
        if (isRandom) {
            setIsRandom(false);
        }
    };

    useEffect(() => {
        const time = Math.floor((valueAudio * 345) / 100);

        setTimeSong(time);
    }, [valueAudio]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('boxControl')}>
                <IconComp
                    icon={faRandom}
                    hoverBackgroud
                    color={isRandom ? colors.PRIMARY : colors.WHITE}
                    onClick={handelClickRandom}
                />
                <IconComp
                    icon={faCaretLeft}
                    hoverBackgroud
                    color={clickLeft ? colors.PRIMARY : colors.WHITE}
                    className={cx('icon')}
                    onClick={handelClickLeft}
                />
                <div className={cx('playSong')}>
                    {isPlay ? (
                        <IconComp
                            icon={faPause}
                            color={colors.WHITE}
                            className={cx('iconPause')}
                            onClick={() => setIsPlay(false)}
                        />
                    ) : (
                        <IconComp
                            icon={faPlay}
                            color={colors.WHITE}
                            className={cx('iconPlay')}
                            onClick={() => setIsPlay(true)}
                        />
                    )}
                </div>

                <IconComp
                    icon={faCaretRight}
                    hoverBackgroud
                    color={clickRight ? colors.PRIMARY : colors.WHITE}
                    className={cx('icon')}
                    onClick={handelClickRight}
                />
                <IconComp
                    icon={faRedo}
                    hoverBackgroud
                    color={isRepeat ? colors.PRIMARY : colors.WHITE}
                    onClick={handelClickRepeat}
                />
            </div>
            <div className={cx('boxAudio')}>
                <span className={cx('timeSong')}>{secondsToHms(timeSong)}</span>
                <input
                    id="progress"
                    className={cx('progress')}
                    type="range"
                    value={valueAudio}
                    step="1"
                    min="0"
                    max="100"
                    onChange={(e) => handelChange(e.target.value)}
                />
                <span className={cx('timeSong')} style={{ textAlign: 'right' }}>
                    {secondsToHms(345)}
                </span>
                <audio id="audio" src=""></audio>
            </div>
        </div>
    );
}

export default BoxControl;
