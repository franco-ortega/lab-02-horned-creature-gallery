import './App.css';
import React, { Component } from 'react';
import Header from './Header.js';
import ImageList from './ImageList.js'
import images from './Data';

export default class App extends Component {

  // state = {
  //   filter: ' '
  // }

  // handleChange = e => {
  //   this.setState({
  //     filter: e.target.value
  //   });
  // }



  render() {
    return (
      <div>
        <Header />

        {/* <select onChange={this.handleChange}>
          <option value=''>Show All</option>
          <option value='addax'>Addax</option>
          <option value='chameleon'>Chameleon</option>
          <option value='dragon'>Dragon</option>
          <option value='lizard'>Lizard</option>
          <option value='markhor'>Markhor</option>
          <option value='mouflon'>Mouflon</option>
          <option value='narwhal'>Narwhal</option>
          <option value='rhino'>Rhino</option>
          <option value='triceratops'>Triceratops</option>
          <option value='unicorn'>Unicorn</option>
          <option value='unilego'>Unilego</option>
        </select> */}
        
        
        {/* {
          this.props.images.filter((item) => {
            if (!this.state.filter) return true;

            if (item.keyword === this.state.filter) return true;

            return false;
          })
        }
         */}


        <ImageList images={images} />
      </div>
    )
  }
}
