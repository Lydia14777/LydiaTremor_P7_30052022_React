import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './pages/App'
import Post from './pages/Post'
import Header from './components/Header'
import { useParams } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Router>
            <Header />
            <Route exact path="/">
                <App />
            </Route>
            <Route path="/post">
                <Post />
            </Route>
            <Route>
                <Error />
            </Route>
        </Router>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
