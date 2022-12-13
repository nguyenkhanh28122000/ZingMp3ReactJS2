function WraMouse({ children, setValue, className, style }) {
    return (
        <div className={className} style={style} onMouseOut={() => setValue(false)} onMouseOver={() => setValue(true)}>
            {children}
        </div>
    );
}

export default WraMouse;
