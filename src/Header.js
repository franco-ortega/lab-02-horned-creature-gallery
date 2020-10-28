import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <div>
                <div className='title-div'>
                    Horned Creature Gallery
                </div>
                <div className='intro-div'>
                    Welcome to the gallery of Horned Creatures real and fantastic!! You may select the type of creatures you want to see by choosing a type in the drop down menu.
                </div>
            </div>
        )
    }
}
