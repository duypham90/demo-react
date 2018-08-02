import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import App from '../App'
import UserRow from './UserRow'
import { stringify, list } from 'postcss';

class UserList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      users: [],
      offset: 0,
      limit: 20,
    }
  }
  componentDidMount () {
    fetch(window.Laravel.baseUrl + `/api/users?offset=${this.state.offset}&limit=${this.state.limit}`, {
      headers: {
          'X-CSRF-TOKEN': window.Laravel.csrfToken,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(list => this.setState({ users: list.data}))
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

  render () {
    return (
      <App>
        <h1>Users</h1>
        <div className='clearfix'>
          <Link className='btn btn-success pull-right' to='/users/create'>Add User</Link>
        </div><br />
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