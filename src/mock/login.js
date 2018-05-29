const Mock = require('mockjs');

const Random = Mock.Random
const loginSuccess = Mock.mock({
  'token': Random.string('lower', 32),
  'status': 'success'
})

const loginFail = Mock.mock({'code': '01', 'status': 'failure', 'message': '用户名或密码不正确'})


module.exports =  {
  'POST /apiv1/user/login': (req, res) => {
    if (req.body.username === 'sakura' && req.body.password === 'killer') {
      res.json(loginSuccess)
    } else {
      res.json(loginFail)
    }
  }
}
