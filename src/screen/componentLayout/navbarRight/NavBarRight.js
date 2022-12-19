import { useState, memo, useContext, useEffect, useRef } from 'react';

import classNames from 'classnames/bind';
import styles from './navbarRight.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faStopwatch } from '@fortawesome/free-solid-svg-icons';

import SongPlayContext from '~/store/Context';

import { ItemSongInfo } from '~/component';

import { listSongs } from '~/assets';
const cx = classNames.bind(styles);

function NavBarRight() {
    const valueSong = useContext(SongPlayContext);
    const { idSong, setIdSong } = valueSong;

    const [waitingList, setWaitingList] = useState(listSongs.filter((item) => item.song_id !== idSong));
    const [isOpen, setIsOpen] = useState({ index: 0, id: idSong });
    const [ListOpen, setListOpen] = useState([listSongs[idSong]]);

    // const boxSongRef = useRef();
    // console.log(boxSongRef.current);
    useEffect(() => {
        const checkIsSong = () => {
            for (let i = 0; i < ListOpen.length; i++) {
                if (ListOpen[i].song_id === idSong) {
                    return { index: i, isListOpen: true, song: ListOpen[i] };
                }
            }
            return { isListOpen: false, song: listSongs[idSong] };
        };

        const songCheck = checkIsSong();

        if (isOpen.id !== idSong) {
            if (songCheck.isListOpen) {
                setIsOpen({ index: songCheck.index, id: idSong });
            } else {
                handelPlaySong(songCheck.song);
            }
        }
    }, [idSong]);

    const handelPlaySong = (song) => {
        setWaitingList((iprev) => {
            const newListSong = iprev.filter((item) => item.song_id !== song.song_id);
            return newListSong;
        });
        setIsOpen({ index: ListOpen.length, id: song.song_id });
        setListOpen((iprev) => [...iprev, song]);
        setIdSong(song.song_id);
    };

    const handelClick = ({ index, idSong }) => {
        setIsOpen({ index: index, id: idSong });
        setIdSong(idSong);
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
                        <ItemSongInfo
                            // ref={boxSongRef}
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
                        <ItemSongInfo
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

export default memo(NavBarRight);
