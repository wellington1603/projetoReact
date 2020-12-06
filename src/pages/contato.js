import React from 'react';

class Contato extends React.Component{
    constructor(){
        super();
        this.state=({
            c: [],
         
        });
        this.exibirComentarios();
    }
    
    exibirComentarios(){
        fetch("http://localhost/fullstack/fullstack/src/api/")
        .then((response)=>response.json())
        .then((responseJson)=>
        {
            this.setState({
                c: responseJson
            });
            console.log(this.state.c);
        })
    }

    render(){
        return(
            <div>
                <div className='container'>
                    <h1>Contato</h1>
                    <div>
                        {/* {console.log(c)} */}
                        {/* {this.state.db.map(
                            row=> {row.id}
                        )} */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Contato;