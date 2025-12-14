import { useState } from 'react'
import './App.css'

// 导入所有答案图片
import book1 from './data/book/book_1.jpg'
import book2 from './data/book/book_2.jpg'
import book3 from './data/book/book_3.jpg'
import book4 from './data/book/book_4.jpg'
import book5 from './data/book/book_5.jpg'
import book6 from './data/book/book_6.jpg'

// 每页的数字范围
const pageRanges = [
  { image: book1, min: 1, max: 68 },
  { image: book2, min: 69, max: 136 },
  { image: book3, min: 137, max: 204 },
  { image: book4, min: 205, max: 272 },
  { image: book5, min: 273, max: 340 },
  { image: book6, min: 341, max: 389 },
]

type Step = 'question' | 'number' | 'answer'

function App() {
  const [step, setStep] = useState<Step>('question')
  const [question, setQuestion] = useState('')
  const [number, setNumber] = useState('')
  const [error, setError] = useState('')

  const handleQuestionSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (question.trim()) {
      setStep('number')
      setError('')
    }
  }

  const handleNumberSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const num = parseInt(number)
    if (isNaN(num) || num < 1 || num > 389) {
      setError('请输入1-389之间的数字')
      return
    }
    setError('')
    setStep('answer')
  }

  const getAnswerImage = () => {
    const num = parseInt(number)
    const page = pageRanges.find(p => num >= p.min && num <= p.max)
    return page?.image || book1
  }

  const reset = () => {
    setStep('question')
    setQuestion('')
    setNumber('')
    setError('')
  }

  return (
    <div className="app">
      <div className="fate-book">
        <h1 className="title">📖 命运之书</h1>
        <p className="subtitle">问出你的问题，命运将给你答案</p>

        {step === 'question' && (
          <form onSubmit={handleQuestionSubmit} className="form">
            <label className="label">在心中想好你的问题，然后写下来：</label>
            <textarea
              className="input textarea"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="例如：我应该换工作吗？"
              rows={3}
            />
            <button type="submit" className="btn" disabled={!question.trim()}>
              下一步
            </button>
          </form>
        )}

        {step === 'number' && (
          <form onSubmit={handleNumberSubmit} className="form">
            <div className="question-display">
              <span className="question-label">你的问题：</span>
              <span className="question-text">{question}</span>
            </div>
            <label className="label">
              闭上眼睛，想一个1到389之间的数字：
            </label>
            <input
              type="number"
              className="input"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="输入数字 (1-389)"
              min={1}
              max={389}
            />
            {error && <p className="error">{error}</p>}
            <div className="btn-group">
              <button type="button" className="btn btn-secondary" onClick={() => setStep('question')}>
                返回
              </button>
              <button type="submit" className="btn">
                揭示答案
              </button>
            </div>
          </form>
        )}

        {step === 'answer' && (
          <div className="answer-section">
            <div className="question-display">
              <span className="question-label">你的问题：</span>
              <span className="question-text">{question}</span>
            </div>
            <div className="number-display">
              <span className="number-label">你选择的数字：</span>
              <span className="number-value">{number}</span>
            </div>
            <div className="answer-card">
              <h3>命运的答案</h3>
              <p className="answer-hint">在图片中找到数字 <strong>{number}</strong> 对应的答案</p>
              <img 
                src={getAnswerImage()} 
                alt={`答案 ${number}`} 
                className="answer-image"
              />
            </div>
            <button className="btn" onClick={reset}>
              再问一个问题
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
