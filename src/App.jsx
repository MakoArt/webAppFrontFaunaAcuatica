import React from 'react';
import Cabecera from './Components/Cabecera/Cabecera'
import './App.css';
import Imagen from './Components/Imagen/Imagen'

function App() {
  return (
    <>
  
       <div className="container-fluid d-block">

         <div className="row">
           <div className="col-12 text-center" id="cabecera">
           <Cabecera/>
           </div>
         </div>
         <div className="row">
          <div className="col " id="imagen">
           
             
           <Imagen/>
        
          </div>
         </div>
         <div className="row-fluid">
         <div className="col" id="puntuacion">
   

         </div>
         </div>
         <div className="row">
         <div className="col" id="preguntas">


         </div>
         </div>














       </div>

    
    
    
    
    
    
    </>
  );
}

export default App;
