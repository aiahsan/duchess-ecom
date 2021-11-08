import { api } from './baseUrl';
// const headers={ headers: { 'secret': '064422b802876605155a4a549b3a6195', 'user_id':'1' } }
const token="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNThkY2EzMWQ4ZDdiMDAyMzQ2MDQ2OSIsImVtYWlsIjoibWFpbEBtYWlsMS5jb20iLCJwaG9uZSI6IjAzMTIyIiwibmFtZSI6InRlc3QiLCJyZWZlcnJhbE5hbWUiOiJBaHNhbiIsInJvbGVzIjpbInVzZXIiXSwicHJvZmlsZSI6IiIsImlhdCI6MTYzMzIxMzYwMywiZXhwIjoxNjY0MzE3NjAzfQ.osA9-jFn7SnrzZ_Vpwc46FXNZBkCHXuojGCt2zgU5uQ";

const login = async (data) => {
  return await api.post('/users/login', data);
};
const dashboard = async () => {
  return await api.get('/dashboard');
};
//shop
//hair
//accessories
const products = async (type,token1) => {
   return await api.get('/products/type/'+type);
};
const register = async (data) => {
  return await api.post('/users/register', data);
};
const contact = async (data) => {
  return await api.post('/dashboard', data);
};
const email = async (data) => {
  return await api.post('/email', data);
};
const order = async (data) => {
  return await api.post('/orders', data);
};
const coupon = async (data) => {
  return await api.post('/coupon/validate', data);
};
const wishlist=async ()=>{
  return await api.get('/dashboard/wishlist')
}
const cart=async ()=>{
  return await api.get('/dashboard/cart')
}
const getproductbyname=async (name)=>{
  return await api.get('products/getbyname/'+name)
}
const getblogbyname=async (name)=>{
  return await api.get('blog/getbyname/'+name)
}
const blogs=async ()=>{
  return await api.get('/blog')
}
export const repository = {
  login,
  register,
  dashboard,
  contact,
  products,
  wishlist,
  cart,
  blogs,
  email,
  getproductbyname,
  getblogbyname,
  coupon,order
};
