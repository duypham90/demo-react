import * as React from 'react';
import { Link } from 'react-router-dom';

interface UserDetail {
    model: string
}

class UserRow extends React.Component<any, UserDetail> {
    constructor(props) {
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
        this.getDetail = this.getDetail.bind(this)
        this.state = {
            model: '',
        }
    }

    handleDelete(e) {
        e.preventDefault()
        console.log(window.laravel.csrfToken);
        if (!confirm('Are your sure you want to delete this item?')) {
            return false
        }

        const { id } = this.props.obj;

        fetch(`api/users/${id}`, {
            method: 'delete',
            headers: {
                'X-CSRF-TOKEN': '',
            },
            credentials: 'same-origin'
        })
        .then(res => res.json())
        .then(data => this.props.deleteRow(this.props.index))
        .catch(err => console.log(err));
    }

    getDetail(e) {
        e.preventDefault();
        const { id } = this.props.obj;
        fetch(`api/users/${id}/edit`)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }
    
    render() {
        const { id, name, email, created_at } = this.props.obj;
        return (
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{created_at}</td>
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