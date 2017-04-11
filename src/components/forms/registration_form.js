
import React from 'react'
import {Button, Form, Segment, Input, Image, Header} from 'semantic-ui-react'
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

const InputName = () => (<Input fluid placeholder='Your Name'/>);
const InputEmail = () => (<Input fluid placeholder='Your Email'/>);
const InputCompanyName = () => (<Input fluid placeholder='Company name'/>)

class FormExampleForm extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        return (
            <div className="form_wrapper regestration">
                <div className="emptyInput"></div>
                <Form className="form_login">
                    <div className="header_form"></div>
                    <div className="form_login_content">
                        <Header as='h4' textAlign='center'>Create Company</Header>
                        <p className="text_form">Please provide the following details so we can set
                        your company up in Solworks.</p>
                        <InputName/>
                        <InputEmail/>
                        <InputCompanyName/>
                        <Button content='Create company'
                        icon='chevron right'
                        labelPosition='left'
                        fluid className="login_btn reg"
                        type='submit'/>
                        <p className="text_form">Already have an account? <a href="#">Sing in Now</a> </p>
                        <p className="text_form">By creating an account you agree to Solworks
                        <a href="#">User Agreement</a> and <a href="#">Privacy Policy.</a></p>
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

let FormRegistration = React.createClass({
    render: () => {
        return (<FormExampleForm/>);
    }
});

export default FormRegistration
