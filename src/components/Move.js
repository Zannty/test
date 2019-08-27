import React from 'react';

class Move extends React.Component{
  

   render(){
    let move = (this.props.im && <span>Move: OFF</span>) || <span>Move: ON</span>
     return(
       <div>
         {move}         
       </div>
     );
   }

}


export default Move;