import React, {Component} from 'react';
import {
    Grid,
    Header,
    Form,
    Input,
    Dropdown,
    Icon,
    Container,
    Button
} from 'semantic-ui-react';
import '../../CSS/fonts.css';
import './forms.css';

const options = [
    { key: 'lorem', text: 'Lorem', value: 'Lorem' },
    { key: 'lorem1', text: 'Lorem1', value: 'Lorem1' },
    { key: 'lorem2', text: 'Lorem2', value: 'Lorem2' },
    { key: 'lorem3', text: 'Lorem3', value: 'Lorem3' },
    { key: 'lorem4', text: 'Lorem4', value: 'Lorem4' },

];

const InputName = () => (<Input fluid placeholder="Colleague's Full name"/>);
const InputEmail = () => (<Input fluid placeholder="Colleague's email address"/>);
const DropdownPremission = () => (
    <Dropdown placeholder="Colleague's Permission" fluid selection options={options} />
);

const TopMenu = () => (
    <div className="user_agreement_title">
        <Grid>
            <Grid.Row>
                <Grid.Column mobile={5} tablet={6} computer={6}>
                </Grid.Column>
                <Grid.Column mobile={5} tablet={4} computer={4}>
                    <ul className="slide">
                        <li className="li_green"></li>
                        <li className="li_green"></li>
                        <li className="li_active" ></li>
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
            <Container>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <div className="block_subtitle">
                                <Header as='h2' textAlign='center'>Invite people to mange XCompany account with you</Header>
                                <p className="subtitle_regestration center">Please provide the following details so we
                                    can set your <br/>
                                    company up in Solworks.
                                </p>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Form className="form_login company">
                                <div className="form_login_content white">
                                    <Grid stackable columns={3}>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <InputName/>
                                            </Grid.Column>
                                            <Grid.Column>
                                                <InputEmail/>
                                            </Grid.Column>
                                            <Grid.Column>
                                                <DropdownPremission/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <InputName/>
                                            </Grid.Column>
                                            <Grid.Column>
                                                <InputEmail/>
                                            </Grid.Column>
                                            <Grid.Column>
                                                <DropdownPremission/>
                                                <Button circular icon='plus' className="general_setting_info position"/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <InputName/>
                                            </Grid.Column>
                                            <Grid.Column>
                                                <InputEmail/>
                                            </Grid.Column>
                                            <Grid.Column>
                                                <DropdownPremission/>
                                                <Button circular icon='minus' className="general_setting_info position"/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <Button content='Countinue'
                                                        icon='chevron right'
                                                        labelPosition='left'
                                                        className="login_btn cont"
                                                        type='submit'/>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </div>
                            </Form>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
}

const GridExampleColumns = () => (
    <div>
        <TopMenu/>
        <FormExampleForm/>
    </div>
);

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

class RegestrationFormInvite extends React.Component {
    render() {
        return (<Employees/>);
    }
}
