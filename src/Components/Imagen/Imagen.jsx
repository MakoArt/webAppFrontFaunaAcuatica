import React, { Component } from 'react'
import Imagenes from '../Db/Imagenes'
import './Imagen.css'

class Imagen extends Component {
    constructor(props) {
        super(props);
        this.state = {
                n:[0]
               }     
         }
     
    
     async preguntarV(){

         this.setState({n:Math.round(Math.random()*(8-1)+1)})
        const respuesta =await Imagenes[`${this.state.n}`].respuesta
        await respuesta===true ?  speechSynthesis.speak(new SpeechSynthesisUtterance('Respuesta correcta')): speechSynthesis.speak(new SpeechSynthesisUtterance('Respuesta incorrecta'))
 
    
        }
      
      async preguntarF(){

        this.setState({n:Math.round(Math.random()*(8-1)+1)})
        const respuesta=await Imagenes[`${this.state.n}`].respuesta
        await respuesta===false ? speechSynthesis.speak(new SpeechSynthesisUtterance('Respuesta correcta')): speechSynthesis.speak(new SpeechSynthesisUtterance('Respuesta incorrecta'))
      }
    
     render() {
   
     return(
    <> 
        <ul>
           <li><img className="img" src={Imagenes[`${this.state.n}`].img} alt=""></img></li>
           <li><h6 className="pregunta">{Imagenes[`${this.state.n}`].pregunta}</h6></li>
        </ul>
      
       <button   className="respuesta" name="verdadero" onClick={this.preguntarV.bind(this)} ><h6>VERDADERO</h6></button>
       <button   className="respuesta" name="falso" onClick={this.preguntarF.bind(this)} ><h6>FALSO</h6></button>
        </>
                 
    
     )  
}
}
export default Imagen ;