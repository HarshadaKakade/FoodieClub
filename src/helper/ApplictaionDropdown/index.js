import React from 'react';
import './index.scss';

export default function ApplicationDropdown ({list, defaultValue ,onClick}) {
    return (
        <div className = "dropdown-container">
            <select 
                className = "dropdown-list dropdown-box"
                defaultValue={defaultValue} 
                onChange ={e=> onClick(e.target.value)} >
                {
                    list.map(({displayName,categoryId})=> <option 
                        className = "dropdown-list"
                        key={categoryId} 
                        value={categoryId}>
                            {displayName}
                        </option>)
                }
            </select>
        </div>
        
    )
}
