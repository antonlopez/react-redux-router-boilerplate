import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {Switch, BrowserRouter, Route} from 'react-router-dom'
import { Provider } from "react-redux";
import store, {history} from './store';
import App from './App';
import css from './styles/style.styl'
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single'


const router = (
    <Provider store={store}>
        <BrowserRouter >

                <div>
                <Route exact path="/" component={App} />
                <Route exact path="/" component={PhotoGrid} />
                <Route path="/view/:postId" component={Single}/>
                </div>
            
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
