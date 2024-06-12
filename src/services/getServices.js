import axios from "axios";

export const getServices = async () => {
  console.log(process.env.NEXT_PUBLIC_BASE_URL);
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/services/api/get-all`);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getServicesDetails = async (id) => {
  const res = await axios.get(`http://localhost:3000/services/api/${id}`);
  return res.data;
};
