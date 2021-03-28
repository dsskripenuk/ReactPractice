import React, { Fragment } from 'react';
import RewardItem from '../reward_item/reward-item';

const RewardList = ({ rewards }) => {

    var rewardTemplate;

    if (rewards !== null) {
        rewardTemplate = rewards.map(item => {
            return (
                <RewardItem
                    image={item.image}
                    text={item.text}
                ></RewardItem>
            );
        })
    }

    return(
        <Fragment>
            {rewardTemplate}
        </Fragment>
    )
}


export default RewardList;