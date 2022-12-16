import classNames from 'classnames/bind';
import styles from './style.module.scss';
import { faClose, faEllipsisH, faPlay } from '@fortawesome/free-solid-svg-icons';
import { IconComp } from '~/component';

const cx = classNames.bind(styles);

function ImageHoverZoom({ img, styles, heightBox, widthBox, isIconPlay }) {
    const style = {
        ...styles,
        height: heightBox,
        width: widthBox,
    };

    return (
        <div className={cx('imgBox')} style={style}>
            <div className={cx('boxIcon')}>
                {isIconPlay ? null : <IconComp icon={faClose} hoverBackgroud className={cx('icon')} />}
                <IconComp icon={faPlay} className={cx('icon', 'iconPlay')} />
                {isIconPlay ? null : <IconComp icon={faEllipsisH} hoverBackgroud className={cx('icon')} />}
            </div>
            <img src={img} alt="error" className={cx('img')} />
        </div>
    );
}

export default ImageHoverZoom;
