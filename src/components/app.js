import React, { Component } from 'react';
import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';

export default class App extends Component {
  render() {
    return (
      <div className="container margin-top">
        <div className="row">
          <div className="col-sm-12">
            <BookList />
            <BookDetail />
          </div>
        </div>
         
      </div>
    );
  }
}
