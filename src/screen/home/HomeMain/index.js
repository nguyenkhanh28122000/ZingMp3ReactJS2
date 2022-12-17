import { useState, useEffect, memo, useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';

import SongPlayContext from '~/store/Context';
import { HeaderBox, WraMouse, ItemSongInfo, ListImgSong } from '~/component';
import { listSongs } from '~/assets';
const cx = classNames.bind(styles);

function HomeMain({ style }) {
    const valueSong = useContext(SongPlayContext);

    const [isShowAll, setIsShowAll] = useState(false);
    // const [isActive, setIsActive] = useState(0);
    const [id, setId] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setId((prev) => {
                if (prev >= 23) {
                    return 0;
                } else {
                    return prev + 1;
                }
            });
        }, 2000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <WraMouse className={cx('wrapper')} style={style} setValue={setIsShowAll}>
            <HeaderBox title="bài hát" isShowAll={isShowAll} isBtnLeft />
            <div className={cx('listSongBody')}>
                <div className={cx('boxImg')}>
                    {listSongs
                        .filter((item) => item.song_id - id < 4 && item.song_id - id >= 0)
                        .map((song, index) => {
                            return (
                                <ListImgSong
                                    key={song.song_id}
                                    isActive
                                    img={song.song_img}
                                    positionIndex={index + 1}
                                />
                            );
                        })}
                </div>
                <div className={cx('boxSong')}>
                    {listSongs.map((song, index) => (
                        <ItemSongInfo
                            key={song.song_id}
                            isSongHome
                            isActive={song.song_id === valueSong.idSong}
                            imageSong={song.song_img}
                            name={song.song_name}
                            singer={song.singer}
                            duration={'04.05'}
                            heightStyle={6}
                            onClick={() => valueSong.setIdSong(song.song_id)}
                        />
                    ))}
                </div>
            </div>
        </WraMouse>
    );
}

export default memo(HomeMain);
