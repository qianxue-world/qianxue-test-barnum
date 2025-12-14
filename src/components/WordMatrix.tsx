import { useState, useMemo, useRef } from 'react'
import html2canvas from 'html2canvas'

interface Props {
  onBack: () => void
}

const FORTUNE_WORDS = [
  'LOVE', 'LUCK', 'RICH', 'HOPE', 'WISE', 'BOLD', 'FREE', 'GLOW',
  'PURE', 'WARM', 'SAFE', 'HEAL', 'GIFT', 'STAR', 'GOLD', 'HERO',
  'JOY', 'WIN', 'ACE', 'GEM', 'SUN', 'BEST', 'CALM',
  'DREAM', 'SMILE', 'PEACE', 'POWER', 'MAGIC', 'LIGHT', 'SHINE', 'BLOOM',
  'GRACE', 'CHARM', 'TRUST', 'FAITH', 'HONOR', 'GLORY', 'PRIDE', 'HAPPY',
  'SWEET', 'BRAVE', 'MONEY', 'WEALTH', 'BLISS', 'CHEER', 'THRIVE',
  'HAPPINESS', 'HEALTH', 'SUCCESS', 'FORTUNE', 'FREEDOM', 'HARMONY', 'MIRACLE',
  'BLESSED', 'PROSPER', 'VICTORY', 'AMAZING', 'AWESOME', 'BELOVED', 'RADIANT',
  'WEALTHY', 'JOYFUL', 'GRATEFUL', 'ABUNDANT', 'BRILLIANT', 'CHAMPION', 'CREATIVE',
  'DELIGHT', 'ELEGANT', 'EXCITED', 'FABULOUS', 'GENEROUS', 'GLORIOUS', 'GRACEFUL',
  'INSPIRED', 'KINDNESS', 'LAUGHTER', 'LOVEABLE', 'MAGNETIC', 'OPTIMIST', 'PARADISE',
  'PEACEFUL', 'POSITIVE', 'PRECIOUS', 'PRINCESS', 'ROMANTIC', 'SERENITY', 'SHINING',
  'SOULMATE', 'SPARKLE', 'SPLENDID', 'STRENGTH', 'STUNNING', 'SUNSHINE', 'TALENTED',
  'THANKFUL', 'TREASURE', 'TRIUMPH', 'VIBRANT', 'WELLNESS', 'WINNER', 'WONDERFUL'
]

const WORD_MEANINGS: Record<string, string> = {
  'LOVE': '爱情', 'LUCK': '好运', 'RICH': '富有', 'HOPE': '希望', 'WISE': '智慧',
  'BOLD': '勇敢', 'FREE': '自由', 'GLOW': '光芒', 'PURE': '纯净', 'WARM': '温暖',
  'SAFE': '安全', 'HEAL': '治愈', 'GIFT': '天赋', 'STAR': '星辰', 'GOLD': '黄金',
  'HERO': '英雄', 'JOY': '喜悦', 'WIN': '胜利', 'ACE': '王牌', 'GEM': '宝石',
  'SUN': '阳光', 'BEST': '最好', 'CALM': '平静', 'DREAM': '梦想', 'SMILE': '微笑',
  'PEACE': '和平', 'POWER': '力量', 'MAGIC': '魔法', 'LIGHT': '光明', 'SHINE': '闪耀',
  'BLOOM': '绽放', 'GRACE': '优雅', 'CHARM': '魅力', 'TRUST': '信任', 'FAITH': '信念',
  'HONOR': '荣誉', 'GLORY': '荣耀', 'PRIDE': '骄傲', 'HAPPY': '快乐', 'SWEET': '甜蜜',
  'BRAVE': '勇气', 'MONEY': '金钱', 'WEALTH': '财富', 'BLISS': '幸福', 'CHEER': '欢乐',
  'THRIVE': '兴旺', 'HAPPINESS': '幸福', 'HEALTH': '健康', 'SUCCESS': '成功',
  'FORTUNE': '财运', 'FREEDOM': '自由', 'HARMONY': '和谐', 'MIRACLE': '奇迹',
  'BLESSED': '祝福', 'PROSPER': '繁荣', 'VICTORY': '胜利', 'AMAZING': '惊艳',
  'AWESOME': '超棒', 'BELOVED': '挚爱', 'RADIANT': '光彩', 'WEALTHY': '富裕',
  'JOYFUL': '欢乐', 'GRATEFUL': '感恩', 'ABUNDANT': '丰盛', 'BRILLIANT': '辉煌',
  'CHAMPION': '冠军', 'CREATIVE': '创意', 'DELIGHT': '愉悦', 'ELEGANT': '优雅',
  'EXCITED': '兴奋', 'FABULOUS': '绝妙', 'GENEROUS': '慷慨', 'GLORIOUS': '辉煌',
  'GRACEFUL': '优美', 'INSPIRED': '灵感', 'KINDNESS': '善良', 'LAUGHTER': '欢笑',
  'LOVEABLE': '可爱', 'MAGNETIC': '魅力', 'OPTIMIST': '乐观', 'PARADISE': '天堂',
  'PEACEFUL': '安宁', 'POSITIVE': '积极', 'PRECIOUS': '珍贵', 'PRINCESS': '公主',
  'ROMANTIC': '浪漫', 'SERENITY': '宁静', 'SHINING': '闪亮', 'SOULMATE': '灵魂伴侣',
  'SPARKLE': '闪烁', 'SPLENDID': '壮丽', 'STRENGTH': '力量', 'STUNNING': '惊艳',
  'SUNSHINE': '阳光', 'TALENTED': '才华', 'THANKFUL': '感恩', 'TREASURE': '珍宝',
  'TRIUMPH': '凯旋', 'VIBRANT': '活力', 'WELLNESS': '健康', 'WINNER': '赢家',
  'WONDERFUL': '美妙'
}

const BACKGROUNDS = [
  { id: 'sakura', name: '🌸 樱花', gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)' },
  { id: 'lavender', name: '💜 薰衣草', gradient: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)' },
  { id: 'candy', name: '🍬 糖果', gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
  { id: 'mint', name: '🍃 薄荷', gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)' },
  { id: 'sunset', name: '🌅 日落', gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' },
  { id: 'ocean', name: '🌊 海洋', gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
  { id: 'aurora', name: '🌌 极光', gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
  { id: 'night', name: '🌙 星空', gradient: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%)' },
]

const FONTS = [
  { id: 'rounded', name: '圆润', family: "'Arial Rounded MT Bold', 'Helvetica Rounded', Arial, sans-serif" },
  { id: 'courier', name: '等宽', family: "'Courier New', Courier, monospace" },
  { id: 'comic', name: '手写', family: "'Comic Sans MS', cursive" },
  { id: 'georgia', name: '衬线', family: "Georgia, 'Times New Roman', serif" },
  { id: 'impact', name: '粗体', family: "Impact, 'Arial Black', sans-serif" },
]

const COLORS = [
  { id: 'dark', name: '深色', color: '#333333' },
  { id: 'white', name: '白色', color: '#ffffff' },
  { id: 'pink', name: '粉色', color: '#ec4899' },
  { id: 'purple', name: '紫色', color: '#a855f7' },
  { id: 'rose', name: '玫红', color: '#f43f5e' },
  { id: 'gold', name: '金色', color: '#f59e0b' },
  { id: 'teal', name: '青色', color: '#14b8a6' },
  { id: 'blue', name: '蓝色', color: '#3b82f6' },
]

type Direction = 'horizontal' | 'vertical' | 'diagonal' | 'diagonal-up'
interface PlacedWord { word: string; row: number; col: number; direction: Direction }

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

function generateMatrix(gridSize: number, density: number): { grid: string[][], placedWords: PlacedWord[] } {
  const grid: string[][] = Array(gridSize).fill(null).map(() => Array(gridSize).fill(''))
  const placedWords: PlacedWord[] = []
  const targetWords = Math.floor(gridSize * density / 10)
  const maxWordLen = Math.min(gridSize, 9)
  const availableWords = FORTUNE_WORDS.filter(w => w.length <= maxWordLen)
  const selectedWords = shuffleArray(availableWords).slice(0, targetWords + 10)

  for (const word of selectedWords) {
    if (placedWords.length >= targetWords) break
    const directions: Direction[] = shuffleArray(['horizontal', 'vertical', 'diagonal', 'diagonal-up'])
    for (const dir of directions) {
      const positions = getValidPositions(word, dir, gridSize)
      for (const pos of shuffleArray(positions)) {
        if (canPlaceWord(grid, word, pos.row, pos.col, dir)) {
          placeWord(grid, word, pos.row, pos.col, dir)
          placedWords.push({ word, ...pos, direction: dir })
          break
        }
      }
      if (placedWords.find(p => p.word === word)) break
    }
  }
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      if (grid[i][j] === '') grid[i][j] = String.fromCharCode(65 + Math.floor(Math.random() * 26))
    }
  }
  return { grid, placedWords }
}

function getValidPositions(word: string, dir: Direction, size: number) {
  const positions: { row: number; col: number }[] = []
  const len = word.length
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      const valid = dir === 'horizontal' ? c + len <= size
        : dir === 'vertical' ? r + len <= size
        : dir === 'diagonal' ? c + len <= size && r + len <= size
        : c + len <= size && r - len + 1 >= 0
      if (valid) positions.push({ row: r, col: c })
    }
  }
  return positions
}

function canPlaceWord(grid: string[][], word: string, row: number, col: number, dir: Direction) {
  for (let i = 0; i < word.length; i++) {
    const [r, c] = dir === 'horizontal' ? [row, col + i]
      : dir === 'vertical' ? [row + i, col]
      : dir === 'diagonal' ? [row + i, col + i] : [row - i, col + i]
    if (grid[r][c] !== '' && grid[r][c] !== word[i]) return false
  }
  return true
}

function placeWord(grid: string[][], word: string, row: number, col: number, dir: Direction) {
  for (let i = 0; i < word.length; i++) {
    const [r, c] = dir === 'horizontal' ? [row, col + i]
      : dir === 'vertical' ? [row + i, col]
      : dir === 'diagonal' ? [row + i, col + i] : [row - i, col + i]
    grid[r][c] = word[i]
  }
}

export default function WordMatrix({ onBack }: Props) {
  const [gridSize, setGridSize] = useState(12)
  const [density, setDensity] = useState(5)
  const [bgIndex, setBgIndex] = useState(0)
  const [fontIndex, setFontIndex] = useState(0)
  const [colorIndex, setColorIndex] = useState(0)
  const [grid, setGrid] = useState<string[][] | null>(null)
  const [placedWords, setPlacedWords] = useState<PlacedWord[]>([])
  const [showWords, setShowWords] = useState(false)
  const [saving, setSaving] = useState(false)
  const matrixRef = useRef<HTMLDivElement>(null)

  const bg = BACKGROUNDS[bgIndex], font = FONTS[fontIndex], color = COLORS[colorIndex]

  const handleGenerate = () => {
    const result = generateMatrix(gridSize, density)
    setGrid(result.grid)
    setPlacedWords(result.placedWords)
    setShowWords(false)
  }

  const handleSave = async () => {
    if (!matrixRef.current) return
    setSaving(true)
    try {
      const canvas = await html2canvas(matrixRef.current, { backgroundColor: null, scale: 2 })
      const link = document.createElement('a')
      link.download = `运势矩阵_${Date.now()}.png`
      link.href = canvas.toDataURL('image/png')
      link.click()
    } catch (e) { console.error(e) }
    setSaving(false)
  }

  const cellSize = useMemo(() => gridSize <= 10 ? 32 : gridSize <= 14 ? 28 : gridSize <= 18 ? 24 : 20, [gridSize])

  return (
    <div className="feature-page">
      <aside className="feature-sidebar">
        <button className="back-btn" onClick={onBack}>← 返回首页</button>
        
        <div className="settings-card">
          <h3>🎨 外观设置</h3>
          <div className="btn-group">
            {BACKGROUNDS.map((b, i) => (
              <button key={b.id} className={`btn btn-secondary ${i === bgIndex ? 'active' : ''}`}
                style={i === bgIndex ? { background: 'var(--pink-200)' } : {}}
                onClick={() => setBgIndex(i)}>{b.name}</button>
            ))}
          </div>
        </div>

        <div className="settings-card">
          <h3>🔤 字体样式</h3>
          <div className="btn-group">
            {FONTS.map((f, i) => (
              <button key={f.id} className={`btn btn-secondary`}
                style={i === fontIndex ? { background: 'var(--pink-200)' } : {}}
                onClick={() => setFontIndex(i)}>{f.name}</button>
            ))}
          </div>
        </div>

        <div className="settings-card">
          <h3>🎯 字体颜色</h3>
          <div className="btn-group">
            {COLORS.map((c, i) => (
              <button key={c.id} className={`btn btn-secondary btn-icon`}
                style={{ background: i === colorIndex ? 'var(--pink-200)' : '', color: c.color }}
                onClick={() => setColorIndex(i)}>■</button>
            ))}
          </div>
        </div>

        <div className="settings-card">
          <h3>⚙️ 矩阵设置</h3>
          <div className="setting-item">
            <label>大小: {gridSize} × {gridSize}</label>
            <input type="range" min="8" max="20" value={gridSize} onChange={e => setGridSize(+e.target.value)} />
          </div>
          <div className="setting-item">
            <label>单词密度: {density}</label>
            <input type="range" min="1" max="10" value={density} onChange={e => setDensity(+e.target.value)} />
          </div>
        </div>
      </aside>

      <main className="feature-main">
        <h1 className="feature-title-main">🔮 运势字母矩阵</h1>
        <p className="feature-subtitle">放松眼睛，你第一眼看到的4个单词代表今年运势 ✨</p>

        <div className="btn-group" style={{ marginBottom: 24 }}>
          <button className="btn btn-primary" onClick={handleGenerate}>
            {grid ? '✨ 重新生成' : '🎲 生成矩阵'}
          </button>
          {grid && (
            <button className="btn btn-primary" onClick={handleSave} disabled={saving}>
              {saving ? '保存中...' : '📷 保存图片'}
            </button>
          )}
        </div>

        {grid && (
          <>
            <div ref={matrixRef} className="matrix-container" style={{ background: bg.gradient }}>
              <div className="matrix" style={{ fontFamily: font.family, color: color.color }}>
                {grid.map((row, i) => (
                  <div key={i} className="matrix-row">
                    {row.map((cell, j) => (
                      <span key={j} className="matrix-cell" style={{ width: cellSize, height: cellSize, fontSize: cellSize * 0.55 }}>{cell}</span>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <p className="hint">💕 让单词自然浮现在眼前...</p>

            <button className="btn btn-secondary" onClick={() => setShowWords(!showWords)}>
              {showWords ? '🙈 隐藏答案' : '👀 查看隐藏的单词'}
            </button>

            {showWords && (
              <div className="words-list">
                <h3>✨ 隐藏了 {placedWords.length} 个幸运单词：</h3>
                <div className="words-grid">
                  {placedWords.map((pw, i) => (
                    <div key={i} className="word-item">
                      <span className="word-en">{pw.word}</span>
                      <span className="word-cn">{WORD_MEANINGS[pw.word] || ''}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  )
}
