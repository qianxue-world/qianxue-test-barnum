import { useAppStore } from '../store'
import './Header.css'

interface HeaderProps {
  onNavigate: (page: 'home' | 'history' | 'login') => void
  currentPage: string
}

const LeafIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
  </svg>
)

export default function Header({ onNavigate, currentPage }: HeaderProps) {
  const { user, setUser } = useAppStore()

  const handleLogout = () => {
    setUser(null)
    onNavigate('home')
  }

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo" onClick={() => onNavigate('home')}>
          <span className="logo-icon"><LeafIcon /></span>
          <span className="logo-text">心灵花园</span>
        </div>
        
        <nav className="nav">
          <button 
            className={`nav-btn ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => onNavigate('home')}
          >
            测试量表
          </button>
          <button 
            className={`nav-btn ${currentPage === 'history' ? 'active' : ''}`}
            onClick={() => onNavigate('history')}
          >
            测试记录
          </button>
        </nav>

        <div className="user-area">
          {user ? (
            <div className="user-info">
              <span className="username">{user.username}</span>
              <button className="logout-btn" onClick={handleLogout}>退出</button>
            </div>
          ) : (
            <button className="login-btn" onClick={() => onNavigate('login')}>
              登录
            </button>
          )}
        </div>
      </div>
    </header>
  )
}
