import axios from "axios";

const API_URL="https://product-management-system-backend-ax88.onrender.com";


class ProductService{

    saveProduct(product){
        return axios.post(API_URL+"/saveProduct",product);

    }

   getAllProduct(){
    return axios.get(API_URL+"/getAllProducts");
}
    getProductById(id){
        return axios.get(API_URL+"/"+id);
    }
    deleteProduct(id){
    return axios.delete(API_URL+"/DeleteProduct/"+id);
}
    editProduct(product){
    return axios.post(
        API_URL+"/saveProduct/"+product.id,
        product
    );
}

}
const productService = new ProductService();

export default productService;