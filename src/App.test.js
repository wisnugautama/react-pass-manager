import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from './App';
import './setupTest'

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

describe('<App> component', () => {
  const appWrapper = shallow(<App />)
  it('render succes bruh', () => {
    expect(appWrapper).toHaveLength(1)
  })

  it('component div on app with classname APP', () => {
    const divApp = appWrapper.find('div')
    expect(divApp)
  })
})