import Actions from './actions';

export function onCategorySelect(id){
    return{
        type: Actions.ON_SELECT_CATEGORY,
        id : id,
    }
}

export function onCheckboxClick(value){
    return{
        type: Actions.ON_CHECKBOX_CLICK,
        value : value,
    }
}
