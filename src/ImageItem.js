import React, { Component } from 'react';

export default class ImageItem extends Component {
    render() {
        return (
            <div className='image-div'>
                <div className='creature-div'>
                    <img src={this.props.url} alt={this.props.keyword}/>
                    {this.props.title}
                </div>
            </div>
        )
    }
}