import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faHeart, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './style.module.scss';

import BoxControl from '../boxControl';
import { IconComp } from '~/component';

import { colors } from '~/assets';
const cx = classNames.bind(styles);

function InfoSong({ img, nameSong, singerName, onClick }) {
    const handelClick = () => {
        onClick();
    };

    const clases = cx('wrapper');
    return (
        <div className={clases} onClick={handelClick}>
            <img src={img} alt={'error'} className={cx('play')} />

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
