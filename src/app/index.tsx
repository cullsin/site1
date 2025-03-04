import React, {useEffect} from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import Routers from '../routers/main';
import { store, persistor } from '../store';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

const App = (props) => 
<Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <Routers />
    </PersistGate>
  </Provider>

const mapStateToProps = (state: any) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);