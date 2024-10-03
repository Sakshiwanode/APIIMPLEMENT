import axios from 'axios';

export const submitFormData = async (formData) => {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
    return response.data;  
  } catch (error) {
    throw error; 
  }
};
