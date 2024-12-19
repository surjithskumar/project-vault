import { commonAPI } from "./commonAPI";
import { server_url } from "./serverurl";

// registerAPI

export const registerAPI = async(user)=>{
    return await commonAPI('POST', `${server_url}/register`,user,"")
}

// login api

export const loginAPI = async(user)=>{
    return await commonAPI('POST',`${server_url}/login`,user,"")
}

//addProjectAPI

export const addProjectAPI = async(reqBody,reqHeader)=>{
    return await commonAPI('POST',`${server_url}/add-project`,reqBody,reqHeader)
}

//get Home Project
export const getHomeProjectAPI= async()=>{
    return await commonAPI('GET',`${server_url}/home-project`,"","");
}

//get All Project
export const getAllProjectAPI= async(reqHeader)=>{
    return await commonAPI('GET',`${server_url}/all-project`,"",reqHeader);
}

//get User Project
export const getUserProjectAPI= async(reqHeader)=>{
    return await commonAPI('GET',`${server_url}/user-project`,"",reqHeader);
}