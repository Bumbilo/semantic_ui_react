import React, {Component} from 'react';
import {
    Button,
    Header,
    Image,
    Modal,
    Checkbox,
    Grid,
    Dropdown,
    Icon,
    Container,
    Input
} from 'semantic-ui-react';
import report from '../../images/report.png';
import '../../CSS/fonts.css';
import './modal.css';

const HeaderTitle = () => (
    <div className='header_title'>
        <Image src={report} className="img_header"/>
        <Header as='h2' className="header_title_check">
            Edit shift template</Header>
    </div>
);

const ButtonReport = () => (
    <div className="btn_center">
        <Button className='green btn_middle'>Save changes</Button>
    </div>
);

const stateOptions = [
    {
        value: 'Monday',
        text: 'Monday'
    }, {
        value: 'Tuesday',
        text: 'Tuesday'
    }, {
        value: 'Wednesday',
        text: 'Wednesday'
    }, {
        value: 'Thursday',
        text: 'Thursday'
    }, {
        value: 'Friday',
        text: 'Friday'
    }, {
        value: 'Saturday',
        text: 'Saturday'
    }, {
        value: 'Sunday',
        text: 'Sunday'
    }
];

const stateTime = [
    {
        value: "08:00",
        text: "08:00"
    }, {
        value: "08:30",
        text: "08:30"
    }, {
        value: "09:00",
        text: "09:00"
    }, {
        value: "09:30",
        text: "09:30"
    }, {
        value: "10:00",
        text: "10:00"
    }, {
        value: "10:30",
        text: "10:30"
    }, {
        value: "11:00",
        text: "11:00"
    }, {
        value: "11:30",
        text: "11:30"
    }, {
        value: "12:00",
        text: "12:00"
    }, {
        value: "12:30",
        text: "12:30"
    }, {
        value: "13:00",
        text: "13:00"
    }, {
        value: "13:30",
        text: "13:30"
    }, {
        value: "14:00",
        text: "14:00"
    }, {
        value: "14:30",
        text: "14:30"
    }, {
        value: "15:00",
        text: "15:00"
    }, {
        value: "15:30",
        text: "15:30"
    }, {
        value: "16:00",
        text: "16:00"
    }, {
        value: "16:30",
        text: "16:30"
    }, {
        value: "17:00",
        text: "17:00"
    }, {
        value: "17:30",
        text: "17:30"
    }, {
        value: "18:00",
        text: "18:00"
    }
];

const DropdownDay = () => (<Dropdown compact selection options={stateOptions} defaultValue={stateOptions[0].value}/>);
const DropdownDay2 = () => (<Dropdown compact selection options={stateOptions} defaultValue={stateOptions[4].value}/>);
const DropdownTime = () => (<Dropdown compact selection options={stateTime} defaultValue={stateTime[0].value}/>);
const DropdownTime2 = () => (<Dropdown compact selection options={stateTime} defaultValue={stateTime[17].value}/>);

const ChangeDay = () => (
    <ul className="wrapp_group_call left">
        <li><Icon name="calendar" className="day_purple"/></li>
        <li>
            <ul className="group_call">
                <li><DropdownDay/></li>
                <li><DropdownDay2/></li>
            </ul>
        </li>
    </ul>
);

const ChangeTime = () => (
    <ul className="wrapp_group_call right">
        <li><Icon name="clock" className="day_purple"/></li>
        <li>
            <ul className="group_call">
                <li><DropdownTime/></li>
                <li><DropdownTime2/></li>
            </ul>
        </li>
    </ul>
);

const CheckAllDay = () => (<Checkbox label='All day' className="chebox_allday"/>);

const GridExampleVerticallyDivided = () => (
    <Grid>
        <Container>
            <Grid.Row>
                <Grid.Column>
                    <div className="block_center large">
                        <label className="label_input"> Shift name</label>
                        <Input type="test" fluid value="Workshop" />
                    </div>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <div className="block_center large">
                        <ChangeDay/>
                        <ChangeTime/>
                    </div>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <div className="block_center large">
                        <CheckAllDay/>
                    </div>
                </Grid.Column>
            </Grid.Row>
        <Grid.Row >
            <Grid.Column>
                <ButtonReport/>
            </Grid.Column>
        </Grid.Row>
        </Container>
    </Grid>
);

const ModalPanelShift = () => (
    <Modal trigger={< Button > Show Modal < /Button>} closeIcon='close'>
        <Header>
            <HeaderTitle/>
        </Header>
        <Modal.Content className="modal_content">
            <GridExampleVerticallyDivided/>
        </Modal.Content>
    </Modal>
);

export default ModalPanelShift;
