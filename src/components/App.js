import React,{useReducer} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EventForm from './EventForm'
import Events from './Events'
import AppContext from '../contexts/AppContext'
import reducer from '../reducers' // index.jsは省略できる

function App() {
  const initialState = {
    events : []
  }
  const [state, dispatch]  = useReducer(reducer,initialState)

  return (
    <AppContext.Provider value={{state,dispatch}}>
      <div className="container-fluid">
        <EventForm />
        <hr />
        <Events />
      </div>
    </AppContext.Provider>
  );
}

export default App;
