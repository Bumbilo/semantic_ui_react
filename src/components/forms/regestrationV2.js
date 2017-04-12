import React, {Component} from 'react';
import {
    Grid,
    Header,
    Form,
    Input,
    Button
} from 'semantic-ui-react';
import '../../CSS/fonts.css';
import './forms.css';

const InputName = () => (<Input icon='check' fluid placeholder='Name' className="icon_input_green"/>);
const InputEmail = () => (<Input icon='check' fluid placeholder='Your Email' className="icon_input_green"/>);
const InputCompanyName = () => (<Input icon='check' fluid placeholder='Company name' className="icon_input_green"/>)

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

class FormExampleForm extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        return (
            <div className="form_wrapper regestration">
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header as='h3' textAlign='center'>Hello there!</Header>
                            <p className="subtitle_regestration center">Please provide the following details so we can set your <br/>
                                company up in Solworks.
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={16}>
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
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

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
