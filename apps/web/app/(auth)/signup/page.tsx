import { AuthContainer } from "~/components/auth/auth-container";
import { SignupForm } from "~/components/signup-form";

export default function SignupPage() {
  return (
    <AuthContainer align="top">
      <SignupForm />
    </AuthContainer>
  );
}