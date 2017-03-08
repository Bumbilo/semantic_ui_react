import React, {Component} from 'react';
import {
    Button,
    Image,
    Modal,
    Popup,
    Header,
    Grid,
    Form,
    TextArea,
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
            Time off request</Header>
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

const ButtonApproval = () => (
    <div className="holiday_comment">
        <div className="reject">
            <button>Reject</button>
        </div>
        <div className="approve">
            <button>Approve</button>
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
                </div>
            </div>
            <div className="view_holiday_content">
                <ViewProfileMessage/>
                <ButtonApproval/>
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
    </Grid>
);

const ModalHolidayWaiting = () => (
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

export default ModalHolidayWaiting;
