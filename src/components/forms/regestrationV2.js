import React, {Component} from 'react';
import {
    Grid,
    Image,
    Header,
    Form,
    Input,
    Button
} from 'semantic-ui-react';
import '../../CSS/fonts.css';
import './forms.css';
import logo from '../../images/logo_form.png';


const InputName = () => (<Input icon='check' fluid placeholder='Name' className="icon_input_green" />);
const InputEmail = () => (<Input icon='check' fluid placeholder='Your Email' className="icon_input_green"/>);
const InputCompanyName = () => (<Input icon='check' fluid placeholder='Company name' className="icon_input_green"/>)

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
                    <div className="form_login_content white">
                        <InputName/>
                        <InputEmail/>
                        <InputCompanyName/>
                        <Button content='Countinue'
                                icon='chevron right'
                                labelPosition='left'
                                className="login_btn reg2"
                                type='submit'/>
                    </div>
                </Form>
            </div>
        );
    }
}
const TopMenu = () => (
    <div className="user_agreement_title">
        <Grid>
            <Grid.Row>
                <Grid.Column mobile={5} tablet={6} computer={6}>
                </Grid.Column>
                <Grid.Column mobile={5} tablet={4} computer={4}>
                    <ul className="slide">
                        <li className="li_active"></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </Grid.Column>
                <Grid.Column mobile={6} tablet={6} computer={6}>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>
);

const GridExampleColumns = () => (
    <div>
        <TopMenu/>
        <FormExampleForm/>
    </div>
)

export default class Employees extends Component {
    state = {};
    handleItemClick = (e, {name}) => this.setState({activeItem: name});
    render() {
        const {activeItem} = this.state;
        return (
            <div className="wrapper_user_agreement">
                <GridExampleColumns/>

            </div>
        )
    }
}

class RegestrationForm2 extends React.Component {
    render() {
        return (<Employees/>);
    }
}
