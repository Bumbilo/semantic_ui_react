import React, {Component} from 'react';
import {
    Button,
    Header,
    Icon,
    Image,
    Modal,
    Segment,
    Grid,
    Dimmer, 
    Loader
} from 'semantic-ui-react';
import check from '../../images/check.png';
import ava from '../../images/avaBig.png';
import '../../CSS/fonts.css'
import './modal.css';

const HeaderTitle = () => (
    <div className='header_title'>
        <img src={check} className="img_header"/>
        <Header as='h2' className="header_title_check"> The records was deleted.</Header>
    </div>
)

const FooterTitle = () => (
    <Segment basic className="footer_message">
       Your records has been delete. 
        <span className="undo_footer">Undo</span> if this was mistake.
    </Segment>
)

const ModalLoader = () => (
  <div className="modal_loader">
        <Loader size='massive'></Loader>
  </div>
)

const GridExampleVerticallyDivided = () => (
    <Grid divided='vertically'>
        <Grid.Row>
            <Grid.Column>
               <ModalLoader />
            </Grid.Column>
        </Grid.Row>
               <FooterTitle/>
    </Grid>
)

const ModalWindowDeleteLoader = () => (
    <Modal trigger={<Button> Show Modal </Button>} closeIcon='close'>
        <Header>
            <HeaderTitle/>
        </Header>
        <Modal.Content className="modal_content">
            <GridExampleVerticallyDivided/>
        </Modal.Content>
    </Modal>
)

export default ModalWindowDeleteLoader;
