import React from "react";
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
  } from "react-router-dom";


  import Consulta1 from "./Consulta1";
  import Consulta2 from "./Consulta2";
  import Consulta3 from "./Consulta3";
  import Consulta4 from "./Consulta4";
  import Consulta5 from "./Consulta5";
  import Consulta6 from "./Consulta6";
const Header = (props) => {
    return(
        
        
        <Router>
            
            <div className="grid-container">
                <header className="row">
                    <div>
                    <Link to="/" className="brand">
                            Colegio
                    </Link>
                        
                    </div>
                    <div>
                        <div className="dropdown">
                            <Link to="# ">
                                <i className="fa fa-caret-down">Consultas</i>
                            </Link>
                            <ul className="dropdown-content">
                                <li >
                                    <Link to="/consulta1" >Consulta 1</Link>
                                </li>
                                <li >
                                    <Link to="/consulta2" >Consulta 2</Link>
                                </li>
                                <li >
                                    <Link to="/consulta3" >Consulta 3</Link>
                                </li>
                                <li >
                                    <Link to="/consulta4" >Consulta 4</Link>
                                </li>
                                <li >
                                    <Link to="/consulta5" >Consulta 5</Link>
                                </li>
                                <li >
                                    <Link to="/consulta6" >Consulta 6</Link>
                                </li>

                            </ul>

                        </div>
                    </div>
                </header>
                <main>
                    <Switch>
                        
                        <Route path="/consulta1">
                            <Consulta1/>
                        </Route>
                        <Route path="/consulta2">
                            <Consulta2/>
                        </Route>
                        <Route path="/consulta3">
                            <Consulta3/>
                        </Route>
                        <Route path="/consulta4">
                            <Consulta4/>
                        </Route>
                        <Route path="/consulta5">
                            <Consulta5/>
                        </Route>
                        <Route path="/consulta6">
                            <Consulta6/>
                        </Route>
                    </Switch>
                    </main>
            </div>
        </Router>
    );
};
export default Header;