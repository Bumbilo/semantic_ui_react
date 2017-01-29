import React, {Component} from 'react';
import {
    Button,
    Header,
    Icon,
    Image,
    Modal,
    Segment,
    Grid
} from 'semantic-ui-react';
import varning from '../../images/slice-1.png';
import ava from '../../images/avaBig.png';
import './modal.css';

const InvalidMessage = () => (
    <Segment basic className="invalid_message">
        Invalid email address format.
    </Segment>
)
const HeaderTitle = () => (
    <div className='header_title'>
        <img src={varning} className="img_header"/>
        <Header as='h3' className="header_title">Update record infromation!</Header>
    </div>
)

const ProfileDays = () => (
    <div className="count_days floatRight">
        <div className="date_day">8.5</div>
        <div className="full_day">days</div>
    </div>
)

const ProfileOption = () => (
    <div className="count_days floatRight"></div>
)

const ImageAvatar = () => (
    <div className='profile_avatar'>
        <Image src={ava} avatar size='mini'/>
        <span className="profile_info">
            <span className="profile_name">James Smith</span>
            <br/>
            <span className="profile_position">Mechanical Designer</span>
        </span>
    </div>
)

const ProfileBlock = () => (
    <div className="profile">
        <ImageAvatar/>
        <ProfileDays/>
        <ProfileOption/>
    </div>
)

const GridExampleVerticallyDivided = () => (
    <Grid divided='vertically'>
        <Grid.Row columns={2}>
            <Grid.Column floated='right'>
                <ProfileBlock/>
            </Grid.Column>
            <Grid.Column floated='left'></Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
            <Grid.Column floated='right'>
                <Button basic floated='right'>Cancel</Button>
            </Grid.Column>
            <Grid.Column floated='left'>
                <Button color='green'>Update</Button>
            </Grid.Column>
        </Grid.Row>
    </Grid>
)

const ModalWindowDelete = () => (
    <Modal trigger={< Button > Show Modal < /Button>} closeIcon='close'>
        <Header>
            <InvalidMessage/>
            <HeaderTitle/>
        </Header>
        <Modal.Content className="modal_content">
            <GridExampleVerticallyDivided/>
        </Modal.Content>
    </Modal>
)

export default ModalWindowDelete;
