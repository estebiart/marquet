import { GoogleOAuthProvider, GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { loginGoogle } from "@/services/AuthServecie";
import { jwtDecode } from "jwt-decode"


interface GoogleUser {
    email: string;
    name: string;
    picture: string;
}

const GoogleAuthButton: React.FC = () => {
    const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
    const handleSuccess = async (response: CredentialResponse) => {
        if (response.credential) {
            const token = response.credential;

            try {
                const user = jwtDecode<GoogleUser>(token);
                loginGoogle(user)
            } catch (error: unknown) {
       
            }
        }
    };


    return (
        <GoogleOAuthProvider clientId={clientId}>
            <div className="flex justify-center">
                <GoogleLogin
                    theme="outline"
                    size="large"
                    shape="pill"
                    logo_alignment="center"
                    width="250"
                    onSuccess={handleSuccess}
                />
            </div>
        </GoogleOAuthProvider>
    );
};

export default GoogleAuthButton;
