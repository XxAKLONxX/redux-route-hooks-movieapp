import { ADD } from "./Actions/ActionTypes"
import {moviesData} from '../Data/data';





const initialeState = {
    mouvieList : [...moviesData]
    
}

const addNewMouvie= (state=initialeState,{type,payload})=>{
    switch (type){
        case ADD :
        return {...state,mouvieList:[...state.mouvieList,payload]} 
            
            default : 
              return state;   
    }
}

export default addNewMouvie;