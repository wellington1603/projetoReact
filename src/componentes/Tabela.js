import React from 'react';
import './tabela.css'


export default class Tabela extends React.Component{
  constructor(){
    super();
    this.state=({
        db: [],
        selecionar: ""
    });
    this.exibirProdutos();
    this.exibir = this.exibir.bind(this)
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

    exibir (e) {
      // console.log(this.state.selecionar) 
  
      this.setState({
        bd: [],
        selecionar: e.target.value
      
      });
      console.log(this.state.selecionar)
      // console.log(e.target.value)
    }

    componentDidMount(){
      console.log(this.state.selecionar)
      console.log(this.state.db)
    }


    render(){
        return(
          <div className="pag-produto">
              <h1>Produtos</h1>

              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-2">
                    <h3>Categorias</h3>
                      <ul className="list-group">
                        <button className="list-group-item list-group-item-action" value="" onClick={this.exibir}>Todos os Produtos</button>
                        <button className="list-group-item list-group-item-action " value="stratocaster" onClick={this.exibir}>Stratocaster</button>
                        <button className="list-group-item list-group-item-action" value="telecaster" onClick={this.exibir}>Telecaster</button>
                        <button className="list-group-item list-group-item-action" value="lespaul" onClick={this.exibir}>Les Paul</button>
                        <button className="list-group-item list-group-item-action" value="flying" onClick={this.exibir}>Flying</button>
                       
                      </ul>
                    </div>
                
                
              <div className="col-sm-10">
                
                
              {this.state.db.map(
                   row=>  {
                     console.log(this.state.selecionar)
                    if(this.state.selecionar === ""){

                      return (
                        <div className="box_container">
                        
                          <div className="box_produto" id={row.categoria}>
                            <img src={require(`../img/${row.imagem}`).default} className="rounded mx-auto d-block" width={270}></img>
                            <p className="text-dark">{row.descricao}</p>
                            <p className="text-danger"><strike>R${row.preco}</strike></p>
                            <p>R${row.precofinal}</p>
                        
                            </div>
                          </div>

                      );

                   }
                   
                   else if(this.state.selecionar === row.categoria){
                      return(
                        <div className="box_container">
                        
                          <div className="box_produto" id={row.categoria}>
                            <img src={require(`../img/${row.imagem}`).default} className="rounded mx-auto d-block" width={270}></img>
                            <p className="text-dark">{row.descricao}</p>
                            <p className="text-danger"><strike>R${row.preco}</strike></p>
                            <p>R${row.precofinal}</p>
                        
                            </div>
                        </div>

                      );
                   }
                    
                  }                  
              )}
                  

                </div>
              </div>
            </div>
          </div>
        );
    }
}