import React from 'react';
import './lojas.css'

class Lojas extends React.Component{
    render(){
        return(
            <div className='lojas'>
                <div className="container">
                    <h1>Lojas</h1>
                    <div className='row'>
                        <div className='col'>
                            <p>Rio de Janeiro</p>
                            <p>Avenida Presidente Vargas, 5000</p>
                            <p>10º andar</p>
                            <p>Centro</p>
                            <p>(21)9999-9999</p>                     

                        </div>
                        <div className='col'>
                            <p>São Paulo</p>
                            <p>Avenida Paulista, 950</p>
                            <p>3º andar</p>
                            <p>Jardins</p>
                            <p>(11)1111-9222</p>
                              
                        </div>
                        <div className='col'>
                            <p>Santa Catarina</p>
                            <p>Rua major vila, 370</p>
                            <p>Vila Mariana</p>
                            <p>(41)5555-5555</p>
                        </div>

                    </div>
                
                </div>   
            </div>
        )
    }
}

export default Lojas;