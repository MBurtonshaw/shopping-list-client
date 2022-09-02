import config from '../config';

export default class Data {
  api( path, method = 'GET', body = null, requiresAuth = false, credentials = null ) {
    const url = config.apiBaseUrl + path;
  
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    };

    if ( body !== null ) {
      options.body = JSON.stringify(body);
    }

    return fetch( url, options );
  }

  async getList() {
    const response = await this.api(`/api/list`, 'GET', null, false, null);

    if ( response.status === 200 ) {
      return response.json([]).then( data => data );
    }
    else if ( response.status === 400 || response.status === 401 || response.status === 500 ) {
      return response.json().then( data => data );
    }
  }

  /*async deleteCourse(courseId, email, password) {

    const response = await this.api( `/courses/${courseId}`, 'DELETE', null, true, {emailAddress: email, password});

    if ( response.status === 200 ) {
      return response.json([]).then( data => data );
    }
    else if ( response.status === 400 || response.status === 401 || response.status === 500 ) {
      return null;
    }
  }

  async createCourse( {userId, title, description, estimatedTime, materialsNeeded, emailAddress, password} ) {
      const response = await this.api( '/courses', 'POST', {
        userId, title, description, estimatedTime, materialsNeeded
        }, true, {emailAddress, password} );
        
        if ( response.status === 201 ) {
          console.log('success')
        }
        else if ( response.status === 400 || response.status === 401 || response.status === 500 ) {
          return response.json().then( data => {
            return data.errors;
          });
        }
      }
  

      async updateCourse( courseId, userId, title, description, estimatedTime, materialsNeeded, emailAddress, password ) {

        const course = {userId, title, description, estimatedTime, materialsNeeded};
        const credentials = {emailAddress, password};
        const response = await this.api( `/courses/${courseId}`, 'PUT', course, true, credentials );

        if ( response.status === 201 ) {
          console.log('success')
        }
        else if ( response.status === 400 || response.status === 401 || response.status === 500 ) {
          return response.json().then( data => {
            return data.errors;
          });
        }
      }*/
}