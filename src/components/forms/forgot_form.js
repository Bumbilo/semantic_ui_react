import React from 'react'
import {Button, Form, Segment} from 'semantic-ui-react'
import {ValidMessage, ButtonLogin, ButtonLoader, ValidMessageTrue} from './login_form';
import logo from '../../images/lobo_bottom.png';
import './forms.css';

// Form
class FormForgot extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            btnText: true,
            empty: false,
            full: false,
            inputContent: ''
        };
        this.getChangeBtn = this.getChangeBtn.bind(this);
        this.changeContent = this.changeContent.bind(this);
    }

    changeContent(e) {
        this.setState({inputContent: e.target.value})
    }

    getChangeBtn(e) {
        e.preventDefault();
        let email = this.state.inputContent;
        let self = this;
        if (email.length < 5) {
            this.setState({btnText: self.state.btnText = false});
            setTimeout(() => {
                this.setState({empty: self.state.empty = true});
                this.setState({btnText: self.state.btnText = true});
            }, 1000);
        } else {
            this.setState({btnText: this.state.btnText = true});
            this.setState({empty: this.state.empty = false});
            this.setState({empty: this.state.full = true});
        }
    }

    render() {
        let btn_login = this.state.btnText ? <ButtonLogin text="Reset password" onLoad={this.getChangeBtn}/> :
            <ButtonLoader text="Reset password" onLoad={this.getChangeBtn}/>;
        let InputMessage = this.state.empty ? <ValidMessage text="Invalid email address format."/> : null;
        let InputMessageTue = this.state.full ? <ValidMessageTrue text="Your password has been reset. Pleas check your email" /> : null;

        return (
            <div className="form_wrapper">
                <div className="emptyInput">
                    {InputMessage}
                    {InputMessageTue}
                </div>
                <Form className="form_login">
                    <div className="header_form_forgot">
                        <Segment basic textAlign='center'>
                            <span>Forgot Password ? </span>
                        </Segment>
                    </div>
                    <div className="form_login_content">
                        <input placeholder='Enter email address' onChange={this.changeContent}
                               value={this.inputContent}/>
                        {btn_login}
                        <div className="form_forgot_attention">
                            <span>Spam Filter Note</span>
                            <p>If you don't get an email from us within a few minutes please check you spam filter.
                                The email will be coming from <span>donotreply@so.works</span></p>
                        </div>
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

class LoginForgot extends React.Component {
    render() {
        return (
            <FormForgot />
        );
    }
}

export default LoginForgot