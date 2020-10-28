import React, { Component } from 'react'

export default class DropDown extends Component {
    render() {
        return (
                <div className='drop-down-div'>
                    <select onChange={this.props.handleChange}>
                        <option value=''>All Categories</option>
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
                    <select onChange={this.props.handleHornChange}>
                        <option value=''>All Horns</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='100'>100</option>
                    </select>
                    <select onChange={this.props.handleSkinChange}>
                        <option value=''>All Skins</option>
                        <option value='fur'>Fur</option>
                        <option value='hide'>Hide</option>
                        <option value='scales'>Scales</option>
                        <option value='skin'>Skin</option>
                    </select>
                    <select onChange={this.props.handleFeetChange}>
                        <option value=''>All Feet</option>
                        <option value='claws'>Claws</option>
                        <option value='fins'>Fins</option>
                        <option value='hooves'>Hooves</option>
                    </select>
                </div>
        )
    }
}