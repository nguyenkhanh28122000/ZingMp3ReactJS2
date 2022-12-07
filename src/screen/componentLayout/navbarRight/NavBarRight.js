import { useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import styles from './navbarRight.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ItemSidebarRight } from '~/component';
import { faEllipsisH, faStopwatch } from '@fortawesome/free-solid-svg-icons';

import { listSongs } from '~/assets';
const cx = classNames.bind(styles);

function NavBarRight() {
    const [waitingList, setWaitingList] = useState(listSongs.filter((item) => item.song_id !== 0));
    const [isOpen, setIsOpen] = useState({ index: 0, id: 0 });
    console.log(isOpen);
    const [ListOpen, setListOpen] = useState([listSongs[0]]);

    console.log(waitingList[0]);

    const handelPlaySong = (song) => {
        setWaitingList((iprev) => {
            const newListSong = iprev.filter((item) => item.song_id !== song.song_id);
            return newListSong;
        });
        setIsOpen({ index: ListOpen.length, id: song.song_id });
        setListOpen((iprev) => [...iprev, song]);
    };

    const handelClick = ({ index, idSong }) => {
        setIsOpen({ index: index, id: idSong });
    };

    // Xử lý khi hết bài hát
    const test = () => {
        if (isOpen.index < ListOpen.length - 1) {
            setIsOpen((iprev) => {
                return { index: iprev.index + 1, id: ListOpen[iprev.index + 1].song_id };
            });
        } else if (isOpen.index >= ListOpen.length - 1 && isOpen.index < listSongs.length - 1) {
            handelPlaySong(waitingList[0]);
        } else {
            setWaitingList(listSongs.filter((item) => item.song_id !== 0));
            setIsOpen({ index: 0, id: 0 });
            setListOpen([listSongs[0]]);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('boxHeader')} onClick={test}>
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
                {ListOpen.map((song, index) => {
                    return (
                        <ItemSidebarRight
                            key={song.song_id}
                            imageSong={song.song_img}
                            name={song.song_name}
                            singer={song.singer}
                            isActive={song.song_id === isOpen.id}
                            onClick={() => handelClick({ index: index, idSong: song.song_id })}
                        />
                    );
                })}
                <div className={cx('text')}>Tiếp theo</div>
                {waitingList.map((song, index) => {
                    return (
                        <ItemSidebarRight
                            key={song.song_id}
                            imageSong={song.song_img}
                            name={song.song_name}
                            singer={song.singer}
                            onClick={() => handelPlaySong(song)}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default NavBarRight;
