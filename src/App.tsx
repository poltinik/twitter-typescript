import { useState } from 'react'
import './App.css'
import Body from './components/Body'
import Navigation from './components/Navigation'
import { TwitterContext } from './utils/context'
import { Stats, StatsTypes, User } from './utils/types'


function App() {
  const [user, setUser] = useState<User>({
    name: 'Monster',
    avatar: 'https://gravatar.com/avatar/000?d=monsterid'
  })

  const [stats, setStats] = useState<Stats>({
    followers: 0,
    following: 0
  })

  const changeAvatar = (url: string  | null) => {
    setUser(prevState => ({ ...prevState, avatar: url || prevState.avatar }))
  }

  const changeName = (name: string  | null )=> {
    setUser(prevState => ({ ...prevState, name: name || prevState.name }))
  }

  const changeStats = (statsType: StatsTypes, sum: number) => {
    setStats(stats => {
        let res = stats[statsType] + sum;
        res = res < 0 ? 0 : res;
        return {...stats, [statsType]: res};
    })
  }

  return (
    <div className='app'>
      <TwitterContext.Provider value={{
        user, stats, changeAvatar, changeName, changeStats
      }}>
        <Navigation />
        <Body />
      </TwitterContext.Provider>
    </div>
  )
}

export default App
