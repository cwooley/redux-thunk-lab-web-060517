import React from 'react'

 export default class CatList extends React.Component{
   render(){
     return(
       <div>
         {this.props.catPics.map(cat=><img src={cat.url}/>)}
       </div>
     )
   }
 }
