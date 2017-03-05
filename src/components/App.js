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
import ModalDateRequest from './modal/modal_date_request';
import ModalReport from './modal/modal_report';
import ModalProfileTimeCard from './modal/modal_profile_time_card';
import ModalProfileTimeView from './modal/modal_profile_time_card_view';
import ModalWindowAfterSubmit from './modal/modal_profile_time_after_submit';
import EployeeAdd from './employee/employee_add';
import EployeeAdd2 from './employee/employee_add2';
import EmployeeProfileCalendar from './employee/employee_profile_calendar';
import EployeeForm from './employee/employee_form';
import EmployeeCalendar from './employee/employee_calendar';
import EmployeeProfileTime from './employee/employee_profile_time';
import {Container} from 'semantic-ui-react';

class App extends React.Component {
    render() {
        return (<ModalWindowAfterSubmit />);
    }
}

export default App;
