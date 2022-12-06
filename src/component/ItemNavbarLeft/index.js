import { useRef, memo } from 'react';
import classNames from 'classnames/bind';

import styles from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ItemNavBarLeft({ to, isActive, className, icon, title, noti, itemLibary, onclick }) {
    let Comp = 'li';
    if (to) {
        Comp = Link;
    }
    const boxRef = useRef();

    const clases = cx('wrapper', {
        [className]: className,
        active: isActive,
    });

    const handelClick = () => {
        boxRef.current.style.opacity = 0.4;
        setTimeout(() => {
            boxRef.current.style.opacity = 0.8;
        }, 100);
        onclick();
    };
    return (
        <Comp ref={boxRef} className={clases} onClick={handelClick} to={to}>
            {icon ? <div className={cx('icon')}>{icon}</div> : null}
            <div className={cx('body')}>
                <h3 className={cx('title')}>{title}</h3>
                {noti ? <p className={cx('btn')}>{noti}</p> : null}
            </div>
            {itemLibary ? (
                <div className={cx('bodyLibary')}>
                    <h3 className={cx('titleLibary')}>{itemLibary.title}</h3>

                    <FontAwesomeIcon icon={faEllipsisH} className={cx('icon')} />
                </div>
            ) : null}
        </Comp>
    );
}

export default memo(ItemNavBarLeft);
