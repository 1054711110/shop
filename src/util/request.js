//1. 导入axios对象
import axios from  "axios";

//2. 用axios创建一个axios的实例
const Server = axios.create({
    baseURL: "",//根域名
    timeout: 3000,//超时时间
});
Server.interceptors.request.use((config)=>{
    return config
}),(error)=>{
    return Promise.reject(error)
}

// 响应拦截器
Server.interceptors.response.use((response)=>{
    return response.data
}),(error)=>{
    return Promise.reject(error)
}

export default Server