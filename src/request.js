import axios from './index'   //二次封装

export const getList=(page,pageSize)=>{		
  return axios.get("/pagelist",{params:{page,pageSize}})
}