import { useAppStore } from '../store'
import { getScaleById } from '../data/scales'
import './HistoryPage.css'

interface HistoryPageProps {
  onViewResult: (resultId: string) => void
}

export default function HistoryPage({ onViewResult }: HistoryPageProps) {
  const { results, clearResults } = useAppStore()
  
  const sortedResults = [...results].sort(
    (a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime()
  )

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const handleClearAll = () => {
    if (confirm('确定要清除所有测试记录吗？此操作不可恢复。')) {
      clearResults()
    }
  }

  if (sortedResults.length === 0) {
    return (
      <div className="history-page">
        <div className="empty-state">
          <div className="empty-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z M7,10h2v7H7V10z M11,7h2v10h-2V7z M15,13h2v4h-2V13z"/>
            </svg>
          </div>
          <h2>暂无测试记录</h2>
          <p>完成测试后，您的结果将显示在这里</p>
        </div>
      </div>
    )
  }

  return (
    <div className="history-page">
      <div className="history-header">
        <h1>测试记录</h1>
        <button className="clear-all-btn" onClick={handleClearAll}>
          清除全部
        </button>
      </div>

      <div className="history-list">
        {sortedResults.map(result => {
          const scale = getScaleById(result.scaleId)
          const scoring = scale?.scoring.find(
            s => result.totalScore >= s.min && result.totalScore <= s.max
          )
          
          return (
            <div 
              key={result.id} 
              className="history-item"
              onClick={() => onViewResult(result.id)}
            >
              <div className="history-item-left">
                <div className="history-scale-name">{scale?.shortName || result.scaleId}</div>
                <div className="history-date">{formatDate(result.completedAt)}</div>
              </div>
              <div className="history-item-right">
                <div className="history-score">{result.totalScore}分</div>
                <div 
                  className="history-level"
                  style={{ backgroundColor: scoring?.color }}
                >
                  {result.level}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
