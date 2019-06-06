import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
export default class LanguageStore extends Component {
  static contextType = LanguageContext;
  render() {
    console.log(this.context);
    return (
      <div>
        Select a language:
        <br />
        <i
          className="flag us"
          onClick={() => this.context.onLanguageChange('english')}
        />
        <i
          className="flag ru"
          onClick={() => this.context.onLanguageChange('russian')}
        />
      </div>
    );
  }
}
