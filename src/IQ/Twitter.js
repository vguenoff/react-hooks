import React, { Component } from 'react';
import { string } from 'prop-types';

import fetchUser from 'twitter';
// fetchUser take in a username returns a promise
// which will resolve with that username's data.

// If you created a React element like Twitter below, what would the component definition of Twitter look like?

{
    /* <Twitter username="tylermcginnis">
    {user => (user === null ? <Loading /> : <Badge info={user} />)}
</Twitter>; */
}

class Twitter extends Component {
    state = {
        user: null,
    };

    static propTypes = {
        username: string.isRequired,
    };

    // finish this
    componentDidMount() {
        fetchUser(this.props.userName).then(user => this.setState({ user }));
    }

    render() {
        return this.props.children(this.state.user);
    }
}
