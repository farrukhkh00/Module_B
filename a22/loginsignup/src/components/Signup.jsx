

import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate, useNavigation } from 'react-router-dom'
import { SweetAlert } from '../SweetAlert.js'

export default function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!name || !email || !password || !confirmPassword) {
      alert('Please fill in all fields')
      
    }
    else if (password !== confirmPassword) {
      alert('Passwords do not match')
    }
    else{
      console.log('Signup attempt with:', { name, email, password })
      await axios.post('http://localhost:1010/',{
        name: name,
        email: email,
        password: password,
      }
    ).then((response)=>{
      
      if(response.data == "Account created"){
        SweetAlert('Account Created','success')
        setTimeout(() => {
          navigate('/')
        }, 1500);
      }

    })
    
  }
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
      backgroundColor: '#42b72a',
      color: 'white',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
    error: {
      color: 'red',
      marginBottom: '10px',
    },
    success: {
      color: 'green',
      marginBottom: '10px',
    },
  }

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={{ textAlign: 'center' }}>Sign Up</h2>
        {error && <div style={styles.error}>{error}</div>}
        {success && <div style={styles.success}>Signup successful!</div>}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
          required
        />
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>
          Sign Up
        </button>
      </form>
      <p>
        Already have an Account?<Link to="/">Login</Link>
      </p>
    </div>
  )
}