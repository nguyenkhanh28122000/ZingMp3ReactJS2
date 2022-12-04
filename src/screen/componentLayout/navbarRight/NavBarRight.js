import classNames from 'classnames/bind';

import styles from './navbarRight.module.scss';

const cx = classNames.bind(styles);

function NavBarRight() {
    return <p className={cx('title')}>NavBarRight</p>;
}

export default NavBarRight;
