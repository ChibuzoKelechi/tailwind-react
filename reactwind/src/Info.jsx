const Info = () => {
    return ( 
        <section className="">
         <Lang 
           title='Javascript' 
           desc='A programming language built primarily to give functionality to web pages, but now used in other fields like mobile development'
        />

         <Lang 
           title='Python' 
           desc='A high level dynamic programming language used in many fields like machine learning, data science, etc'
        />
        </section>
     );
}
 
export default Info;

// eslint-disable-next-line react/prop-types
const Lang = ({title, desc}) => {
    return ( 
        <article className="m-3 p-3">
         <h2 className="text-2xl font-bold">{title}</h2>
         <p className="py-1 font-medium">{desc}</p>
        </article>
     );
}