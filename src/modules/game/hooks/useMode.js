import { useContext } from 'react';
import { ModeContext } from '../context/Modes';

export const useMode = () => {
    const {mode, setMode} = useContext(ModeContext)

    return { mode, setMode };
};
