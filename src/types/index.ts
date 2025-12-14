// 心理测试平台类型定义

export interface Question {
  id: number
  text: string
  options: Option[]
}

export interface Option {
  value: number
  label: string
}

export interface Scale {
  id: string
  name: string
  shortName: string
  description: string
  instructions: string
  questions: Question[]
  scoring: ScoringRule[]
  category: ScaleCategory
  estimatedTime: number // 分钟
}

export interface ScoringRule {
  min: number
  max: number
  level: string
  description: string
  color: string
}

export type ScaleCategory = 'depression' | 'anxiety' | 'stress' | 'personality' | 'general'

export interface TestResult {
  id: string
  scaleId: string
  scaleName: string
  answers: number[]
  totalScore: number
  level: string
  levelDescription: string
  completedAt: string
  userId?: string
}

export interface User {
  id: string
  username: string
  email?: string
  createdAt: string
}

export interface AppState {
  user: User | null
  results: TestResult[]
  currentTest: {
    scaleId: string | null
    answers: Map<number, number>
    currentQuestion: number
  } | null
}
