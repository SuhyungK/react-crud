import axios from 'axios';

export const getProduct = async () => {
  return await axios.get("https://fakestoreapi.com/products")
}

export const getOneProduct = async (productId) => {
  return await axios.get(`https://fakestoreapi.com/products/${productId}`)
}