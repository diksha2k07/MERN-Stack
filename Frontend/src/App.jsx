import Header from './components/Header'; // header footer commanded
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import UseState from './hooks/UseState';
import NavBar from './components/NavBar';
import { Routes,Route} from 'react-router-dom';
import UseEffect from './hooks/UseEffect';
import Form from './components/Form';



const App=()=>{
  return(
    <>
    <NavBar/>
    <Routes>
      <Route path="/home" element={<Home name="Diksha" department="Bsc.IT"/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/useState" element={<UseState/>}/>
      <Route path="/useEffect" element={<UseEffect/>}/>
      <Route path="/form" element={<Form/>}/> 
    </Routes>

   {/* <Header/> 
    <Footer/>*/}      
    </>
  )
}                                                              
export default App;
