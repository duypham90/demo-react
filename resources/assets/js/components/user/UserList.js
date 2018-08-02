import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import App from '../App'
import UserRow from './UserRow'

class UserList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: [],
      offset: 0,
      limit: 10,
    }
  }
  componentDidMount () {
    this.makeRequest()
  }
  makeRequest() {
    fetch(window.Laravel.baseUrl + `/api/users?offset=${this.state.offset}&limit=${this.state.limit}`, {
      headers: {
          'X-CSRF-TOKEN': window.Laravel.csrfToken,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
    }).then(res => res.json())
    .then(data => this.setState({ users: data }))
    .catch(err => console.log(err));
  }
  deleteRow (key) {
    var users = [...this.state.users];
    users.splice(key, 1);
    this.setState( {users} );
  }
  fetchRows () {
    if (this.state.users instanceof Array) {
      return this.state.users.map( (object, i) => {
        return <UserRow obj={object} key={i} index={i} deleteRow={ this.deleteRow.bind(this) } />
      })
    }
  }
  handleChange (event) {
    const limit = event.target.value;
    this.setState((prevState) => ({
      ...prevState, limit: limit
    }), () => {
      this.makeRequest();
    });
  }

  render () {
    return (
      <App>
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
      </App>
    )
  }
}
export default UserList