import React from 'react'
import {Button, Form, Segment} from 'semantic-ui-react'
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
        return <Button fluid className="login_btn"
                       type='submit'
                       onClick={this.props.onLoad}> {this.props.text} </Button>
    }
}
// Button Loader
export class ButtonLoader extends React.Component {
    render() {
        return <Button fluid className="login_btn load" type='submit' onClick={this.props.onLoad} > <img src={load} alt=""/> </Button>
    }
}

class FormExampleForm extends React.Component {
    constructor(props, context){
        super(props,context);
        this.state = {
            btnText: true,
            empty: false,
            changeContentEmail: '',
            changeContentPassword: ''
        };
        this.getChangeBtn = this.getChangeBtn.bind(this);
        this.changeContentEmail = this.changeContentEmail.bind(this);
        this.changeContentPassword = this.changeContentPassword.bind(this);
    }
    changeContentPassword(e) {
        this.setState({changeContentPassword: e.target.value})
    }
    changeContentEmail(e) {
        this.setState({changeContentEmail: e.target.value})
    }

    getChangeBtn(e) {
        e.preventDefault();
        let email = this.state.changeContentEmail;
        let password = this.state.changeContentPassword;
        let self = this;
        if (email.length < 5 && password < 5) {
            this.setState({btnText: self.state.btnText = false});
            setTimeout(() => {
                this.setState({empty: self.state.empty = true});
                this.setState({btnText: self.state.btnText = true});
            }, 1000);
        } else {
            this.setState({btnText: self.state.btnText = true});
            this.setState({empty: self.state.empty = false});
        }
    }

    render() {
        let btn_login = this.state.btnText ? <ButtonLogin text="Login" onLoad={this.getChangeBtn} /> : <ButtonLoader text="Login" onLoad={this.getChangeBtn} /> ;
        let InputMessage = this.state.empty ? <ValidMessage text="Please include both a username and a password" /> : null;
        return (
            <div className="form_wrapper">
                    {InputMessage}
                <Form className="form_login">
                    <div className="header_form"></div>
                    <div className="form_login_content">
                        <input placeholder='Email Address' onChange={this.changeContentEmail} value={this.inputContent} />
                        <input placeholder='Password' type="password" onChange={this.changeContentPassword} value={this.inputContent}  />
                        {btn_login}
                        <div className="form_login_link">
                            <Button type='submit' compact floated='right'> Forgot Password </Button>
                            <Button type='submit' compact floated='left'> Register now </Button>
                        </div>
                    </div>
                </Form>
                <div className="form_login_bottom">
                    <Segment basic  textAlign='center'>
                        <img src={logo} alt=""/>
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
        return (
            <FormExampleForm />
        );
    }
});

export default Login