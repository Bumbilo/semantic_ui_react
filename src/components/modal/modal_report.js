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
            Calendar report</Header>
    </div>
);

const ButtonExampleGroupBasic = () => (
    <div className="btn_group_calendar">
        <Button.Group basic>
            <Button>Week</Button>
            <Button>Month</Button>
            <Button>Year</Button>
            <Button>All Time</Button>
        </Button.Group>
    </div>
)

const DateInputs = () => (
    <div className="input_group_calendar">
        <Input size='large' placeholder='Date' value="10 February 2016"/>
        <div className="separ">-</div>
        <Input size='large' placeholder='Date' value="10 February 2017"/>
    </div>
)

const DateInputs2 = () => (
    <div className="input_group_calendar">
        <label>What position(s) does this person work ?</label>
        <Input size='large' fluid icon='plus' placeholder='Holiday days, Parnting, Sick Leave .. etc.'/>
    </div>
)

const ButtonReport = () => (
    <div className="btn_center">
        <Button color='green btn_middle'>Get Report</Button>
    </div>
)

const GridExampleVerticallyDivided = () => (
    <Grid divided='vertically'>
        <Grid.Row>
            <Grid.Column>
                <ButtonExampleGroupBasic/>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column>
                <DateInputs/>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column>
                <DateInputs2/>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row >
            <Grid.Column>
                <ButtonReport/>
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

const ModalReport = () => (
    <Modal trigger={<Button> Show Modal </Button>} closeIcon='close'>
        <Header>
            <HeaderTitle/>
        </Header>
        <Modal.Content className="modal_content">
            <GridExampleVerticallyDivided/>
        </Modal.Content>
    </Modal>
);

export default ModalReport;
