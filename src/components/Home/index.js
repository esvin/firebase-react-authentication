import { auth } from 'firebase';
import React from 'react';
import { withAuthorization } from '../Session';

const HomePage = () => (
    <div>
        <h1>Hello from Home Page my bro</h1>
        <p>This page is only reached but users that have already signIn</p>
    </div>
);
const condition = authUser => !!authUser;
export default withAuthorization(condition)(HomePage);