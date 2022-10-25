import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import EmailEditor from 'react-email-editor';
import styled, { createGlobalStyle } from 'styled-components';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Example from './example';
import Dashboard from './dashboard';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  }

  #demo {
    height: 100%;
  }
`;
class App extends Component {
  render() {
    return <div>
      <button onClick={this.exportHtml}>Export HTML</button>

      <EmailEditor
        ref={editor => this.editor = editor}
      />
    </div>
  }

  exportHtml = () => {
    this.editor.exportHtml(data => {
      const { design, html } = data
      console.log('exportHtml', html)
    })
  }
}

class Demo extends Component {
  render() {
    return (
      <Router>
        <GlobalStyle />

        <Switch>
          <Route path={`/`} exact={true}>
            <Example />
          </Route>

          <Route path={`/dashboard`}>
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<Demo />, document.querySelector('#demo'));
