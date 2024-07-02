import { createFileRoute } from '@tanstack/react-router';
import SignIn from '../components/Login/SignIn'
import { GoogleButton } from 'react-google-button'
import { UserAuth } from '../context/AuthContext';
import '../styles/Login.css';

export const Route = createFileRoute('/Login')({
    component: Login,
});

function Login() {

    const { googleSignIn } = UserAuth();
    
    const handleGoogleSignIn = async () => {
        try {
            const { user } = await googleSignIn();
            console.log(user);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <SignIn/>
            <div>
                <div className="flex justify-center items-center h-screen m-auto max-w-80 py-4">
                <GoogleButton 
                    onClick={handleGoogleSignIn} 
                    className="custom-google-button"
                />
                </div>
            </div>
        </>
    )
}


// Protected Route for account page/dashboard