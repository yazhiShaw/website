import axios from 'axios'
let api = 'https://api.d.maiduote.com'
if (process.env.VUE_APP_TITLE === 'production') {
  api = 'https://api.p.maiduote.com'
} else if (process.env.VUE_APP_TITLE === 'test') {
  api = 'https://api.d.maiduote.com'
}

// 根据销售的手机号查看邀请的患者申请记录
export async function getRecordApi (query = {}) {
  const resp = await axios.get(`${api}/biot/charity/sales/patients/records`, {
    params: query
  })
  return resp.data
}
