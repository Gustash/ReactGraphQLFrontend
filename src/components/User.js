import React, { Component } from 'react';

export default class User extends Component {
    render() {
        const { title, first, last } = this.props.name;

        return (
            <p>{title}. {first} {last}</p>
        );
    }
}