/**
 * Created by Rach on 10/2/2018.
 */
import React, {Component} from 'react';

export default class Home extends React.Component {

    navigateToCarousel() {
        this.props.history.push('/carousel');
    }

    navigateToContact() {
        this.props.history.push('/contact');
    }

    render() {
        return (
            <div>
                <h2>ShopBack - Tech Test - Rachel</h2>
                <h3>Component Design - Carousel React component </h3>
                <h4>PART I - <u style={{color: 'blue'}}><a onClick={() => this.navigateToCarousel()}>Click here for
                    Carousel Page</a></u></h4>
                <ul>
                    <li>Gesture control on both desktop and mobile. <b>Done! </b></li>
                    <li>Continuously swipeable from the last element to the first element.<b>Done! </b></li>
                    <li>Small distance swipe (misopertaion) will not trigger changing to the next element.<b>Done! </b>
                    </li>
                </ul>
                <h4>PART II - React Server Side Rendering</h4>
                <ol>
                    <li>It should be a mono repo contains both the server & client side code.<b>Done! </b></li>
                    <li>Routes should be controlled by the client side.<b>Done! </b></li>
                    <li>All pages based on the router should be server side rendering.<b>Done! </b></li>
                    <li>Basic security improvements on the server side are welcomed.<b>Done! </b></li>
                </ol>
                <h4>All Pages are rendered by server and also controlled from the client :)</h4>
                <h4><u style={{color: 'blue'}}><a onClick={() => this.navigateToContact()}>Click here for Contact
                    Page</a></u></h4>
            </div>
        );
    }
}