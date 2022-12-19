import { useRef, useEffect } from 'react';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './style.module.scss';

import { IconComp } from '~/component';

import { colors } from '~/assets';
const cx = classNames.bind(styles);

function InfoSong({ img, nameSong, singerName, isPause, onClick }) {
    const handelClick = () => {
        onClick();
    };

    const cdRef = useRef();
    let thumbSongAnimate;
    if (cdRef.current) {
        thumbSongAnimate = cdRef.current.animate(
            {
                transform: 'rotate(360deg)',
            },
            {
                duration: 10000,
                iterations: Infinity,
            },
        );
        thumbSongAnimate.pause();
    }
    // useEffect(() => {
    //     if (thumbSongAnimate) {
    //         if (isPause) {
    //             thumbSongAnimate.pause();
    //         } else {
    //             thumbSongAnimate.play();
    //         }
    //     }
    //     return () => {
    //         thumbSongAnimate.pause();
    //     };
    // }, [isPause]);

    const clases = cx('wrapper');
    return (
        <div className={clases} onClick={handelClick}>
            <img ref={cdRef} src={img} alt={'error'} className={cx('play')} />

            <div className={cx('info')}>
                <h3 className={cx('nameSong')}>{nameSong}</h3>
                <p className={cx('singer')}>{singerName}</p>
            </div>

            <div className={cx('content')}>
                <IconComp icon={faHeart} color={colors.PRIMARY} hoverBackgroud className={cx('icon')} />
                <IconComp icon={faEllipsisH} color={colors.WHITE} hoverBackgroud />
            </div>
        </div>
    );
}

export default InfoSong;
