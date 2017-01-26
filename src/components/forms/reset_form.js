import React from 'react'
import {Button, Form, Segment, Image, Input} from 'semantic-ui-react'
import logo from '../../images/lobo_bottom.png';
import load from '../../images/loadinfo.net3.gif';
import './forms.css';

// Button Loader
class ButtonLoader extends React.Component {
    render() {
        return (
            <Button fluid className="login_btn load" type='submit'>
                <Image src={load}/>
            </Button>
        )
    }
}

// Default button login
class ButtonLogin extends React.Component {
    render() {
        return (
            <Button fluid className="login_btn" type='submit'>
                {this.props.text}
            </Button>
        )
    }
}

// Messages
class ValidMessageTrue extends React.Component {
    render() {
        return (
            <div className="fullInput">
                <Segment basic textAlign='center'>{this.props.text}</Segment>
            </div>
        );
    }
}

// Attention Messages Error
class ValidMessage extends React.Component {
    render() {
        return (
            <div className="emptyInput">
                <Segment basic textAlign='center'>{this.props.text}</Segment>
            </div>
        );
    }
}

const InputPassword = () => (
   <Input fluid placeholder='Enter password' type="password"/>
);
const InputRepeat = () => (
   <Input fluid placeholder='Repeat password' type="password"/>
);

// Form
class FormReset extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        return (
            <div className="form_wrapper">
                <div className="emptyInput">
                    <ValidMessageTrue text="Your password has been reset. Pleas check your email"/>
                    <ValidMessage text="Invalid email address format."/>
                </div>
                <Form className="form_login">
                    <div className="header_form_forgot">
                        <Segment basic textAlign='center'>
                            <span>Reset Password</span>
                        </Segment>
                    </div>
                    <div className="form_login_content">
                        <div className="form_forgot_attention">
                            <p>You have requested that your password be reset.
                                <br/>
                                Please enter a new password below.
                            </p>
                            <p>You password must be at least 10 characters and cannot contain common words or your email address.</p>
                        </div>
                        <InputPassword/>
                        <InputRepeat/>
                        <ButtonLogin text="Reset password"/>
                        <ButtonLoader/>
                    </div>
                </Form>
                <div className="form_login_bottom">
                    <Segment basic textAlign='center'>
                        <Image src={logo}/>
                        <span className="form_bottom_text">
                            Having trouble?
                            <a className="help_link">We can help!</a>
                        </span>
                    </Segment>
                </div>
            </div>
        );
    }
}

class LoginReset extends React.Component {
    render() {
        return (<FormReset/>);
    }
}

export default LoginReset
