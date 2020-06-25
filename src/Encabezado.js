import React from 'react';
import Circulo from './Imagenes/circulo.jpg'
import Cuadrado from './Imagenes/cuadrado.jpg'
import Triangulo from './Imagenes/triangulo.jpg'
import Rectangulo from './Imagenes/rectangulo.jpg'
import AppCirculo from './AppCirculo'
import AppCuadrado from './AppCuadrado'
import AppRectangulo from './AppRectangulos'
//import AppRectangulo from './AppRectangulo'
import AppTriangulo from './AppTriangulo'
import { render } from '@testing-library/react';

class Encabezado extends React.Component {
    
    constructor(props) {
      super(props);
      this.mostrarCuadrado = false;
      this.mostrarCirculo = false;
    this.mostrarTriangulo= true;
      this.mostrarRectangulo = false;

      this.state = {
      opened: false,
      cuadrado: false,
      triangulo: false,
      rectangulo: false,
      show: new Array(4).fill(false)
    };
    this.mostrarFormulario = this.mostrarFormulario.bind(this);
    this.mostrarFormularioCuadrado = this.mostrarFormularioCuadrado.bind(this);
    this.mostrarFormularioTriangulo= this.mostrarFormularioTriangulo.bind(this);
    this.mostrarFormularioRectangulo = this.mostrarFormularioRectangulo.bind(this);
   
    }
mostrarFormularioCuadrado() {
    
    const { opened } = this.state;
    this.setState({
        opened:false,
    });

    const { cuadrado } = this.state;
    this.setState({
        cuadrado:true,
    });
    const { triangulo } = this.state;
    this.setState({
        triangulo:false,
    });

    const { rectangulo } = this.state;
    this.setState({
        rectangulo:false,
    });

        
              }

mostrarFormularioTriangulo() {
                
                const { opened } = this.state;
                this.setState({
                    opened: false,
                });

                const { cuadrado } = this.state;
                this.setState({
                    cuadrado:false,
                });
                const { triangulo } = this.state;
                this.setState({
                    triangulo:true,
                });

                const { rectangulo } = this.state;
                this.setState({
                    rectangulo:false,
                });
        
              }
mostrarFormularioRectangulo() {
                const { opened } = this.state;
                this.setState({
                    opened: false,
                });

                const { cuadrado } = this.state;
                this.setState({
                    cuadrado:false,
                });
                const { triangulo } = this.state;
                this.setState({
                    triangulo:false,
                });

                const { rectangulo } = this.state;
                this.setState({
                    rectangulo:true,
                });
        
              }

mostrarFormulario() {
                
                const { opened } = this.state;
                this.setState({
                    opened: true,
                });

                const { cuadrado } = this.state;
                this.setState({
                    cuadrado:false,
                });
                const { triangulo } = this.state;
                this.setState({
                    triangulo:false,
                });

                const { rectangulo } = this.state;
                this.setState({
                    rectangulo:false,
                });
        
              }

render() {
        const { opened } = this.state;
        const { triangulo } = this.state;
        const { cuadrado } = this.state;
        const { rectangulo } = this.state;
      return (
<div>

<div>
          <div  >
              <h1>Bienvenido !</h1>
    <p id="contexto">
        Elegir la forma que desea calcular area y perimetro
    </p>
    <div id='conjunto'>
    
        <figure  >
        <img id='forma'  src={Circulo} onClick={this.mostrarFormulario}
        ></img>   
      </figure>
        <figure>
        <img  id='forma' src={Cuadrado} onClick={this.mostrarFormularioCuadrado}
        ></img>   
        </figure>
        <figure>
        <img  id='forma' src={Triangulo} onClick= {this.mostrarFormularioTriangulo}
        ></img>   
        </figure>
         <figure>
         <img id='forma'  src={Rectangulo} onClick= {this.mostrarFormularioRectangulo}
         ></img>   
         </figure>
         
             
    </div>
    {opened && (

<div class="contenedorForms">

<AppCirculo/>
</div>
    
)}
{cuadrado && (

<div class="contenedorForms">

<AppCuadrado/>
</div>
    
)}
{triangulo && (

<div class="contenedorForms">

<AppTriangulo/>
</div>
    
)}
{rectangulo && (

<div class="contenedorForms">

<AppRectangulo/>
</div>
    
)}
         </div>
         </div>
         </div>
      );
    }
  }

  export default Encabezado;
  