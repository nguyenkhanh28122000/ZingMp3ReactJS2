import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './styleHome.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

import PlayListMV from './PlayListMV';
import HomeMain from './HomeMain';
import SingerBox from './Singer';
import { ButtomCop, IconComp, HeaderBox, WraMouse, ItemSongInfo } from '~/component';

import { listSongs } from '~/assets';
import { avatar } from '~/assets';
const cx = classNames.bind(styles);

function HomeScreen() {
    const [isShowAll, setIsShowAll] = useState(false);
    const [isActive, setIsActive] = useState(0);
    const [pages, setPages] = useState(0);

    const handelClick = (index) => {
        setPages(index);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('headerHome')}>
                <div className={cx('boxUpdateVip')}>
                    <ButtomCop isBtnBuy isHoverOpacity>
                        nâng cấp vip
                    </ButtomCop>
                    <ButtomCop isBtnCode isHoverOpacity>
                        nhập code vip
                    </ButtomCop>
                    <IconComp icon={faEllipsisH} hoverBackgroud className={cx('iconBtn')} />
                </div>

                <a href={'https://www.facebook.com/ng.khanh.1048'}>
                    <img src={avatar} alt="error" className={cx('avatar')} />
                </a>
                <h2 className={cx('name')}>Nguyễn Ngọc Khánh</h2>
                <div className={cx('boxBtnTaps')}>
                    <ButtomCop isBtnTaps isActive={pages === 0} onClick={() => handelClick(0)}>
                        tổng quan
                    </ButtomCop>
                    <ButtomCop isBtnTaps isActive={pages === 1} onClick={() => handelClick(1)}>
                        bài hát
                    </ButtomCop>
                    <ButtomCop isBtnTaps isActive={pages === 2} onClick={() => handelClick(2)}>
                        playlist
                    </ButtomCop>
                    <ButtomCop isBtnTaps isActive={pages === 3} onClick={() => handelClick(3)}>
                        nghệ sĩ
                    </ButtomCop>
                    <ButtomCop isBtnTaps>
                        <FontAwesomeIcon icon={faEllipsisH} />
                    </ButtomCop>
                </div>
            </div>
            {pages === 0 ? (
                <div className={cx('homeBody')}>
                    <HomeMain />
                    <PlayListMV />
                    <SingerBox />
                </div>
            ) : null}
            {pages === 1 ? (
                <div className={cx('homeBody')}>
                    <WraMouse className={cx('wrapper')} setValue={setIsShowAll}>
                        <HeaderBox title="bài hát" isShowAll={isShowAll} isBtnLeft />
                        <div className={cx('boxSong')}>
                            {listSongs.map((song, index) => (
                                <ItemSongInfo
                                    key={song.song_id}
                                    isSongHome
                                    isActive={song.song_id === isActive}
                                    imageSong={song.song_img}
                                    name={song.song_name}
                                    singer={song.singer}
                                    duration={'04.05'}
                                    heightStyle={6}
                                    onClick={() => setIsActive(song.song_id)}
                                />
                            ))}
                        </div>
                    </WraMouse>
                </div>
            ) : null}
            {pages === 2 ? (
                <div className={cx('homeBody')}>
                    <PlayListMV />
                </div>
            ) : null}
            {pages === 3 ? (
                <div className={cx('homeBody')}>
                    <SingerBox />
                </div>
            ) : null}
        </div>
    );
}

export default HomeScreen;
