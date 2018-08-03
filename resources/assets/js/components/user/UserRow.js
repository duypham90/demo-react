import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class UserRow extends Component {
    constructor(props) {
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
        this.getDetail = this.getDetail.bind(this)
        this.state = {
            detail: '',
        }
    }
    handleDelete(e) {
        e.preventDefault()
        if (!confirm('Are your sure you want to delete this item?')) {
            return false
        }

        const { id } = this.props.obj;

        fetch(window.Laravel.baseUrl + `/api/users/${id}`, {
            method: 'delete',
            headers: {
                'X-CSRF-TOKEN': window.Laravel.csrfToken,
            },
            credentials: 'same-origin'
        })
            .then(res => res.json())
            .then(data => this.props.deleteRow(this.props.index))
            .catch(err => console.log(err));
    }
    getDetail(e) {
        const { id } = this.props.obj;
        fetch(window.Laravel.baseUrl + `/api/users/${id}/edit`)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.id}
                </td>
                <td>
                    {this.props.obj.name}
                </td>
                <td>
                    {this.props.obj.email}
                </td>
                <td>
                    {this.props.obj.created_at}
                </td>
                <td>
                    <button className='btn btn-primary' onClick={this.getDetail}>Edit</button>
                </td>
                <td>
                    <button className='btn btn-danger' onClick={this.handleDelete}>Delete</button>
                </td>
            </tr>
        )
    }
}

export default UserRow