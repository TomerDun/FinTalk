import { observer } from 'mobx-react-lite'
import './App.css'
import Navbar from './components/layout/Navbar'
import { Routing } from './components/layout/Routing'
import { profileStore } from './stores/ProfileStore'
import { useEffect, useState } from 'react'
import { supabase } from './utils/apiUtils/supabaseUtils'
import { checkUser } from './utils/apiUtils/authApiUtils'
import { useNavigate } from 'react-router'


function App() {
    console.log('app - active profile');
    console.log(profileStore.activeProfile);

    const navigate = useNavigate();

    useEffect(() => {
        checkUserLoggedIn();
    }, [])

    async function checkUserLoggedIn() {
        const user = await checkUser();


        // Not logged in - redirect
        if (!user) {

            profileStore.logoutProfile();
            navigate('/login')
        }

        // Logged in
        if (user) {
            // TODO: Add error handling here!

            profileStore.getActiveProfile(user.id);
        }

        // setCheckedForUser(true);
    }

    return (
        <div className='App'>
            <Navbar />

            <Routing />

        </div >
    )
}

export default observer(App)
