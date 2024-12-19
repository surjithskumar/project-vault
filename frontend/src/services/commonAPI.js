import axios from "axios"

export const commonAPI = async(httpRequset,url,reqBody,reqHeader) => {
    const reqConfig={
        method:httpRequset,
        url,
        data:reqBody,
        headers:reqHeader?reqHeader:{"Content-Type":"application/json"}
    }
    return await axios(reqConfig).then(res=>{
        return res
    }).catch(err =>{
        return err
    })
}