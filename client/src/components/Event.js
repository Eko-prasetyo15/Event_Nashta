import React from 'react';

export default function Event(props) {
    console.log(props, "ini proppssssssss")
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.title}</td>
            <td>{props.location}</td>
            <td>{props.date}</td>
            <td>{props.members}</td>
            <td>{props.note}</td>
            {/* <td>
                <div>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={props.onDelete}> Delete
                    </button>
                </div>
            </td> */}
        </tr>
    )
}
