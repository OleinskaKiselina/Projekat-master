
import './App.css';
import './pages/homepage/homepage.styles.scss'
import HomePage  from './pages/homepage/homepage.component';
import { Route, Routes } from "react-router";
import ShopPage from './pages/homepage/ShopPage'
import  Header  from '../src/components/header/header.jsx';
import SignInOut from './components/sign-up/sign-in-out';

function App() {
  return (

    <div>
      <Header></Header>

<Routes>
      <Route  path="/" element={<HomePage/>} />
      <Route exact path="/shop" element={<ShopPage/>} />
      <Route exact path='/sign' element={<SignInOut></SignInOut>}/>
    
    
    </Routes>


    </div>
   
    
    
    
    
    
    

    
  );
}

export default App;
