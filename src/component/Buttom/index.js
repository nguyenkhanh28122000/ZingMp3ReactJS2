import classNames from 'classnames/bind';
import styles from './style.module.scss';

const cx = classNames.bind(styles);

function Buttom({
    children,
    className,
    isBtnTaps,
    isBtnCode,
    isBtnBuy,
    isActive,
    textStyle,
    boxStyle,
    isHoverOpacity,
    onClick,
}) {
    const clases = cx('wrapper', {
        [className]: className,
        hoverOpacity: isHoverOpacity,
        btnBuy: isBtnBuy,
        btnCode: isBtnCode,
        btnTaps: isBtnTaps,
        active: isActive,
    });

    const style = {
        ...boxStyle,
        ...textStyle,
    };

    return (
        <buttom className={clases} style={style} onClick={onClick}>
            {children}
        </buttom>
    );
}

export default Buttom;
