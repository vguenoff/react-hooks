import { useState, useEffect } from 'react';

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setData(data);
                setError(null);
                setLoading(false);
            })
            .catch(err => {
                console.warn(err);
                setError(err.message);
                setLoading(false);
            });
    }, [url]);

    return {
        loading,
        data,
        error,
    };
}
