import './App.css';
import React, { Component } from 'react';
import Header from './Header.js';
import ImageList from './ImageList.js'
import DropDown from './DropDown.js';
import images from './Data';

export default class App extends Component {

  state = {
    filterKeyword: '',
    filterHorns: '',
    filterSkin: '',
    filterFeet: ''
  }

  handleChange = e => {
    this.setState({
      filterKeyword: e.target.value
    });
  }

  handleHornChange = e => {
    this.setState({
      filterHorns: e.target.value
    });
  }

  handleSkinChange = e => {
    this.setState({
      filterSkin: e.target.value
    });
  }

  handleFeetChange = e => {
    this.setState({
      filterFeet: e.target.value
    });
  }
  render() {
    return (
      <div>
        <Header />
        <DropDown handleChange={this.handleChange} handleHornChange={this.handleHornChange} handleSkinChange={this.handleSkinChange} handleFeetChange={this.handleFeetChange} />
        <ImageList images={images} filter={this.state.filter} filterKeyword={this.state.filterKeyword} filterHorns={this.state.filterHorns} filterSkin={this.state.filterSkin} filterFeet={this.state.filterFeet} />
      </div>
    )
  }
}