import { scales } from '../data/scales'
import { Scale, ScaleCategory } from '../types'
import './ScaleList.css'

interface ScaleListProps {
  onSelectScale: (scale: Scale) => void
}

const categoryNames: Record<ScaleCategory, string> = {
  depression: '情绪评估',
  anxiety: '焦虑评估',
  stress: '压力评估',
  personality: '人格评估',
  general: '综合评估',
}

const DropIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M12,20c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8S16.4,20,12,20z"/>
  </svg>
)

const WindIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M4,10a1,1,0,0,1,1-1H14a3,3,0,1,0-3-3,1,1,0,0,1-2,0,5,5,0,1,1,5,5H5A1,1,0,0,1,4,10Zm15,2H5a1,1,0,0,0,0,2H19a1,1,0,0,1,0,2H17a1,1,0,0,0,0,2h2a3,3,0,0,0,0-6Zm-8,4H5a1,1,0,0,0,0,2h6a1,1,0,0,1,0,2,1,1,0,0,0,0,2,3,3,0,0,0,0-6Z"/>
  </svg>
)

const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12,7a5,5,0,1,0,5,5A5,5,0,0,0,12,7Zm0,8a3,3,0,1,1,3-3A3,3,0,0,1,12,15ZM12,2a1,1,0,0,0-1,1V4a1,1,0,0,0,2,0V3A1,1,0,0,0,12,2ZM12,20a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V21A1,1,0,0,0,12,20ZM4,12a1,1,0,0,0-1-1H2a1,1,0,0,0,0,2H3A1,1,0,0,0,4,12Zm18-1H21a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Z"/>
  </svg>
)

const categoryIcons: Record<ScaleCategory, JSX.Element> = {
  depression: <DropIcon />,
  anxiety: <WindIcon />,
  stress: <SunIcon />,
  personality: <DropIcon />,
  general: <DropIcon />,
}

export default function ScaleList({ onSelectScale }: ScaleListProps) {
  const groupedScales = scales.reduce((acc, scale) => {
    if (!acc[scale.category]) {
      acc[scale.category] = []
    }
    acc[scale.category].push(scale)
    return acc
  }, {} as Record<ScaleCategory, Scale[]>)

  return (
    <div className="scale-list">
      <div className="scale-list-header">
        <h1>专业心理测评</h1>
        <p>在这片宁静的空间里，倾听内心的声音</p>
      </div>

      {Object.entries(groupedScales).map(([category, categoryScales]) => (
        <div key={category} className="scale-category">
          <h2 className="category-title">
            <span className={`category-icon ${category}`}>
              {categoryIcons[category as ScaleCategory]}
            </span>
            {categoryNames[category as ScaleCategory]}
          </h2>
          <div className="scale-cards">
            {categoryScales.map(scale => (
              <div 
                key={scale.id} 
                className="scale-card"
                onClick={() => onSelectScale(scale)}
              >
                <div className="scale-card-header">
                  <h3>{scale.shortName}</h3>
                  <span className="time-badge">约{scale.estimatedTime}分钟</span>
                </div>
                <p className="scale-name">{scale.name}</p>
                <p className="scale-desc">{scale.description}</p>
                <div className="scale-meta">
                  <span>共{scale.questions.length}道题</span>
                </div>
                <button className="start-btn">开始测试</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
