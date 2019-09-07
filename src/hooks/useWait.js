import { useState, useEffect } from 'react';

/*
  Instructions:
    Finish implementing the `useWait` custom Hook.
    `useWait` should return a boolean that changes from
    `false` to `true` after `delay` seconds. 
*/

export default function useWait(delay) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShow(true);
        }, delay);

        return () => clearTimeout(timeout);
    }, [delay, show]);

    return show;
}
