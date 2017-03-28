import React, {Component} from 'react';
import {
    Button,
    Header,
    Image,
    Modal,
    Grid,
    Flag,
    Dropdown,
    Icon,
    Container,
    Input
} from 'semantic-ui-react';
import report from '../../images/report.png';
import '../../CSS/fonts.css';
import ava2 from '../../images/ava3.png';
import './modal.css';

const HeaderTitle = () => (
    <div className='header_title'>
        <Image src={report} className="img_header"/>
        <Header as='h2' className="header_title_check">
            Edit Department</Header>
    </div>
);

const ButtonReport = () => (
    <div className="btn_center">
        <Button className='green btn_middle'>Save changes</Button>
    </div>
);


const MyText = () => (
    <h3>Hello world</h3>
);

const options = [
    {
        key: 'Mitsy', text: 'Mitsy', value: 'Mitsy',
        image: {avatar: true, src: 'static/media/ava3.3fad30da.png'}
    },
    {
        key: 'Teo', text: 'Teo', value: 'Teo',
        image: {avatar: true, src: 'static/media/ava3.3fad30da.png'}
    },
    {
        key: 'James', text: 'James', value: 'James',
        image: {avatar: true, src: 'static/media/ava3.3fad30da.png'}
    },
    {
        key: 'John', text: 'John', value: 'John',
        image: {avatar: true, src: 'static/media/ava3.3fad30da.png'}
    }
];



class DropdownUsers extends Component {
    state = {options}

    handleAddition = (e, {value}) => {
        this.setState({
            options: [{text: value, value}, ...this.state.options],
        })
    }

    handleChange = (e, {value}) => this.setState({currentValues: value})

    render() {
        const {currentValues} = this.state

        return (
            <Dropdown
                options={this.state.options}
                selection
                fluid
                search
                multiple
                allowAdditions
                value={currentValues}
                onAddItem={this.handleAddition}
                onChange={this.handleChange}
            />
        )
    }
}

const GridExampleVerticallyDivided = () => (
    <Grid divided='vertically'>
        <Container>
            <Grid.Row>
                <Grid.Column>
                    <div className="block_center large">
                        <label className="label_input">Department name</label>
                        <Input type="test" fluid/>
                    </div>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <div className="block_center large">
                        <label className="label_input top">Add manage</label>
                        <DropdownUsers/>
                    </div>
                </Grid.Column>
            </Grid.Row>
        </Container>
        <Grid.Row >
            <Grid.Column>
                <ButtonReport/>
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

const ModalEditDepartments = () => (
    <Modal trigger={< Button > Show Modal </Button>} closeIcon='close'>
        <Header>
            <HeaderTitle/>
        </Header>
        <Modal.Content className="modal_content">
            <GridExampleVerticallyDivided/>
        </Modal.Content>
    </Modal>
);

export default ModalEditDepartments;
