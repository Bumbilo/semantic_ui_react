import React, {Component} from 'react';
import {
    Button,
    Image,
    Header,
    Modal,
    Grid,
    Dropdown,
    Input
} from 'semantic-ui-react';
import varning from '../../images/icon_add_photo.png';
import '../../CSS/fonts.css';
import './modal.css';

const HeaderTitle = () => (
    <div className='header_title'>
        <div className="header_wrap_img">
            <Image src={varning} shape='circular'/>
            <Button basic icon='pencil' className="btn_icon"/>
        </div>
        <Header as='h2' className="header_employee">Add empoloyee</Header>

    </div>
);

const InputFirstName = () => (
    <div className='floatRight'>
        <span className="label_dropdown_mod">First name</span>
        <Input size='small' className='input_modal'/>
    </div>
);

const InputLastName = () => (
    <div className='floatRight'>
        <span className="label_dropdown_mod">Last name</span>
        <Input size='small' className='input_modal'/>
    </div>
);

const InputMobile = () => (
    <div className='floatRight'>
        <span className="label_dropdown_mod">Mobile number</span>
        <Input size='small' className='input_modal'/>
    </div>
);

const position = [
    {
        value: 'articles1',
        text: 'Position'
    }, {
        value: 'articles2',
        text: 'Supervisor'
    }
];

const position2 = [
    {
        value: 'articles1',
        text: '08:00 - 16:00'
    }, {
        value: 'articles2',
        text: '09:00 - 17:00'
    }
];

const InputEmail = () => (
    <div className='floatRight'>
        <span className="label_dropdown_mod">Email</span>
        <Input size='small' className='input_modal' placeholder='Enter email address'/>
    </div>
);

const DropdownSupervisor = () => (
    <div className='floatRight'>
        <span className="label_dropdown_mod">Account type</span><Dropdown placeholder='Select supervisor' selection options={position} className='dropdown_modal'/>
    </div>
);

const PositionWork = () => (
    <div className="input_position">
        <label className='  label_input'>What postion(s) does this person work?
        </label>
        <Input fluid icon='plus' placeholder='i.e Designer, Team lead, Coordinator, etc.'/>
    </div>
);

const DropdownSupervisor2 = () => (
    <div className='floatRight'>
        <span className="label_dropdown_mod">Work shift</span><Dropdown placeholder='08:00 - 16:00' selection options={position2} className='dropdown_modal'/>
    </div>
);

const GridExampleVerticallyDivided = () => (
    <Grid divided='vertically' stackable>
        <Grid.Row >
            <Grid.Column width={8}>
                <InputFirstName/>
                <InputEmail/>
                <DropdownSupervisor/>
            </Grid.Column>
            <Grid.Column width={8}>
                <InputLastName/>
                <InputMobile/>
                <DropdownSupervisor2/>
            </Grid.Column>
            <Grid.Column width={16}>
                <PositionWork/>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
            <Grid.Column>
                <Button basic floated='right' className='btn_basic btn_center'>Cancel</Button>
            </Grid.Column>
            <Grid.Column>
                <Button floated='left' color='green' className="btn_center">Add empoloyee</Button>
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

const ModalWindowEmployee = () => (
    <Modal trigger={< Button > Show Modal < /Button>} closeIcon='close'>
        <Header>
            <HeaderTitle/>
        </Header>
        <Modal.Content className="modal_content">
            <GridExampleVerticallyDivided/>
        </Modal.Content>
    </Modal>
);

export default ModalWindowEmployee;
