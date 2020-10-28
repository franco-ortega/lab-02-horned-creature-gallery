import React, { Component } from 'react';
import ImageItem from './ImageItem.js';

export default class ImageList extends Component {

    state = {
        filter1: '',
        filter2: ''
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


    render() {
            const filteredImages = this.props.images.filter((item) => {
              if (!this.state.filter1 && !this.state.filter2) return true;
  
              if (item.keyword === this.state.filter1) return true;

              if (item.horns === Number(this.state.filter2)) return true;

  
              return false;
            })

        return (
            <>
                <div className='drop-down-div'>
                <select onChange={this.handleChange} name='menuOne'>
                    <option value=''>All Creatures</option>
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

                <select onChange={this.handleHornChange} name='menuTwo'>
                    <option value=''>All Horns</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='100'>100</option>
                </select>




                </div>
                <div className='image-div'>
                {
                    filteredImages.map(item => 
                        <ImageItem
                        title={item.title}
                        url={item.url}
                        keyword={item.keyword}
                        horns={item.horns}
                        />
                    )
                }
                </div>
            </>
        )
    }
}