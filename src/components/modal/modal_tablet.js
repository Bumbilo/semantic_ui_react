import React, {Component} from 'react';
import {
    Button,
    Header,
    Image,
    Modal,
    Grid,
    Segment,
    Flag,
    Dropdown,
    Icon,
    Container,
    Input
} from 'semantic-ui-react';
import report from '../../images/add_tablet.png';
import '../../CSS/fonts.css';
import ava2 from '../../images/ava3.png';
import './modal.css';

const HeaderTitle = () => (
    <div className='header_title tablet'>
        <Image src={report} className="img_header tablet"/>
        <Header as='h2' className="header_title_check">
            Add tablet</Header>
    </div>
);

const ButtonReport = () => (
    <div className="btn_center">
        <Button className='green btn_middle'>Save changes</Button>
    </div>
);

const InvalidMessage = () => (
    <Segment basic className="invalid_message">
    Your pairing code is worning please check again synchronise the tablet
        </Segment>
);


const LargeInput = () => (
   <Grid className="tablet_gird">
      <Grid.Row>
         <Grid.Column width={13}>
            <label className="label_input">Enter pairing code</label>
            <Input type="test" fluid className="input_tablet-large" maxLength="6" />
         </Grid.Column>
         <Grid.Column width={3}>
            <Button basic color='green' icon="check" className="tablet_button"/>
             <Button basic color='red' icon="unlinkify" className="tablet_button"/>
             <Button basic icon="spinner" className="tablet_button grey"/>
         </Grid.Column>
      </Grid.Row>
   </Grid>
);

const GridExampleVerticallyDivided = () => (
    <Grid className="modal_panel_add">
            <Grid.Row>
                <Grid.Column width={16}>
                    <div className="block_center large">
                        <label className="label_input">Tablet name</label>
                        <Input type="test" fluid />
                    </div>
             </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={16}>
                    <div className="block_center large">
                        <LargeInput/>
                     </div>
             </Grid.Column>
            </Grid.Row>
        <Grid.Row >
            <Grid.Column>
                <ButtonReport/>
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

const ModalPanelAddError2 = () => (
    <Modal trigger={< Button > Save changes </Button>} closeIcon='close' size="large">
        <Header>
          <InvalidMessage/>
          <HeaderTitle/>
        </Header>
        <Modal.Content className="modal_content">
            <GridExampleVerticallyDivided/>
        </Modal.Content>
    </Modal>
);

export default ModalPanelAddError2;
