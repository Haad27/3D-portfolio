import { useState } from "react";
import { BrowserRouter } from "react-router-dom"
import {About , Contact , Experience , Feedbacks , Hero , Navbar , Tech , Works , StarsCanvas, Preloader, Academic} from './components';
import AlJuthur from './components/AlJuthur';

const App = ()=> {
  const isAlJuthur = window.location.pathname === '/al-juthur';
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
      {loading && !isAlJuthur && (
        <Preloader onLoadComplete={() => setLoading(false)} />
      )}
      {isAlJuthur ? (
        <AlJuthur />
      ) : (
        <div className = "relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar/>
            <Hero/>
          </div>
          <Experience/>
          <Works/>
          <Tech/>
          <Academic/>
          <About/>
          <Feedbacks/>
          <div className="relative z-0">
            <Contact/>
            {!loading && <StarsCanvas/>}
          </div>
        </div>
      )}
    </BrowserRouter>
  )
}

export default App
