import Head from './Head'
import './App.css'
import Info from './Info'
// import codeimg from './codelaptop.jpg';
import Laptop from './assets/codelaptop.jpg';

function App() {


  return (
    <main className='bg-black text-white'>
     <Head/>
      <Info/>
  <img src={Laptop} alt="mycode" className='w-64 mx-auto'/>
    </main>
  )
}

export default App