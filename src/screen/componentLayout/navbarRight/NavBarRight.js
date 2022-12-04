import classNames from 'classnames/bind';

import styles from './navbarRight.module.scss';

const cx = classNames.bind(styles);

function NavBarRight() {
    return (
        <div className={cx('wraaper')}>
            <p>navbar right</p>
        </div>
    );
}

export default NavBarRight;
