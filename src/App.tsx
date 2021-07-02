import { useContext } from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Header } from './components/Header';
import { SwitchContext, SwitchContextProvider, useSwitch } from './contexts/SwitchContexts';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { MyWork } from './pages/MyWork';
import usePersistedState from './utils/usePersistedState';


function App() {

  return (
    <div>
      <BrowserRouter>
        <SwitchContextProvider>
          <Header />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' exact component={About} />
            <Route path='/my-work' exact component={MyWork} />
          </Switch>
        </SwitchContextProvider>
      </BrowserRouter>
    </div>
  )
}
export default App;
