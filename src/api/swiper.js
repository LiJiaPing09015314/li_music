import axios from '../../src/libs/http'
export const bannerSwiper ={
  bannerSwiperFn:()=>{
    return axios.request({
      url:'/banner?type=1',
      method:'GET',
      
    })
  }
}