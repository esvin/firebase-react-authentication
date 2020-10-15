import React, { Component } from 'react';
import { withFirebase } from '../Firebase';

const INITIAL_STATE = {
    passwordOne: '',
    passwordTwo: '',
    error: null
};

class PasswordChangeForm extends Component{
    constructor(props){
        super(props);
        this.state = {...INITIAL_STATE};
    }

    onSubmit = event => {
        const { passwordOne } = this.state;
        this.props.firebase.doPasswordUpdate(passwordOne)
            .then(() => {
                this.setState({...INITIAL_STATE});
            })
            .cath((error) => {
                this.setState({error});
            });
        event.preventDefault();
    };

    onChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    render(){
        const {passwordOne, passwordTwo} = this.state;
        const isInvalid = 
            passwordOne === '' 
            || passwordTwo === '' 
            || passwordOne !== passwordTwo;

        return(
            <form onSubmit={this.onSubmit}>
                <input 
                    name="passwordOne" 
                    value={passwordOne} 
                    onChange={this.onChange}
                    type="password"
                    placeholder="Write new password"></input>
                <input 
                    name="passwordTwo" 
                    value={passwordTwo} 
                    onChange={this.onChange}
                    type="password"
                    placeholder="Write same password again!"></input>
                <button type="submit" disabled={isInvalid}>Update Password</button>
            </form>
        );
    }
}

export default withFirebase(PasswordChangeForm);
