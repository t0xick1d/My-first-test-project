import React from 'react'
import { connect } from 'react-redux';
import {AddPostActionCreator, UpdateComentTextActionCreator} from '../../redux/comentReducer'
import state from '../../redux/state';
import {Rewiews} from './Rewiews'




// export const RewiewsContainer = (props) =>{

//     let state = props.store.getState(); 

//         let addComent= () => {

//             props.store.dispatch(AddPostActionCreator());

//         }
        
//         let onComentChange = (text) =>{
          
//             let action = UpdateComentTextActionCreator(text);
//             props.store.dispatch(action);
//         }

    
//     return(
      
//         <Rewiews updateComentText ={onComentChange} addComent = {addComent} coment={state.coment.coment}
//             newComentText={state.coment.newComentText}/>

//     )
// }

let mapStateToProps = (state) => {
    return {
        
        comet: state.coment.coment,
        newComentText: state.coment.newComentText
    }
};
let mapDispatchToProps = (dispatch) => {

    return {
        updateComentText: (text) => { 
            let action = UpdateComentTextActionCreator(text);
            dispatch(action);
        },
        addComent: () => { 
            dispatch(AddPostActionCreator());
        }

    }

}; 

export let RewiewsContainer= connect(mapStateToProps,mapDispatchToProps)(Rewiews);
