import axios, { AxiosError } from 'axios';
import useAuth from './auth';
// import { toast } from '../components/ui/use-toast';

const useAxios = () => {
  const { token, logout } = useAuth();

  const instance = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/api/`,
  });

  instance.interceptors.request.use(
    async (config) => {
      const newConfig = { ...config };

      if (newConfig.headers && token) {
        newConfig.headers.Authorization = `Bearer ${token}`;
      }

      return newConfig;
    },
    (error) => Promise.reject(error)
  );

  instance.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        // toast({ description: 'Please login again' });
        logout();
      }
      return Promise.reject(error);
    }
  );

  return { instance };
};

export default useAxios;
