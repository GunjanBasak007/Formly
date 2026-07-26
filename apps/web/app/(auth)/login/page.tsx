import { AuthContainer } from "~/components/auth/auth-container";
import { LoginForm } from "~/components/login-form";

export default function LoginPage() {
  return (
    <AuthContainer align="center">
      <LoginForm />
    </AuthContainer>
  );
}