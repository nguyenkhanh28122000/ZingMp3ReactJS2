import React, { memo } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './style.module.scss';

const cx = classNames.bind(styles);

function ItemUserSetting({ icon, itemName, className }) {
    const clases = cx('wrapper', {
        [className]: className,
    });

    return (
        <div className={clases}>
            <FontAwesomeIcon icon={icon} className={cx('icon')} />
            <h3 className={cx('itemName')}>{itemName}</h3>
        </div>
    );
}

export default memo(ItemUserSetting);
