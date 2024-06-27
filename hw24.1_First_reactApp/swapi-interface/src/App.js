import './App.css';
import React from 'react';
import  { Header } from "./components/Header/Header";
import  { SearchForm } from "./components/SearchForm/SearchForm";
import  { SearchList } from "./components/SearchList/SearchList";
import { firstPerson } from './components/DataMock'

import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            people: [],
            initialPerson: firstPerson,
            query:''
        };
    }
  render() {
        return (
          <div className="container">
              <Header />
              <div className="row mt-5">
                  <div className="col-md-6">
                      <SearchForm />
                  </div>
              </div>
              <SearchList data={this.state.initialPerson}/>
          </div>
      );
  }
}

export default App;
