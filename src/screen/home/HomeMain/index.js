import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';

import { HeaderBox, WraMouse, ItemSongInfo } from '~/component';
import { listSongs } from '~/assets';
const cx = classNames.bind(styles);

function HomeMain({ style }) {
    const [isShowAll, setIsShowAll] = useState(false);

    return (
        <WraMouse className={cx('wrapper')} style={style} setValue={setIsShowAll}>
            <HeaderBox title="bài hát" isShowAll={isShowAll} isBtnLeft />
            <div className={cx('listSongBody')}>
                <div className={cx('boxImg')}></div>
                <div className={cx('boxSong')}>
                    {listSongs.map((song, index) => (
                        <ItemSongInfo
                            key={song.song_id}
                            imageSong={song.song_img}
                            name={song.song_name}
                            singer={song.singer}
                            heightStyle={6}
                        />
                    ))}
                </div>
            </div>
        </WraMouse>
    );
}

export default HomeMain;
