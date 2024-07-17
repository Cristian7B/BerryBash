// useMode.js
import { useState } from 'react';

export const useMode = () => {
    const [selectedModeId, setSelectedModeId] = useState(null);

    const handleModeClick = (id) => {
        setSelectedModeId(id);
    };

    console.log(selectedModeId)
    return { selectedModeId, handleModeClick };
};
