import axios from "axios";

const API_URL = "https://plwtrrnmwjgkyuhhwcxn.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsd3Rycm5td2pna3l1aGh3Y3huIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM4NzQwNTAsImV4cCI6MjA1OTQ1MDA1MH0.79BAEowAb04foqX40tHm11sq5AfxWL0CLxLQ7QXlA8g";

export const getProducts = async () => {
  const response = await axios.get(`${API_URL}/products`, {
    headers: { "x-api-key": API_KEY },
  });
  return response.data;
};

export const createProduct = async (product) => {
  const response = await axios.post(`${API_URL}/products`, product, {
    headers: { "x-api-key": API_KEY },
  });
  return response.data;
};

export const updateProduct = async (id, product) => {
  const response = await axios.put(`${API_URL}/products/${id}`, product, {
    headers: { "x-api-key": API_KEY },
  });
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await axios.delete(`${API_URL}/products/${id}`, {
    headers: { "x-api-key": API_KEY },
  });
  return response.data;
};
