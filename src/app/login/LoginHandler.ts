"use server"
import env from "node:process"
import { cookies } from 'next/headers'
const loginHandler = async (formData:FormData) => {
    try{
    const api_gateway = ""+process.env.API_GATEWAY+"/login"
    const req = {
      username:formData.get("username"),
      password:formData.get("password")
    }
    const data:any = await fetch(api_gateway, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req)
      })
    const res :any= await data.json()
    if(res.status == "success"){
        cookies().set('AuthToken', res.data.token)
        return "ok";
    }else{
      // console.log("error")
      return JSON.stringify(res)
    }
  }catch(err){
    // console.log(err)
    throw err
  }
}
export default loginHandler