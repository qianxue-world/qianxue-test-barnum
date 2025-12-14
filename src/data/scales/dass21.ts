import { Scale } from '../../types'

const options = [
  { value: 0, label: '不符合' },
  { value: 1, label: '有时符合' },
  { value: 2, label: '常常符合' },
  { value: 3, label: '总是符合' },
]

export const DASS21: Scale = {
  id: 'dass21',
  name: '抑郁焦虑压力量表 (DASS-21)',
  shortName: 'DASS-21',
  description: 'DASS-21是同时评估抑郁、焦虑和压力三个维度的量表，适用于多症状共存的情况。',
  instructions: '请仔细阅读下面每一条陈述，选择过去一周内该陈述适用于您的程度。',
  category: 'stress',
  estimatedTime: 5,
  questions: [
    { id: 1, text: '我发现自己很难平静下来', options },
    { id: 2, text: '我感到口干', options },
    { id: 3, text: '我似乎一点也体验不到任何愉快的感觉', options },
    { id: 4, text: '我感到呼吸困难（如呼吸过快、喘不过气来）', options },
    { id: 5, text: '我发现自己很难主动去做事情', options },
    { id: 6, text: '我对事情往往反应过度', options },
    { id: 7, text: '我感到颤抖（如手抖）', options },
    { id: 8, text: '我感到自己消耗了很多精力', options },
    { id: 9, text: '我担心自己会在某些场合恐慌并出丑', options },
    { id: 10, text: '我感到自己没有什么可期待的', options },
    { id: 11, text: '我发现自己很容易烦躁', options },
    { id: 12, text: '我发现自己很难放松', options },
    { id: 13, text: '我感到情绪低落、沮丧', options },
    { id: 14, text: '我无法容忍任何阻碍我正在做的事情的因素', options },
    { id: 15, text: '我感到快要恐慌了', options },
    { id: 16, text: '我对任何事情都无法产生热情', options },
    { id: 17, text: '我感到自己作为一个人没有什么价值', options },
    { id: 18, text: '我发现自己很容易被触怒', options },
    { id: 19, text: '我感到心跳异常', options },
    { id: 20, text: '我无缘无故地感到害怕', options },
    { id: 21, text: '我感到生活没有意义', options },
  ],
  scoring: [
    { min: 0, max: 28, level: '正常', description: '您的抑郁、焦虑和压力评分均在正常范围内', color: '#7BA896' },
    { min: 29, max: 42, level: '轻度', description: '您可能存在轻度心理困扰，建议学习压力管理技巧', color: '#6B9DAD' },
    { min: 43, max: 63, level: '中度', description: '您可能存在中度心理问题，建议寻求专业帮助', color: '#D4A853' },
    { min: 64, max: 126, level: '重度', description: '您的心理症状较为严重，请尽快寻求专业医疗帮助', color: '#C17B6E' },
  ],
}
