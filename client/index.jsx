
        //----------------------------------------------------------------------------------------------------------
        //Declariations and libraries
        //----------------------------------------------------------------------------------------------------------
        import React                                            from 'react';
        import ReactDOM                                         from 'react-dom';
        import { BrowserRouter as Router, Switch, Route }       from 'react-router-dom';
        import { Provider }                                     from 'react-redux';
        import { createStore, applyMiddleware }                 from 'redux';
        import promise                                          from 'redux-promise';
        import createMemoryHistory                              from 'history/createMemoryHistory';
        import App                                              from './container/app.jsx';
       
        //----------------------------------------------------------------------------------------------------------
            //Parent Components
        //----------------------------------------------------------------------------------------------------------
        
        import sign_up from './components/sign up.jsx'
import edit_profile from './components/edit profile.jsx'
       
        //----------------------------------------------------------------------------------------------------------
        //Reducer
        //----------------------------------------------------------------------------------------------------------
        import store                                            from './reducers/index.jsx';

        //----------------------------------------------------------------------------------------------------------
            //Middleware setup
        //----------------------------------------------------------------------------------------------------------
        const history                                 = createMemoryHistory();
        const createStoreWithMiddleware               = applyMiddleware(promise)(createStore);

        //----------------------------------------------------------------------------------------------------------
        //Routes Setup
        //----------------------------------------------------------------------------------------------------------
        ReactDOM.render(
            <Provider store={createStoreWithMiddleware(store, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
        
                <Router basename="/" history={ history } >
                    <Switch>
                        <Route path "/" component={sign_up}
                        <Route path="/sign_up" component={sign_up} /> 
,<Route path="/edit_profile" component={edit_profile} /> 

                    </Switch>
                </Router>
            </Provider>,
            document.getElementById('app') || document.createElement('div')
          );
        