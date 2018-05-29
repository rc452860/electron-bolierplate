const Mock = require('mockjs')

const Random = Mock.Random

module.exports  =  {
  'GET /apiv1/user':Mock.mock({
    username:'sakura',
    nickname:Random.name(),
    remainTime:'12天'
  })
}
