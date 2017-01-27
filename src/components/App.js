import React from 'react';
import Login from './forms/login_form';
import LoginForgot from './forms/forgot_form';
import Header from './header/header_main';
import LoginReset from './forms/reset_form';
import ModalWindow from './modal/modal';
import {Container} from 'semantic-ui-react';

class App extends React.Component {
    render() {
        return (<ModalWindow/>);
    }
}

export default App;
