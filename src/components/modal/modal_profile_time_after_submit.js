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
            You comment has been send</Header>
    </div>
);

const HeaderList = () => (
    <div>
        <Header as='h4'>Please check this option</Header>
    </div>
);

const ListOption = () => (
    <List as='ul'>
        <List.Item as='li'>Lorem ipsum dolor sit amet text of the</List.Item>
        <List.Item as='li'>Lorem ipsum dolor sit amet text of the</List.Item>
    </List>
);

const GridExampleVerticallyDivided = () => (
    <Grid divided='vertically'>
        <Grid.Row>
            <Grid.Column>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, dolores vitae
                    pariatur itaque ipsum ratione quibusdam esse sint explicabo dicta ad quis,
                    voluptatum aperiam nemo cupiditate quaerat dignissimos ab doloremque! Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit. Eius quo ad molestiae quasi
                    ratione quibusdam deleniti, nemo, cupiditate? Quo nesciunt et at consequatur
                    adipisci perferendis mollitia dicta itaque hic fuga.
                </p>
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

const ModalWindowAfterSubmit = () => (
    <Modal trigger={<Button> Show Modal </Button>} closeIcon='close'>
        <Header>
            <HeaderTitle/>
        </Header>
        <Modal.Content className="modal_content">
            <GridExampleVerticallyDivided/>
        </Modal.Content>
    </Modal>
);

export default ModalWindowAfterSubmit;