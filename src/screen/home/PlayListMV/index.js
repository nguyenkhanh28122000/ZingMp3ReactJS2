import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './stylePlayList.module.scss';

import { WraMouse, HeaderBox, ImageHoverZoom } from '~/component';

import { PlayLists, MVs } from '~/assets/dataRender';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function PlayListMV({ style }) {
    const [isShowAll, setIsShowAll] = useState(false);
    return (
        <div className={cx('wrapper')}>
            <WraMouse style={style} setValue={setIsShowAll}>
                <HeaderBox title="Playlist" isShowAll={isShowAll} />
                <div className={cx('bodyPlaylist')}>
                    <div className={cx('boxAdd')}>
                        <FontAwesomeIcon icon={faAdd} />
                        <h3>tạo playlist mới</h3>
                    </div>
                    {PlayLists.map((list, index) => (
                        <div key={index} className={cx('mainContent')}>
                            <ImageHoverZoom img={list.img} heightBox="15rem" />
                            <p>{list.title}</p>
                            <span>{list.info}</span>
                        </div>
                    ))}
                </div>
            </WraMouse>
            <WraMouse style={style} setValue={setIsShowAll} className={cx('boxMV')}>
                <HeaderBox title="Playlist" isShowAll={isShowAll} />
                <div className={cx('bodyMV')}>
                    {MVs.map((MV, index) => (
                        <div key={index} className={cx('mainContentMV')}>
                            <ImageHoverZoom img={MV.imgMV} isIconPlay heightBox="15rem" />
                            <div className={cx('boxInfo')}>
                                <img src={MV.avatar} alt="error" className={cx('avatar')} />
                                <div className={cx('info')}>
                                    <p>{MV.nameMV}</p>
                                    <span>{MV.singerMV}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </WraMouse>
        </div>
    );
}

export default PlayListMV;
