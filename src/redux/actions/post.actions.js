import { FETCH_DATA_FAILURE,FETCH_DATA_SUCCESS,FETCH_DATA_REQUEST } from "./actionTypes";
import axios from "axios";

export const fetchDataRequest=()=>{
    return{
        type:FETCH_DATA_REQUEST
    }
}

export const fetchDataSuccess=(data)=>{
    return{
        type:FETCH_DATA_SUCCESS,
        payload:data
    }
}
export const fetchDataFailure=(error)=>{
    return{
        type:FETCH_DATA_FAILURE,
        payload:error
        }
}

export const fetchPost=()=>{
    return(
        async(dispatch)=>{
            try{
                const response =await axios.get('https://gauravgitacc.github.io/postAppData/posts.json');
                dispatch(fetchDataSuccess(response.data));
            }
            catch(error){
                dispatch(fetchDataFailure(error.message));
            }
        }
    )
}
