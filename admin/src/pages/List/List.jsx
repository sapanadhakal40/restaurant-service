/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */



import { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FaTrash } from 'react-icons/fa'


const List = ({url}) => {


const [list, setList] = useState([])

const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
  

    if(response.data.success){
        setList(response.data.data)
    }else{
        toast.error('Failed to fetch data')
    }
}

const removeItem = async (foodId) => {
    try {
      const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
      
      if (response.data.success) {
        await fetchList();
        toast.success('Item removed successfully');
      } else {
        throw new Error(response.data.message || 'Failed to remove item');
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

useEffect(() => {
    fetchList()
}, [])


  return (
    <div className="flex flex-col items-center  bg-gray-50 p-6 min-h-screen">
      <p className='font-semibold text-2xl mb-6'>All Foods List</p>

      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 p-4 bg-gray-100 rounded text-center font-semibold border border-gray-300">

            <b>Image</b>
            <b>Name</b>
            <b>Category</b>
            <b>Price</b>
            <b>Action</b>

    </div>


   
    {list.map((item,index) => (
        <div key={index} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 p-2 bg-white rounded text-center border border-gray-300">
            <img src={`${url}/images/`+item.image} alt="" className="h-16 w-16 object-cover rounded mx-auto" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>${item.price}</p>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 cursor-pointer flex items-center justify-center"
              onClick={() => removeItem(item.id)}
            >
              <FaTrash className="mr-2" />
              Delete
            </button>

        
      
           
        </div>
    ))}
    </div>
    </div>
   

  )
}

export default List
