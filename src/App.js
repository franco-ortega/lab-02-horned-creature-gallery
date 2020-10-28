import './App.css';
import React, { Component } from 'react';
import Header from './Header.js';
import ImageList from './ImageList.js'
import DropDown from './DropDown.js';
import images from './Data';

export default class App extends Component {

  state = {
    filter1: '',
    filter2: '',
    filter3: '',
    filter4: ''
  }

  handleChange = e => {
    this.setState({
      filter1: e.target.value
    });
  }

  handleHornChange = e => {
    this.setState({
      filter2: e.target.value
    });
  }

  handleSkinChange = e => {
    this.setState({
      filter3: e.target.value
    });
  }

  handleFeetChange = e => {
    this.setState({
      filter4: e.target.value
    });
  }
  render() {
    return (
      <div>
        <Header />
        <DropDown handleChange={this.handleChange} handleHornChange={this.handleHornChange} handleSkinChange={this.handleSkinChange} handleFeetChange={this.handleFeetChange} />
        <ImageList images={images} filter={this.state.filter} filter1={this.state.filter1} filter2={this.state.filter2} filter3={this.state.filter3} filter4={this.state.filter4} />
      </div>
    )
  }
}