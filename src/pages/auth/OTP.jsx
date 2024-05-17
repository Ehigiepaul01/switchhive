import { AuthCard, OTPForm } from "@/components/Auth"

export default function OTP() {
  return (
    <AuthCard title="Enter OTP" subtitle="We have share a code of your registered email address">
        <OTPForm />
    </AuthCard>
  )
}
