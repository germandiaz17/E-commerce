const itemTypes = {
    addCart: "ADD_CART",
    deleteCart: "DELETE_CART",
    payComplete: "PAY_COMPLETE"
}


const itemReducer = (state, action) => {
    switch (action.type) {
        case itemTypes.addCart: 
            return  state.map( item => action.payload === item.id ? action.stock >= 1 ? {...item, isSelect: true, stock: action.stock - 1, numberSelect: action.numberSelect + 1}: {...item, isSelect: true, stock: 0} : item)
        
        case itemTypes.deleteCart:
            return  state.map( item => action.payload === item.id ? action.numberSelect === 1 ? {...item, isSelect: false, stock: action.stock + 1} : {...item, stock: action.stock + 1, numberSelect: action.numberSelect - 1}  : {...item})

        case itemTypes.payComplete:
            return {...state, isSelect: false}
    
        default:
            return state;
    }
}

export { itemTypes }
export default itemReducer