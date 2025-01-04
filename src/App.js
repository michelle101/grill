import {Routes, Route} from 'react-router-dom';
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Home,Specials,Menu,About,Method } from './components/pages';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className="App">
       <Navbar />
       <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/specials' element ={<Specials />} />
        <Route path='/about' element= {<About />} />
        <Route path='/method' element={<Method />} />
       </Routes>
          <h1>this is the homepage </h1>
       <Footer />
    </div>
  );
}

export default App;
