import { LoginForm } from "@/components/modules/LoginPage/LoginForm"
import loginImage from "../assets/image/login.jpg"
import Logo from "@/assets/Logo/Logo"
import { Link, useNavigate } from "react-router"
import { useUserInfoQuery } from "@/redux/features/auth/auth.api"


export default function Login() {

  const {data} = useUserInfoQuery(undefined)
  const nagivate = useNavigate()

  if(data?.data?.email){
    nagivate("/")
  }

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link to="/" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
             <span> <Logo/></span>
            </div>

          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src={loginImage}
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}
