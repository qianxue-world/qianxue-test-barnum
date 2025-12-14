import { Scale } from '../../types'

const options = [
  { value: 0, label: '完全没有' },
  { value: 1, label: '轻微' },
  { value: 2, label: '中等' },
  { value: 3, label: '相当' },
  { value: 4, label: '极度' },
]

export const PCL5: Scale = {
  id: 'pcl5',
  name: '创伤后应激障碍检查表 (PCL-5)',
  shortName: 'PCL-5',
  description: 'PCL-5是评估创伤后应激障碍(PTSD)症状的量表，用于创伤幸存者的心理评估。',
  instructions: '以下是人们在经历压力性或创伤性事件后可能出现的问题。请选择在过去一个月内该问题困扰您的程度。',
  category: 'stress',
  estimatedTime: 6,
  questions: [
    { id: 1, text: '反复出现关于压力性经历的令人不安的记忆、想法或画面', options },
    { id: 2, text: '反复做关于压力性经历的令人不安的梦', options },
    { id: 3, text: '突然感觉或表现得好像压力性经历正在再次发生', options },
    { id: 4, text: '当有事物提醒您压力性经历时感到非常不安', options },
    { id: 5, text: '当有事物提醒您压力性经历时有强烈的身体反应', options },
    { id: 6, text: '避免与压力性经历相关的记忆、想法或感受', options },
    { id: 7, text: '避免能让您想起压力性经历的外部提醒物', options },
    { id: 8, text: '无法记住压力性经历的重要部分', options },
    { id: 9, text: '对自己、他人或世界有强烈的负面信念', options },
    { id: 10, text: '责怪自己或他人导致了压力性经历或之后发生的事情', options },
    { id: 11, text: '有强烈的负面情绪，如恐惧、惊恐、愤怒、内疚或羞耻', options },
    { id: 12, text: '对您曾经喜欢的活动失去兴趣', options },
    { id: 13, text: '感觉与他人疏远或隔绝', options },
    { id: 14, text: '难以体验积极的情绪', options },
    { id: 15, text: '易怒、愤怒爆发或表现出攻击性行为', options },
    { id: 16, text: '冒过多的风险或做可能伤害自己的事情', options },
    { id: 17, text: '处于"高度警觉"或警惕或戒备状态', options },
    { id: 18, text: '容易受惊或被吓到', options },
    { id: 19, text: '难以集中注意力', options },
    { id: 20, text: '入睡或保持睡眠困难', options },
  ],
  scoring: [
    { min: 0, max: 19, level: '无明显症状', description: '您目前没有明显的创伤后应激症状', color: '#7BA896' },
    { min: 20, max: 32, level: '轻度', description: '您可能存在轻度创伤后应激症状，建议关注自身状态', color: '#6B9DAD' },
    { min: 33, max: 49, level: '中度', description: '您可能存在中度创伤后应激症状，建议寻求专业帮助', color: '#D4A853' },
    { min: 50, max: 80, level: '重度', description: '您的创伤后应激症状较为严重，请尽快寻求专业帮助', color: '#C17B6E' },
  ],
}
