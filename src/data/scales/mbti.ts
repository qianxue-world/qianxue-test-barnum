import { Scale } from '../../types'

export const MBTI: Scale = {
  id: 'mbti',
  name: '迈尔斯-布里格斯类型指标 (MBTI)',
  shortName: 'MBTI',
  description: 'MBTI是一种职业性格测试，通过四个维度（外向/内向、感觉/直觉、思考/情感、判断/知觉）来识别16种人格类型。',
  instructions: '请根据您的第一反应选择更符合您的选项。没有对错之分，选择最能代表您真实想法和行为的答案。',
  category: 'personality',
  estimatedTime: 8,
  questions: [
    { id: 1, text: '在社交聚会后，你通常感到：', options: [
      { value: 1, label: '精力充沛，想继续社交' },
      { value: 0, label: '需要独处来恢复精力' },
    ]},
    { id: 2, text: '你更喜欢：', options: [
      { value: 1, label: '与很多人交往' },
      { value: 0, label: '与少数亲密的朋友交往' },
    ]},
    { id: 3, text: '在工作中，你更喜欢：', options: [
      { value: 1, label: '团队合作，经常讨论' },
      { value: 0, label: '独立工作，安静思考' },
    ]},
    { id: 4, text: '你通常：', options: [
      { value: 1, label: '先说后想' },
      { value: 0, label: '先想后说' },
    ]},
    { id: 5, text: '你的朋友会说你：', options: [
      { value: 1, label: '容易了解，开放' },
      { value: 0, label: '需要时间才能了解' },
    ]},
    { id: 6, text: '你更关注：', options: [
      { value: 1, label: '现实和具体的事实' },
      { value: 0, label: '可能性和未来' },
    ]},
    { id: 7, text: '你更信任：', options: [
      { value: 1, label: '经验和实际证据' },
      { value: 0, label: '直觉和灵感' },
    ]},
    { id: 8, text: '你更喜欢的信息是：', options: [
      { value: 1, label: '具体、详细的' },
      { value: 0, label: '概括、整体的' },
    ]},
    { id: 9, text: '你更擅长：', options: [
      { value: 1, label: '记住具体的事实和细节' },
      { value: 0, label: '看到事物之间的联系和模式' },
    ]},
    { id: 10, text: '你更喜欢：', options: [
      { value: 1, label: '使用已经学会的技能' },
      { value: 0, label: '学习新的技能' },
    ]},
    { id: 11, text: '做决定时，你更看重：', options: [
      { value: 1, label: '逻辑和客观分析' },
      { value: 0, label: '个人价值观和对他人的影响' },
    ]},
    { id: 12, text: '你认为更重要的是：', options: [
      { value: 1, label: '公正和真实' },
      { value: 0, label: '和谐和体谅' },
    ]},
    { id: 13, text: '当朋友遇到问题时，你倾向于：', options: [
      { value: 1, label: '帮助分析问题，提供解决方案' },
      { value: 0, label: '倾听和提供情感支持' },
    ]},
    { id: 14, text: '你更容易被说服通过：', options: [
      { value: 1, label: '逻辑论证' },
      { value: 0, label: '情感诉求' },
    ]},
    { id: 15, text: '在冲突中，你更关注：', options: [
      { value: 1, label: '谁是对的' },
      { value: 0, label: '每个人的感受' },
    ]},
    { id: 16, text: '你更喜欢：', options: [
      { value: 1, label: '事先计划好' },
      { value: 0, label: '随机应变' },
    ]},
    { id: 17, text: '你的工作风格是：', options: [
      { value: 1, label: '按时完成，避免最后一刻' },
      { value: 0, label: '在截止日期前才有动力' },
    ]},
    { id: 18, text: '你更喜欢的环境是：', options: [
      { value: 1, label: '有序、有组织的' },
      { value: 0, label: '灵活、开放的' },
    ]},
    { id: 19, text: '做决定时，你倾向于：', options: [
      { value: 1, label: '尽快做出决定' },
      { value: 0, label: '保持选择开放' },
    ]},
    { id: 20, text: '你更喜欢：', options: [
      { value: 1, label: '完成一件事再开始另一件' },
      { value: 0, label: '同时进行多个项目' },
    ]},
  ],
  scoring: [
    { min: 0, max: 5, level: 'INFP/INFJ型', description: '您倾向于内向、直觉、情感型人格', color: '#7BA896' },
    { min: 6, max: 10, level: 'ISFP/ISFJ型', description: '您倾向于内向、感觉、情感型人格', color: '#6B9DAD' },
    { min: 11, max: 15, level: 'ENTP/ENTJ型', description: '您倾向于外向、直觉、思考型人格', color: '#D4A853' },
    { min: 16, max: 20, level: 'ESTJ/ESTP型', description: '您倾向于外向、感觉、思考型人格', color: '#C9956C' },
  ],
}
