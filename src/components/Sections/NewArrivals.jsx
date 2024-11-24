import React from 'react';
import SectionHeading from "./SectionsHeading/SectionsHeading";
import Card from "../Card/Card";
import Jeans from '../../assets/img/jeans.jpg'
import Shirt from '../../assets/img/shirts.jpg'
import Tshirt from '../../assets/img/tshirts.jpeg'
import Dresses from '../../assets/img/dresses.jpg'
import Carousel from "react-multi-carousel";
import {responsive} from "../../utils/Section.contants";
import './NewArrivals.css';

const items = [{
    'title': 'Jeans',
    imagePath: Jeans
}, {
    'title': 'Shirts',
    imagePath: Shirt
}, {
    'title': 'T-shirts',
    imagePath: Tshirt
}, {
    'title': 'Dresses',
    imagePath: Dresses
}, {
    'title': 'Joggers',
    imagePath: require('../../assets/img/joggers.jpg')
},{
    'title': 'Kurtis',
    imagePath:require('../../assets/img/kurtis.jpg')
}]

const NewArrivals = () => {
    return (
        <>
            <SectionHeading title={"New Arrivals"} />
            <Carousel
                responsive={responsive}
                autoPlay={false}
                swipeable={true}
                draggable={false}
                showDots={false}
                infinite={false}
                partialVisbile={false}
                itemClass={'react-slider-custom-item'}
                className='px-8'
            >
                {items && items?.map((item, index) => <Card key={item?.title + index} title={item.title} imagePath={item.imagePath} />)}
            </Carousel>
        </>
    )
}

export default NewArrivals;