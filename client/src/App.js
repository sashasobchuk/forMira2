import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import Collections from "./components/colections/colections";
import OneCollection from "./components/colections/oneCollection/oneCollection";
// import Books from "./components/books/Books";
import OneBook from "./components/books/book/OneBook/OneBook";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <BrowserRouter>

        <Header/>
            <Route exact path='/collections' render={()=> <Collections/>}/>
            <Route exact  path='/collections/:id' render={()=> <OneCollection/>}/>

            {/*<Route exact  path='/Books/' render={()=> <Books/>}/>*/}
            <Route exact  path='/Books/:id' render={()=> <OneBook/>}/>

            <Route exact path='/' render={()=> <Redirect to={{pathname:'/collections'}}/>}/>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
