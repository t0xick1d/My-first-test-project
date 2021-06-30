const weddingCake = 'weddingCake';
const festive = 'festive';
const mass = 'mass';
const kids = 'kids';
const corporate = 'corporate';
const setUsersAC= 'setUserAC'


let initialState = {
    weddingCake:[
   {id:1,name:"Каприз",price:"От 800 грн/кг",img:"http://www.karlson-cake.com/wp-content/uploads/2018/03/Kapriz.jpg"},
   {id:2,name:"Расвет",price:"От 800 грн/кг",img:"http://www.karlson-cake.com/wp-content/uploads/2018/03/Rassvet-400x400.jpg"},
   {id:3,name:"Расдость",price:"От 800 грн/кг",img:"http://www.karlson-cake.com/wp-content/uploads/2018/02/wafe2-400x400.jpg"},
   {id:4,name:"Ягодное наслаждение",price:"От 800 грн/кг",img:"http://www.karlson-cake.com/wp-content/uploads/2018/02/11%D0%B91-400x400.jpg"},
   {id:5,name:"Пастель",price:"От 800 грн/кг",img:"http://www.karlson-cake.com/wp-content/uploads/2018/02/1%D0%B91-400x400.jpg"}
 ],
 festive:[
   {id:1,name:'СЕРДЦЕ',price:"От 800 грн/кг",img:'http://www.karlson-cake.com/wp-content/uploads/2018/02/2d.jpg'},
   {id:2,name:'ЦИФРА',price:"От 1,500 грн/кг",img:'http://www.karlson-cake.com/wp-content/uploads/2018/02/1a-400x400.jpg'},
   {id:3,name:'РУСТИК',price:"От 750 грн/кг",img:'http://www.karlson-cake.com/wp-content/uploads/2018/02/IMG_55192-400x400.jpg'},
   {id:4,name:'МИРАЖ',price:"От 800 грн/кг",img:'http://www.karlson-cake.com/wp-content/uploads/2018/02/20170806_165608-400x400.jpg'},
   {id:5,name:'МЕДОВИК',price:"От 750 грн/кг",img:'http://www.karlson-cake.com/wp-content/uploads/2018/02/005-400x400.jpg'},
   {id:6,name:'ШАМПАНЬ»',price:"От 800 грн/кг",img:'http://www.karlson-cake.com/wp-content/uploads/2018/02/Shampan-400x400.jpg'}
 ],
 mass:[
   {id:1,name:'КАРАМЕЛЬ',price:"От 800 грн/кг",img:'http://www.karlson-cake.com/wp-content/uploads/2018/02/a0d2641aa6453d999429b57426df9c44-400x400.jpg'},
   {id:2,name:'ГРУШЕВЫЙ',price:"От 700 грн/кг",img:'http://www.karlson-cake.com/wp-content/uploads/2018/02/26168055_168764710548372_3827900824156321681_n-400x400.jpg'},
   {id:3,name:'ЦИТРУСОВАЯ ОПЕРА',price:"От 750 грн/кг",img:'http://www.karlson-cake.com/wp-content/uploads/2018/02/25995012_168768257214684_80745798304667236681_n-400x400.jpg'},
   {id:4,name:'ПРЯНОСТЬ',price:"От 750 грн/кг",img:'http://www.karlson-cake.com/wp-content/uploads/2018/02/25016037_132911847394347_34599244169834659841_n-400x400.jpg'},
   {id:5,name:'ЛИМОН – КЛУБНИКА',price:"От 800 грн/кг",img:'http://www.karlson-cake.com/wp-content/uploads/2018/02/20398734_2097622693820005_41861992163238215682_n-400x400.jpg'},
   {id:6,name:'СЕБОН',price:"От 800 грн/кг",img:'http://www.karlson-cake.com/wp-content/uploads/2018/02/Screenshot_20180208-190557-400x400.jpg'}
 ],
 kids:[
   {id:1,name:'КОРАЛЛОВЫЙ',price:"От 800 грн/кг",img:'http://www.karlson-cake.com/wp-content/uploads/2018/03/Korallovyi--400x400.jpg'},
   {id:2,name:'ЧИЗКЕЙК – ОРЕО',price:"От 750 грн/кг",img:'http://www.karlson-cake.com/wp-content/uploads/2018/02/chizkeyk-orio-400x400.jpg'},
   {id:3,name:'ВИШНЕВО-СЛИВОЧНЫЙ',price:"От 800 грн/кг",img:'http://www.karlson-cake.com/wp-content/uploads/2018/02/IMG_53305-400x400.jpg'}
 ],
 corporate:[
   {id:1,name:'НОВОГОДНИЙ',price:"От 800 грн/кг",img:'http://www.karlson-cake.com/wp-content/uploads/2018/02/novogodnij-400x400.jpg'},
   {id:2,name:'ВЕСНА',price:"От 800 грн/кг",img:'http://www.karlson-cake.com/wp-content/uploads/2018/02/vesna-400x400.jpg'},
   {id:3,name:'ИЗУМРУД',price:"От 800 грн/кг",img:'http://www.karlson-cake.com/wp-content/uploads/2018/02/009-1-400x400.jpg'},
   {id:4,name:'ЧЕ ГЕВАРА',price:"От 800 грн/кг",img:'http://www.karlson-cake.com/wp-content/uploads/2018/02/aaz-400x400.jpg'}]
}

export const updateCatalogAC = (eventKey) => {
  
  
  return {type: eventKey}
}

export const SetUsersAC = (item) => { 
   return {
     type: setUsersAC,
     item: item
   }
}

const itemReducer = (state = initialState, action) => {
    
    switch(action.type){
      case weddingCake:
       
        return [...initialState.weddingCake]
        // {
          
        //   ...state,
        //   weddingCake: [...state.weddingCake]
        // }
      case festive:
        return [...initialState.festive]
        
      case mass:
        
        return [...initialState.mass]
        
      case kids:
        return [...initialState.kids]

      case corporate:
      return [...initialState.corporate]
      
      case setUsersAC: 
        return { }
      default:
        return state;
        
    }


}

export default itemReducer;