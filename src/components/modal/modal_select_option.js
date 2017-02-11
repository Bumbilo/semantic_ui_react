import React, {Component} from 'react';
import {Button, Modal} from 'semantic-ui-react';
import '../../CSS/fonts.css';
import './modal.css';

const AddNewEmployee = () => (
    <div className='add_new_employee'>
        <span className="title_small_modal">Add new employee</span>
        <span className="sub_title_modal">Add new employee</span>
    </div>
);

const TimeOfRequest = () => (
    <div className='add_new_employee2'>
        <span className="title_small_modal">Time-off request</span>
        <span className="sub_title_modal">Time off request required approval</span>
    </div>
);

const TitleModal = () => (
    <h2 className='select_option'>Select option</h2>
);

const ModalSelectOption = () => (
    <Modal
        trigger={<Button> Show Modal </Button>}
        closeIcon='close'
        className='modal_select'>
        <TitleModal/>
        <AddNewEmployee/>
        <TimeOfRequest/>
    </Modal>
);

export default ModalSelectOption;
