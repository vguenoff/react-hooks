import React, { useState } from 'react';
import './ShowHide.css';

/*
  Instructions:
    Given the array of "posts", recreate the functionality for this app. 
    By default, each post preview is cut off until the user clicks "Open". 
    Only one post can be "Open" at a time.
*/

const ShowHide = ({ posts }) => {
    const [openId, setOpenId] = useState(0);

    return (
        <div className="show-hide">
            <ul>
                {posts.map(post => {
                    const match = post.id === openId;

                    return (
                        <li
                            key={post.id}
                            style={match ? { border: '1px solid black' } : null}
                        >
                            <img src={post.img} alt="" />
                            <p>
                                {match
                                    ? post.text
                                    : `${post.text.substring(0, 100)}...`}
                            </p>
                            {!match && (
                                <button onClick={() => setOpenId(post.id)}>
                                    Open
                                </button>
                            )}
                        </li>
                    );
                })}
            </ul>
            {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
        </div>
    );
};

export default ShowHide;
