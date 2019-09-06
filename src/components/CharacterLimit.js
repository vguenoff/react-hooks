import React, { useState, useEffect } from 'react';

/*
  Instructions:
    Assume you're creating an app that allows the user to 
    post status updates (ala Twitter). Your UI should have a
    textarea and a button. The button should be disabled if the
    length of the textarea is 0 or greater than 240 characters.
    The document's title should inform the user on how many
    characters they have left to type before they hit the 240
    character limit - "115 characters left."
*/

function CharacterLimit() {
    const [textareaText, setTextareaText] = useState('');

    const disabledButton = () =>
        textareaText.length < 1 || textareaText.length > 240;

    useEffect(() => {
        document.title =
            textareaText.length > 240
                ? `No more characters left`
                : `${240 - textareaText.length} characters left`;
    }, [textareaText]);

    return (
        <div className="CharacterLimit">
            <textarea
                type="text"
                placeholder="Type"
                cols="30"
                rows="10"
                value={textareaText}
                onChange={e => setTextareaText(e.target.value)}
            ></textarea>
            <button onClick={() => null} disabled={disabledButton()}>
                Submit
            </button>
        </div>
    );
}

export default CharacterLimit;
