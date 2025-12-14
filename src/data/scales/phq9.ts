import { Scale } from '../../types'

const options = [
  { value: 0, label: '完全没有' },
  { value: 1, label: '有几天' },
  { value: 2, label: '超过一半的天数' },
  { value: 3, label: '几乎每天' },
]

export const PHQ9: Scale = {
  id: 'phq9',
  name: '患者健康问卷-9 (PHQ-9)',
  shortName: 'PHQ-9',
  description: 'PHQ-9是一个简短的抑郁症筛查工具，被广泛用于初级保健和心理健康领域。',
  instructions: '在过去两周内，以下问题困扰您的频率是多少？',
  category: 'depression',
  estimatedTime: 3,
  questions: [
    { id: 1, text: '做事时提不起劲或没有兴趣', options },
    { id: 2, text: '感到心情低落、沮丧或绝望', options },
    { id: 3, text: '入睡困难、睡不安稳或睡眠过多', options },
    { id: 4, text: '感觉疲倦或没有活力', options },
    { id: 5, text: '食欲不振或吃太多', options },
    { id: 6, text: '觉得自己很糟糕——或觉得自己很失败，或让自己或家人失望', options },
    { id: 7, text: '对事物专注有困难，例如阅读报纸或看电视', options },
    { id: 8, text: '动作或说话速度缓慢到别人可以察觉？或正好相反——烦躁不安或坐立不安', options },
    { id: 9, text: '有不如死掉或用某种方式伤害自己的念头', options },
  ],
  scoring: [
    { min: 0, max: 4, level: '正常', description: '您目前没有明显的抑郁症状，请继续保持良好的心态', color: '#7BA896' },
    { min: 5, max: 9, level: '轻度', description: '您可能有轻度抑郁倾向，建议关注自身情绪变化，适当放松', color: '#6B9DAD' },
    { min: 10, max: 14, level: '中度', description: '您可能有中度抑郁症状，建议寻求专业心理咨询', color: '#D4A853' },
    { min: 15, max: 19, level: '中重度', description: '您可能有中重度抑郁症状，强烈建议寻求专业帮助', color: '#C9956C' },
    { min: 20, max: 27, level: '重度', description: '您可能有重度抑郁症状，请尽快寻求专业心理或医疗帮助', color: '#C17B6E' },
  ],
}
