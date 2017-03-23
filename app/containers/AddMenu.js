/**
 * Created by Ilia on 22.03.2017.
 */
/**
 * Created by Ilia on 03.03.2017.
 */
import React, { Component } from 'react'
import { Input } from '../components/Input'
import  { RadioButton } from '../components/RadioButton'

function validator(pattern, idErrorText, idErrorField, value, errorText) {
   let subutton =  document.getElementById('submitButton');

    let el = document.getElementById(idErrorText);
    let erField = document.getElementById(idErrorField);

    if ( pattern.test(value)) {
        if(value === '') {
            subutton.disabled = true;
            erField.classList.add('error-field');
            el.classList.add('error-text');
            el.innerHTML  = '<strong>This field is required</strong>'
        } else {
            subutton.disabled = false;
            erField.classList.remove('error-field');
            el.className = ''
            el.innerHTML = ""
        }
    } else {
        subutton.disabled = true;
        erField.classList.add('error-field');
        el.classList.add('error-text');
        el.innerHTML  = '<strong>' + errorText + '</strong>';

    }
}


export default class AddMenu extends Component {

    constructor(){
        super();
        this.state = {
            person: {
                fname: '',
                lname: '',
                phone: '',
                gender: 'male',
                age: ''
            }
        }

            this.firstNameChange = this.firstNameChange.bind(this);
            this.lastNameChange = this.lastNameChange.bind(this);
            this.phoneChange = this.phoneChange.bind(this);
            this.ageChange = this.ageChange.bind(this);
            this.genderChange = this.genderChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(){
        this.props.addPerson(this.state.person);
        this.setState({person: {gender: 'male'}});
    }


    firstNameChange(event){

        validator(/^[a-zA-Z]*$/, 'fname', 'inputGroupfname',
            event.target.value,' No numbers, just letters!');

        this.setState({person: Object.assign({},
            this.state.person, {fname: event.target.value })});
    }




    lastNameChange(event){

        validator(/^[a-zA-Z]*$/, 'lname', 'inputGrouplname',
            event.target.value,' No numbers, just letters!');

        this.setState({person: Object.assign({},
            this.state.person, {lname: event.target.value })});
    }

    phoneChange(event){
        validator(/^[0-9]*$/i, 'phone', 'inputGroupphone',
            event.target.value,' No letters, just numbers!');

        this.setState({person: Object.assign({},
            this.state.person, {phone: event.target.value })});
    }

    ageChange(event){

        validator(/^[0-9]*$/i, 'age', 'inputGroupage',
            event.target.value,' No letters, just numbers!');

        this.setState({person: Object.assign({},
            this.state.person, {age: event.target.value })});
    }


    genderChange(event) {

        this.setState({person: Object.assign({},
            this.state.person, {gender: event.target.value })});
    }


    render() {
        return (
            <div className = "addForm">


                        <Input
                            name = "First Name"
                            pic  = "glyphicon glyphicon-user"
                            id = "fname"
                            val = {this.state.person.fname|| ''}
                            onChangeFunc = { this.firstNameChange }
                        />
                        <Input
                            name = "Last Name"
                            pic  = "glyphicon glyphicon-user"
                            id = "lname"
                            val = {this.state.person.lname|| ''}
                            onChangeFunc = { this.lastNameChange }
                        />
                        <div className = "radioContainer">
                            <h4>Choose your gender:</h4>
                                <RadioButton
                                    id = {this.state.person.name}
                                    gender = "male"
                                    check = {this.state.person.gender}
                                    onChangeFunc = {this.genderChange}
                                />
                                <RadioButton
                                    id = {this.state.person.name}
                                    gender = "female"
                                    check = {this.state.person.gender}
                                    onChangeFunc = {this.genderChange}
                                />

                        </div>
                        <Input
                            name = "Phone"
                            pic  = "glyphicon glyphicon-phone"
                            id = "phone"
                            val = {this.state.person.phone|| ''}
                            onChangeFunc = { this.phoneChange }
                        />
                        <Input
                            name = "Age"
                            pic  = "glyphicon glyphicon-heart"
                            id = "age"
                            val = {this.state.person.age|| ''}
                            onChangeFunc = { this.ageChange }
                        />


                <button id="submitButton"
                       className="btn btn-success"
                       onClick={this.handleSubmit}
                >Add</button>


            </div>
        );
    }
}


