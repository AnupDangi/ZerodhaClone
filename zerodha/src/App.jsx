import {BrowserRouter,Routes,Route} from "react-router-dom";
import HomePage from './pages/home/HomePage'
import AboutPage from './pages/about/AboutPage';
import SignUp from './pages/signup/Signup';
import PricingPage from './pages/pricing/PricingPage';
import SupportPage from './pages/support/SupportPage' 
import ProductsPage from './pages/products/ProductsPage'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import Login from "./pages/Login/Login";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <div>
        <BrowserRouter>
        <Navbar/>
          <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/products" element={<ProductsPage/>}/>
          <Route path="/pricing" element={<PricingPage/>}/>
          <Route path="/support" element={<SupportPage/>}/>
          <Route path="*" element={<NotFound/>}/>

          </Routes>
        <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default App;