const Mock = require('mockjs')

const Random = Mock.Random

module.exports = {
  'GET /apiv1/nodes':Mock.mock({
      'list|10':[{
        node_name:'test',
        node_ip:'127.0.0.1',
        node_balance:'100%',
        node_ping:'100ms'
      }]
  })
}
