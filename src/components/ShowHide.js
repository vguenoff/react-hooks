import React, { useState } from 'react';
import './ShowHide.css';

/*
  Instructions:
    Given the array of "posts", recreate the functionality for this app. 
    By default, each post preview is cut off until the user clicks "Open". 
    Only one post can be "Open" at a time.
*/

const ShowHide = ({ posts }) => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className="show-hide">
            <ul>
                {posts.map(({ id, img, text }, index) => {
                    const isOpen = openIndex === index;

                    const textToShow = isOpen
                        ? text
                        : `${text.substring(0, 100)}...`;

                    return (
                        <li
                            key={id}
                            style={{
                                border: isOpen ? '1px solid black' : 'none',
                            }}
                        >
                            <img src={img} alt="" />
                            <p>{textToShow}</p>
                            {!isOpen && (
                                <button onClick={() => setOpenIndex(index)}>
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
