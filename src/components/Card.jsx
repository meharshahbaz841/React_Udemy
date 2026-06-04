
export default function Card() {
  return (
    <div className='border-2 rounded-2xl w-3xs p-2'>
         <img className='w-full h-32' src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
         <h1 className='text-2xl'>Item</h1>
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum nostrum
           exercitationem velit facilis deleniti hic dignissimos odio possimus, ea consequatur,            
         </p>
          <button className='w-40 border rounded-md text-white bg-blue-500 mt-1.5'>Click to buy</button>
      </div>    
  )
}
