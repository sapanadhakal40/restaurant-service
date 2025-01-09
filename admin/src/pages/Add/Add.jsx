/* eslint-disable react/prop-types */



import { assets } from '../../assets/assets'
import { useState} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';


const Add = ({url}) => {

    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        name: "",
        description: "",
        category: "Salad",
        price: ""
    })

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
    
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

  const onSubmitHandler = async(event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('category', data.category);
    formData.append('price', Number(data.price));
    
    const response = await axios.post(`${url}/api/food/add`, formData);

    if(response.data.success){
           setData({
            name: "",
            description: "",
            category: "Salad",
            price: ""
        });
        setImage(null);

        toast.success('Product added successfully')
    } else {
      toast.error('Product not added')
    }
    }


  return (
    <div className="flex flex-col items-center  min-h-screen bg-gray-50 p-2">
    <form onSubmit={onSubmitHandler} className="flex flex-col space-y-6 w-full max-w-md bg-white p-4 shadow-md rounded">
        <div className="flex flex-col space-y-2">
            <p>Upload image</p>
            <label htmlFor="image" className="flex items-center space-x-2">
                <img className="h-10 " src={image?URL.createObjectURL(image):assets.upload_area} alt="Upload" />
              
            </label>
            <input type="file" id="image" className="hidden"
            onChange={(e) => setImage(e.target.files[0])} />
            </div>
            <div className="flex flex-col space-y-2">
               <p>Product Name</p>
                <input type="text" className="border border-gray-300 p-2" 
                name="name"
                onChange={onChangeHandler} value={data.name}/>
            </div>

            <div className="flex flex-col space-y-2">
                <p>Product Description</p>
                <textarea className="border border-gray-300 p-2" 
                name="description"
                onChange={onChangeHandler} value={data.description}/>
            </div>

            <div className="flex flex-col space-y-2">
                <p>Product category</p>
                <select className="border border-gray-300 p-2"
                name="category"
                onChange={onChangeHandler} value={data.category}>
                    <option value="Salad">Salad</option>
                    <option value="Rolls">Rolls</option>
                    <option value="Deserts">Deserts</option>
                    <option value="Sandwich">Sandwich</option>
                    <option value="Cake">Cake</option>
                    <option value="Pure Veg">Pure Veg</option>
                    <option value="Pasta">Pasta</option>
                    <option value="Noodles">Noodles</option>



                </select>
            </div>
            <div className="flex flex-col space-y-2">
           <p>Product Price</p>
           <input type="Number" name="price" className="border border-gray-300 p-2"
            onChange={onChangeHandler} value={data.price} />
            </div>

            <button className="bg-blue-500 text-white p-2 rounded" type="submit">Add Product</button>
            </form>
    </div>
  )
}

export default Add


