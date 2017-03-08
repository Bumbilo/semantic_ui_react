import React, {Component} from 'react';
import {
    Button,
    Image,
    Modal,
    Popup,
    Header,
    Grid,
    Icon
} from 'semantic-ui-react';
import ImgConnect from '../../images/time_request.png';
import '../../CSS/font-awesome.min.css';
import '../../CSS/fonts.css';
import './modal.css';
import ava from '../../images/avaBig.png';

const HeaderTitle = () => (
    <div className='header_title'>
        <Image src={ImgConnect} className="img_header"/>
        <Header as='h2' className="header_title_check">
            Request review</Header>
    </div>
);

const ViewProfileMessage = () => (
    <div className="holiday_comment">
        <div className="holiday_comment_title">
            <div className="holiday_comment_name">Mitsy Smith</div>
            <div className="holiday_comment_date">10 Feb 2017</div>
            <div className="holiday_comment_label">Vacation</div>
        </div>
        <div className="holiday_comment_content">
            <p>I want to take this day off.</p>
        </div>
    </div>
);


const PopupBlock = () => (
    <div className="popup_check_block">
        <div className="check_block_user_name">John Smith</div>
        <div className="check_block_status">Approved in</div>
        <div className="check_block_status">10 Feb 2017</div>
    </div>
);

const PopupCheck = () => (
    <Popup trigger={< button className="square green">
        <Icon name="checkmark"/></button>} position='bottom right' className="position_popup">
        <PopupBlock/>
    </Popup>
    
);

const ViewProfileMessageRequired = () => (
    <div className="holiday_comment send">
        <button className="holiday_replay"><Icon name="reply"/></button>
        <div className="holiday_comment_title">
            <div className="holiday_comment_name">Mitsy Smith</div>
            <div className="holiday_comment_date">10 Feb 2017</div>
            <div className="holiday_comment_label green">Vacation</div>
        </div>
        <div className="holiday_comment_content">
            <p>Comments is not required</p>
        </div>
    </div>
);

const ViewProfile = () => (
    <div className="view_holiday">
        <div className="view_holiday_title">
            <div className="holiday_title_user">
                <Image src={ava} avatar size='mini'/>
                <span className="profile_info">
                    <span className="profile_name">James Smith</span>
                    <br/>
                    <span className="profile_position">Mechanical Designer</span>
                </span>
                <div className="holiday_date">
                    <div className="holiday_date_block">
                        <div className="holiday_date_day">
                            7 days
                        </div>
                        <div className="holiday_date_monthes">
                            <div className="holiday_date_start">
                                14 Feb 2017
                            </div>
                            <Icon name="arrow right"></Icon>
                            <div className="holiday_date_end">
                                22 Feb 2017
                            </div>
                        </div>
                    </div>
                    <PopupCheck/>
                </div>
            </div>
            <div className="view_holiday_content">
                <ViewProfileMessage/>
                <ViewProfileMessageRequired/>
            </div>
        </div>
    </div>

);

const GridExampleVerticallyDivided = () => (
    <Grid divided='vertically'>
        <Grid.Row>
            <Grid.Column>
                <ViewProfile/>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column>
                <Button basic className="button_center">Cancel</Button>
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

const ModalHolidayReview = () => (
    <Modal trigger={< Button > Show Modal
        </Button>} closeIcon='close'>
        <Header>
            <HeaderTitle/>
        </Header>
        <Modal.Content className="modal_content">
            <GridExampleVerticallyDivided/>
        </Modal.Content>
    </Modal>
);

export default ModalHolidayReview;
