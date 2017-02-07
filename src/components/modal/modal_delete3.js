import React, {Component} from 'react';
import {
    Button,
    Header,
    Icon,
    Image,
    Modal,
    Grid,
    Checkbox
} from 'semantic-ui-react';
import varning from '../../images/warning2.png';
import ava from '../../images/avaBig.png';
import '../../CSS/fonts.css';
import './modal.css';

const HeaderTitle = () => (
    <div className='header_title'>
        <Image src={varning} className="img_header"/>
        <Header as='h2' className="header_title_red">
            Delete(2) Records</Header>
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

const CheckboxModalDelete = () => (
    <div className="checkbox_modal_delete">
        <span className='title_chechbox'>Warning: this cannot be undone.</span>
        <Checkbox label='Lorem Ipsum is simply dummy text of the'/>
        <Checkbox label='Lorem Ipsum is simply dummy text of the'/>
        <Checkbox label='Lorem Ipsum is simply dummy text of the'/>
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
        <Icon link name='remove circle' />
    </div>
);

const GridExampleVerticallyDivided = () => (
    <Grid divided='vertically'>
        <Grid.Row columns={2}>
            <Grid.Column floated='right'>   
                <ProfileBlock/>
                <CheckboxModalDelete/>
            </Grid.Column>
            <Grid.Column floated='left'>
                <ProfileBlock/>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
            <Grid.Column floated='right'>
                <Button basic floated='right'>Cancel, Keep records</Button>
            </Grid.Column>
            <Grid.Column floated='left'>
                <Button color='red'>Yes, Delete records!</Button>
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

const ModalWindowDeleteCheck2 = () => (
    <Modal trigger={<Button> Show Modal </Button>} closeIcon='close'>
        <Header>
            <HeaderTitle/>
        </Header>
        <Modal.Content className="modal_content">
            <GridExampleVerticallyDivided/>
        </Modal.Content>
    </Modal>
);

export default ModalWindowDeleteCheck2;
