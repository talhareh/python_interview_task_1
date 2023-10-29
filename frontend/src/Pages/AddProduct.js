

import axios from 'axios';
import React,{useState} from 'react';
import NavBar from "../Components/NavBar/NavBar";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  let [file, setFile] = useState(null);
  /**
   * Create a new state variable to hold the name of the
   * file. This is needed since the browser does not retain
   * the filename by default when uploading. 
   */
  let [filename, setFilename] = useState('');

  const filterBySize = (file) => {
    //filter out files larger than 5MB
    return file.size < 5242880;
  };

const fileChangedHandler = event => {
  let file = event.target.files[0];
  let reader = new FileReader();
  /**Capture filename */
  setFilename(file.name);
  console.log(file);
  reader.onload = function(e) {

    setFile(e.target.result);
  };
  reader.readAsDataURL(event.target.files[0]);

  if (file != ".png" || file !=".jpg" ) {
    window.alert("File does not support. You must use .png or .jpg ");
    return false;
 }
//  if (file.size > e6) {
//    window.alert("Please upload a file smaller than 1 MB");
//    return false;
//  }
 
}};
const AddProduct = () =>{

    const[image , setImage ] = useState(null)
    const[name , setName ] = useState("")
    const[price , setPrice ] = useState("")
    const[description , setDescription ] = useState("")
    const[category , setCategory ] = useState("")

    const navigate = useNavigate();
    const AddProductInfo = async () => {
        let formField = new FormData()
        formField.append('name',name)
        formField.append('price',price)
        formField.append('description',description)
        formField.append('category',category)
        if(image !== null) {
            formField.append('image', image)
          }
          if (image != ".jpeg" || image !=".jpg" ) {
            window.alert("File does not support. You must use .png or .jpg ");
            return false;
         }
        await axios({
            method: 'post',
            url:'http://127.0.0.1:8000/api/productview/',
            data: formField
          }).then(response=>{
            console.log(response.data);
            alert("image added success");
            navigate('/ShowProduct')

          })
      }  
      
    return(
      <div>
      <NavBar homepage />
        <div>
           
         <div className="container">
         <h2 className="text-center mb-4 P-5">Add A Image</h2>
      <div className="w-75 mx-auto shadow p-5 topma">
        
        
        <div className="form-group">

        <div className="form-group OO">
          <div className="w-full md:w-2/2 px-3 mb-6 md:mb-0 tses">
       
        <input type="file" className="appearance-none block w-full  text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
             placeholder='image'
             name='image'
             accept="image/*"
            // onChange={fileChangedHandler}/>
           onChange={(e)=>setImage(e.target.files[0])} />
            </div></div>
        
            <div className="form-group OO">
          <div className="w-full md:w-2/2 px-3 mb-6 md:mb-0 tses">
            <input type="text" className="appearance-none block w-full  text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
             placeholder='name'
             name='name'
             value={name}
            onChange={(e)=>setName(e.target.value)}/>
            </div>
            </div>

            <div className="form-group OO">
          <div className="w-full md:w-2/2 px-3 mb-6 md:mb-0 tses">   
            <input type="text" className="appearance-none block w-full  text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
             name='price'
             placeholder='price'
             value={price}
            onChange={(e)=>setPrice(e.target.value)}/>
            </div>
        </div>
          <div className="form-group OO">
          <div className="w-full md:w-2/2 px-3 mb-6 md:mb-0 tses">    
            <input type="textarea" className="appearance-none block w-full  text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
             placeholder='description'
             name='description'
             value={description}
            onChange={(e)=>setDescription(e.target.value)}/>
            </div>
              </div>
              <div className="form-group OO">
          <div className="w-full md:w-2/2 px-3 mb-6 md:mb-0 tses">
              
             <input type="text" className="appearance-none block w-full  text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
             placeholder='category'
             name='category'
             value={category}
            onChange={(e)=>setCategory(e.target.value)}/>
            </div></div>
            <button className="bg-[#4d0358] w-[150px] rounded-md font-bold text-xl py-3 text-black hover:#975d9f hover:scale-110"  onClick={AddProductInfo}>Add Image</button>


          </div>
          </div>
      
        </div>
        </div>
      </div>

    );
};

export default AddProduct;

// import { useState } from "react";
//     // CORS error might come as django has appendslash middleware acting, we need to put slash for requestimport Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Swal from "sweetalert2";
// import NavBar from "../Components/NavBar/NavBar";
// export const baseUrl = "http://127.0.0.1:8000/api/" 

// function AddProduct() {

//     const[image , setImage ] = useState(null)
//     const[name , setName ] = useState("")
//     const[price , setPrice ] = useState("")
//     const[description , setDescription ] = useState("")
//     const[category , setCategory ] = useState("")
//     const navigate = useNavigate();
    
//     const handleSubmit = (e) => {
//       e.preventDefault()
//         const body = JSON.stringify({
//           image,
//           name,
//           price,
//           description,
//           category
//         });
//         if (name.length == 0 ){
//           Swal.fire({
//             position: 'center',
//             icon: 'warning',
//             title: 'Invalid Data',
//             showConfirmButton: false,
//             timer: 1500
//           })
//         }
//         else{
//         e.preventDefault();
//         axios
//           .post(`${baseUrl}addproduct/`, body, {
//             headers: { "Content-Type": "application/json" },
//           })
//           .then((response) => {
//             console.log(response.status)
//             if (response.status === 200) {
//               console.log("login");
//             } else {
//               Swal.fire({
//                 position: "center",
//                 icon: "warning",
//                 title: response.data.error,
//                 showConfirmButton: false,
//                 timer: 1500,
//               });
//             }
//           })
//           .catch((err) => {
//             Swal.fire({
//               position: "center",
//               icon: "warning",
//               title: err.data.error,
//               showConfirmButton: false,
//               timer: 1500,
//             });
//           });
//       };}

//     return (
//         <div>
//           <NavBar homepage />
//             {/* Section Design Block */}
//             <section style={{backgroundImage: "url('../../../Images/homepage_bg.jpg')"}} className="bg-cover w-full  mx-auto text-center flex flex-col justify-center items-center">
//                 {/* Background Image */}
//                 <div className="bg-black p-10 bg-opacity-25">
//                 <form onSubmit={handleSubmit} className=" w-full max-w-lg">
//                 <div className="flex flex-wrap -mx-3 mb-6">
//                     <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//                     <label className="block uppercase tracking-wide text-gray-900 text-lg font-bold mb-2" htmlFor="grid-first-name">
//                         image
//                     </label>
//                     <input name="image" value={image}
//                         onChange={(e) => {
//                           setImage(e.target.value);
//                         }} className="appearance-none block w-full bg-gray-200 text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="file" />
//                     </div>
//                     <div className="w-full md:w-1/2 px-3">
//                     <label className="block uppercase tracking-wide text-gray-900 text-lg font-bold mb-2" htmlFor="grid-last-name">
//                         name
//                     </label>
//                     <input name="name" value={name}
//                         onChange={(e) => {
//                           setName(e.target.value);
//                         }} className="appearance-none block w-full bg-gray-200 text-gray-900 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text"/>
//                     </div>
//                 </div>
//                 <div className="flex flex-wrap -mx-3 mb-6">
//                     <div className="w-full px-3 mb-6 md:mb-0">
//                     <label className="block uppercase tracking-wide text-gray-900 text-lg font-bold mb-2" htmlFor="grid-username">
//                         price
//                     </label>
//                     <input name="price" value={price} onChange={(e) => {
//                               setPrice(e.target.value);
//                             }} className="appearance-none block w-full bg-gray-200 text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-username" type="text"  />
//                     </div>
//                 </div>
//                 <div className="flex flex-wrap -mx-3 mb-6">
//                     <div className="w-full px-3 mb-6 md:mb-0">
//                     <label className="block uppercase tracking-wide text-gray-900 text-lg font-bold mb-2" htmlFor="grid-email">
//                     description
//                     </label>
//                     <input name="description" value={description}
//                         onChange={(e) => {
//                           setDescription(e.target.value);
//                         }} className="appearance-none block w-full bg-gray-200 text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="text" />
//                     </div>
//                 </div>
//                 <div className="flex flex-wrap -mx-3 mb-6">
//                     <div className="w-full px-3">
//                     <label className="block uppercase tracking-wide text-gray-900 text-lg font-bold mb-2" >
//                         category
//                     </label>
//                     <input name="category" value={category}
//                         onChange={(e) => {
//                           setCategory(e.target.value);
//                         }} className="appearance-none block w-full bg-gray-200 text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" />
//                     {/* <label className="block uppercase tracking-wide text-gray-900 text-lg font-bold mb-2" htmlFor="grid-re-password">
//                         Retype Password
//                     </label>
//                     <input className="appearance-none block w-full bg-gray-200 text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-re-password" type="password" placeholder="******************" />
//                     <p className="text-gray-900 text-lg italic"></p> */}
//                     </div>
//                 </div>
//                 <button className="bg-[#6ce7ae] w-[150px] rounded-md font-bold text-xl py-3 text-black hover:bg-white hover:scale-110">Signup</button>
//                 </form>
//                 </div>
//             </section>
//         </div>
//     )
// }

