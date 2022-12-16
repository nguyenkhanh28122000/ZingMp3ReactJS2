import { memo } from 'react';

import classNames from 'classnames/bind';
import styles from './styleImg.module.scss';

const cx = classNames.bind(styles);

function ListImgSong({ img, isActive, positionIndex }) {
    let classTran = '';

    if (positionIndex) {
        classTran = `position${positionIndex}`;
    }

    const clases = cx('img', {
        active: isActive,
        [classTran]: classTran,
    });

    return <img src={img} alt="error" className={clases} />;
}

export default memo(ListImgSong);
