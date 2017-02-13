import React, {Component} from 'react';
import {DateRangePicker, DayPicker} from 'react-dates';
import {
    Button,
    Header,
    Modal,
    Grid,
    Dropdown,
    Input
} from 'semantic-ui-react';
import '../../CSS/fonts.css';
import './modal.css';
import 'react-dates/lib/css/_datepicker.css';

const HeaderTitle = () => (
    <div className='modal_calendar'>
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

const DropdownSupervisor = () => (
    <Dropdown placeholder='Select reason' selection options={position} className='dropdown_modal_reason'/>
);

const InputComment= () => (
        <Input className='input_comment' placeholder='Enter your comment'/>
);

class DateRangePickerWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            focusedInput: null,
            startDate: null,
            endDate: null,
        };

        this.onDatesChange = this.onDatesChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
    }

    onDatesChange({ startDate, endDate }) {
        this.setState({ startDate, endDate });
    }

    onFocusChange(focusedInput) {
        this.setState({ focusedInput });
    }

    render() {
        const { focusedInput, startDate, endDate } = this.state;
        return (
            <div>
                <DateRangePicker
                    {...this.props}
                    onDatesChange={this.onDatesChange}
                    onFocusChange={this.onFocusChange}
                    focusedInput={focusedInput}
                    startDate={startDate}
                    endDate={endDate}
                />
            </div>
        );
    }
}

const GridExampleVerticallyDivided = () => (
    <Grid divided='vertically'>
        <Grid.Row>
            <Grid.Column >
                <DateRangePickerWrapper/>
                <DropdownSupervisor/>
                <InputComment/>
            </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={2}>
            <Grid.Column floated='right'>
                <Button basic floated='right' className='btn_basic btn_middle'>Cancel</Button>
            </Grid.Column>
            <Grid.Column floated='left'>
                <Button color='green btn_middle'>Send request</Button>
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

const ModalDateRequest = () => (
    <Modal trigger={<Button> Show Modal </Button>} closeIcon='close'>
        <Header>
            <HeaderTitle/>
        </Header>
        <Modal.Content className="modal_content_calendar">
            <GridExampleVerticallyDivided/>
        </Modal.Content>
    </Modal>
);

export default ModalDateRequest;
