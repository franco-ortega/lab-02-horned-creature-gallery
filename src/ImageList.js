import React, { Component } from 'react';
import ImageItem from './ImageItem.js';
import images from './Data.js';

export default class ImageList extends Component {
    render() {
        console.log('Hi, ' + images);
        return (
            <div className='creature-div'>
            {
                images.map(item => 
                    <ImageItem
                    keyword={item.keyword}
                    url={item.url}
                    />
                )
            }
            </div>
        )
    }
}
