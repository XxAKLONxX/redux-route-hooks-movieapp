import { ADD } from "./ActionTypes"



export const add = (NewMouvie)=>{
    return {
        type:ADD,
        payload : NewMouvie
    }
}