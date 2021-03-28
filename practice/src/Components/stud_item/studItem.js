import React, { Component, Fragment } from 'react';


class StudItem extends Component {

    state = {
        name: this.props.name,
        image: this.props.image
    }


    render() {
        const { name, image } = this.state;

        return (
                <p>{name}</p>
        );
    }
}

export default StudItem;
