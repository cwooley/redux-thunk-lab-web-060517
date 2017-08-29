import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import CatList from './CatList'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchCats} from './actions/catActions'



class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <CatList catPics={this.props.catPics}/>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return { catPics: state.pictures }
}

const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({ fetchCats }, dispatch);
 };

 const WrapperApp =  connect(mapStateToProps, mapDispatchToProps)(App)

export default WrapperApp
