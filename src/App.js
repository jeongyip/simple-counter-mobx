import React from 'react';
import Counter from './components/Counter';
import Supermarket from './components/Supermarket';
import DevTools from 'mobx-react-devtools';

function App() {
  return (
    <div>
      <Counter />
      <hr />
      <Supermarket />
      {process.env.NODE_ENV === 'development' && <DevTools />}
    </div>
  );
}

export default App;
