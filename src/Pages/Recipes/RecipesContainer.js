import React from 'react'
import { connect } from 'react-redux';
import {updateCatalogAC, SetUsersAC} from '../../redux/itemReducer'
import {Recipes} from './Recipes'


let mapStateToProps = (state) => {
    if(state.item.mass === undefined){
        return {
                item: state.item
                
            }
    }else{
        return{
            item: state.item.mass
        }

    }
   
};
let mapDispatchToProps = (dispatch) => {

    return {
        updateCatalog: (eventKey) => {
            
            let action = updateCatalogAC(eventKey)
            dispatch(action);
            
        },
        setItem: (item) => {
            dispatch(SetUsersAC(item)) ;
        } 
        // updateComentText: (text) => { 
        //     let action = UpdateComentTextActionCreator(text);
        //     dispatch(action);
        // },
        // addComent: () => { 
        //     dispatch(AddPostActionCreator());
        // }

    }

}; 


export const RecipesContainer = connect(mapStateToProps,mapDispatchToProps)(Recipes);