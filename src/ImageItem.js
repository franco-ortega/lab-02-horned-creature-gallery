import React, { Component } from 'react';


export default class ImageItem extends Component {
    render() {
        return (
            <div className='image-div'>
                IMAGE ITEM TOP

                <div>
                    {this.props.keyword}
                    <img src={this.props.url} alt={this.props.keyword}/>
                </div>


                IMAGE ITEM BOTTOM
            </div>


                // {/* {images[0].keyword}
                // <img src={images[0].url} alt='{images[0].keyword}' />
                // {images[1].keyword}
                // <img src={images[1].url} alt='{images[1].keyword}' />
                // {images[2].keyword}
                // <img src={images[2].url} alt='{images[2].keyword}' />
                // {images[3].keyword}
                // <img src={images[3].url} alt='{images[3].keyword}' />
                // {images[4].keyword}
                // <img src={images[4].url} alt='{images[4].keyword}' />
                // {images[5].keyword}
                // <img src={images[5].url} alt='{images[5].keyword}' />
                // {images[6].keyword}
                // <img src={images[6].url} alt='{images[6].keyword}' />
                // {images[7].keyword}
                // <img src={images[7].url} alt='{images[7].keyword}' />
                // {images[8].keyword}
                // <img src={images[8].url} alt='{images[8].keyword}' />
                // {images[9].keyword}
                // <img src={images[9].url} alt='{images[9].keyword}' />
                // {images[10].keyword}
                // <img src={images[10].url} alt='{images[10].keyword}' />
                // {images[11].keyword}
                // <img src={images[11].url} alt='{images[11].keyword}' />
                // {images[12].keyword}
                // <img src={images[12].url} alt='{images[12].keyword}' />
                // {images[13].keyword}
                // <img src={images[13].url} alt='{images[13].keyword}' />
                // {images[14].keyword}
                // <img src={images[14].url} alt='{images[14].keyword}' />
                // {images[15].keyword}
                // <img src={images[15].url} alt='{images[15].keyword}' />
                // {images[16].keyword}
                // <img src={images[16].url} alt='{images[16].keyword}' />
                // {images[17].keyword}
                // <img src={images[17].url} alt='{images[17].keyword}' />
                // {images[18].keyword}
                // <img src={images[18].url} alt='{images[18].keyword}' />
                // {images[19].keyword}
                // <img src={images[19].url} alt='{images[19].keyword}' /> */}

                // {/* {
                //     images.map(image =>
                //         <ImageList
                //          keyword={image.keyword} /> )
                // } */}

        )
    }
}
