import React, { Component } from "react";

class AppCuadrado extends Component {	 
	constructor(props) {
        super(props);
      
this.state={
    radio:45,
    value:'',
    area:'',
    perimetro:''
}   
this.calcular = this.calcular.bind(this);
this.handleChange = this.handleChange.bind(this);
    }
      handleChange(event) {
        this.setState({value: event.target.value});
      }
      
      calcular(event) {
        var radio = this.state.value ;
        
        var areas = radio*radio;
        var perimetro = radio*4;
		this.setState({ area:areas});
		this.setState({ perimetro:perimetro});
        event.preventDefault();
      }
   
	render() {
		return (
			<div id='contenedor'> 
			<form onSubmit={this.calcular}><p> Ingrese los lados  del cuadrado</p>
            <input  id="radio" value={this.state.value}  type='number' onChange={ this.handleChange } ></input>
            <input id="botonCalcular"  type="submit" value="Calcular" />
            <p>
          Area:
     </p>
    <input id="radio"  disabled value={this.state.area} type='number'	></input>
    <p > Perimetro:</p>
    <input   id="radio" disabled value={this.state.perimetro} type='number'></input>
</form>
</div>
		);
	}
}

export default AppCuadrado;