import React, { useEffect, useState } from 'react';
import './ComboBox.css';

const ComboBox = (props) => {
    const [listOpen, setListOpen] = useState(false);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        
    }, [filter]);

    const fruitsList = props.fruits.map(
        (fruit, id) => <li key={id} className="fruit-list-item"><span role='img'>{fruit}</span></li>
    )

    function handleInputOnchange(input) {
        if (!listOpen) { setListOpen(true); }
        setFilter(input);
    }

    function handleClickDropdown() {
        setListOpen(!listOpen);
    }

    return (
        <div className='combo-box-container'>
            <form>
                <input 
                    type='text' 
                    id='fruit-input' 
                    name='fruit-input' 
                    placeholder='Choose a Fruit:'
                    onChange={((e) => handleInputOnchange(e.target.value))}
                />
                <button type='button' onClick={handleClickDropdown}>V</button>
                {listOpen && <div className='fruit-dropdown-list'>
                    <ul>
                        {fruitsList}
                    </ul>
                </div>}
            </form>
        </div>
    );
}

export default ComboBox;