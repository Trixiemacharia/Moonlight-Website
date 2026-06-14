import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
});

export const getRestaurantInfo = () => api.get('/info/');
export const getMenuCategories  = () => api.get('/menu/categories/');
export const getReviews         = () => api.get('/reviews/');
export const createReservation  = (data) => api.post('/reservations/', data);

export default api;
