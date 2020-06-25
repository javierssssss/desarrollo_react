import React, { Component } from "react";

class AppTriangulo extends Component {	 
	constructor(props) {
        super(props);
      
this.state={
    radio:45,
	value:'',
	value2:'',
	value3:'',
    area:'',
    perimetro:''
}   
this.calcular = this.calcular.bind(this);
this.handleChange = this.handleChange.bind(this);
this.handleChange2 = this.handleChange2.bind(this);
this.handleChange3 = this.handleChange3.bind(this);
    }
      handleChange(event) {
        this.setState({value: event.target.value});
	  }
	  handleChange2(event) {
        this.setState({value2: event.target.value});
	  }
	  handleChange3(event) {
        this.setState({value3: event.target.value});
      }
      
      calcular(event) {
		var lado1 = this.state.value ;
		var lado2 = this.state.value2 ;
		var lado3 = this.state.value3 ;
        
        var perimetro =  parseFloat(lado1) +     parseFloat(lado2) +    parseFloat(lado3) ;
		var sp = perimetro/2;
		var area = Math.sqrt(sp*(sp-lado1)*(sp-lado2)*(sp-lado3));
		this.setState({ area:area});
		this.setState({ perimetro:perimetro});
        event.preventDefault();
      }
   
	render() {
		return (
			<div id='contenedor'> 
			<form onSubmit={this.calcular}><p> Ingrese los lados  del triangulo</p>
            <input  id="radio" value={this.state.value}  type='number' onChange={ this.handleChange } ></input>
			<input  id="radio" value={this.state.value2}  type='number' onChange={ this.handleChange2 } ></input>
			<input  id="radio" value={this.state.value3}  type='number' onChange={ this.handleChange3 } ></input>
            <input id="botonCalcular" type="submit" value="Calcular" />
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

export default AppTriangulo;