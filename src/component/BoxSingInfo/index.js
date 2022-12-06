import { memo } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './style.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPlay, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function BoxSingInfo({ imageSong, name, singer, isActive, className, onClick, ...rest }) {
    const props = {
        onClick,
        ...rest,
    };

    const clases = cx('wrapper', {
        [className]: className,
        active: isActive,
    });

    return (
        <div className={clases} {...props}>
            <img src={imageSong} alt={'error'} className={cx('play')} />
            <div className={cx('info')}>
                <h3 className={cx('nameSong')}>{name}</h3>
                <p className={cx('singer')}>{singer}</p>
            </div>
            <div className={cx('boxHover')}>
                <div className={cx('iconPlay')}>
                    <FontAwesomeIcon icon={faPlay} />
                    {/* <img src={songImgs.ICONPLAY} className={cx('songPlay')} /> */}
                </div>
                <div className={cx('content')}>
                    <FontAwesomeIcon icon={faHeart} className={cx('iconHeart')} />
                    <FontAwesomeIcon icon={faEllipsisH} className={cx('iconMenu')} />
                </div>
            </div>
        </div>
    );
}

BoxSingInfo.propTypes = {
    imageSong: PropTypes.string,
    name: PropTypes.string,
    singer: PropTypes.string,
};

export default memo(BoxSingInfo);
