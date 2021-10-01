const initialState = {
    email:null,
    title:null,
    text:null
}

export const sendEmailReducer = ( state = initialState , action ) => {
    switch (action.type) {
        case "sendEmail":
           return({
               ...action.payload
           })
    
        default:
            return state;
    }
}
