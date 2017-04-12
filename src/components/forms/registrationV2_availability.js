import React, {Component} from 'react';
import {
    Grid,
    Header,
    Form,
    Input,
    Dropdown,
    Image,
    Container,
    Button
} from 'semantic-ui-react';
import '../../CSS/fonts.css';
import bgConf from '../../images/bg_conf.png'
import './forms.css';

const options = [
    {key: 'march', text: '01 Mar 2017 - 31 Mar 2017', value: '01 Mar 2017 - 31 Mar 2017'},
    {key: 'april', text: '01 April 2017 - 31 April 2017', value: '01 April 2017 - 31 April 2017'},
    {key: 'May', text: '01 May 2017 - 31 May 2017', value: '01 May 2017 - 31 May 2017'},
    {key: 'june', text: '01 June 2017 - 31 June 2017', value: '01 June 2017 - 31 June 2017'}
];

const InputName = () => (<Input fluid value="28"/>);
const DropdownPremission = () => (
    <Dropdown placeholder="01 Mar 2017 - 31 Mar 2017" fluid selection options={options} />
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
                                <Header as='h2' textAlign='center'>Configure availability</Header>
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
                                            <Grid.Column width={7}>
                                                <span className="label_input">
                                                    When holiday year start
                                                </span>
                                                <DropdownPremission/>
                                                <span className="label_input">
                                                    Holiday entitlement
                                                </span>
                                                <InputName/>
                                            </Grid.Column>
                                            <Grid.Column width={1}></Grid.Column>
                                            <Grid.Column width={8}>
                                            <Image src={bgConf}/>
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

class RegestrationFormAvailability extends React.Component {
    render() {
        return (<Employees/>);
    }
}
