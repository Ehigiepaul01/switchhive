import { AuthCard, ForgetPasswordForm } from "@/components/Auth"
import logomark from '../../assets/logomark.png';

const ForgetPassword = () => {
  return (
    <div>
      <AuthCard title="Forgot Password" subtitle="Enter your registered email address. we’ll send you a code to reset your password." logo={logomark}>
        <ForgetPasswordForm />
      </AuthCard>
    </div>
  )
}

export default ForgetPassword