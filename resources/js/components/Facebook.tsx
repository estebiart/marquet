// @ts-ignore
import { LoginSocialFacebook } from "reactjs-social-login";
import { loginFaceboock } from "@/services/AuthServecie";

const FacebookButton: React.FC = () => {
    return (
        <LoginSocialFacebook
            appId="1380472220062479"
            onResolve={(response: any) => loginFaceboock(response.data)}
            onReject={(error: any) => console.error("ver respuesta de error", error)}
        >
            <button className="flex items-center justify-center gap-2
                w-[250px] px-4 py-2 bg-white border border-gray-300 
                text-gray-700 rounded-full shadow-sm  
                hover:bg-gray-100 transition">
                <img
                    loading="lazy"
                    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                    alt="Facebook Logo"
                    className="w-5 h-5"
                />
                <span className="font-medium   ">Acceder con Facebook</span>
            </button>
        </LoginSocialFacebook>
    );
};

export default FacebookButton;