import { SignupForm } from "~/components/signup-form";

export default function SignupPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        {/* Branding */}
        <div className="flex justify-center md:justify-start">
          <a href="#" className="font-medium">
<h1 className="text-4xl font-extrabold tracking-tight">
  Formly
</h1>
          </a>
        </div>

        {/* Signup Form */}
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignupForm />
          </div>
        </div>
      </div>
    </div>
  );
}