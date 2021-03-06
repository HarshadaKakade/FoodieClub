import Actions from './actions';

const defaultState = {
    categoryList:[
        {
            categoryId: 1,
            displayName: "All"
        },
        {
            categoryId: 2,
            displayName: "veg-sandwich"
        },
        {
            categoryId: 3,
            displayName: "non-veg-sandwich"
        },
        {
            categoryId: 4,
            displayName: "MilkShake"
        }
    ],
    subCategoryList:[
        {
            categoryId: 2,
            displayName: "veg-sandwich",
            items: [
                {
                    subCategoryId: 11,
                    name: "Mushroom Cheese Sandwich", 
                    description: "Grilled Sandwich made of white or brown bread, cheese  & mushroom", 
                    price: "375rs",
                    inStock: false
                },
                {
                    subCategoryId: 12,
                    name:"Corn Spinach Sandwich", 
                    description:"Sandwich made with brown bread and corn spinach filling.",
                    price:"240rs",
                    inStock:true
                },
                {
                    subCategoryId: 13,
                    name:"Jalapeno Cheese Sandwich" ,
                    description:"Grilled Sandwich made of white or brown bread, cheese  & jalapeno",
                    price:"350rs",
                    inStock:true
                },
                {
                    subCategoryId: 14,
                    name:"Salad Sandwich", 
                    description:"Sandwich made of whole grain bread, Tomato, cucumber, lettuce", 
                    price:"150rs",
                    inStock:true
                }
            ]
        },
        {
            categoryId: 3,
            displayName: "non-veg-sandwich",
            items: [
                {
                    subCategoryId: 15,
                    name:"Egg Salad Sandwich",
                    description:"White bread sandwich with chopped hard boiledeggs, green onion, celery",
                    price:"200rs",
                    inStock:true
                },
                {
                    subCategoryId: 16,
                    name:"Chicken Club Sandwich",
                    description:"White bread club sandwich filled with chicken and bacon",
                    price:"380rs",
                    inStock:true
                },
                {
                    subCategoryId: 17,
                    name:"Chicken Tandoori Sandwich",
                    description:"wich filled with grilled tandoori chicken pieces with lettuce and mayonnaise",
                    price:"400rs",
                    inStock:false
                },
                {
                    subCategoryId: 18,
                    name:"Chicken Salad Sandwich",
                    description:"White bread sandwich filled with chicken breast, garden salad, mayonnaise, and herbs.",
                    price:"390rs",
                    inStock:true
                }
            ]
        },
        {
            categoryId: 4,
            displayName: "MilkShake",
            items: [
                {
                    subCategoryId: 19,
                    name:"Chocolatier",
                    description:"chocolate shake with brownies, hot fudge, and chocolate chips",
                    price:"275rs",
                    inStock:false
                },
                {
                    subCategoryId: 20,
                    name:"Bananas Foster",
                    description:"vanilla shake with caramel, banana, toffee syrup, banana syrup, and cinnamon",
                    price:"250rs",
                    inStock:true
                },
                {
                    subCategoryId: 21,
                    name:"Caramel Macchiato",
                    description:"coffee shake made with cold brew coffee and caramel, topped with whipped cream",
                    price:"350rs",
                    inStock:true
                },
                {
                    subCategoryId: 22,
                    name:"Peanut Butter Brownie",
                    description:"peanut butter shake with brownies and hot fudge",
                    price:"325rs",
                    inStock:true
                }
            ]
        }
    ],
    selectedCategoryId : 1,
    isInStock: false
}

export default function HomeReducer(state = defaultState, action) {
    switch (action.type) {
        case Actions.ON_SELECT_CATEGORY:
            return {
                ...state,
                selectedCategoryId : parseInt(action.id)
            }
        case Actions.ON_CHECKBOX_CLICK:
            return{
                ...state,
                isInStock : action.value
            }
        default:
            return state;
    }
}