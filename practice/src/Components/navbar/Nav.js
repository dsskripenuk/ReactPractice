import React, { Component, Fragment } from 'react';
import './nav.css';

class Navbar extends Component {

    render() {
        return (
            <Fragment>
                <nav class="navStyle navbar navbar-expand-lg">
                    <img className="imgStyle" src="https://lh3.googleusercontent.com/fife/ABSRlIrXSDkQBYIZXwola0sWPTjSoES1fyy7OiHjT4ZnRVx_d33aYW6Zg443qjJ_DUO42fs8aT4w6p57l-WXTjt1k3KxeyC-lloH1LxcSD9TCFDbj9AqXKHrg8HTeTzkbhSXR2I-vcqIz9GGvzHYUTPphrgx4PSt9RVW61pF9lo8T5EiMN0W3SAjI0C3pFz5PJTMVg3gGd2gYa978kqAmXcj7rrIMn-xLSND-Fks6YsQ1-kTGlNow4gjv4AYp37Yfnxmy1c8vj19EUsgLHItyXajTVn8xawsZyE-vNeZP-b4ueW2YKyejZL1HPTnV_MSQa8RI_q7Z4QhnKXY8tpV083SG56oQHUnhx9fjfHL_TzLpYx4JzeWfpdZ50OusiYUu-SVEHySC0rubzqIWy3AcGr5cVYDea8YAdg4EpAS3t5XywPMHIakqOazm6PgcsqrI_D7UNyDGJ2_BFRuPSf63sYbDXFTpa9QWaeGnZfn4BL21CGxSEgHfX929QKNSYWSSqv63_oDwvf-stVqkrur6AbG7LbiwDoEIjBnu0mYW50Gw-KlGjlvv4SMZUMjFqbWFTjhYZDxqPkNMHP1NWNM9-F1QcOfixvfrR36o-5NnXYhqVty7SIIgA2EcYUWxIrwTjiUh--appf46x1UZFaMUa3Bu0PKxJRtvaW3--DDYOrunUOnYOFoBSuYXIT_nwPqxwgpOTuS0Rnw4NjlNJszXSBPtNWYzGdlqLniMJO3dA=s1741-w1741-h979-no?authuser=0"></img>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                            </li>
                            <li class="nav-item">
                                <div class="dmargin row">
                                    <div class="col">
                                        <span>376</span>
                                        <img src="https://i.imgur.com/fY6K97Z.png"></img>
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item">
                                <div class="dmargin row">
                                    <div class="col">
                                        <span class="color">376</span>
                                        <img src="https://mystat.itstep.org/assets/images/christal.png?v=168f87e3e1d37c240e74d77718154602"></img>
                                    </div>
                                </div>                            </li>
                          
                        </ul>
                    </div>
                </nav>

            </Fragment>
        );
    }
}

export default Navbar;
