import React, { Component } from 'react';
import logo from './logo.png';
import Select from './Select';
import Button from './Button';
import SearchBox from './SearchBox';
import FetchTable from './FetchTable';
import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state = {
      number: '',
      people: {},
      planets: {},
      species: {},
      searchfield: ''
      
    }
  }

  getData = () => {
    if(this.state.searchfield === ''){ 
      alert('please select an option fisrt')
    }
    else{
      var value='';
      if(this.state.number === '')
        value = Math.floor(Math.random() * 37) + 1;
      else
        value = this.state.number;

      fetch(`https://swapi.co/api/${this.state.searchfield}/${value}/`)
      .then(response => response.json())
      .then(data => {
       if(this.state.searchfield === 'people'){
        this.setState({people: data});
      } else if(this.state.searchfield === 'planets'){
        this.setState({planets: data});
      } else {
        this.setState({species: data});
      }
      })       
    }
  }

  whichCategory = () => {
    if(this.state.searchfield === 'people')
      return this.state.people;
    else if(this.state.searchfield === 'planets')
      return this.state.planets;
    else
      return this.state.species;
  } 

  onSelectChange = (event) => {
    this.setState({searchfield: event.target.value});
    console.log(this.state.searchfield)
  } 

  onSearchChange = (event) => {
    this.setState({number: event.target.value});
    console.log(this.state.number)
  } 

  render() {
    return (
      <div className='tc'>
        <header className="App-header">
          <img src={logo} alt="logo" className='f7 measure-narrow' />
          <h1 className='bg-navy br3 pa3 ma2 bw2 shadow-5'>Welcome to the Starwars fetcher page</h1>
        </header>  
        <div className='mt6'>
        <p>Select an option from the drop down menu and click the button to get a random response</p>
        <p>Or Select an option from the drop down menu enter a number in the Search box and click the button to get the response you want</p>
        </div>
        <Select selectChange={this.onSelectChange} />  
        <SearchBox searchChange={this.onSearchChange}/>
        <Button onClick={this.getData}/> 
        <FetchTable data={this.whichCategory()}/>
        
      </div>
    );
  }
}

export default App;