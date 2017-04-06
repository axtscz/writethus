/**
 * Created by Alex Cruz on 4/6/2017.
 */
import React, {Component, PropTypes} from 'react';

export default class Location extends React.Component {
    render() {
        return (
            <div>
                <h4>{this.props.location}</h4>
            </div>
        );
    }
}
