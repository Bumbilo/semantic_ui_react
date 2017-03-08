import React, {Component} from 'react';
import {
    Button,
    Image,
    Modal,
    Header,
    List,
    Grid
} from 'semantic-ui-react';
import ImgConnect from '../../images/check_green.png';
import '../../CSS/fonts.css';
import './modal.css';

const HeaderTitle = () => (
    <div className='header_title'>
        <Image src={ImgConnect} className="img_header"/>
        <Header as='h2' className="header_title_check">
            Password Reset</Header>
    </div>
);

const HeaderList = () => (
    <div>
        <Header as='h4'>Password has been reset.</Header>
    </div>
);

const ListOption = () => (
    <List as='ul'>
        <List.Item as='li'>Email with reset link is send to the user</List.Item>
        <List.Item as='li'>Lorem ipsum dolor sit amet text of the</List.Item>
    </List>
);

const GridExampleVerticallyDivided = () => (
    <Grid divided='vertically'>
        <Grid.Row>
            <Grid.Column>
                <HeaderList/>
                <ListOption/>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column>
                <Button basic className="button_center">Cancel</Button>
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

const ModalChnagePassword = () => (
    <Modal trigger={<Button> Show Modal </Button>} closeIcon='close'>
        <Header>
            <HeaderTitle/>
        </Header>
        <Modal.Content className="modal_content">
            <GridExampleVerticallyDivided/>
        </Modal.Content>
    </Modal>
);

export default ModalChnagePassword;
