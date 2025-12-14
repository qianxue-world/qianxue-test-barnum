import { TestResult } from '../types'
import { getScaleById } from '../data/scales'
import './ResultPage.css'

interface ResultPageProps {
  result: TestResult
  onBack: () => void
  onRetake: () => void
}

export default function ResultPage({ result, onBack, onRetake }: ResultPageProps) {
  const scale = getScaleById(result.scaleId)
  const scoring = scale?.scoring.find(
    s => result.totalScore >= s.min && result.totalScore <= s.max
  )

  return (
    <div className="result-page">
      <div className="result-card">
        <div className="result-header">
          <h2>测试完成</h2>
          <p className="scale-name">{result.scaleName}</p>
        </div>

        <div className="score-section">
          <div className="score-circle" style={{ borderColor: scoring?.color }}>
            <span className="score-value">{result.totalScore}</span>
            <span className="score-label">分</span>
          </div>
          <div 
            className="level-badge" 
            style={{ backgroundColor: scoring?.color }}
          >
            {result.level}
          </div>
        </div>

        <div className="result-description">
          <p>{result.levelDescription}</p>
        </div>

        {scale && (
          <div className="scoring-reference">
            <h3>评分参考</h3>
            <div className="scoring-list">
              {scale.scoring.map(s => (
                <div 
                  key={s.level} 
                  className={`scoring-item ${result.level === s.level ? 'current' : ''}`}
                >
                  <span 
                    className="scoring-dot" 
                    style={{ backgroundColor: s.color }}
                  />
                  <span className="scoring-range">{s.min}-{s.max}分</span>
                  <span className="scoring-level">{s.level}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="disclaimer">
          <p>本测试结果仅供参考，不能作为临床诊断依据。如有需要，请咨询专业心理医生。</p>
        </div>

        <div className="result-actions">
          <button className="action-btn secondary" onClick={onRetake}>
            重新测试
          </button>
          <button className="action-btn primary" onClick={onBack}>
            返回首页
          </button>
        </div>
      </div>
    </div>
  )
}
