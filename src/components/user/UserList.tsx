import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Navbar from '../menu/Navbar'
import UserRow from './UserRow'
import { stringify, list } from 'postcss';

class UserList extends Component<any, any> {
  constructor (props) {
    super(props)
    this.state = {
      users: [],
      offset: 0,
      limit: 20,
      totalUser: 0,

    }
  }
  componentDidMount () {
    this.makeRequest()
  }
  makeRequest() {
    fetch(`http://demo-react.local/api/users?offset=${this.state.offset}&limit=${this.state.limit}`, {
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(list => this.setState({
       ...this.state, 
       users: list.data, 
       totalUser: list.meta.total,
    }))
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
      <Navbar>
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