import React from 'react';
import './home.css'

class Home extends React.Component{
    render(){
        return(
            <div>
                <div className='container-fluid'>
                    <h1>Seja bem vindo(a)!</h1>
                    <p>Aqui em nossa loja, <strong>programadores tem desconto</strong> em nosso produtos.</p>

                </div>
            </div>
        )
    }
}

export default Home;