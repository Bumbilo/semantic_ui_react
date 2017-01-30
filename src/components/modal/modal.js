import React, {Component} from 'react';
import {
    Button,
    Header,
    Icon,
    Modal,
    Segment,
    Grid,
    Dropdown,
    Checkbox
} from 'semantic-ui-react';
import varning from '../../images/slice-1.png';
import '../../CSS/fonts.css';
import './modal.css';

const InvalidMessage = () => (
    <Segment basic className="invalid_message">
        Invalid email address format.
    </Segment>
);

const HeaderTitle = () => (
    <div className='header_title'>
        <img src={varning} className="img_header"/>
        <Header as='h2' className="header_title">Update record infromation!</Header>
    </div>
);

const IconStatus = () => (
    <div className='status_icon'>
        <Icon name='check circle outline'/>
        <span>
            Active</span>
    </div>
);

const status = [
    {
        value: 'articles',
        text: <IconStatus/>
    }
];

const DropdownStatus = () => (
    <div className='floatRight'>
        <span className="label_dropdown">Status</span><Dropdown placeholder='Select status' selection options={status}/>
    </div>
);

const positon = [
    {
        value: 'articles1',
        text: 'Position'
    }, {
        value: 'articles2',
        text: 'Supervisor'
    }
];

const DropdownPosition = () => (
    <div className='floatRight'>
        <span className="label_dropdown">Position</span><Dropdown placeholder='Select position' selection options={positon}/>
    </div>
);

const DropdownSupervisor = () => (
    <div className='floatRight'>
        <span className="label_dropdown">Supervisor</span><Dropdown placeholder='Select supervisor' selection options={positon}/>
    </div>
);

const DropdownSupervisor2 = () => (
    <div>
        <span className="label_dropdown">Drop down</span><Dropdown placeholder='Select supervisor' selection options={positon}/>
    </div>
);

const CheckboxModal = () => (<Checkbox label='Lorem ipsum is simply text of the' className="checkbox_modal"/>)

const CheckboxModal2 = () => (<Checkbox label='Lorem ipsum is simply text of the' className="checkbox_modal"/>)

const GridExampleVerticallyDivided = () => (
    <Grid divided='vertically'>
        <Grid.Row columns={2}>
            <Grid.Column floated='right'>
                <DropdownStatus/>
                <DropdownPosition/>
                <DropdownSupervisor/>
            </Grid.Column>
            <Grid.Column floated='left'>
                <CheckboxModal/>
                <CheckboxModal2/>
                <DropdownSupervisor2/>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
            <Grid.Column floated='right'>
                <Button basic floated='right'>Cancel</Button>
            </Grid.Column>
            <Grid.Column floated='left'>
                <Button color='green'>Update</Button>
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

const ModalWindow = () => (
    <Modal trigger={<Button> Show Modal </Button>} closeIcon='close'>
        <Header>
            <InvalidMessage/>
            <HeaderTitle/>
        </Header>
        <Modal.Content className="modal_content">
            <GridExampleVerticallyDivided/>
        </Modal.Content>
    </Modal>
);

export default ModalWindow;
