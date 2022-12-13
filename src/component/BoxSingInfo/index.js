import { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './style.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPlay, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

import { songImgs } from '~/assets';

const cx = classNames.bind(styles);

function BoxSingInfo({ imageSong, name, singer, isActive, className, onClick, ...rest }) {
    const [isPlay, setIsPlay] = useState(isActive ? true : false);

    useEffect(() => {
        if (isActive) {
            setIsPlay(true);
        } else {
            setIsPlay(false);
        }
    }, [isActive]);

    const props = {
        onClick,
        ...rest,
    };

    const handelPause = () => {
        setIsPlay(!isPlay);
    };

    const clases = cx('wrapper', {
        [className]: className,
        active: isActive,
    });

    return (
        <div className={clases} {...props}>
            <img src={imageSong} alt={'error'} className={cx('play')} />
            <div className={cx('boxSongPlay')} onClick={handelPause}>
                <img src={songImgs.ICONPLAY} className={cx('songPlay', isPlay ? 'isPlay' : 'isPause')} />

                <FontAwesomeIcon icon={faPlay} className={cx('iconPlay', isPlay ? 'isPlay' : 'isPause')} />
            </div>

            <div className={cx('info')}>
                <h3 className={cx('nameSong')}>{name}</h3>
                <p className={cx('singer')}>{singer}</p>
            </div>

            <div className={cx('content')}>
                <FontAwesomeIcon icon={faHeart} className={cx('iconHeart')} />
                <FontAwesomeIcon icon={faEllipsisH} className={cx('iconMenu')} />
            </div>
        </div>
    );
}

BoxSingInfo.propTypes = {
    imageSong: PropTypes.string,
    name: PropTypes.string,
    singer: PropTypes.string,
};

export default memo(BoxSingInfo);
