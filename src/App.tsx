import { observer } from 'mobx-react-lite'
import './App.css'
import Navbar from './components/layout/Navbar'
import { Routing } from './components/layout/Routing'
import { profileStore } from './stores/ProfileStore'
import { useEffect, useState } from 'react'
import { supabase } from './utils/apiUtils/supabaseUtils'
import { checkUser } from './utils/apiUtils/authApiUtils'

function App() {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        checkUserLoggedIn();
    }, [])

    async function checkUserLoggedIn() {
        const user = await checkUser();

        console.log(user);

    }

    // useEffect(() => {
    //     console.log('App useEffect - setting up auth listener');

    //     async function checkSession() {
    //         try {
    //             // Check for existing session on app load
    //             console.log('Checking for existing session...');
    //             const { data, error } = await supabase.auth.getSession();
    //             console.log(error);
    //             if (error) {
    //                 console.error('Error getting session:', error);
    //             } else if (data.session?.user) {
    //                 console.log('Found existing session:', data.session.user.id);
    //                 await profileStore.getActiveProfile(data.session.user.id);
    //             } else {
    //                 console.log('No existing session found');
    //             }
    //         } catch (error) {
    //             console.error('Error in auth initialization:', error);
    //         }
    //         finally {
    //             console.log('Setting loading to false');
    //             setIsLoading(false);
    //         }
    //     }

    //     checkSession();

    //     // Listen for future auth state changes (login/logout)
    //     const { data: { subscription } } = supabase.auth.onAuthStateChange(
    //         async (event, session) => {
    //             console.log('Auth state change:', event, 'Session:', !!session);

    //             if (event === 'SIGNED_IN' && session?.user) {
    //                 console.log('User signed in, loading profile...');
    //                 await profileStore.getActiveProfile(session.user.id);
    //             } else if (event === 'SIGNED_OUT') {
    //                 console.log('User signed out, clearing profile...');
    //                 profileStore.logoutProfile();
    //             }
    //         }
    //     );

    //     return () => subscription.unsubscribe();
    // }, []);

    // if (!profileStore.activeProfile) return <div>  loading</div>
    // if (isLoading) return <div>  loading</div>

    return (
        <div className='App'>
            <Navbar />

            <Routing />

        </div >
    )
}

export default observer(App)
