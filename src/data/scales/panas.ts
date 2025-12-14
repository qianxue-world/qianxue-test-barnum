import { Scale } from '../../types'

const options = [
  { value: 1, label: '非常轻微或没有' },
  { value: 2, label: '比较轻微' },
  { value: 3, label: '中等程度' },
  { value: 4, label: '比较强烈' },
  { value: 5, label: '非常强烈' },
]

export const PANAS: Scale = {
  id: 'panas',
  name: '积极与消极情感量表 (PANAS)',
  shortName: 'PANAS',
  description: 'PANAS是评估个体在过去一周内感受到的积极和消极情绪程度的量表。',
  instructions: '请阅读每一个词语，选择最能描述您在过去一周内感受程度的选项。',
  category: 'general',
  estimatedTime: 4,
  questions: [
    { id: 1, text: '感兴趣的', options },
    { id: 2, text: '心烦的', options },
    { id: 3, text: '兴奋的', options },
    { id: 4, text: '心神不宁的', options },
    { id: 5, text: '坚强的', options },
    { id: 6, text: '内疚的', options },
    { id: 7, text: '恐惧的', options },
    { id: 8, text: '敌意的', options },
    { id: 9, text: '热情的', options },
    { id: 10, text: '自豪的', options },
    { id: 11, text: '易怒的', options },
    { id: 12, text: '警觉的', options },
    { id: 13, text: '羞愧的', options },
    { id: 14, text: '受鼓舞的', options },
    { id: 15, text: '紧张的', options },
    { id: 16, text: '坚定的', options },
    { id: 17, text: '专注的', options },
    { id: 18, text: '心神不定的', options },
    { id: 19, text: '活跃的', options },
    { id: 20, text: '害怕的', options },
  ],
  scoring: [
    { min: 20, max: 45, level: '情绪状态需关注', description: '您的积极情感偏低或消极情感偏高，建议寻求支持', color: '#C17B6E' },
    { min: 46, max: 60, level: '情绪状态一般', description: '您的情绪状态一般，建议适当增加愉快活动', color: '#D4A853' },
    { min: 61, max: 80, level: '情绪状态较好', description: '您的情绪状态较好，积极情感较高', color: '#6B9DAD' },
    { min: 81, max: 100, level: '情绪状态良好', description: '您的情绪状态良好，请继续保持积极的生活方式', color: '#7BA896' },
  ],
}
