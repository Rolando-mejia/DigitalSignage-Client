import axios from "axios";


export const digitalApi = axios.create({
    baseURL: 'http://10.120.1.66:8000/api'
});

const user = JSON.parse(localStorage.getItem('user'));

digitalApi.interceptors.request.use(
    (config) => {
      const token = user?.access;
      if (token) {
        config.headers["Authorization"] = 'Bearer ' + token;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
  digitalApi.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      const originalConfig = err.config;
        
      if (originalConfig.url !== "/auth/" && err.response) {
        // Access Token was expired
        if (err.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true;
  
          try {
            const { data } = await instance.post("/token/refresh/", {
              refresh: user?.refresh,
            });
  
            const { access } = data;

            let newUser = JSON.parse(localStorage.getItem("user"));
            newUser.access = access;
            
            localStorage.setItem("user", JSON.stringify(newUser));
  
            return digitalApi(originalConfig);
          } catch (_error) {
            return Promise.reject(_error);
          }
        }
      }
  
      return Promise.reject(err);
    }
  );