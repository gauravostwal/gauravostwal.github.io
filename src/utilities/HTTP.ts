import axios, { AxiosResponse } from 'axios';
const baseURL = 'https://backendapi.turing.com';

export async function get<T>(url: string, data: Object = {}): Promise<AxiosResponse> {
    
    const axiosInstance = axios.create({
        baseURL,
        
        headers: {
            'Content-Type': 'application/json'
           
        },
    });
    const response = await axiosInstance.get(url, {
    });
    if (response.status === 201 || 200) {
        return response;
    } else {
        throw new Error(JSON.stringify(response.data));
    }
}

export async function post<T>(url: string, data: Object = {}): Promise<AxiosResponse> {
    
    const axiosInstance = axios.create({
        baseURL: 'https://backendapi.turing.com',
        
        headers: {
            'Content-Type': 'application/json'
        },
    });

    const response = await axiosInstance.post(url, data);
    if (response.status === 200) {
        return response;
    } else {
        throw new Error(JSON.stringify(response.data.message));
    }
}

export async function put(url, data) {
   
    const axiosInstance = axios.create({
        baseURL,
        headers: {
            'Content-Type': 'application/json'
        },
    });

    const response = await axiosInstance.put(url, data);
    if (response.data.status === 200) {
        return response;
    } else {
        throw new Error(JSON.stringify(response.data));
    }
}

export async function del(url: string) {
    
    const axiosInstance = axios.create({
        baseURL,
        headers: {
            'Content-Type': 'application/json'
        },
    });
    const response = await axiosInstance.delete(url);
    if (response.data.status === 200) {
        return response;
    } else {
        throw new Error(JSON.stringify(response.data));
    }
}
