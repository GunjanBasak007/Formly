"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, type SubmitHandler } from "react-hook-form";

import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "~/components/ui/field";
import { Input } from "~/components/ui/input";
import { useSignIn } from "~/hooks/api/auth";

type LoginFormValues = {
  email: string;
  password: string;
};

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const { signInUserWithEmailAndPasswordAsync } = useSignIn();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginFormValues> = async (values) => {
    await signInUserWithEmailAndPasswordAsync({
      email: values.email,
      password: values.password,
    });

    router.replace("/dashboard");
  };

  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      onSubmit={handleSubmit(onSubmit)}
      {...props}
    >
      <FieldGroup>
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight">
            Welcome back
          </h1>

          <p className="text-sm text-muted-foreground">
            Sign in to continue building beautiful forms.
          </p>
        </div>

        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>

          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            className="h-12 rounded-xl"
            {...register("email", { required: true })}
          />
        </Field>

        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password">Password</FieldLabel>

            <Link
              href="/forgot-password"
              className="ml-auto text-sm font-medium text-muted-foreground transition-colors hover:text-violet-600"
            >
              Forgot password?
            </Link>
          </div>

          <Input
            id="password"
            type="password"
            className="h-12 rounded-xl"
            {...register("password", { required: true })}
          />
        </Field>

        <Field>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="h-12 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25"
          >
            {isSubmitting ? "Signing In..." : "Sign In"}
          </Button>
        </Field>

        <FieldSeparator className="text-xs uppercase tracking-widest text-muted-foreground">
          Continue with
        </FieldSeparator>

        <Field>
          <Button
            type="button"
            variant="outline"
            className="h-12 rounded-xl border-border/60 hover:bg-muted/60"
          >
            <svg
              className="mr-2 size-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 .297c-6.63 0-12 5.373-12 12
                0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577
                0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61
                C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729
                1.205.084 1.838 1.236 1.838 1.236
                1.07 1.835 2.809 1.305 3.495.998
                .108-.776.417-1.305.76-1.605
                -2.665-.3-5.466-1.332-5.466-5.93
                0-1.31.465-2.38 1.235-3.22
                -.135-.303-.54-1.523.105-3.176
                0 0 1.005-.322 3.3 1.23
                .96-.267 1.98-.399 3-.405
                1.02.006 2.04.138 3 .405
                2.28-1.552 3.285-1.23 3.285-1.23
                .645 1.653.24 2.873.12 3.176
                .765.84 1.23 1.91 1.23 3.22
                0 4.61-2.805 5.625-5.475 5.92
                .42.36.81 1.096.81 2.22
                0 1.606-.015 2.896-.015 3.286
                0 .315.21.69.825.57
                C20.565 22.092 24 17.592 24 12.297
                c0-6.627-5.373-12-12-12"
              />
            </svg>

            Sign in with GitHub
          </Button>

          <FieldDescription className="text-center text-xs">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="font-medium text-foreground transition-colors hover:text-violet-600"
            >
              Sign up
            </Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}