import classNames from 'classnames/bind';
import styles from './style.module.scss';

import { ButtomCop } from '..';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faPlay, faUpload } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function HeaderBox({ title, isBtnLeft, isShowAll }) {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>{title}</h2>
            <div className={cx('contentLeft')}>
                <div className={cx('showAllStyle', isShowAll ? 'isShow' : null)}>
                    tất cả <FontAwesomeIcon icon={faChevronRight} />
                </div>
                {isBtnLeft ? (
                    <>
                        <ButtomCop isBtnCode isHoverOpacity>
                            <FontAwesomeIcon icon={faUpload} /> tải lên
                        </ButtomCop>
                        <ButtomCop isBtnCode className={cx('btnPlay')} isHoverOpacity>
                            <FontAwesomeIcon icon={faPlay} /> phát tất cả
                        </ButtomCop>
                    </>
                ) : null}
            </div>
        </div>
    );
}

export default HeaderBox;
