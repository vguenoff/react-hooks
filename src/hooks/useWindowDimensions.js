import { useEffect, useState } from 'react';

export default function useWindowDimensions() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        const listener = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };

        window.addEventListener('resize', listener);

        return () => window.removeEventListener('resize', listener);
    }, [width, height]);

    return { width, height };
}
