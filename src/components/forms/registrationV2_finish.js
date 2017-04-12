import React, {Component} from 'react';
import {
    Grid,
    Header,
    Form,
    Image,
    Container,
    Button
} from 'semantic-ui-react';
import '../../CSS/fonts.css';
import bgFinish from '../../images/bg_finish.png'
import './forms.css';

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
                        <li className="li_green" ></li>
                        <li className="li_green" ></li>
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
                                <Header as='h2' textAlign='center'>Great job:)</Header>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Form className="form_login middle">
                                <div className="form_login_content white">
                                    <Grid stackable columns={2}>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <Image src={bgFinish}/>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={16}>
                                                <p className="subtitle_regestration center">You completed the configuration of
                                                    Solworks, you're now ready to enter your employees and visitor!
                                                </p>
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

class RegestrationFormFinish extends React.Component {
    render() {
        return (<Employees/>);
    }
}
