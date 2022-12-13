import React, { memo } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './icon.module.scss';

const cx = classNames.bind(styles);

function IconComp({ icon, hoverOpacity, hoverBackgroud, color, className, onClick }) {
    const clases = cx('wrapper', {
        [className]: className,
        hoverOpacity: hoverOpacity,
        hoverBackgroud: hoverBackgroud,
    });

    return <FontAwesomeIcon className={clases} icon={icon} style={color ? { color: color } : null} onClick={onClick} />;
}

export default memo(IconComp);
