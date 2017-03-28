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
import report from '../../images/report.png';
import '../../CSS/fonts.css';
import ava2 from '../../images/ava3.png';
import './modal.css';

const HeaderTitle = () => (
    <div className='header_title'>
        <Image src={report} className="img_header"/>
        <Header as='h2' className="header_title_check">
            Add location</Header>
    </div>
);

const ButtonReport = () => (
    <div className="btn_center">
        <Button className='green btn_middle'>Add location</Button>
    </div>
);

const GridExampleVerticallyDivided = () => (
    <Grid className="modal_panel_add">
            <Grid.Row>
                <Grid.Column width={16}>
                    <div className="block_center large">
                        <label className="label_input">Location name</label>
                        <Input type="test" fluid value="Old Dalby"/>
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

const ModalPanelLocation = () => (
    <Modal trigger={< Button > Show Modal </Button>} closeIcon='close'>
        <Header>
          <HeaderTitle/>
        </Header>
        <Modal.Content className="modal_content">
            <GridExampleVerticallyDivided/>
        </Modal.Content>
    </Modal>
);

export default ModalPanelLocation;
