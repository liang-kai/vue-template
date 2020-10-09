module.exports = [
  {
    type: 'input',
    name: 's-project',
    message: '输入S系统名称'
  },
  {
    type: 'list',
    name: 'isPiwik',
    message: '是否接入行为分析',
    choices: ['Y','N'],
    when: function(answer){
      return answer === 'Y' ? true : false
    }
  }
]