import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  return (
    <main>
      <Navbar />
      <h1>Kai Fernandes</h1>
      <p>Software Developer | UX Designer | MS Software Development</p>

      <button>View Projects</button>
      <button>Download Resume</button>
    </main>
  );
}

export default App;
