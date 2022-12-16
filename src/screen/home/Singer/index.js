import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './style.module.scss';

import { WraMouse, HeaderBox, ImageHoverZoom, ButtomCop } from '~/component';

import { SingerInfos } from '~/assets/dataRender';
import { faAdd, faRandom } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function SingerBox({ style }) {
    const [isShowAll, setIsShowAll] = useState(false);

    return (
        <WraMouse style={style} setValue={setIsShowAll} className={cx('wrapper')}>
            <HeaderBox title={'nghệ sĩ'} isShowAll={isShowAll} />
            <div className={cx('main')}>
                {SingerInfos.map((singer, index) => (
                    <div key={index} className={cx('boxSinger')}>
                        <ImageHoverZoom
                            img={singer.avatar}
                            heightBox="15rem"
                            widthBox={'15rem'}
                            styles={{ borderRadius: '100%', marginBottom: '2rem' }}
                            isIconPlay
                        />
                        <div className={cx('boxInfo')}>
                            <p>{singer.name}</p>
                            <span>{`${singer.sub} quan tâm`}</span>
                            <ButtomCop isBtnCode isHoverOpacity className={cx('btn')}>
                                <FontAwesomeIcon icon={faRandom} /> Góc Nhạc
                            </ButtomCop>
                        </div>
                    </div>
                ))}
            </div>
        </WraMouse>
    );
}

export default SingerBox;
