import React, { Component } from 'react';
import Data from '../HOCs/Data';

export const Context = React.createContext(); 

export class Provider extends Component {
  
  constructor() {
    super();
    this.data = new Data();
    //Fetching cookie and setting it to state
    //If there is no cookie, null is returned
    this.state = {
      list: null, error: null
    };
  }

  state = {
    list: null,
    error: null
  }

  render() {
    const { error } = this.state;
    const value = {
      error,
      data: this.data,
      actions: {
        updateCourse: this.updateCourse,
        deleteCourse: this.deleteCourse,
        createCourse: this.createCourse,
        getList: this.getList
      }
    }

    return (
      <Context.Provider value={ value }>
        { this.props.children }
      </Context.Provider>  
    );
  }

  getList = async() => {
    try {
      //Fetching course data based on course id
      let list = await this.data.getList();
      return list;
    } catch(error) {
      this.setState({
        error
      });
    }
  }

  deleteCourse = async (courseId, emailAddress, password) => {
    //Double checking for authenticatedUser
    if ( this.state.authenticatedUser !== null) {
      try {
        await this.data.deleteCourse(courseId, emailAddress, password);
      } catch(error) {
        console.log(error.message)
      }
    }
  }

  updateCourse = async (courseId, userId, title, description, estimatedTime, materialsNeeded, emailAddress, password) => {
    //Checking for authenticatedUser
    if ( this.state.authenticatedUser.user.emailAddress !== null) {
      try {
        await this.data.updateCourse({
          courseId, userId, title, description, estimatedTime, materialsNeeded, emailAddress, password
        });
      } catch(error) {
        return error;
      }
    }
}

  createCourse = async (userId, title, description, estimatedTime, materialsNeeded, emailAddress, password) => {
    //Checking for authenticatedUser
    if ( this.state.authenticatedUser.user.emailAddress !== null) {
      try {
        await this.data.createCourse({
          userId, title, description, estimatedTime, materialsNeeded, emailAddress, password
        });
      } catch(error) {
        return error;
      }
    }
  }
}

  export const Consumer = Context.Consumer;

/**
 * A higher-order component that wraps the provided component in a Context Consumer component.
 * @param { class } Component - A React component.
 * @returns { function } A higher-order component.
 */

  export default function withContext( Component ) {
    return function ContextComponent( props ) {
      return (
        <Context.Consumer>
          { context => <Component { ...props } context={ context } />}
        </Context.Consumer>
      );
    }
  }
