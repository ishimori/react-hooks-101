import React from 'react'
const Event = ({dispatch, event}) => {
    const id = event.id // ショートハンド用
    const handleClickDeletedButton = () => {
      dispatch({type:'DELETE_EVENT', id}) // ショートハンド使った
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
// {
//     state.map((event,index) => {
//       const id = event.id // ショートハンド用
//       const handleClickDeletedButton = () => {
//         dispatch({type:'DELETE_EVENT', id}) // ショートハンド使った
//       }
//       return (
//         <tr key={index}>
//           <td>{id}</td>
//           <td>{event.title}</td>
//           <td>{event.body}</td>
//           <td><button type="button" className="btn btn-danger" onClick={handleClickDeletedButton}>削除</button></td>
//         </tr>
//       )
//     })
//   }
