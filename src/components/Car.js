import React from 'react';
import Engine from './Engine'
import Move from './Move'
import Wheels from './Wheels'
class Car extends React.Component{
  state = {
    isEngine: true,
    isMove: true,
    isWheels: true,
    name:'',
    id:'',
    delite:false,
  } 

  
   render(){
    
    
   
     return(
       <div>
     
      <ul className={this.state.delite?'del':'undell'}> 
        {this.props.name}     
     <Engine ie = {this.state.isEngine} />
     <Move im = {this.state.isMove} />
     <Wheels iw = {this.state.isWheels} />
     <button onClick={this.engineON}>
        Запустить двигатель
    </button>
    <button onClick={this.engineOFF}>
        Заглушить двигатель
    </button>
    <button onClick={this.moveON}>
        Поехать
    </button>
    <button onClick={this.moveOFF}>
        Остановиться
    </button>
    <button  onClick={this.Del}>Удалить</button>
    
   </ul>
   </div>
     );
    
   }
   
Del=(e)=>{
  this.setState({delite:!this.state.delite});
}
engineON = () => {
  this.setState({
      isEngine: false
  })
  
}


engineOFF = () => {
  this.setState({
      isEngine: true,
      isMove : true,
      isWheels: true
  });
}


moveON = () => {
    if (this.state.isEngine === true){
        alert('Для начала движения запустите двигатель')
    }
    else
      {
        this.setState({
         isMove: false,
         isWheels: false
  });
} 
}


moveOFF = () => {
  this.setState({
      isMove: true,
      isWheels: true
  });
 
}
}

export default Car;
