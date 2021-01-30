import React from 'react'
import {DELETE_EVENT} from '../actions'

const Event = ({dispatch, event}) => {
    const id = event.id // ショートハンド用
    const handleClickDeletedButton = () => {
        const result = window.confirm(`イベント(id=${id})を削除しても良いですか？`)
        if (result) dispatch({type: DELETE_EVENT, id}) // ショートハンド使った
    }
    return (
        <tr>
            <td>{id}</td>
            <td>{event.title}</td>
            <td>{event.body}</td>
            <td><button type="button" className="btn btn-danger" onClick={handleClickDeletedButton}>削除</button></td>
        </tr>
    )
}
export default Event