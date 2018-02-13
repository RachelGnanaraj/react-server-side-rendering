/**
 * Created by Rach on 10/2/2018.
 */
import React, { Component } from 'react';

export default class Home extends React.Component {

    navigateToHome(){
        this.props.history.push('/');
    }

    render () {
        return (
            <div>
                <h2>Rachel Gnanaraj</h2><h3>Masters Student at NUS</h3>
                <text>A confident and motivated self-starter with a passion for cutting-edge technology.</text>
                <text>Seeking to leverage my technical and professional expertise in web and mobile applications</text>
                <br/><br/>
                <h3><u>rachelraj2011@gmail.com</u></h3>
                <h3><u>+65 8187 8660</u></h3>
                <h4><u style={{color: 'blue'}}><a onClick={()=> this.navigateToHome()}>Go Back</a></u></h4>

            </div>
        );
    }
}
