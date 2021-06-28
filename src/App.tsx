import React from 'react';
import { CanvasComponent } from './component/CanvasComponent';

const style = {
  width: '100vw',
  height: '100vh'
}

function App() {
  return (
    <div className="App" style={style}>
      <CanvasComponent />
    </div>
  );
}

export default App;
