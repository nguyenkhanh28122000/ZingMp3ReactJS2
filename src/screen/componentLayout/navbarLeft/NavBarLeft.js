import { useState } from 'react';
import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faMusic, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faClock, faFileAudio } from '@fortawesome/free-regular-svg-icons';

import styles from './navbarLeft.module.scss';

import { ItemNavBarLeft } from '~/component';
import { silebarLeft1, silebarLeft2 } from '~/assets/dataRender';

const cx = classNames.bind(styles);

function NavBarLeft() {
    const [active, setActive] = useState(0);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo')}></div>
            <ul className={cx('content-1')}>
                {silebarLeft1.map((item, index) => (
                    <ItemNavBarLeft
                        key={index}
                        isActive={index === active}
                        icon={<FontAwesomeIcon icon={item.icon} />}
                        title={item.title}
                        to={item.config}
                        noti={item.isNofi}
                        onclick={() => setActive(index)}
                    />
                ))}
            </ul>
            <div className={cx('border')}></div>

            <div className={cx('sidebarLibary')}>
                <div className={cx('content-2')}>
                    {silebarLeft2.map((item, index) => (
                        <ItemNavBarLeft
                            key={index}
                            isActive={index === active - 5}
                            icon={<FontAwesomeIcon icon={item.icon} />}
                            title={item.title}
                            to={item.config}
                            onclick={() => setActive(index + 5)}
                        />
                    ))}
                </div>

                <div className={cx('boxBuyVip')}>
                    <p className={cx('text')}>Nghe nhạc không quảng cáo cùng kho nhạc VIP</p>
                    <button className={cx('buttom')}>nâng cấp vip</button>
                </div>

                <div className={cx('libary')}>
                    <h3 className={cx('title')}>thư viện</h3>
                    <FontAwesomeIcon icon={faPencilAlt} className={cx('icon')} />
                </div>
                <ul>
                    <ItemNavBarLeft
                        icon={<FontAwesomeIcon icon={faMusic} />}
                        title={'bài hát'}
                        className={cx('itemLibary')}
                    />
                    <ItemNavBarLeft
                        icon={<FontAwesomeIcon icon={faFileAudio} />}
                        title={'playlist'}
                        className={cx('itemLibary')}
                    />
                    <ItemNavBarLeft
                        icon={<FontAwesomeIcon icon={faClock} />}
                        title={'gần đây'}
                        className={cx('itemLibary')}
                    />
                    <ItemNavBarLeft itemLibary={{ title: 'replay' }} className={cx('itemLibary')} />
                    <ItemNavBarLeft itemLibary={{ title: 'nhạc xuân' }} className={cx('itemLibary')} />
                    <ItemNavBarLeft itemLibary={{ title: 'nhạc việt' }} className={cx('itemLibary')} />
                </ul>
            </div>

            <ItemNavBarLeft
                icon={<FontAwesomeIcon icon={faAdd} />}
                title={'tạo playlist mới'}
                className={cx('addItem')}
            />
        </div>
    );
}

export default NavBarLeft;
