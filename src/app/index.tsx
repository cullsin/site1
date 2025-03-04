import React, {useEffect} from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import Routers from '../routers/main';

const App = (props) => <Routers />

const mapStateToProps = (state: any) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);