import { useState } from 'react'
import { useAppStore } from '../store'
import { User } from '../types'
import './LoginPage.css'

interface LoginPageProps {
  onBack: () => void
  onSuccess: () => void
}

export default function LoginPage({ onBack, onSuccess }: LoginPageProps) {
  const [isRegister, setIsRegister] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { setUser } = useAppStore()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!username.trim()) {
      setError('请输入用户名')
      return
    }
    if (!password.trim()) {
      setError('请输入密码')
      return
    }
    if (password.length < 4) {
      setError('密码至少4位')
      return
    }

    const usersKey = 'psycho_users'
    const users = JSON.parse(localStorage.getItem(usersKey) || '{}')

    if (isRegister) {
      if (users[username]) {
        setError('用户名已存在')
        return
      }
      users[username] = { password, createdAt: new Date().toISOString() }
      localStorage.setItem(usersKey, JSON.stringify(users))
    } else {
      if (!users[username] || users[username].password !== password) {
        setError('用户名或密码错误')
        return
      }
    }

    const user: User = {
      id: username,
      username,
      createdAt: users[username].createdAt,
    }
    setUser(user)
    onSuccess()
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <button className="back-link" onClick={onBack}>
          返回
        </button>
        
        <h2>{isRegister ? '注册账号' : '登录'}</h2>
        <p className="login-desc">
          {isRegister 
            ? '创建账号后可以在多设备间同步测试记录' 
            : '登录后可以保存和同步您的测试记录'}
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>用户名</label>
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="请输入用户名"
            />
          </div>
          
          <div className="form-group">
            <label>密码</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="请输入密码"
            />
          </div>

          {error && <div className="error-msg">{error}</div>}

          <button type="submit" className="submit-btn">
            {isRegister ? '注册' : '登录'}
          </button>
        </form>

        <div className="switch-mode">
          {isRegister ? (
            <span>已有账号？<button onClick={() => setIsRegister(false)}>去登录</button></span>
          ) : (
            <span>没有账号？<button onClick={() => setIsRegister(true)}>去注册</button></span>
          )}
        </div>

        <div className="guest-hint">
          <p>不登录也可以使用所有功能，测试结果会保存在本地</p>
        </div>
      </div>
    </div>
  )
}
