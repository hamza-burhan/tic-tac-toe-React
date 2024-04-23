import './App.css';
import Contact from './main/Pages/contact.jsx';
import Home from './main/Pages/home.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './main/Pages/layout.jsx';

function App() {
  return(
    <>
    <BrowserRouter>
      <Routes path='/layout' element={<Layout />}>
        <Route index element={<Home color="red" border="1px" />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </>
  )
  
  
}

export default App;
