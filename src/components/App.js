import React from 'react';
import Login from './forms/login_form';
import LoginForgot from './forms/forgot_form';
import Header from './header/header_main';
import LoginReset from './forms/reset_form';
import ModalWindow from './modal/modal';
import ModalWindowDelete from './modal/modal_delete';
import ModalWindowDeleteCheck from './modal/modal_delete2';
import ModalWindowDeleteCheck2 from './modal/modal_delete3';
import ModalWindowDeleteScroll from './modal/modal_delete_scroll';
import ModalWindowConnection from './modal/modal_connection';
import ModalWindowDeleteLoader from './modal/modal_loader';
import ModalWindowEmployee from './modal/modal_add_employee';
import ModalSelectOption from './modal/modal_select_option'
import EployeeAdd from './employee/employee_add';
import EployeeAdd2 from './employee/employee_add2';
import EployeeForm from './employee/employee_form';
import EmployeeCalendar from './employee/employee_calendar'
import {Container} from 'semantic-ui-react';

class App extends React.Component {
    render() {
        return (<EmployeeCalendar/>);
    }
}

export default App;