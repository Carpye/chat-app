import RootLayout from "../../components/RootLayout"
import LoginForm from "../../components/LoginForm"

export default function index() {


  return (
    <RootLayout page="login">
        <div className="flex justify-center items-center">
            <LoginForm />
        </div>
    </RootLayout>
  )
}
