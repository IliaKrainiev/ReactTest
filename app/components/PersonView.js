/**
 * Created by Ilia on 23.03.2017.
 */
import React, { Component } from 'react'

export class  PersonView extends Component{
    constructor() {
        super();
        this.delete = this.delete.bind(this);
    }




    delete() {
        this.props.delFunc(this.props.person);
    }

    render() {
        return (
            <tr>
                <td>{this.props.person.fname}</td>
                <td>{this.props.person.lname}</td>
                <td>{this.props.person.gender}</td>
                <td>{this.props.person.phone}</td>
                <td>{this.props.person.age}</td>
                <td>
                    <button
                        onClick={this.delete}
                        className="btn btn-danger">Delete
                    </button>
                </td>
            </tr>
        )
    }
}
