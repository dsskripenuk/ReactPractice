import React, { Fragment } from 'react'
import StudItem from '../stActivity/student-activity';

const actList = ({ acts }) => {

    var actsTemplate;

    if (acts !== null) {
        actsTemplate = acts.map(item => {
            return (
                <StudItem
                text={item.name}
                image={item.image}
            ></StudItem>
            );
        })
    }

    return(
        <Fragment>
            {actsTemplate}
        </Fragment>
    )
}

export default actList;