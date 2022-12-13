import classNames from 'classnames/bind';
import styles from './styleHome.module.scss';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

import HomeMain from './HomeMain';
import { ButtomCop, IconComp } from '~/component';

import { avatar } from '~/assets';
const cx = classNames.bind(styles);

function HomeScreen() {
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
                    <ButtomCop isBtnTaps isActive>
                        tổng quan
                    </ButtomCop>
                    <ButtomCop isBtnTaps>bài hát</ButtomCop>
                    <ButtomCop isBtnTaps>playlist</ButtomCop>
                    <ButtomCop isBtnTaps>nghệ sĩ</ButtomCop>
                    <ButtomCop isBtnTaps>
                        <FontAwesomeIcon icon={faEllipsisH} />
                    </ButtomCop>
                </div>
            </div>

            <div className={cx('homeBody')}>
                <HomeMain />
            </div>
        </div>
    );
}

export default HomeScreen;
