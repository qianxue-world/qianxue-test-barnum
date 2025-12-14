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

export const SDS: Scale = {
  id: 'sds',
  name: '抑郁自评量表 (SDS)',
  shortName: 'SDS',
  description: 'SDS是由Zung于1965年编制的抑郁自评量表，是目前使用最广泛的抑郁症筛查工具之一。',
  instructions: '请根据您最近一周的实际感觉，选择最符合您情况的选项。',
  category: 'depression',
  estimatedTime: 5,
  questions: [
    { id: 1, text: '我觉得闷闷不乐，情绪低沉', options },
    { id: 2, text: '我觉得一天之中早晨最好', options: reverseOptions },
    { id: 3, text: '我一阵阵哭出来或觉得想哭', options },
    { id: 4, text: '我晚上睡眠不好', options },
    { id: 5, text: '我吃得跟平常一样多', options: reverseOptions },
    { id: 6, text: '我与异性密切接触时和以往一样感到愉快', options: reverseOptions },
    { id: 7, text: '我发觉我的体重在下降', options },
    { id: 8, text: '我有便秘的苦恼', options },
    { id: 9, text: '我心跳比平常快', options },
    { id: 10, text: '我无缘无故地感到疲乏', options },
    { id: 11, text: '我的头脑跟平常一样清楚', options: reverseOptions },
    { id: 12, text: '我觉得经常做的事情并没有困难', options: reverseOptions },
    { id: 13, text: '我觉得不安而平静不下来', options },
    { id: 14, text: '我对将来抱有希望', options: reverseOptions },
    { id: 15, text: '我比平常容易生气激动', options },
    { id: 16, text: '我觉得作出决定是容易的', options: reverseOptions },
    { id: 17, text: '我觉得自己是个有用的人，有人需要我', options: reverseOptions },
    { id: 18, text: '我的生活过得很有意思', options: reverseOptions },
    { id: 19, text: '我认为如果我死了别人会生活得好些', options },
    { id: 20, text: '平常感兴趣的事我仍然照样感兴趣', options: reverseOptions },
  ],
  scoring: [
    { min: 20, max: 52, level: '正常', description: '您目前没有明显的抑郁症状，请继续保持', color: '#7BA896' },
    { min: 53, max: 62, level: '轻度', description: '您可能有轻度抑郁症状，建议关注自身情绪变化', color: '#6B9DAD' },
    { min: 63, max: 72, level: '中度', description: '您可能有中度抑郁症状，建议寻求专业帮助', color: '#D4A853' },
    { min: 73, max: 100, level: '重度', description: '您可能有重度抑郁症状，请尽快寻求专业心理帮助', color: '#C17B6E' },
  ],
}
