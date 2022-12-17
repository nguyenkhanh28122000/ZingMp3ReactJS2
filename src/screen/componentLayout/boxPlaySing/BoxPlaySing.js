import { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './boxPlaySing.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import BoxControl from './boxControl';
import InfoSong from './infoSong';
import BoxControlVolume from './boxControlVolume';

import { listSongs } from '~/assets';

const cx = classNames.bind(styles);

function BoxPlaySing() {
    const [showSong, setShowSong] = useState(false);

    return (
        <div className={cx('wrapper')}>
            <div style={{ flex: 1 }}>
                <InfoSong
                    img={listSongs[0].song_img}
                    nameSong={listSongs[0].song_name}
                    singerName={listSongs[0].singer}
                    onClick={() => setShowSong(!showSong)}
                />
            </div>
            <div style={{ flex: 2 }}>
                <BoxControl />
            </div>
            <div style={{ flex: 1 }}>
                <BoxControlVolume />
            </div>

            <div className={cx('boxSong', showSong ? 'active' : null)}>
                <div className={cx('headerBoxSong')}>
                    <img src={listSongs[0].song_img} alt={'error'} className={cx('logo')} />
                    <div className={cx('contentHeader')}>bài nhạc đang phát</div>
                    <div className={cx('boxClose')} onClick={() => setShowSong(false)}>
                        <FontAwesomeIcon icon={faClose} />
                    </div>
                </div>

                <img src={listSongs[0].song_img} alt={'error'} className={cx('imgSong')} />
                <div className={cx('info')}>
                    <h3 className={cx('nameSong')}>{listSongs[0].song_name}</h3>
                    <p className={cx('singer')}>{listSongs[0].singer}</p>
                </div>

                <BoxControl />
            </div>
        </div>
    );
}

export default BoxPlaySing;
