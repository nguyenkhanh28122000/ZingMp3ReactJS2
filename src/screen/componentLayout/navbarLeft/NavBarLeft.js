import classNames from 'classnames/bind';

import styles from './navbarLeft.module.scss';

const cx = classNames.bind(styles);

function NavBarLeft() {
    return <p className={cx('title')}>NavBarLeft</p>;
}

export default NavBarLeft;
