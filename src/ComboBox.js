import React from "react";
import './ComboBox.css';

const ComboBox = () => {
    return (
        <div className="combo-box-container">
            <form>
                <input type='text' id='fruit-input' name='fruit-input' defaultValue={'Choose a Fruit:'} />
                <button type='button'>V</button>
                <div className=''>
                    <ul style={{'list-style-type' : 'none'}}>
                        <li><span role='img' aria-label='apple'>🍎 Apple</span></li>
                        <li><span role='img' aria-label='banana'>🍌 Banana</span></li>
                        <li><span role='img' aria-label='blueberry'>🫐 Blueberry</span></li>
                        <li><span role='img' aria-label='mango'>🥭 Mango</span></li>
                    </ul>
                </div>
            </form>
        </div>
    );
}

export default ComboBox;