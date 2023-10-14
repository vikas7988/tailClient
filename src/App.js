import Navbar from './component/Navbar';
import MainPage from './component/mainPage';
import { Route, Routes } from "react-router-dom";
import Second from './component/Second';
import Footer from './component/footer';
function App() {
  return (
    <div className='sm:bg-gradient-to-r from-pink-50 via-blue-100 to-pink-50' >
     <Navbar/>

     <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:param" element={<Second/>} />
    
      </Routes>
     
     <Footer/>
     

    
    </div>
  );
}

export default App;
