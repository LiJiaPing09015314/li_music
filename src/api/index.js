import axios from '../../src/libs/http'
export const indexapi ={
  // 发现页私人FM
  personalFm:()=>{
    return axios.request({
      url:'/personal_fm',
      method:'GET',  
    })
  }
}