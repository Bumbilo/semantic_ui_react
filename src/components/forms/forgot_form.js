import React from 'react';
import {Button, Form, Segment, Image, Input} from 'semantic-ui-react';
import logo from '../../images/lobo_bottom.png';
import load from '../../images/loadinfo.net3.gif';
import './forms.css';


 class ValidMessage extends React.Component {
    render() {
        return (
            <div className="emptyInput">
                <Segment basic textAlign='center'>{this.props.text}</Segment>
            </div>
        );
    }
}

 class ValidMessageTrue extends React.Component {
    render() {
        return (
            <div className="fullInput">
                <Segment basic textAlign='center'>{this.props.text}</Segment>
            </div>
        );
    }
}

 class ButtonLoader extends React.Component {
    render() {
        return (
            <Button fluid className="login_btn load" type='submit'><Image src={load}/>
            </Button>
        )
    }
}

 class ButtonLogin extends React.Component {
    render() {
        return (
            <Button fluid className="login_btn" type='submit'>
                {this.props.text}
            </Button>
        )
    }
}

const InputEmail = () => (
  <Input fluid placeholder='Enter email address' />
)

// Form
class FormForgot extends React.Component {
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
                            <span>Forgot Password ?
                            </span>
                        </Segment>
                    </div>
                    <div className="form_login_content">
                        <InputEmail />
                        <ButtonLogin text="Reset password"/>
                        <ButtonLoader/>
                        <div className="form_forgot_attention">
                            <span>Spam Filter Note</span>
                            <p>If you don't get an email from us within a few minutes please check you spam filter. The email will be coming from
                                <span>donotreply@so.works</span>
                            </p>
                        </div>
                    </div>
                </Form>
                <div className="form_login_bottom">
                    <Segment basic textAlign='center'>
                        <Image src={logo} alt=""/>
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

class LoginForgot extends React.Component {
    render() {
        return (<FormForgot/>);
    }
}

export default LoginForgot;
