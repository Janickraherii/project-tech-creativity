import React, { useState } from 'react';
import Modif from './pages/Modif';

function App() {
  const [backgroundColor] = useState('#111111'); 
  return (
    <div style={{backgroundColor, height: '100vh'}}>
      <Modif/>
    </div>
  );
}

export default App;
