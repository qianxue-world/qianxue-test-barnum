import { useState } from 'react'
import { Scale, TestResult } from '../types'
import { useAppStore } from '../store'
import './TestPage.css'

interface TestPageProps {
  scale: Scale
  onComplete: (result: TestResult) => void
  onBack: () => void
}

export default function TestPage({ scale, onComplete, onBack }: TestPageProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { currentAnswers, setAnswer, clearAnswers, user } = useAppStore()
  
  const currentQuestion = scale.questions[currentIndex]
  const progress = ((currentIndex + 1) / scale.questions.length) * 100
  const isLastQuestion = currentIndex === scale.questions.length - 1
  const currentAnswer = currentAnswers.get(currentQuestion.id)

  const handleSelect = (value: number) => {
    setAnswer(currentQuestion.id, value)
  }

  const handleNext = () => {
    if (currentAnswer === undefined) return
    
    if (isLastQuestion) {
      const answers: number[] = []
      let totalScore = 0
      
      scale.questions.forEach(q => {
        const answer = currentAnswers.get(q.id) || 0
        answers.push(answer)
        totalScore += answer
      })
      
      let standardScore = totalScore
      if (scale.id === 'sas' || scale.id === 'sds') {
        standardScore = Math.round(totalScore * 1.25)
      }
      
      const scoring = scale.scoring.find(
        s => standardScore >= s.min && standardScore <= s.max
      ) || scale.scoring[scale.scoring.length - 1]
      
      const result: TestResult = {
        id: Date.now().toString(),
        scaleId: scale.id,
        scaleName: scale.name,
        answers,
        totalScore: standardScore,
        level: scoring.level,
        levelDescription: scoring.description,
        completedAt: new Date().toISOString(),
        userId: user?.id,
      }
      
      clearAnswers()
      onComplete(result)
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleBackClick = () => {
    clearAnswers()
    onBack()
  }

  return (
    <div className="test-page">
      <div className="test-header">
        <button className="back-btn" onClick={handleBackClick}>
          返回
        </button>
        <h2>{scale.shortName}</h2>
        <div className="progress-info">
          {currentIndex + 1} / {scale.questions.length}
        </div>
      </div>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <div className="test-content">
        <div className="instructions">{scale.instructions}</div>
        
        <div className="question-card">
          <div className="question-number">第 {currentIndex + 1} 题</div>
          <div className="question-text">{currentQuestion.text}</div>
          
          <div className="options">
            {currentQuestion.options.map(option => (
              <button
                key={option.value}
                className={`option-btn ${currentAnswer === option.value ? 'selected' : ''}`}
                onClick={() => handleSelect(option.value)}
              >
                <span className="option-indicator" />
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className="nav-buttons">
          <button 
            className="nav-btn prev" 
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            上一题
          </button>
          <button 
            className="nav-btn next" 
            onClick={handleNext}
            disabled={currentAnswer === undefined}
          >
            {isLastQuestion ? '提交' : '下一题'}
          </button>
        </div>
      </div>
    </div>
  )
}
