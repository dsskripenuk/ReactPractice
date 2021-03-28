import React, { Fragment } from 'react'
import StudItem from '../stud_item/studItem';

const studList = ({ studs }) => {

    var studsTemplate;

    if (studs !== null) {
        studsTemplate = studs.map(item => {
            return (
                <StudItem
                name={item.name}
                image={item.image}
            ></StudItem>
            );
        })
    }

    return(
        <Fragment>
            {studsTemplate}
        </Fragment>
    )
}

export default studList;