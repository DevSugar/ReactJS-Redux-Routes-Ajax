import React from 'react';
import ReactDOM from 'react-dom';
import LayoutPublic from './js/components/layout/LayoutPublic'
import { Provider } from 'react-redux'
import {storeHeader} from './js/redux/store'

window.store = storeHeader
class App extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
        <Provider store={storeHeader}>
            <LayoutPublic />
        </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));