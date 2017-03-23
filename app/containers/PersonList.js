/**
 * Created by Ilia on 23.03.2017.
 */
import React, { Component } from 'react'
import { PersonView } from '../components/PersonView'





export default class PersonList extends Component{
    constructor() {
        super()
        // this.props = props;
        this.delete = this.delete.bind(this);
    }

    delete(person){
        this.props.delete(person);
    }




    render() {
        let listItems = this.props.persons.map((person) => {
            return (
                <PersonView
                    key={person.id}
                    person = {person}
                    delFunc = {this.delete}
                />
            );
        });

        return (
            <div className="tableContainer">
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>FIRST NAME</th>
                        <th>SECOND NAME</th>
                        <th>GENDER</th>
                        <th>PHONE</th>
                        <th>AGE</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {listItems}
                    </tbody>
                </table>
            </div>
        )
    }
}