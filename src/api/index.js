import axios from "axios";

const getListProvincias = () => axios({
  method: 'get',
  url: 'https://www.el-tiempo.net/api/json/v2/provincias'
})

const getTiempoProvincia = codProvincia => axios({
  method: 'get',
  url: `https://www.el-tiempo.net/api/json/v2/provincias/${codProvincia}`
})

export default {
  getListProvincias,
  getTiempoProvincia
}