import  Loginpage from './Loginpage';
import {useState}  from 'react';
import './RegisterPage';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App(){
  const [state, setState] = useState('')
  return(
    <BrowserRouter>
      <div className="App">
      <button onClick={()=>setState('Loginpage')}>Login</button>
        
        <Routes>
        <Route element={<Loginpage/>} path='./Loginpage'></Route>  
        </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App;