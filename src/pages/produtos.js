import React from 'react';
import Tabela from '../componentes/Tabela'

class Produtos extends React.Component{

    constructor(){
        super();
        this.state=({
            db: []
        });
        this.exibirProdutos();
    }

    exibirProdutos(){
        fetch("http://localhost/fullstack/fullstack/src/api/")
        .then((response)=>response.json())
        .then((responseJson)=>
        {
            this.setState({
                db: responseJson
            });
            console.log(this.state.db);
        })
    }

    render(){
        return(
          <div>
              <Tabela arrayprodutos={this.state.db}/>
        </div>
        );
    }
}
export default Produtos;