import React, {useEffect} from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

const App = (props) => <h1>Hello World</h1>

const mapStateToProps = (state: any) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);