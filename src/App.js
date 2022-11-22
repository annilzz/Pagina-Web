import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { estructuradedatos, estaticas,dinamicas}from "./pages/estructuradedatos";
import { tablahash } from "./pages/tablahash";
import Grupo from "./pages/Grupo";
   function App(){
   return(
      <Router>
      <Sidebar />
      <Switch>
        <Route path="/estructuradedatos" exact component={estructuradedatos} />
        <Route path="/estructuradedatos/estaticas" exact component={estaticas} />
        <Route path="/estructuradedatos/dinamicas/" exact component={dinamicas} />
        <Route path="/tablahash" exact component={tablahash} />
        <Route path="/grupo" exact component={Grupo} />
      </Switch>
    </Router>
  );
}

export default App
