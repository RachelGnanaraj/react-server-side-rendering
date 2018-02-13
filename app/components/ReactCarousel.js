/**
 * Created by Rach on 10/2/2018.
 */
import React, {Component} from 'react';
import Slider from 'react-slick';

export default class ReactCarousel extends React.Component {

    navigateToHome() {
        this.props.history.push('/');
    }

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            touchThreshold: 3,
            dots: false
        };
        return (
            <div>
                <h3> Carousel React component </h3>
                <Slider {...settings}>
                    <div>
                        <div style={{backgroundColor: 'red', height: '300px', width: '100%'}}/>
                    </div>
                    <div>
                        <div style={{backgroundColor: 'blue', height: '300px', width: '100%'}}/>
                    </div>
                    <div>
                        <div style={{backgroundColor: 'green', height: '300px', width: '100%'}}/>
                    </div>
                </Slider>
                <h4><u style={{color: 'blue'}}><a onClick={() => this.navigateToHome()}>Go Back</a></u></h4>
            </div>
        );
    }
}