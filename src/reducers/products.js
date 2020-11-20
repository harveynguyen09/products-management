let initialState = [
    {
        id:1,
        name:'iphone 6',
        price:2000,
        status:false
    },
    {
        id:2,
        name:'iphone 7',
        price:3000,
        status:false
    },
    {
        id:3,
        name:'iphone 8',
        price:5000,
        status:false
    }
]
const products = (state = initialState,action)=>{
    switch(action.types){
        default: return [...state]
    }
}

export default products