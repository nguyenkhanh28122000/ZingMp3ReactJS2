import { useState } from 'react';
import SongPlayContext from './Context';

function Provider({ children }) {
    const [idSong, setIdSong] = useState(0);
    const [isPause, setIsPause] = useState(true);
    const [volume, setVolume] = useState(50);
    const value = {
        idSong,
        setIdSong,
        isPause,
        setIsPause,
        volume,
        setVolume,
    };

    return <SongPlayContext.Provider value={value}>{children}</SongPlayContext.Provider>;
}

export default Provider;
