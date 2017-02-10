import React, {Component} from 'react';
import {
    Button,
    Header,
    Icon,
    Image,
    Modal,
    Grid
} from 'semantic-ui-react';
import varning from '../../images/warning2.png';
import ava from '../../images/avaBig.png';
import '../../CSS/fonts.css';
import './modal.css';

const HeaderTitle = () => (
    <div className='header_title'>
        <img src={varning} className="img_header"/>
        <Header as='h2' className="header_title_red">
            Delete(6) Records</Header>
    </div>
);

const ProfileDays = () => (
    <div className="count_days floatRight">
        <div className="date_day">08</div>
        <div className="full_day">days</div>
    </div>
);

const ProfileOption = () => (
    <div className="option_profile floatRight">
        <Icon name='ellipsis vertical'/>
    </div>
);

const IconStatus = () => (
    <div className='icon_status'>
        <Icon name='plane'/>
    </div>
);

const ImageAvatar = () => (
    <div className='profile_avatar'>
        <Image src={ava} avatar size='mini'/>
        <IconStatus/>
        <span className="profile_info">
            <span className="profile_name">James Smith</span>
            <br/>
            <span className="profile_position">Mechanical Designer</span>
        </span>
    </div>
);

const ProfileBlock = () => (
    <div className="profile">
        <ImageAvatar/>
        <ProfileOption/>
        <ProfileDays/>
    </div>
);

const GridExampleVerticallyDivided = () => (
    <Grid divided='vertically'>
        <Grid.Row columns={2}>
            <Grid.Column floated='right'>
                <ProfileBlock/>
                <ProfileBlock/>
                <ProfileBlock/>
            </Grid.Column>
            <Grid.Column floated='left'>
                <ProfileBlock/>
                <ProfileBlock/>
                <ProfileBlock/>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
            <Grid.Column floated='right'>
                <Button basic floated='right' className="button_delte">Cancel, Keep records</Button>
            </Grid.Column>
            <Grid.Column floated='left'>
                <Button color='red' className="button_delte">Yes, Delete records!</Button>
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

const ModalWindowDelete = () => (
    <Modal trigger={<Button> Show Modal </Button>} closeIcon='close'>
        <Header>
            <HeaderTitle/>
        </Header>
        <Modal.Content className="modal_content">
            <GridExampleVerticallyDivided/>
        </Modal.Content>
    </Modal>
);

export default ModalWindowDelete;
