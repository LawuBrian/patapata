"use client";

import { AuthFormSplitScreen } from "@/components/ui/login";

export default function LoginPage() {
  const handleLogin = async (data: { email: string; password: string; rememberMe?: boolean }) => {
    console.log("Login:", data.email);
    // Wire to your auth provider here
  };

  return (
    <AuthFormSplitScreen
      logo={
        <span className="font-nunito font-extrabold text-2xl text-charcoal tracking-tight uppercase">
          Pata Pata
        </span>
      }
      title="Welcome back."
      description="Sign in to manage your reservations and stay updated."
      imageSrc="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80"
      imageAlt="Warm candlelit dining at Pata Pata Restaurant"
      onSubmit={handleLogin}
      forgotPasswordHref="#"
      createAccountHref="/signup"
    />
  );
}
