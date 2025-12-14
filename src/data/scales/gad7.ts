import { Scale } from '../../types'

const options = [
  { value: 0, label: '完全没有' },
  { value: 1, label: '有几天' },
  { value: 2, label: '超过一半的天数' },
  { value: 3, label: '几乎每天' },
]

export const GAD7: Scale = {
  id: 'gad7',
  name: '广泛性焦虑障碍量表-7 (GAD-7)',
  shortName: 'GAD-7',
  description: 'GAD-7是一个简短的焦虑症筛查工具，用于评估广泛性焦虑障碍的严重程度。',
  instructions: '在过去两周内，以下问题困扰您的频率是多少？',
  category: 'anxiety',
  estimatedTime: 2,
  questions: [
    { id: 1, text: '感到紧张、焦虑或急切', options },
    { id: 2, text: '不能停止或控制担忧', options },
    { id: 3, text: '对各种各样的事情担忧过多', options },
    { id: 4, text: '很难放松下来', options },
    { id: 5, text: '由于不安而无法静坐', options },
    { id: 6, text: '变得容易烦恼或急躁', options },
    { id: 7, text: '感到似乎将有可怕的事情发生而害怕', options },
  ],
  scoring: [
    { min: 0, max: 4, level: '正常', description: '您目前没有明显的焦虑症状，心态平和', color: '#7BA896' },
    { min: 5, max: 9, level: '轻度', description: '您可能有轻度焦虑症状，建议适当放松和调节', color: '#6B9DAD' },
    { min: 10, max: 14, level: '中度', description: '您可能有中度焦虑症状，建议寻求专业帮助', color: '#D4A853' },
    { min: 15, max: 21, level: '重度', description: '您可能有重度焦虑症状，请尽快寻求专业心理帮助', color: '#C17B6E' },
  ],
}
