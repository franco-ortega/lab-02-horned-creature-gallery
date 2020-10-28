import './App.css';
import React, { Component } from 'react';
import Header from './Header.js';
import ImageList from './ImageList.js'
import images from './Data';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ImageList images={images} />
      </div>
    )
  }
}