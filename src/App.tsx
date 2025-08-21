import { observer } from 'mobx-react-lite'
import './App.css'
import { Navbar } from './components/layout/Navbar'
import { Routing } from './components/layout/Routing'
import { profileStore } from './stores/ProfileStore'
import { useEffect } from 'react'

function App() {

    useEffect(() => {
        profileStore.getActiveProfile();                
    }, [])
    
    return (
        <div className='App'>            
            <Navbar />            
            <Routing />
        </div >
    )
}

export default observer(App)
