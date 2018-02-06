import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import User from './User';

const query = gql`
query GetUsers($results: Int!, $seed: String!) { 
    users(results: $results, seed: $seed) { 
        name { 
            title 
            first 
            last 
        } 
    } 
}
`

class UserList extends Component {
    render() {
        console.log(this.props.data);
        const { error, loading, users } = this.props.data;

        if (loading) {
            return <h2>Loading...</h2>
        }

        if (error !== null) {
            return <h1 style={{color: "red"}}>There was an error with the query.</h1>
        }

        return (
            <div className="user-list-container">
                {users.map(
                    ({ name }, i) => <User name={name} />
                )}
            </div>
        );
    }
}

const options = {
    options: { 
        variables: { 
            results: 10,
            seed: "foobar"
        } 
    },
}

export default graphql(query, options)(UserList);