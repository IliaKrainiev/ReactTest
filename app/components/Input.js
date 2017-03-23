/**
 * Created by Ilia on 22.03.2017.
 */
import React, {Component} from 'react'




export const Input = (props) => {
    return (
                <div  className="form-group">
                    <div className = "error-container">
                        <div id = { props.id}></div>
                    </div>
                    <div id = {`inputGroup${props.id}`} className="input-group">
                        <span className="input-group-addon">{props.name}
                        <i className = { props.pic }></i>
                    </span>
                        <input type={props.type}
                               value = { props.val }
                               onChange = {props.onChangeFunc}
                               className="form-control"
                               placeholder={props.name}
                               required />

                    </div>
                </div>
            )
    }
