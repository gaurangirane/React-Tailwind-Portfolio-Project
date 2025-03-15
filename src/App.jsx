import Banner from './components/Banner';
import Navbar from './components/Navbar';
import About from './components/About';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="overflow-x-hidden text-gray-800 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>
      
      <div className="container mx-auto px-8">
        <Navbar />
        <Banner />
        <About />
        <Technologies />
        <Experience />
        <Contact />
      </div>
      
    </div>
  )
}

export default App;
