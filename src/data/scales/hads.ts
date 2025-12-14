import { Scale } from '../../types'

export const HADS: Scale = {
  id: 'hads',
  name: '医院焦虑抑郁量表 (HADS)',
  shortName: 'HADS',
  description: 'HADS是快速筛查焦虑和抑郁的量表，特别适用于躯体疾病伴随心理问题的患者。',
  instructions: '请仔细阅读下面每一个问题，选择最能说明您在过去一周感受的答案。',
  category: 'anxiety',
  estimatedTime: 4,
  questions: [
    { id: 1, text: '我感到紧张或"心神不宁"', options: [
      { value: 3, label: '大部分时间' },
      { value: 2, label: '很多时间' },
      { value: 1, label: '有时' },
      { value: 0, label: '完全没有' },
    ]},
    { id: 2, text: '我仍然喜欢以前喜欢的事情', options: [
      { value: 0, label: '和以前一样' },
      { value: 1, label: '不如以前那么多' },
      { value: 2, label: '只有一点点' },
      { value: 3, label: '几乎完全没有' },
    ]},
    { id: 3, text: '我有一种害怕的感觉，好像有什么可怕的事情将要发生', options: [
      { value: 3, label: '非常肯定，而且很严重' },
      { value: 2, label: '是的，但不太严重' },
      { value: 1, label: '有一点，但不使我担心' },
      { value: 0, label: '完全没有' },
    ]},
    { id: 4, text: '我能够笑，并看到事物有趣的一面', options: [
      { value: 0, label: '和以前一样' },
      { value: 1, label: '现在不如以前那么多' },
      { value: 2, label: '现在肯定不如以前那么多' },
      { value: 3, label: '完全不能' },
    ]},
    { id: 5, text: '我脑子里有担忧的想法', options: [
      { value: 3, label: '大部分时间' },
      { value: 2, label: '很多时间' },
      { value: 1, label: '有时，但不是很多' },
      { value: 0, label: '只是偶尔' },
    ]},
    { id: 6, text: '我感到愉快', options: [
      { value: 3, label: '完全没有' },
      { value: 2, label: '不经常' },
      { value: 1, label: '有时' },
      { value: 0, label: '大部分时间' },
    ]},
    { id: 7, text: '我能够安静地坐着，感到放松', options: [
      { value: 0, label: '肯定能' },
      { value: 1, label: '通常能' },
      { value: 2, label: '不经常能' },
      { value: 3, label: '完全不能' },
    ]},
    { id: 8, text: '我感到自己好像反应迟钝了', options: [
      { value: 3, label: '几乎所有时间' },
      { value: 2, label: '很经常' },
      { value: 1, label: '有时' },
      { value: 0, label: '完全没有' },
    ]},
    { id: 9, text: '我有一种害怕的感觉，好像胃里有"蝴蝶在飞"', options: [
      { value: 0, label: '完全没有' },
      { value: 1, label: '偶尔' },
      { value: 2, label: '相当经常' },
      { value: 3, label: '非常经常' },
    ]},
    { id: 10, text: '我对自己的外表失去了兴趣', options: [
      { value: 3, label: '肯定是' },
      { value: 2, label: '我不像应该的那样关心' },
      { value: 1, label: '我可能不太关心' },
      { value: 0, label: '我像以前一样关心' },
    ]},
    { id: 11, text: '我感到坐立不安，好像必须不停地动', options: [
      { value: 3, label: '非常多' },
      { value: 2, label: '相当多' },
      { value: 1, label: '不太多' },
      { value: 0, label: '完全没有' },
    ]},
    { id: 12, text: '我对事情充满期待', options: [
      { value: 0, label: '和以前一样' },
      { value: 1, label: '比以前少一些' },
      { value: 2, label: '比以前少很多' },
      { value: 3, label: '几乎没有' },
    ]},
    { id: 13, text: '我突然有恐慌的感觉', options: [
      { value: 3, label: '非常经常' },
      { value: 2, label: '相当经常' },
      { value: 1, label: '不太经常' },
      { value: 0, label: '完全没有' },
    ]},
    { id: 14, text: '我能够欣赏一本好书或一个好的广播或电视节目', options: [
      { value: 0, label: '经常' },
      { value: 1, label: '有时' },
      { value: 2, label: '不经常' },
      { value: 3, label: '很少' },
    ]},
  ],
  scoring: [
    { min: 0, max: 14, level: '正常', description: '您的焦虑和抑郁评分均在正常范围内', color: '#7BA896' },
    { min: 15, max: 21, level: '轻度', description: '您可能存在轻度焦虑或抑郁倾向，建议关注情绪变化', color: '#6B9DAD' },
    { min: 22, max: 28, level: '中度', description: '您可能存在中度焦虑或抑郁症状，建议寻求专业帮助', color: '#D4A853' },
    { min: 29, max: 42, level: '重度', description: '您的焦虑或抑郁症状较为严重，请尽快寻求专业帮助', color: '#C17B6E' },
  ],
}
