import './App.css';
import Contact from './main/Pages/contact.jsx';
import Home from './main/Pages/home.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './main/Pages/layout.jsx';
import Todo from './main/Pages/todo.jsx';
function App() {
  
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<Home color="red" border="1px" />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/todo' element={<Todo />} />

        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
  
  
}

export default App;
