import { Scale } from '../../types'

const options = [
  { value: 0, label: '从不' },
  { value: 1, label: '偶尔' },
  { value: 2, label: '有时' },
  { value: 3, label: '经常' },
  { value: 4, label: '总是' },
]

const reverseOptions = [
  { value: 4, label: '从不' },
  { value: 3, label: '偶尔' },
  { value: 2, label: '有时' },
  { value: 1, label: '经常' },
  { value: 0, label: '总是' },
]

export const PSS10: Scale = {
  id: 'pss10',
  name: '压力知觉量表-10 (PSS-10)',
  shortName: 'PSS-10',
  description: 'PSS-10是评估个体在过去一个月内感知到的压力程度的量表，是最广泛使用的心理压力测量工具之一。',
  instructions: '在过去一个月内，以下情况发生的频率是多少？',
  category: 'stress',
  estimatedTime: 3,
  questions: [
    { id: 1, text: '因为发生了意想不到的事情而感到心烦意乱', options },
    { id: 2, text: '感觉无法控制生活中重要的事情', options },
    { id: 3, text: '感到紧张和有压力', options },
    { id: 4, text: '成功地处理了日常生活中的烦心事', options: reverseOptions },
    { id: 5, text: '感觉自己能有效地应对生活中发生的重要变化', options: reverseOptions },
    { id: 6, text: '对自己处理个人问题的能力感到有信心', options: reverseOptions },
    { id: 7, text: '感觉事情正朝着对自己有利的方向发展', options: reverseOptions },
    { id: 8, text: '发现自己无法应付所有必须做的事情', options },
    { id: 9, text: '能够控制生活中的烦恼', options: reverseOptions },
    { id: 10, text: '感觉自己掌控着一切', options: reverseOptions },
  ],
  scoring: [
    { min: 0, max: 13, level: '低压力', description: '您目前的压力水平较低，心理状态良好', color: '#7BA896' },
    { min: 14, max: 26, level: '中等压力', description: '您目前有一定的压力，建议适当放松和调节', color: '#D4A853' },
    { min: 27, max: 40, level: '高压力', description: '您目前压力较大，建议寻求支持和帮助来缓解压力', color: '#C17B6E' },
  ],
}
