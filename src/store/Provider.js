import { useState } from 'react';
import SongPlayContext from './Context';

function Provider({ children }) {
    const [idSong, setIdSong] = useState(0);
    const [isPlay, setIsPlay] = useState(false);

    const value = {
        idSong,
        setIdSong,
        isPlay,
        setIsPlay,
    };

    return <SongPlayContext.Provider value={value}>{children}</SongPlayContext.Provider>;
}

export default Provider;
