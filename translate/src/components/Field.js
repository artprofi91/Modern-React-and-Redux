import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

export default class Field extends Component {
  static contextType = LanguageContext;
  renderName(language) {
    return language === 'english' ? 'Name' : 'Имя';
  }
  render() {
    return (
      <div>
        <div className="ui field">
          <label htmlFor="">
            <LanguageContext.Consumer>
              {({ language }) => this.renderName(language)}
            </LanguageContext.Consumer>
          </label>
          <input type="text" />
        </div>
      </div>
    );
  }
}
