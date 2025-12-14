import { useState, useEffect } from 'react'
import { useAppStore } from './store'
import { Scale, TestResult } from './types'
import Header from './components/Header'
import ScaleList from './components/ScaleList'
import TestPage from './components/TestPage'
import ResultPage from './components/ResultPage'
import HistoryPage from './components/HistoryPage'
import LoginPage from './components/LoginPage'
import './App.css'

type Page = 'home' | 'test' | 'result' | 'history' | 'login'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home')
  const [selectedScale, setSelectedScale] = useState<Scale | null>(null)
  const [currentResult, setCurrentResult] = useState<TestResult | null>(null)
  const { loadFromStorage, addResult, results } = useAppStore()

  useEffect(() => {
    loadFromStorage()
  }, [])

  const handleSelectScale = (scale: Scale) => {
    setSelectedScale(scale)
    setCurrentPage('test')
  }

  const handleTestComplete = (result: TestResult) => {
    addResult(result)
    setCurrentResult(result)
    setCurrentPage('result')
  }

  const handleNavigate = (page: 'home' | 'history' | 'login') => {
    setCurrentPage(page)
    setSelectedScale(null)
    setCurrentResult(null)
  }

  const handleViewResult = (resultId: string) => {
    const result = results.find(r => r.id === resultId)
    if (result) {
      setCurrentResult(result)
      setCurrentPage('result')
    }
  }

  const handleRetake = () => {
    if (selectedScale) {
      setCurrentPage('test')
    } else if (currentResult) {
      const scale = useAppStore.getState().results.find(r => r.id === currentResult.id)
      if (scale) {
        // 从结果页重新测试需要找到对应的量表
        import('./data/scales').then(({ getScaleById }) => {
          const s = getScaleById(currentResult.scaleId)
          if (s) {
            setSelectedScale(s)
            setCurrentPage('test')
          }
        })
      }
    }
  }

  return (
    <div className="app">
      <Header 
        onNavigate={handleNavigate} 
        currentPage={currentPage}
      />
      
      <main className="main-content">
        {currentPage === 'home' && (
          <ScaleList onSelectScale={handleSelectScale} />
        )}
        
        {currentPage === 'test' && selectedScale && (
          <TestPage 
            scale={selectedScale}
            onComplete={handleTestComplete}
            onBack={() => handleNavigate('home')}
          />
        )}
        
        {currentPage === 'result' && currentResult && (
          <ResultPage 
            result={currentResult}
            onBack={() => handleNavigate('home')}
            onRetake={handleRetake}
          />
        )}
        
        {currentPage === 'history' && (
          <HistoryPage onViewResult={handleViewResult} />
        )}
        
        {currentPage === 'login' && (
          <LoginPage 
            onBack={() => handleNavigate('home')}
            onSuccess={() => handleNavigate('home')}
          />
        )}
      </main>
    </div>
  )
}

export default App
