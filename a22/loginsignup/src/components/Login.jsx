'use client'

import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !password) {
      setError('Please fill in all fields')
      return
    }
    // Here you would typically handle the login logic
    console.log('Login attempt with:', { email, password })
    setError('')
    // Reset form fields after submission
    setEmail('')
    setPassword('')
  }

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column' ,
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f0f2f5',
    },
    form: {
      display: 'flex',
      flexDirection: 'column' ,
      width: '300px',
      padding: '20px',
      borderRadius: '8px',
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    input: {
      margin: '10px 0',
      padding: '10px',
      borderRadius: '4px',
      border: '1px solid #ddd',
    },
    button: {
      margin: '10px 0',
      padding: '10px',
      borderRadius: '4px',
      border: 'none',
      backgroundColor: '#1877f2',
      color: 'white',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
    error: {
      color: 'red',
      marginBottom: '10px',
    },
  }

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={{ textAlign: 'center' }}>Login</h2>
        {error && <div style={styles.error}>{error}</div>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>
          Log In
        </button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Register</Link>
      </p>
    </div>
  )
}