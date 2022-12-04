import classNames from 'classnames/bind';

import styles from './defaultLayout.module.scss';

import { Header, NavBarLeft, NavBarRight, BoxPlaySing } from '~/screen/componentLayout';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('mainBody')}>
                <NavBarLeft />
                <div className={cx('body')}>
                    <Header />

                    {children}
                </div>
                <NavBarRight />
            </div>
            <BoxPlaySing />
        </div>
    );
}

export default DefaultLayout;
