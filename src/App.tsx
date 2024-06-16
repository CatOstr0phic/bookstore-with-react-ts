import "./App.css";
import MobileNavbars from "./components/MobileNavbars";
import Navbar from "./components/Navbar";
import Container from "./layouts/Container";
import AboutBook from "./Screen/AboutBook";
import Home from "./Screen/Home";
import Test from "./components/test";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useStateValue } from "./redux/StateProvider";
import Basket from "./Screen/Basket";
import Favourite from "./Screen/Favourite";
import Genres from "./Screen/Genres";
import { SnackbarProvider } from "notistack";
import Footer from "./components/Footer";

function App() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
    >
      <Router>
        <MobileNavbars />
        <>
          <Navbar />
        </>
        <Routes>
          <Route path="/test" element={<Test />} />
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/favourite" element={<Favourite />} />

          <Route path="/genres" element={<Genres />} />
          <Route path={`/book/:${basket}`} element={<AboutBook />} />
        </Routes>
      </Router>
      <Footer/>
    </SnackbarProvider>
  );
}
export default App;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className='bg-red-700 w-100'>
//       hello
//       <div className=''>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

// export default App
