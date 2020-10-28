import React, { Component } from 'react';
import ImageItem from './ImageItem.js';

export default class ImageList extends Component {
    render() {
      const filteredImages = this.props.images.filter((item) => {
        if (!this.props.filterKeyword && !this.props.filterHorns && !this.props.filterSkin && !this.props.filterFeet) return true;
  
        if (item.keyword === this.props.filterKeyword) return true;
  
        if (item.horns === Number(this.props.filterHorns)) return true;
  
        if (item.skin === this.props.filterSkin) return true;
  
        if (item.feet === this.props.filterFeet) return true;
  
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