import React from 'react';
import './index.scss';

export default function ApplictaionCheckbox({ onClick }) {
    return (
        <div>
            <input type="checkbox" id="inStock" name="inStock" onClick={e => onClick(e.target.checked)} />
            <label htmlFor="inStock" onClick={e => onClick(e.target.checked)}> Show Only In-Stock Items</label>
        </div>

    )
}