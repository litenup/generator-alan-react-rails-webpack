'use strict';


import React from 'react/addons';
global.React = React
import ExecutionEnvironment from 'react/lib/ExecutionEnvironment';
import assert from 'assert';
import { jsdom } from 'jsdom';

// config React DOM
ExecutionEnvironment.canUseDOM = true;

if (typeof document === 'undefined') {
  global.document = jsdom('<html><body></body></html>')
  global.window = document.defaultView
  global.navigator = window.navigator
}

describe('Home Component', () => {
  it('should bind to DOM node', () => {
    let {TestUtils} = React.addons;
    let Home = require('../../../assets/javascripts/components/home.js');
    // let Home = require('./home');

    console.log(Home);
    let Component = TestUtils.renderIntoDocument(
      <Home name='Alan'/>
    );

    assert.equal(Component.state.text, 'Alan');

    TestUtils.Simulate.click(
      TestUtils.findRenderedDOMComponentWithClass(Component, 'clickMe')
    )

    assert.equal(Component.state.text, 'nalA');
  });
});
