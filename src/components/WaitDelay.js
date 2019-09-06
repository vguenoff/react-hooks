import { useState, useEffect } from 'react';

/*
  Instructions:
    You'll notice below that we have a Wait component.
    The purpose of Wait is to render the `ui` prop after
    `delay` seconds. Before `delay` seconds, it should
    render `placeholder`.
*/

const WaitDelay = ({ delay = 1000, placeholder, ui }) => {
    const [slow, setSlow] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSlow(false);
        }, delay);

        return () => clearTimeout(timeout);
    }, [delay]);

    return slow ? placeholder : ui;
};

export default WaitDelay;
