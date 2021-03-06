import React from 'react';
import { Table } from 'reactstrap';
import './index.scss';

export default function ApplictaionMenuList({ list, isChecked, selectedCategoryId }) {
    function showList(value, index) {
        let _dataList = isChecked ? value.items.reduce((acc, menu) => {
            if (menu.inStock) {
                acc.push(menu)
            }
            return acc
        }, []) : value.items
        return (
            <div key={index} className='list-container__list'>
                <div className='list-container__list__title'>
                    {value.displayName}
                </div>
                <div className='list-container__items'>
                    <Table striped responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Menu Name</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                _dataList.map((menu, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{menu.name}</td>
                                            <td className={value.displayName === "non-veg-sandwich"? "dark-color" : "light-color"}>{menu.price}</td>
                                        </tr>)
                                })
                            }
                        </tbody>

                    </Table>
                </div>
            </div>
        )
    }
    return (
        <div className="list-container">
            {
                list.map((value, index) => {
                    if (selectedCategoryId === 1) {
                        return (
                            showList(value, index)
                        )
                    }
                    if (selectedCategoryId === value.categoryId) {
                        return (
                            showList(value, index)
                        )
                    }

                })
            }
        </div>

    )
}