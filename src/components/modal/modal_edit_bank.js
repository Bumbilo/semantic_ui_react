import React, {Component} from 'react';
import {
    Button,
    Header,
    Image,
    Modal,
    Grid,
    Input
} from 'semantic-ui-react';
import report from '../../images/report.png';
import '../../CSS/fonts.css';
import './modal.css';

const HeaderTitle = () => (
    <div className='header_title'>
        <Image src={report} className="img_header"/>
        <Header as='h2' className="header_title_check">
            Edit bank details</Header>
    </div>
);

const ButtonReport = () => (
    <div className="btn_center">
        <Button className='green btn_middle'>Save chages</Button>
    </div>
);

const GridExampleVerticallyDivided = () => (
    <Grid className="modal_panel_add">
        <Grid.Row>
            <div className="block_center large">
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <label className="label_input">Bank name</label>
                            <Input type="test" fluid/>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <label className="label_input">Sort code</label>
                            <Input type="test" fluid/>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <label className="label_input">Account No.</label>
                            <Input type="test" fluid/>
                        </Grid.Column>
                        <Grid.Column width={16}>
                            <label className="label_input">Account name</label>
                            <Input type="test" fluid/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>

        </Grid.Row>
        <Grid.Row >
            <Grid.Column>
                <ButtonReport/>
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

const ModalEdiBank = () => (
    <Modal trigger={< Button > Show Modal </Button>} closeIcon='close'>
        <Header>
            <HeaderTitle/>
        </Header>
        <Modal.Content className="modal_content">
            <GridExampleVerticallyDivided/>
        </Modal.Content>
    </Modal>
);

export default ModalEdiBank;
