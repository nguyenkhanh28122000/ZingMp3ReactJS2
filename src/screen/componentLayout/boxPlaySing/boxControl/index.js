import { useEffect, useState, useContext, memo, useRef } from 'react';

import classNames from 'classnames/bind';
import styles from './style.module.scss';

import { faCaretLeft, faCaretRight, faPause, faPlay, faRandom, faRedo } from '@fortawesome/free-solid-svg-icons';

import SongPlayContext from '~/store/Context';

import { IconComp } from '~/component';

import { colors, listSongs } from '~/assets';
const cx = classNames.bind(styles);

function BoxControl() {
    const valueSong = useContext(SongPlayContext);
    const { idSong, setIdSong, isPause, setIsPause, volume } = valueSong;

    const [index, setIndex] = useState(1);
    const [songOpen, setSongOpen] = useState(listSongs[0]);

    const [valueAudio, setValueAudio] = useState(0);
    const [timeSong, setTimeSong] = useState(0);

    const [isRandom, setIsRandom] = useState(false);
    const [isRepeat, setIsRepeat] = useState(false);
    const [clickLeft, setClickLeft] = useState(false);
    const [clickRight, setClickRight] = useState(false);
    const audioRef = useRef();

    // Xu ly bai hat
    let timeDurationSong;

    if (audioRef.current) {
        const audio = audioRef.current;

        timeDurationSong = audio.duration;
        audio.volume = volume / 100;

        audio.ontimeupdate = () => {
            if (audio.currentTime) {
                const value = (audio.currentTime / timeDurationSong) * 100;
                setValueAudio(value);
            }
        };
    }

    const handelSongEnd = () => {
        if (isRandom) {
            const id = randomID(true);
            setIdSong(id);
        } else if (isRepeat) {
            audioRef.current.currentTime = 0;
        } else {
            setIdSong(idSong++);
        }
    };

    const handelChange = (value) => {
        setValueAudio(value);
    };

    useEffect(() => {
        const time = Math.floor((valueAudio * timeDurationSong) / 100);
        setTimeSong(time);
    }, [valueAudio]);

    useEffect(() => {
        if (index > 1) {
            setSongOpen(listSongs[idSong]);
            if (isPause) {
                setIsPause(false);
            }
        } else {
            setIndex((prev) => prev + 1);
        }
    }, [idSong]);

    useEffect(() => {
        if (audioRef.current) {
            if (!isPause) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    });

    // Xu lys bai hat
    // pause, play
    const handelPause = () => {
        setIsPause(false);
    };
    const handelPlay = () => {
        setIsPause(true);
    };
    // audioRef.current.play();

    // chuyển bài
    const handelClickLeft = () => {
        if (isRandom && idSong !== 0) {
            setIdSong(randomID(false, idSong, 'max'));
        } else {
            if (idSong === 0) {
                setIdSong(listSongs.length - 1);
            } else {
                setIdSong(idSong - 1);
            }
        }

        setClickLeft(true);
        setTimeout(() => {
            setClickLeft(false);
        }, 300);
    };
    const handelClickRight = () => {
        if (isRandom && idSong !== listSongs.length - 1) {
            setIdSong(randomID(false, idSong, 'min'));
        } else {
            if (idSong === listSongs.length - 1) {
                setIdSong(0);
            } else {
                setIdSong(idSong + 1);
            }
        }

        setClickRight(true);
        setTimeout(() => {
            setClickRight(false);
        }, 300);
    };

    // random
    const handelClickRandom = () => {
        setIsRandom(!isRandom);
        if (isRepeat) {
            setIsRepeat(false);
        }
    };

    // repeat
    const handelClickRepeat = () => {
        setIsRepeat(!isRepeat);
        if (isRandom) {
            setIsRandom(false);
        }
    };

    // lay time render
    const secondsToHms = (timeSong) => {
        var h = Math.floor(timeSong / 3600);
        var m = Math.floor((timeSong % 3600) / 60);
        var s = Math.floor((timeSong % 3600) % 60);

        var hDisplay = h > 0 ? h + ': ' : '';
        var mDisplay = m > 0 ? (m < 10 ? '0' + m + ':' : m + ':') : '00:';
        var sDisplay = s > 0 ? (s < 10 ? '0' + s : s) : '00';

        return hDisplay + mDisplay + sDisplay;
    };
    // random idSong
    const randomID = (randomChange, id, position) => {
        let newCurrentSong = 0;
        if (randomChange) {
            do {
                newCurrentSong = Math.floor(Math.random() * listSongs.length);
            } while (newCurrentSong === id);
            return newCurrentSong;
        } else if (position === 'max') {
            do {
                newCurrentSong = Math.floor(Math.random() * listSongs.length);
            } while (newCurrentSong >= id);
            return newCurrentSong;
        } else if (position === 'min') {
            do {
                newCurrentSong = Math.floor(Math.random() * listSongs.length);
            } while (newCurrentSong <= id);
            return newCurrentSong;
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('boxControl')}>
                <IconComp
                    icon={faRandom}
                    hoverBackgroud
                    color={isRandom ? colors.PRIMARY : colors.WHITE}
                    onClick={handelClickRandom}
                />
                <IconComp
                    icon={faCaretLeft}
                    hoverBackgroud
                    color={clickLeft ? colors.PRIMARY : colors.WHITE}
                    className={cx('icon')}
                    onClick={handelClickLeft}
                />
                <div className={cx('playSong')}>
                    {isPause ? (
                        <IconComp icon={faPlay} color={colors.WHITE} className={cx('iconPlay')} onClick={handelPause} />
                    ) : (
                        <IconComp
                            icon={faPause}
                            color={colors.WHITE}
                            className={cx('iconPause')}
                            onClick={handelPlay}
                        />
                    )}
                </div>

                <IconComp
                    icon={faCaretRight}
                    hoverBackgroud
                    color={clickRight ? colors.PRIMARY : colors.WHITE}
                    className={cx('icon')}
                    onClick={handelClickRight}
                />
                <IconComp
                    icon={faRedo}
                    hoverBackgroud
                    color={isRepeat ? colors.PRIMARY : colors.WHITE}
                    onClick={handelClickRepeat}
                />
            </div>
            <div className={cx('boxAudio')}>
                <span className={cx('timeSong')}>{secondsToHms(timeSong)}</span>
                <input
                    id="progress"
                    className={cx('progress')}
                    type="range"
                    value={valueAudio}
                    step="1"
                    min="0"
                    max="100"
                    onChange={(e) => handelChange(e.target.value)}
                />
                <span className={cx('timeSong')} style={{ textAlign: 'right' }}>
                    {secondsToHms(timeDurationSong)}
                </span>
                <audio ref={audioRef} id="audio" src={songOpen.path} onEnded={handelSongEnd}></audio>
            </div>
        </div>
    );
}

export default memo(BoxControl);
