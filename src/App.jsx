
import './App.css'
import "bootstrap/dist/css/bootstrap.css"
import { ALL } from './Pages/ALL'
import { CB } from './Pages/CB'
import { CS } from './Pages/CS'
import { DS } from './Pages/DS'
import { FSD } from './Pages/FSD'
import { Routes, Route, Link } from 'react-router-dom'

function App() {


  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to={"/"} className="nav-link"><b>ALL</b></Link>
              <Link to={"/FSD"} className="nav-link"><b>FULL STACK DEVELOPMENT</b></Link>
              <Link to={"/DS"} className="nav-link"><b>DATA SCIENCE</b></Link>
              <Link to={"/CB"} className="nav-link"><b>CYBER SECURITY</b></Link>
              <Link to={"/CS"} className="nav-link"><b>CAREER</b></Link>
            </div>
          </div>
        </nav>
      </div>

      <Routes>
        <Route Component={ALL} path='/'></Route>
        <Route Component={FSD} path='/FSD'></Route>
        <Route Component={DS} path='/DS'></Route>
        <Route Component={CB} path='/CB'></Route>
        <Route Component={CS} path='/CS'></Route>
      </Routes>

    </>
  )
}

export default App
