import React from 'react'
import ReactDOM from 'react-dom'
import MainPage from './Components/MainPage'
import './styles/stylesheet.css'
import {BrowserRouter} from 'react-router-dom'
import {createStore} from 'redux'
import rootReducer from './redux/reducer'
import {Provider} from 'react-redux'

const mystore = createStore(rootReducer)

//const h1tag = React.createElement('h1',null,'Hello Brijesh to your first react app');

//ReactDOM.render(h1tag, document.getElementById('root'));


/*const liTagCreate = React.createElement('ol',null,
    liData.map((ardata,index) => React.createElement('li',{key:index},ardata) )

 );*/

ReactDOM.render(<Provider store = {mystore}><BrowserRouter><MainPage/></BrowserRouter></Provider>,document.getElementById('root'));