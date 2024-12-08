import React from 'react'

const Watches = () => {
    const WatchDeta=[
        {id:1,name:'Rolex',price:13000,description:'Luxury Watch',image:'anh-tuan-t-jdb2Z56lp5c-unsplash.jpg'},
        {id:2,name:'Omega',price:14000, description:'Luxury Watch', image:'pexels-mitchel-durfee-2310075-6230455.jpg'},
        {id:3,name:'Patek philippe',price:16000,description:'Luxury Watch',image:'hugo-delauney-8kbTP-IDX8A-unsplash.jpg'},
        {id:4,name:'Tag heuer',price:17000,description:'Luxury Watch',image:'hugo-delauney-8kbTP-IDX8A-unsplash.jpg'},
        {id:5,name:'Breitling',price:18000,description:'Luxury Watch',image:'john-torcasio-133Vq4tTpBQ-unsplash.jpg'},
        {id:6,name:'Seiko',price:19000,description:'Luxury Watch',image:'daniel-hay-O703kpzIsQI-unsplash.jpg'},
    ];
  return (
    <div>
      <div className='watches grid grid-cols-1 md:grid-cols-3 gap-10 px-10 my-10 '>
        {
          WatchDeta.map((watch)=>(
            <div key={watch.id} className='watch-card bg-white p-5 rounded-md shadow-md text-center'>
              <img className='w-full rounded-md transition-transform duration-300 transform hover:scale-110 ' src={watch.image} alt={watch.name}

               />
               <h3 className='mt-4 text-2xl font-bold '>{watch.name}</h3>
               <p className='text-gray-500 '>{watch.description}</p>
               <div className='price text-blue-500 text-xl font-semibold mt-2 '>${watch.price}</div>
               <button className='mt-4 px-4 py-2 bg-blue-500 text-white rounded-md'>add to card</button>

            </div>

          )

          

          )
        }

      </div>
      
    </div>
  )
}

export default Watches
