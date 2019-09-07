import React, { useState } from 'react';

import useFetch from '../hooks/useFetch';

const postIds = [1, 2, 3, 4, 5, 6, 7, 8];

export default function APIRequestsPractice() {
    const [index, setIndex] = useState(0);

    const { loading, data: post, error } = useFetch(
        `https://jsonplaceholder.typicode.com/posts/${postIds[index]}`,
    );

    const incrementIndex = () => {
        setIndex(i => (i === postIds.length - 1 ? i : i + 1));
    };

    return (
        <>
            {loading ? (
                <p>Loading</p>
            ) : error ? (
                <>
                    <p>{error}</p>
                    <button onClick={incrementIndex}>Next Post</button>
                </>
            ) : (
                <>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    {index === postIds.length - 1 ? (
                        <p>No more posts</p>
                    ) : (
                        <button onClick={incrementIndex}>Next Post</button>
                    )}
                </>
            )}
        </>
    );
}
