module.exports = [
  {
    type: 'input',
    name: 'SProjectName',
    message: '输入S系统名称'
  },
  {
    type: 'input',
    name: 'isPiwik',
    message: '是否接入行为分析',
    // choices: ['Y','N'],
    // when: function(answer){
    //   return answer === 'Y' ? true : false
    // }
  }
]
