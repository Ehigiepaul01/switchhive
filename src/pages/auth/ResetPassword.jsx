import { AuthCard, ResetPasswordForm } from "@/components/Auth"
import logomark from '../../assets/logomark.png';

const ResetPassword = () => {
  return (
    <div>
      <AuthCard title="Reset Password" subtitle="Set a new password to update your login credentials" logo={logomark}>
        <ResetPasswordForm />
      </AuthCard>
    </div>
  )
}

export default ResetPassword
