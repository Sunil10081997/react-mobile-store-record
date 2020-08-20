import React, { Component } from 'react';

export default class Default extends Component {
	render() {
        console.log(this.props)
		return (
			<div className="container">
                <div className="row">
                    <div className="clo-10 mx-auto text-center text-tiltle text-uppercase pt-5">
                        <h1 className="display-3">404</h1>
                        <h1>error</h1>
                        <h2>the page not found </h2>
                        <h3> the requested URL < span className="text-danger">
                            {this.props.location.pathname} 
                        </span>{" "}
                        was not found
                        </h3>
                    </div>
                </div>
            </div>
		);
	}
}
