import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Main from './pages/Main'
import PricingScreen from './pages/PricingScreen'


function App() {
  return (
    <>
      <Router>
        <Header />
        <div className='container-2xl h-full mx-auto'>
            <div className='mx-auto h-full max-w-7x1'>
              <div className='bg-black h-full lg:w-full grid grid-rows-[92px_1fr]'>
                <main className='mx-auto py-2 max-w-7xl px-4 sm:px-6 sm:py-4 lg:px-8 w-full overflow-auto'>
                <Routes>
                  <Route path='/' element={<Main />} exact/>
                  <Route path='/pricing' element={<PricingScreen />} />
                </Routes>
                </main>
              </div>
            </div>
          </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
