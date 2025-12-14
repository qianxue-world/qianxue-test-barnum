import { useState } from 'react'
import './App.css'
import WordMatrix from './components/WordMatrix'
import BookOfAnswers from './components/BookOfAnswers'

interface Feature {
  id: string
  title: string
  icon: string
  desc: string
  emoji: string
}

const FEATURES: Feature[] = [
  {
    id: 'word-matrix',
    title: '运势字母矩阵',
    icon: '🔮',
    desc: '第一眼看到的4个词代表今年运势',
    emoji: '✨'
  },
  {
    id: 'book-of-answers',
    title: '答案之书',
    icon: '📖',
    desc: '让潜意识为你指引方向',
    emoji: '🌙'
  },
  {
    id: 'coming-soon-1',
    title: '心理测试',
    icon: '💭',
    desc: '即将上线...',
    emoji: '🦋'
  },
  {
    id: 'coming-soon-2',
    title: '每日运势',
    icon: '⭐',
    desc: '即将上线...',
    emoji: '🌸'
  }
]

function App() {
  const [activeFeature, setActiveFeature] = useState<string | null>(null)

  if (activeFeature === 'word-matrix') {
    return <WordMatrix onBack={() => setActiveFeature(null)} />
  }

  if (activeFeature === 'book-of-answers') {
    return <BookOfAnswers onBack={() => setActiveFeature(null)} />
  }

  return (
    <div className="app-layout">
      <aside className="sidebar">
        <div className="sidebar-header">
          <span className="logo">🌸</span>
          <h1>心灵小站</h1>
        </div>
        <nav className="sidebar-nav">
          {FEATURES.map((feature) => (
            <button
              key={feature.id}
              className={`nav-item ${feature.id.startsWith('coming') ? 'disabled' : ''}`}
              onClick={() => !feature.id.startsWith('coming') && setActiveFeature(feature.id)}
            >
              <span className="nav-icon">{feature.icon}</span>
              <span className="nav-text">{feature.title}</span>
            </button>
          ))}
        </nav>
        <div className="sidebar-footer">
          <p>💕 探索内心的声音</p>
        </div>
      </aside>

      <main className="main-content">
        <div className="welcome-section">
          <h2 className="welcome-title">
            <span>✨</span> 欢迎来到心灵小站 <span>✨</span>
          </h2>
          <p className="welcome-desc">选择一个功能，开始你的心灵探索之旅吧~</p>
        </div>

        <div className="features-grid">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className={`feature-card ${feature.id.startsWith('coming') ? 'disabled' : ''}`}
              onClick={() => !feature.id.startsWith('coming') && setActiveFeature(feature.id)}
            >
              <div className="card-decoration">{feature.emoji}</div>
              <div className="card-icon">{feature.icon}</div>
              <h3 className="card-title">{feature.title}</h3>
              <p className="card-desc">{feature.desc}</p>
              {!feature.id.startsWith('coming') && (
                <span className="card-arrow">→</span>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
