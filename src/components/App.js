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
import {Container} from 'semantic-ui-react';

class App extends React.Component {
    render() {
        return (<ModalWindowDeleteCheck2/>);
    }
}

export default App;
