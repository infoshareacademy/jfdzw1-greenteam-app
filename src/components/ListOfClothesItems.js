import React, {Component} from 'react'

import man1 from '../img/man/andrew-neel-369701.jpg';
import man2 from '../img/man/david-lezcano-225889.jpg';
import man3 from '../img/man/jacob-rank-111336.jpg';
import man4 from '../img/man/jason-briscoe-105342.jpg';
import man5 from '../img/man/mathias-arlund-494957.jpg';
import man6 from '../img/man/nordwood-themes-162465.jpg';
import man7 from '../img/man/sean-pollock-197711.jpg';
import man8 from '../img/man/sophie-sollmann-94019.jpg';
import woman1 from '../img/woman/becca-tarter-481439.jpg';
import woman2 from '../img/woman/pete-bellis-310093.jpg';
import woman3 from '../img/woman/drew-coffman-98518.jpg';
import woman4 from '../img/woman/maja-karlsson-94320.jpg';
import woman5 from '../img/woman/pete-bellis-189610.jpg';
import woman6 from '../img/woman/pete-bellis-229665.jpg';
import woman7 from '../img/woman/pete-bellis-448200.jpg';

import ClothItem from "./ClothItem";


class ListOfClothesItems extends Component {
    render() {
        return (
            <div>
                <ClothItem src={man1} />
                <ClothItem src={man2} />
                <ClothItem src={man3} />
                <ClothItem src={man4} />
                <ClothItem src={man5} />
                <ClothItem src={man6} />
                <ClothItem src={man7} />
                <ClothItem src={man8} />
                <ClothItem src={woman1} />
                <ClothItem src={woman2} />
                <ClothItem src={woman3} />
                <ClothItem src={woman4} />
                <ClothItem src={woman6} />
                <ClothItem src={woman7} />
                <ClothItem src={woman5} />
            </div>
        );
    }
}

export default ListOfClothesItems;