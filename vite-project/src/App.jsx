import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'
import Main from './Index'
import Home from './page/Home'
import Menu from './page/Menu'
import Contact from './page/Contact'
import About from './page/About'
import Login from './page/Login'
import NewProduct from './page/NewProduct'
import Logout from './page/Logout'
import Signup from './page/Signup'

function App() {
  return (
    <>
      <div className='App'>
        <Router>
          <Routes>
            <Route path="/" element={<Main />}>
              <Route index element={<Home />} />
              <Route path="Menu" element={<Menu />} />
              <Route path="Contact" element={<Contact />} />
              <Route path="About" element={<About />} />
              <Route path="Login" element={<Login />} />
              <Route path="New Product" element={<NewProduct />} />
              <Route path="Logout" element={<Logout />} />
              <Route path="Signup" element={<Signup />} />



            </Route>
          </Routes>
        </Router>
      </div>
    </>
  )
}


export default App