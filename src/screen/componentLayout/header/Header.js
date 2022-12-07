import { useState, memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowLeft,
    faArrowRight,
    faCog,
    faSearch,
    faUpload,
    faBan,
    faArrowsAltH,
    faExternalLinkSquareAlt,
    faInfoCircle,
    faPhone,
    faMarsAndVenus,
    faNotesMedical,
    faShieldAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faFlag, faPlayCircle } from '@fortawesome/free-regular-svg-icons';

import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import ItemUserSetting from './ItemUserSetting';
import styles from './header.module.scss';

import { avatar } from '~/assets';
const cx = classNames.bind(styles);

function Header() {
    const [valueInput, setValueInput] = useState('');
    const [isOpenSetting, setIsOpenSetting] = useState(false);

    const handelChange = (e) => {
        setValueInput(e.target.value);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('boxBackIcon')}>
                <FontAwesomeIcon icon={faArrowLeft} className={cx('icon', 'iconActive')} />
                <FontAwesomeIcon icon={faArrowRight} className={cx('icon')} />
            </div>

            <div className={cx('boxInput')}>
                <FontAwesomeIcon icon={faSearch} className={cx('iconSearch')} />
                <input
                    value={valueInput}
                    placeholder={'Nhập tên bài hát, nghệ sĩ, hoặc MV...'}
                    type="text"
                    className={cx('input')}
                    onChange={(e) => handelChange(e)}
                />
                <div className={cx('boxResultSearch')}>
                    <span className={cx('title')}>Kế quả tìm kiếm</span>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faArrowsAltH} className={cx('icon')} />
                            là ai
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faArrowsAltH} className={cx('icon')} />
                            See tinh
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faArrowsAltH} className={cx('icon')} />
                            Nơi này có anh
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faArrowsAltH} className={cx('icon')} />
                            Anh tên gì
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faArrowsAltH} className={cx('icon')} />
                            hello hello
                        </li>
                    </ul>
                </div>
            </div>
            <div className={cx('user')}>
                <div className={cx('iconUser')}>
                    <FontAwesomeIcon icon={faUpload} />
                </div>
                <div className={cx('iconUser', 'iconSetting')} onClick={() => setIsOpenSetting(!isOpenSetting)}>
                    <FontAwesomeIcon icon={faCog} />
                </div>
                {isOpenSetting ? (
                    <div className={cx('boxMenuSetting')}>
                        <ItemUserSetting icon={faBan} itemName={'danh sách chặn'} />
                        <ItemUserSetting icon={faPlayCircle} itemName={'chất lượng nhạc'} />
                        <ItemUserSetting icon={faExternalLinkSquareAlt} itemName={'trình phát nhạc'} />
                        <div className={cx('border')}></div>
                        <ItemUserSetting icon={faInfoCircle} itemName={'giới thiệu'} />
                        <ItemUserSetting icon={faFlag} itemName={'gợi ý'} />
                        <ItemUserSetting icon={faPhone} itemName={'liên hệ'} />
                        <ItemUserSetting icon={faMarsAndVenus} itemName={'quảng cáo'} />
                        <ItemUserSetting icon={faNotesMedical} itemName={'thoả thuận sử dụng'} />
                        <ItemUserSetting icon={faShieldAlt} itemName={'chính sách bảo mật'} />
                    </div>
                ) : null}
                <Link className={cx('avatar')}>
                    <img src={avatar} alt={'error'} className={cx('avatarImg')} />
                </Link>
            </div>
        </div>
    );
}

export default memo(Header);
