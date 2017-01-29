import React from 'react'
import {Button, Form, Segment, Input, Image} from 'semantic-ui-react'
import logo from '../../images/lobo_bottom.png';
import load from '../../images/loadinfo.net3.gif';
import './forms.css';

// Attention Messages Error
export class ValidMessage extends React.Component {
    render() {
        return (
            <div className="emptyInput">
                <Segment basic textAlign='center'>{this.props.text}</Segment>
            </div>
        );
    }
}

export class ValidMessageTrue extends React.Component {
    render() {
        return (
            <div className="fullInput">
                <Segment basic textAlign='center'>{this.props.text}</Segment>
            </div>
        );
    }
}

// Default button login
export class ButtonLogin extends React.Component {
    render() {
        return (
            <Button fluid className="login_btn" type='submit'>
                {this.props.text}
            </Button>
        )
    }
}

// Button Loader
export class ButtonLoader extends React.Component {
    render() {
        return (
            <Button fluid className="login_btn load" type='submit'>
                <Image src={load}/>
            </Button>
        )
    }
}

const InputEmail = () => (<Input fluid placeholder='Enter email address'/>)
const InputPassword = () => (<Input fluid placeholder='Enter password' type="password"/>)

class FormExampleForm extends React.Component {
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
                    <div className="header_form"></div>
                    <div className="form_login_content">
                        <InputEmail/>
                        <InputPassword/>
                        <ButtonLogin text="Login"/>
                        <ButtonLoader/>
                        <div className="form_login_link">
                            <Button type='submit' compact floated='right'>
                                Forgot Password
                            </Button>
                            <Button type='submit' compact floated='left'>
                                Register now
                            </Button>
                        </div>
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

let Login = React.createClass({
    render: () => {
        return (<FormExampleForm/>);
    }
});

export default Login
