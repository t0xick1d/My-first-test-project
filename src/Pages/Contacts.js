import React from 'react'
import loco from '../imeges/geo-alt.svg'
import {Map, InfoWindow, Marker, GoogleApiWrapper, MapContainer, GoogleMap} from 'google-maps-react';

// let Gmap = () =>{

//     return(
//         <Map google={this.props.google} zoom={14}>

//                 <Marker onClick={this.onMarkerClick}
//                 name={'Current location'} />

//                 <InfoWindow onClose={this.onInfoWindowClose}>
//                 <div>
//                 <h1>{this.state.selectedPlace.name}</h1>
//                 </div>
//                 </InfoWindow>
//                 </Map>
//     )
//     export default GoogleApiWrapper({
//     apiKey: ("AIzaSyDZUBUyJW6Kyqympm9OJ9oLIpbcK4ShWbs")
//         })(MapContainer)

// }
// let PositMap =()=>{
//     return(
//         <GoogleMap
//             defaultzoom={12}
//             defaultCenter={{lat:'50.467052',lng:'30.623897'}}
//         />)
// }

export const Contacts = () =>{
    return(
        <dev>
            <h1>Кондитерская карлсон</h1>
            <img src={loco}/>
            <h5>Адрес и график работы</h5>
            <h6>02068, Украина, г.Киев, ул. Анны Ахматовой,13 Г</h6>
            <h6>ВТ— СБ — с 09.00 до 19.00</h6>
            <h6>ВС —ПН — выходной</h6>
            <h6>Наши телефоны:  (067) 296-0-444

                (050) 296-0-444

                (044) 592-5-114

                E-mail: karlson.cake@gmail.com
            </h6>
          
            {/* <PositMap/> */}
        </dev>
            
    )
}

