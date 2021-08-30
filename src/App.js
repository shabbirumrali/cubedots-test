import React from 'react'
import Nav from './components/Nav'
import Apartment from './components/Apartment'
import Home from './components/Home'
import Gallery from './components/Gallery'
import Location from './components/Location'
import Floor from './components/Floor'
import Building from './components/Building'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <div>
          <Switch>
            <Route exact path="/cubedots" component={Home} />
            <Route path="/cubedots/apartment" component={Apartment} />
            <Route path="/cubedots/gallery" component={Gallery} />
            <Route path="/cubedots/location" component={Location} />
            <Route path="/cubedots/floor" component={Floor} />
            <Route path="/cubedots/building" component={Building} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
