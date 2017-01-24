import React from 'react'
import {Button, Form, Segment} from 'semantic-ui-react'
import {ValidMessage, ButtonLogin, ButtonLoader} from './login_form';
import logo from '../../images/lobo_bottom.png';
import './forms.css';


// Form
class FormForgot extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            btnText: true,
            empty: false,
            changeContentPasswrod: '',
            changeContentRepeat: ''
        };
        this.getChangeBtn = this.getChangeBtn.bind(this);
        this.changeContentPass = this.changeContentPass.bind(this);
        this.changeContentReap = this.changeContentReap.bind(this);
    }

    changeContentPass(e) {
        this.setState({changeContentPasswrod: e.target.value})
    }
    changeContentReap(e) {
        this.setState({changeContentRepeat: e.target.value})
    }

    getChangeBtn(e) {
        e.preventDefault();
        let password = this.state.changeContentPasswrod;
        let passwordRepeat = this.state.changeContentRepeat;
        let self = this;
        if (password !== passwordRepeat) {
            this.setState({btnText: self.state.btnText = false});
            setTimeout(() => {
                this.setState({empty: self.state.empty = true});
                this.setState({btnText: self.state.btnText = true});
            }, 1000);
        } else {
            this.setState({btnText: this.state.btnText = true});
            this.setState({empty: this.state.empty = false});
        }
    }

    render() {
        let btn_login = this.state.btnText ? <ButtonLogin text="Reset password" onLoad={this.getChangeBtn}/> :
            <ButtonLoader text="Reset password" onLoad={this.getChangeBtn}/>;
        let InputMessage = this.state.empty ? <ValidMessage text="Password incorrect" /> : null;

        return (
            <div className="form_wrapper">
                <div className="emptyInput">
                    {InputMessage}
                </div>
                <Form className="form_login">
                    <div className="header_form_forgot">
                        <Segment basic textAlign='center'>
                            <span>Reset Password</span>
                        </Segment>
                    </div>
                    <div className="form_login_content">
                        <div className="form_forgot_attention">
                            <p>You have requested that your password be reset. <br/> Please enter a new password below.
                            </p>
                            <p>You password must be at least 10 characters and cannot contain common words or your email
                                address.</p>
                        </div>
                        <input placeholder='Enter password' type="password" onChange={this.changeContentPass}
                               value={this.changeContentPasswrod}/>
                        <input placeholder='Repeat password' type="password" onChange={this.changeContentReap}
                               value={this.changeContentRepeat}/>
                        {btn_login}
                    </div>
                </Form>
                <div className="form_login_bottom">
                    <Segment basic textAlign='center'>
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

class LoginReset extends React.Component {
    render() {
        return (
            <FormForgot />
        );
    }
}

export default LoginReset