import React, {Component} from 'react';
import {
    Button,
    Modal,
} from 'semantic-ui-react';
import '../../CSS/fonts.css';
import './modal.css';

const AddNewEmployee = () => (
    <div className='add_new_employee'>
        <h1>Hello world</h1>
    </div>
);

const TimeOfRequest = () => (
    <div className='add_new_employee'>
        <h1>Why it's dont work !!!</h1>
    </div>
);

const TitleModal = () => (
    <h2 className='select_option'>Select option</h2>
);

const ModalSelectOption = () => (
    <Modal trigger={<Button> Show Modal </Button>} closeIcon='close' className='modal_select'>
        <TitleModal/>
        <AddNewEmployee/>
        <TimeOfRequest/>
    </Modal>
);

export default ModalSelectOption;
