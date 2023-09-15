import Laptop from './assets/codelaptop.jpg';

const Info = () => {
    return ( 
        <section className="flex justify-start lg:flex-col lg:justify-center">
        <img src={Laptop} alt="mycode" className='w-48 object-cover h-40 rounded-xl hover:scale-120'/>

         {/* <Lang 
           title='Javascript' 
           desc='A programming language built primarily to give functionality to web pages, but now used in other fields like mobile development'
        /> */}

         <Lang 
           title='Python' 
           desc='A high level dynamic programming language used in many fields like AI/ML, data science, backend development, etc'
        />
        


        </section>
     );
}
 
export default Info;

// eslint-disable-next-line react/prop-types
const Lang = ({title, desc}) => {
    return ( 
        <article className="w-72 m-3 p-3 hover:text-md hover:text-indigo-400 transition-all">
         <h2 className="text-2xl font-bold">{title}</h2>
         <p className="py-1 font-medium">{desc}</p>
         <TestButton/>

        </article>
     );
}

const TestButton = () => {
  return ( 
    <button 
      onClick={() => {alert('clicked')}}
      className='hover:bg-indigo-400 font-semibold p-1 w-36 my-2 mx-auto bg-gray-300 text-gray-950 rounded-lg '
      >
     Test Click
    </button>
   );
}