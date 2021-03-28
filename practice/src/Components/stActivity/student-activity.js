import React, { Component, Fragment } from 'react';

class StActivity extends Component {

    state = {
        image: this.props.image,
        text: this.props.text
    }

    render() {
        const { image, text } = this.state;

        return (
            <Fragment>
                <div class="container-fluid well span6">
                    <div class="row-fluid">
                        <div class="span2" >
                            <img src={image} class="img-circle" />
                        </div>
                        <div class="span8">
                            <h3>{text}</h3>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default StActivity;
