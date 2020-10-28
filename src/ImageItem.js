import React, { Component } from 'react';

export default class ImageItem extends Component {
    render() {
        return (
            <div className='image-div'>
                <div className='creature-div'>
                    <div className='creature-name-div'>
                        {this.props.title}
                    </div>
                    <img src={this.props.url} alt={this.props.keyword}/>
                    <div className='description-div'>
                        "{this.props.description}."
                    </div>
                    
                </div>
            </div>
        )
    }
}