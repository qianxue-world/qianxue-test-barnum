import { Scale } from '../../types'

const options = [
  { value: 1, label: '没有或很少时间' },
  { value: 2, label: '少部分时间' },
  { value: 3, label: '相当多时间' },
  { value: 4, label: '绝大部分或全部时间' },
]

const reverseOptions = [
  { value: 4, label: '没有或很少时间' },
  { value: 3, label: '少部分时间' },
  { value: 2, label: '相当多时间' },
  { value: 1, label: '绝大部分或全部时间' },
]

export const SAS: Scale = {
  id: 'sas',
  name: '焦虑自评量表 (SAS)',
  shortName: 'SAS',
  description: 'SAS是由Zung于1971年编制的焦虑自评量表，用于评估焦虑症状的严重程度。',
  instructions: '请根据您最近一周的实际感觉，选择最符合您情况的选项。',
  category: 'anxiety',
  estimatedTime: 5,
  questions: [
    { id: 1, text: '我觉得比平常容易紧张和着急', options },
    { id: 2, text: '我无缘无故地感到害怕', options },
    { id: 3, text: '我容易心里烦乱或觉得惊恐', options },
    { id: 4, text: '我觉得我可能将要发疯', options },
    { id: 5, text: '我觉得一切都很好，也不会发生什么不幸', options: reverseOptions },
    { id: 6, text: '我手脚发抖打颤', options },
    { id: 7, text: '我因为头痛、颈痛和背痛而苦恼', options },
    { id: 8, text: '我感觉容易衰弱和疲乏', options },
    { id: 9, text: '我觉得心平气和，并且容易安静坐着', options: reverseOptions },
    { id: 10, text: '我觉得心跳得很快', options },
    { id: 11, text: '我因为一阵阵头晕而苦恼', options },
    { id: 12, text: '我有晕倒发作或觉得要晕倒似的', options },
    { id: 13, text: '我呼气吸气都感到很容易', options: reverseOptions },
    { id: 14, text: '我手脚麻木和刺痛', options },
    { id: 15, text: '我因为胃痛和消化不良而苦恼', options },
    { id: 16, text: '我常常要小便', options },
    { id: 17, text: '我的手常常是干燥温暖的', options: reverseOptions },
    { id: 18, text: '我脸红发热', options },
    { id: 19, text: '我容易入睡并且一夜睡得很好', options: reverseOptions },
    { id: 20, text: '我做恶梦', options },
  ],
  scoring: [
    { min: 20, max: 49, level: '正常', description: '您目前没有明显的焦虑症状，心态平和', color: '#7BA896' },
    { min: 50, max: 59, level: '轻度', description: '您可能有轻度焦虑症状，建议适当放松', color: '#6B9DAD' },
    { min: 60, max: 69, level: '中度', description: '您可能有中度焦虑症状，建议寻求专业帮助', color: '#D4A853' },
    { min: 70, max: 100, level: '重度', description: '您可能有重度焦虑症状，请尽快寻求专业心理帮助', color: '#C17B6E' },
  ],
}
