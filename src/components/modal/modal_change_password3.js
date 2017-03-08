import React, {Component} from 'react';
import {
    Button,
    Input,
    Header,
    Modal,
    Grid,
    Image,
} from 'semantic-ui-react';
import time from '../../images/time_request.png';
import '../../CSS/fonts.css';
import './modal.css';
import 'react-dates/lib/css/_datepicker.css';
import avaBig from '../../images/avaBig.png'

const HeaderTitle = () => (
    <div className='header_title'>
        <Image src={avaBig} size="tiny" className="img_header"/>
        <Header as='h2' className="header_title_check">
            Change Password</Header>
    </div>
)

const ChangePasswordInput = () => (
    <Grid.Column >
        <Grid.Row>
            <Grid.Column>
                <div className="change_password_input">
                    <label>Current Password</label> <Input type="password"/>
                </div>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column>
                <div className="change_password_input">
                    <label>New Password</label> <Input type="password"/>
                </div>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column>
                <div className="change_password_input">
                    <label>Confirm Password</label> <Input type="password"/>
                </div>
            </Grid.Column>
        </Grid.Row>
    </Grid.Column>
);

const GridExampleVerticallyDivided = () => (
    <Grid divided='vertically'>
        <Grid.Row>
            <ChangePasswordInput/>
        </Grid.Row>

        <Grid.Row columns={2}>
            <Grid.Column floated='right'>
                <Button basic floated='right' className='btn_basic btn_middle'>Cancel</Button>
            </Grid.Column>
            <Grid.Column floated='left'>
                <Button color='green btn_middle'>Reset password</Button>
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

const ModalChangePasswordSend = () => (
    <Modal trigger={<Button> Show Modal </Button>} closeIcon='close'>
        <Header>
            <HeaderTitle/>
        </Header>
        <Modal.Content className="modal_content_calendar">
            <GridExampleVerticallyDivided/>
        </Modal.Content>
    </Modal>
);

export default ModalChangePasswordSend;
