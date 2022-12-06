import { useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import styles from './navbarRight.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ItemSidebarRight } from '~/component';
import { faEllipsisH, faStopwatch } from '@fortawesome/free-solid-svg-icons';

import { listSongs } from '~/assets';
const cx = classNames.bind(styles);

function NavBarRight() {
    const [listSongRender, setListSongRender] = useState(listSongs);
    const [isOpen, setIsOpen] = useState(0);
    const [idSongOpen, setIdSongOpen] = useState([listSongs[0]]);

    const handelPlaySong = (song) => {
        console.log(song);
        setListSongRender((iprev) => {
            const newListSong = iprev.filter((item) => item.song_id !== song.song_id);
            return newListSong;
        });
        setIsOpen(song.song_id);
        setIdSongOpen((iprev) => [...iprev, song]);
    };

    const handelClick = (song) => {
        setIsOpen(song.song_id);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('boxHeader')}>
                <div className={cx('boxButtom')}>
                    <button className={cx('btn', 'active')}>Danh sách phát</button>
                    <button className={cx('btn')}>Nghe gần đây</button>
                </div>
                <div className={cx('boxIcon')}>
                    <div className={cx('icon')}>
                        <FontAwesomeIcon icon={faStopwatch} />
                    </div>
                    <div className={cx('icon')}>
                        <FontAwesomeIcon icon={faEllipsisH} />
                    </div>
                </div>
            </div>
            <div className={cx('listSongs')}>
                {idSongOpen.map((song, index) => {
                    return (
                        <ItemSidebarRight
                            key={song.song_id}
                            imageSong={song.song_img}
                            name={song.song_name}
                            singer={song.singer}
                            isActive={song.song_id === isOpen}
                            onClick={() => handelClick(song)}
                        />
                    );
                })}
                <div className={cx('text')}>Tiếp theo</div>
                {listSongRender.map((song, index) => {
                    if (song.song_id !== 0) {
                        return (
                            <ItemSidebarRight
                                key={song.song_id}
                                imageSong={song.song_img}
                                name={song.song_name}
                                singer={song.singer}
                                onClick={() => handelPlaySong(song)}
                            />
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
        </div>
    );
}

export default NavBarRight;
