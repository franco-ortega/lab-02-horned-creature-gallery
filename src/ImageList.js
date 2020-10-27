import React, { Component } from 'react'
import images from './Data.js';

export default class ImageList extends Component {
    render() {
        return (
            <div className='image-div'>
                {images[0].keyword}
                <img src={images[0].url} alt='{images[0.keyword}' />
                {images[1].keyword}
                <img src={images[1].url} alt='{images[0.keyword}' />
                {images[2].keyword}
                <img src={images[2].url} alt='{images[0.keyword}' />
                {images[3].keyword}
                <img src={images[3].url} alt='{images[0.keyword}' />
                {images[4].keyword}
                <img src={images[4].url} alt='{images[0.keyword}' />
                {images[5].keyword}
                <img src={images[5].url} alt='{images[0.keyword}' />
                {images[6].keyword}
                <img src={images[6].url} alt='{images[0.keyword}' />
            </div>
        )
    }
}
