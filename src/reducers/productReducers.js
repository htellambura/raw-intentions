import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants";

export const productReducer = ( state = { products: [] }, action ) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { 
                ...state, 
                error: false,
            }
        case PRODUCT_LIST_SUCCESS:
            return { 
                error: false, 
                products: action.payload, 
            }
        case PRODUCT_LIST_FAIL:
            return { 
                error: action.payload, 
                products: [],
            }
        default:
            return state;
    }
}

export const productDetailsReducer = ( state = { product: {} }, action ) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return { 
                ...state, 
                error: false,
            }
        case PRODUCT_DETAILS_SUCCESS:
            return { 
                error: false,
                product: action.payload,
            }
        case PRODUCT_DETAILS_FAIL:
            return { 
                error: action.payload,
            }
        default:
            return state;
    }
}