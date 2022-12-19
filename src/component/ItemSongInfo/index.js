import React, { memo, useRef } from 'react';

import classNames from 'classnames/bind';
import styles from './style.module.scss';

import { BoxSingInfo } from '~/component';

const cx = classNames.bind(styles);

function ItemSongInfo({ imageSong, name, singer, heightStyle, isActive, duration, isSongHome, onClick }) {
    // const [isActive, setIsActive] = useState(false);
    const divRef = useRef();
    if (divRef.current && isActive && !isSongHome) {
        setTimeout(() => {
            divRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
        }, 1000);
    }

    return (
        <div ref={divRef} className={cx('wrapper')} style={{ height: `${heightStyle}rem` }}>
            <BoxSingInfo
                imageSong={imageSong}
                name={name}
                singer={singer}
                duration={duration}
                isSongHome={isSongHome}
                isActive={isActive}
                onClick={onClick}
            />
        </div>
    );
}

export default memo(ItemSongInfo);
