import React from 'react';
import { AuthUserContext, withAuthorization } from '../Session';
import PasswordChangeForm from '../PasswordChange';
import PasswordForgetForm from '../PasswordForget';

const AccountPage = () => (
    <AuthUserContext.Consumer>{
        authUser => (
            <div>
                <h1>Hello from Account</h1>
                <PasswordForgetForm></PasswordForgetForm>
                <PasswordChangeForm></PasswordChangeForm>
            </div>
        )
    }        
    </AuthUserContext.Consumer>
);
const condition = authUser => !!authUser;
export default withAuthorization(condition)(AccountPage);