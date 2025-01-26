import axiosInstance from './axiosInstance';

export const fetchData = async (endpoint: string): Promise<any> => {
  const { data } = await axiosInstance.get(endpoint);
  return data;
};