import { create } from 'zustand'
import { TestResult, User } from '../types'

interface AppStore {
  // 用户状态
  user: User | null
  setUser: (user: User | null) => void
  
  // 测试结果
  results: TestResult[]
  addResult: (result: TestResult) => void
  clearResults: () => void
  
  // 当前测试状态
  currentAnswers: Map<number, number>
  setAnswer: (questionId: number, value: number) => void
  clearAnswers: () => void
  
  // 初始化
  loadFromStorage: () => void
  saveToStorage: () => void
}

const STORAGE_KEY = 'psycho_test_data'

export const useAppStore = create<AppStore>((set, get) => ({
  user: null,
  results: [],
  currentAnswers: new Map(),
  
  setUser: (user) => {
    set({ user })
    get().saveToStorage()
  },
  
  addResult: (result) => {
    const newResults = [...get().results, result]
    set({ results: newResults })
    get().saveToStorage()
  },
  
  clearResults: () => {
    set({ results: [] })
    get().saveToStorage()
  },
  
  setAnswer: (questionId, value) => {
    const newAnswers = new Map(get().currentAnswers)
    newAnswers.set(questionId, value)
    set({ currentAnswers: newAnswers })
  },
  
  clearAnswers: () => {
    set({ currentAnswers: new Map() })
  },
  
  loadFromStorage: () => {
    try {
      const data = localStorage.getItem(STORAGE_KEY)
      if (data) {
        const parsed = JSON.parse(data)
        set({
          user: parsed.user || null,
          results: parsed.results || [],
        })
      }
    } catch (e) {
      console.error('Failed to load from storage:', e)
    }
  },
  
  saveToStorage: () => {
    try {
      const { user, results } = get()
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ user, results }))
    } catch (e) {
      console.error('Failed to save to storage:', e)
    }
  },
}))
