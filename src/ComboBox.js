import React, { useEffect, useState } from 'react';
import './ComboBox.css';

const ComboBox = (props) => {
    const fruits = props.fruits;
    const [filteredFruits, setFilteredFruits] = useState(props.fruits);
    const [listOpen, setListOpen] = useState(false);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        filterFruits();
    }, [filter]);

    function filterFruits() {
        const filteredFruits = fruits.filter(fruit => fruit.toLowerCase().includes(filter.toLowerCase()));
        setFilteredFruits(filteredFruits);
    }

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
                    <ul id="fruits-list">
                        {filteredFruits.map(
                            (fruit, id) => <li key={id} className="fruit-list-item"><span role='img'>{fruit}</span></li>
                        )}
                    </ul>
                </div>}
            </form>
        </div>
    );
}

export default ComboBox;