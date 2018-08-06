import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../menu/Navbar'
import UserRow from './UserRow'
// import DayPickerInput from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

interface User{
    id: number;
    name: string;
    email: number;
}

interface UserListState {
    users: User[],
    offset: number,
    limit: number,
    totalUser: number,
    isLoading: boolean,
    selectedDay: undefined,
    isDisabled: boolean,
}

class UserList extends Component<any, UserListState> {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            offset: 0,
            limit: 11,
            totalUser: 0,
            isLoading: false,
            selectedDay: undefined,
            isDisabled: false,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.makeRequest()
    }

    makeRequest() {
        const { offset, limit } = this.state;
        fetch(`api/users?offset=${offset}&limit=${limit}`)
        .then(res => res.json())
        .then(list => this.setState({
            ...this.state,
            users: list.data,
            totalUser: list.meta.total,
        }))
        .catch(err => console.log(err));
    }

    deleteRow(key) {
        var users = [...this.state.users];
        users.splice(key, 1);
        this.setState({ users });
    }

    fetchRows() {
        if (this.state.users instanceof Array) {
            return this.state.users.map((object, i) => {
                return <UserRow obj={object} key={i} index={i} deleteRow={this.deleteRow.bind(this)} />
            })
        }
    }

    handleChange(event) {
        const limit = event.target.value;
        this.setState((prevState) => ({
            ...prevState, limit: limit
        }), () => {
            this.makeRequest();
        });
    }

    handleDayChange(selectedDay: any, modifiers: any) {
        this.setState({
          selectedDay,
          isDisabled: modifiers.disabled === true,
        });
      }
      
    render() {
        const { selectedDay, isDisabled } = this.state;
        return (
            <Navbar>
                <DayPickerInput
                    value={selectedDay}
                    onDayChange={this.handleDayChange}
                    dayPickerProps={{
                        selectedDays: selectedDay,
                        disabledDays: {
                        daysOfWeek: [0, 6],
                        },
                    }}
                />
                <h1>Users</h1>
                <div className='clearfix'>
                    <Link className='btn btn-success pull-right' to='/users/create'>Add User</Link>
                </div><br />
                <div className="pull-right">
                    <select className="form-control" value={this.state.limit} onChange={this.handleChange.bind(this)}>
                        <option value="10">10</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                        <option value="200">200</option>
                    </select>
                </div>
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Created</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.fetchRows()}
                    </tbody>
                </table>
            </Navbar>
        )
    }
}
export default UserList