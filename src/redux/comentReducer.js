const ADD_COMENT = 'ADD-COMENT';
const UPDATE_COMENT_TEXT = 'UPDATE-COMENT-TEXT'

export const AddPostActionCreator = () => {
    return {type: 'ADD-COMENT'}
  }
export const UpdateComentTextActionCreator = (text) => {
    return {type: 'UPDATE-COMENT-TEXT',
            text: text}
  }

let initialState = {
    newComentText: '',
    coment:[{id:1, name:"t0xick1d",text:' Торты очень вкуснык спасибо. Всё очень быстро доставили. Крутой магазин.', img:'https://i.ytimg.com/vi/GMpxEz7tfjw/maxresdefault.jpg'}]
    }

const comentReducer = (state =  initialState, action) => {

    switch(action.type){
        case ADD_COMENT: 
            let text = state.newComentText
            return {
                ...state,
                newComentText:'',
                coment: [...state.coment, {id: 1, name:"t0xick1d",text: text, img:'https://i.ytimg.com/vi/GMpxEz7tfjw/maxresdefault.jpg'}]
            };
            // let newComet = { 
            // id:1, name:"t0xick1d",
            // text: state.newComentText, 
            // img:'https://i.ytimg.com/vi/GMpxEz7tfjw/maxresdefault.jpg'
            // };
            // let stateCopy = {...state};
            // stateCopy.coment=[...state.coment]
            // stateCopy.coment.push(newComet); 
            // stateCopy.newComentText = '';
            
            
        case UPDATE_COMENT_TEXT: 
            return {...state,
                newComentText: action.text
            };
        
           
            
        default: 

            return state;
    }

}

export default comentReducer;