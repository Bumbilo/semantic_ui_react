import React, {Component} from 'react';
import {
    Grid,
    Header,
    Form,
    Input,
    Icon,
    Container,
    Popup,
    Button
} from 'semantic-ui-react';
import '../../CSS/fonts.css';
import './forms.css';

const InputName = () => (<Input fluid value="Madeline Rd, Beaumont Leys, Leicester LE4 WX"/>);

const TopMenu = () => (
    <div className="user_agreement_title">
        <Grid>
            <Grid.Row>
                <Grid.Column mobile={5} tablet={6} computer={6}>
                </Grid.Column>
                <Grid.Column mobile={5} tablet={4} computer={4}>
                    <ul className="slide">
                        <li className="li_green"></li>
                        <li className="li_active"></li>
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


const InfoPopup = () => (
    <Popup
        trigger={<Button circular icon='info' className="general_setting_info"/>}
        position='top right'
        size='tiny'
        className="setting_popup_users"
    >
        <span className="popup_info_company">We suggest uploading a JPEG or PNG gile at 400 x 400px. You will get a better result
        with a logo on a transparent background.</span>
    </Popup>
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
                                <Header as='h3' textAlign='center'>Hello there!</Header>
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
                                    <Grid stackable columns={2}>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <span className="label_input">Enter your office location</span>
                                                <InputName/>
                                                <span className="label_input">Enter your office location</span>
                                                <div className="add_logo added">
                                                </div>
                                            </Grid.Column>
                                            <Grid.Column>
                                                <div className="company_map">
                                                    <div className="company_map_logo">XCompany</div>
                                                    <iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2419.2139854400634!2d-1.1556886840365619!3d52.674173532544266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487760412ed28d1f%3A0xf76f0f392416dae1!2sBradgate+Bakery!5e0!3m2!1sru!2sua!4v1491948663534"
                                                        className="general_map"></iframe>
                                                </div>
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

class RegestrationFormLocation2 extends React.Component {
    render() {
        return (<Employees/>);
    }
}
