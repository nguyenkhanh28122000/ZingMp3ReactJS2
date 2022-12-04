import classNames from 'classnames/bind';

import styles from './header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return <p className={cx('title')}>Header</p>;
}

export default Header;
