import React, { useEffect, useState } from 'react';
import ProductService from '../service/ProductService';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {
   const [product, setProduct] = useState({
          productName: "",
          description: "",
          price: "",
          status: ""
      })

      const navigate=useNavigate();
      const {id} = useParams();
      console.log(id);
  
      const[msg,setMsg]=useState("");

      useEffect(()=>{
        ProductService.getProductById(id).then((res)=>{
          setProduct(res.data);
        }).catch((error)=>{
          console.log(error);
        })
      },[]);
  
      const handleChange = (e) => {
          const value = e.target.value;
          setProduct({ ...product, [e.target.name]: value });
      };
  
      const ProductUpdate = (e) => {
      e.preventDefault();
  
      console.log(product);
  
      ProductService.editProduct(product)
          .then((res) => {
             navigate("/"); 
          })
          .catch((error) => {
              console.log(error);
          });
  };
  
  
      return (
          <div>
              <div className='container mt-3'>
  
                  <div className='row'>
                      <div className="col-md-6 offset-md-3">
                          <div className='card'>
                              <div className='card-header fs-3 text-center'>
                                  Edit Product
                              </div>
                              {
                                  msg &&
                                  <p className="fs-4 text-center text-success">{msg}</p>
                              }
                              <div className='card-body'>
                                  <form onSubmit={(e) => ProductUpdate(e)}>
                                      <div className='md-3'>
                                          <label>Enter product name</label>
                                          <input
                                              type="text"
                                              name="productName"
                                              className="form-control"
                                              onChange={handleChange}
                                              value={product.productName}
                                          />
                                      </div>
                                      <div className='md-3'>
                                          <label>Enter Description</label>
                                          <input
                                              type="text"
                                              name="description"
                                              className="form-control"
                                              onChange={handleChange}
                                              value={product.description}
                                          />
                                      </div>
                                      <div className='md-3'>
                                          <label>Enter Price</label>
                                          <input
                                              type="number"
                                              name="price"
                                              className="form-control"
                                              onChange={handleChange}
                                              value={product.price}
                                          />
                                      </div>
                                      <div className='md-3'>
                                          <label>Enter Status</label>
                                          <input
                                              type="text"
                                              name="status"
                                              className="form-control"
                                              onChange={handleChange}
                                              value={product.status}
                                          />
                                      </div>
                                     
                                      <button className='btn btn-primary col-md-12'>Update</button>
                                  </form>
                              </div>
  
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      )
}

export default EditProduct
