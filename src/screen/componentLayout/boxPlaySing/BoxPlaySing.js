import classNames from 'classnames/bind';

import styles from './boxPlaySing.module.scss';

const cx = classNames.bind(styles);

function BoxPlaySing() {
    return <p className={cx('title')}>BoxPlaySing</p>;
}

export default BoxPlaySing;
