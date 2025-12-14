import { Scale } from '../../types'

const options = [
  { value: 0, label: '从不' },
  { value: 1, label: '每月1次或更少' },
  { value: 2, label: '每月2-4次' },
  { value: 3, label: '每周2-3次' },
  { value: 4, label: '每周4次或更多' },
]

const frequencyOptions = [
  { value: 0, label: '从不' },
  { value: 1, label: '每月少于1次' },
  { value: 2, label: '每月' },
  { value: 3, label: '每周' },
  { value: 4, label: '每天或几乎每天' },
]

const harmOptions = [
  { value: 0, label: '没有' },
  { value: 2, label: '有，但不是在过去一年内' },
  { value: 4, label: '有，在过去一年内' },
]

export const AUDIT: Scale = {
  id: 'audit',
  name: '酒精使用障碍识别测试 (AUDIT)',
  shortName: 'AUDIT',
  description: 'AUDIT是世界卫生组织开发的酒精滥用风险筛查工具，用于识别危险饮酒和酒精依赖。',
  instructions: '请根据您过去一年的实际情况回答以下问题。',
  category: 'general',
  estimatedTime: 3,
  questions: [
    { id: 1, text: '您多久喝一次含酒精的饮料？', options },
    { id: 2, text: '在您喝酒的日子里，您通常喝多少标准杯？', options: [
      { value: 0, label: '1-2杯' },
      { value: 1, label: '3-4杯' },
      { value: 2, label: '5-6杯' },
      { value: 3, label: '7-9杯' },
      { value: 4, label: '10杯或更多' },
    ]},
    { id: 3, text: '您多久会在一次场合中喝6杯或更多？', options: frequencyOptions },
    { id: 4, text: '在过去一年中，您多久会发现一旦开始喝酒就停不下来？', options: frequencyOptions },
    { id: 5, text: '在过去一年中，您多久会因为喝酒而无法完成通常应该做的事情？', options: frequencyOptions },
    { id: 6, text: '在过去一年中，您多久需要在早上先喝一杯酒才能开始一天的活动？', options: frequencyOptions },
    { id: 7, text: '在过去一年中，您多久会在喝酒后感到内疚或后悔？', options: frequencyOptions },
    { id: 8, text: '在过去一年中，您多久会因为喝酒而无法记住前一天晚上发生的事情？', options: frequencyOptions },
    { id: 9, text: '您或其他人是否因为您喝酒而受伤？', options: harmOptions },
    { id: 10, text: '是否有亲戚、朋友、医生或其他健康工作者对您的饮酒表示担忧或建议您减少饮酒？', options: harmOptions },
  ],
  scoring: [
    { min: 0, max: 7, level: '低风险', description: '您的饮酒处于低风险水平，建议继续保持适度饮酒', color: '#7BA896' },
    { min: 8, max: 15, level: '危险性饮酒', description: '您的饮酒模式存在风险，建议减少饮酒量和频率', color: '#D4A853' },
    { min: 16, max: 19, level: '有害性饮酒', description: '您的饮酒已经对健康造成影响，建议尽快寻求专业帮助', color: '#C9956C' },
    { min: 20, max: 40, level: '可能酒精依赖', description: '您可能存在酒精依赖问题，请立即寻求专业治疗', color: '#C17B6E' },
  ],
}
