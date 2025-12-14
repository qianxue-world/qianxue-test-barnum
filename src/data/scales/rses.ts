import { Scale } from '../../types'

const options = [
  { value: 1, label: '非常不同意' },
  { value: 2, label: '不同意' },
  { value: 3, label: '同意' },
  { value: 4, label: '非常同意' },
]

const reverseOptions = [
  { value: 4, label: '非常不同意' },
  { value: 3, label: '不同意' },
  { value: 2, label: '同意' },
  { value: 1, label: '非常同意' },
]

export const RSES: Scale = {
  id: 'rses',
  name: 'Rosenberg自尊量表 (RSES)',
  shortName: 'RSES',
  description: 'RSES是由Rosenberg于1965年编制的自尊测量工具，是目前使用最广泛的自尊量表之一。',
  instructions: '请仔细阅读下面每一条陈述，并选择最符合您实际情况的选项。',
  category: 'general',
  estimatedTime: 3,
  questions: [
    { id: 1, text: '我感到自己是一个有价值的人，至少与其他人在同一水平上', options },
    { id: 2, text: '我感到自己有许多好的品质', options },
    { id: 3, text: '归根结底，我倾向于觉得自己是一个失败者', options: reverseOptions },
    { id: 4, text: '我能像大多数人一样把事情做好', options },
    { id: 5, text: '我感到自己值得自豪的地方不多', options: reverseOptions },
    { id: 6, text: '我对自己持肯定态度', options },
    { id: 7, text: '总的来说，我对自己是满意的', options },
    { id: 8, text: '我希望我能为自己赢得更多尊重', options: reverseOptions },
    { id: 9, text: '我确实时常感到自己毫无用处', options: reverseOptions },
    { id: 10, text: '我时常认为自己一无是处', options: reverseOptions },
  ],
  scoring: [
    { min: 10, max: 19, level: '低自尊', description: '您的自尊水平较低，建议寻求专业心理咨询帮助', color: '#C17B6E' },
    { min: 20, max: 24, level: '偏低自尊', description: '您的自尊水平偏低，建议多关注自己的优点和成就', color: '#D4A853' },
    { min: 25, max: 29, level: '中等自尊', description: '您的自尊水平处于中等范围，总体上对自己有较为积极的评价', color: '#6B9DAD' },
    { min: 30, max: 40, level: '高自尊', description: '您的自尊水平较高，对自己有积极正面的评价', color: '#7BA896' },
  ],
}
