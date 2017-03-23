/**
 * Created by Ilia on 03.03.2017.
 */
import React, { Component } from 'react'
import AddMenu from './AddMenu'
import PersonList from './PersonList'


export default class HomePage extends Component {

    constructor(){
        super();

        this.state = {
            persons: JSON.parse(localStorage.getItem('persons')) || []
        }

        this.AddPerson = this.AddPerson.bind(this);
        this.DeletePerson = this.DeletePerson.bind(this)
    }


    AddPerson(person) {
        person.id = this.state.persons.length+1;
        this.setState({
            persons: this.state.persons.concat(person)
        })
        localStorage.setItem('persons',
            JSON.stringify(this.state.persons.concat(person)));
    }


    DeletePerson(person) {
        var newData = this.state.persons.slice();
        newData.splice(newData.indexOf(person), 1);
        this.setState({persons: newData});
        localStorage.setItem('persons', JSON.stringify(newData));
    }




    render() {
        return (
            <div className="container">
                <AddMenu
                    addPerson = {this.AddPerson}
                />

                <PersonList
                    persons={ this.state.persons }
                    delete = { this.DeletePerson }
                />
                <div className="clearfix"></div>
            </div>
        );
    }
}


