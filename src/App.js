import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Distanceinfo,Homepage,Information,Maskinfo} from './components'

const App = () => {
  return (
    <div>
      <Homepage/>
    </div>
  )
}

export default App
