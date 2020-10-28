import React, { Component } from 'react';
import ImageItem from './ImageItem.js';

export default class ImageList extends Component {
    render() {
      const filteredImages = this.props.images.filter((item) => {
        if (!this.props.filter1 && !this.props.filter2 && !this.props.filter3 && !this.props.filter4) return true;
  
        if (item.keyword === this.props.filter1) return true;
  
        if (item.horns === Number(this.props.filter2)) return true;
  
        if (item.skin === this.props.filter3) return true;
  
        if (item.feet === this.props.filter4) return true;
  
        return false;
      })
        return (
            <>
                <div className='image-div'>
                {
                    filteredImages.map(item => 
                        <ImageItem
                        title={item.title}
                        url={item.url}
                        keyword={item.keyword}
                        horns={item.horns}
                        skin={item.skin}
                        description={item.description}
                        feet={item.feet}
                        />
                    )
                }
                </div>
            </>
        )
    }
}