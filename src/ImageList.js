import React, { Component } from 'react';
import ImageItem from './ImageItem.js';
//import images from './Data.js';

export default class ImageList extends Component {

    state = {
        filter: ''
      }
    
      handleChange = e => {
        this.setState({
          filter: e.target.value
        });
      }
    




    render() {
            const filteredImages = this.props.images.filter((item) => {
              if (!this.state.filter) return true;
  
              if (item.keyword === this.state.filter) return true;
  
              return false;
            })
          
          
  
        return (
            <>
                <select onChange={this.handleChange}>
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
                </select>

                <div className='image-div'>
                {
                    filteredImages.map(item => 
                        <ImageItem
                        title={item.title}
                        url={item.url}
                        keyword={item.keyword}
                        />
                    )
                }
                </div>
        </>
        )
    }
}
