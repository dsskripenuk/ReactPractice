import React, { Component, Fragment } from 'react';
import './reward.css';

class RewardItem extends Component {

    state = {
        image: this.props.image,
        text: this.props.text
    }

    render() {
        const { image, text } = this.state;

        return (
            <Fragment>
                <div class="col-sm margin1">
                <div class="card reward" >
                    <img class="card-img-top" src={image} alt="Card image cap" />
                    <div class="card-body">
                        <p class="card-text">{text}</p>
                    </div>
                </div>
                </div>
            </Fragment>
        );
    }
}

export default RewardItem;
