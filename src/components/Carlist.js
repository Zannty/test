import React from 'react';
import Car from './Car.js';



class Carlist extends React.Component{
    state = {
        check:true,
        optionValue:<Car  name='mercedes'/>,
        carlist:[<Car id ='1' name='bmw'/>,
        <Car id ='2' name='volvo'/>, <Car id ='3' name='audi'/>]
               
    };
 


    render(){
         const option =['1','2','3'];
         
        return(
           
            <div>
           
             <ul>{this.state.carlist}</ul>

             <select onChange={this.change}>
                <option value={option[0]}>mercedes</option>
                <option value={option[1]}>jeep</option>
                <option value={option[2]}>fiat</option>
  
                </select>
                 
             <br/> 
             <input type='button' id='button' onClick={this.addCar} value='Добавить' disabled={this.state.check}/> 
             <input type="checkbox" id='box' onClick={this.checked}/> <a href='http://google.com/' target="_blank" rel="noopener noreferrer"> Пользовательское соглашение с
                  правилами сервиса</a>
         </div>
      );
    };
    
    

    checked = () =>{
        this.setState({check:!this.state.check});
        
       
    };
      change = (e) =>{
        if (e.target.value === '1') this.setState({optionValue:<Car  name='mercedes'/>});
        else if (e.target.value === '2') this.setState({optionValue:<Car  name='jeep'/>});
        else if (e.target.value === '3') this.setState({optionValue:<Car  name='fiat'/>}); 
    };
    
    addCar = () => {
        this.setState({carlist:[...this.state.carlist, this.state.optionValue]});
       
        
    };
  
    
 }

 export default Carlist;