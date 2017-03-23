/**
 * Created by Ilia on 22.03.2017.
 */
import React, {Component} from 'react'

export const RadioButton = (props) => {
    return (
        <div>
            <label className="radio-inline">
                <input

                       value= { props.gender }
                       type="radio"
                       checked={props.gender === props.check}
                       onChange={props.onChangeFunc}
                    /> { props.gender }
                    </label>
        </div>
    )
}

