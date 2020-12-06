import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Navbar from './componentes/navbar/Navbar';
import Footer from './componentes/Footer/Footer'
import Home from './pages/home';
import Produtos from './pages/produtos';
import Lojas from './pages/lojas';
import Pedidos from './pages/Pedidos';
import Contato from './pages/contato';
import Tabela from './componentes/Tabela'
import './App.css';

function AppShell() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <main>
        <Switch>
          <Route exact path="/home" component={Home}/>
          <Route path="/produtos" component={Tabela}/>
          <Route path="/lojas" component={Lojas}/>
          <Route path="/contato" component={Contato}/>
          <Route path="/pedidos" component={Pedidos}/>
        </Switch>
      </main>

      <footer>
        <Footer/>
      </footer>
      
    </div>
  );
}

export default AppShell;
