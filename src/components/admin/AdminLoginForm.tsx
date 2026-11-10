"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

type LoginResponse = {
  message?: string;
  error?: string;
};

export default function AdminLoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  setError("");
  setIsLoading(true);

  try {
    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data: LoginResponse = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(
        data.message ||
          data.error ||
          "Unable to sign in. Please check your details.",
      );
    }

    router.replace("/admin");
    router.refresh();
  } catch (err) {
    setError(
      err instanceof Error
        ? err.message
        : "Something went wrong. Please try again.",
    );
  } finally {
    setIsLoading(false);
  }
}

  return (
    <main className="min-h-screen bg-[#f7f0e6] text-[#30242a] lg:grid lg:grid-cols-2">
      <section className="relative flex min-h-[280px] flex-col justify-between overflow-hidden bg-[#481a2c] px-7 py-9 text-white sm:px-12 sm:py-12 lg:min-h-screen lg:px-16 lg:py-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full border border-[#d1ad69]/20"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full border border-[#d1ad69]/15"
        />

        <div className="relative z-10">
          <div className="mb-5 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-[#fffdf9] p-2 sm:h-24 sm:w-24">
            <Image
              src="/assets/images/logo.png"
              alt="Remain In My Love logo"
              width={180}
              height={180}
              priority
              className="h-full w-full object-contain"
            />
          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d1ad69]">
            Faith. Love. Purpose.
          </p>

          <h1 className="mt-5 max-w-xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Love that transforms lives.
          </h1>

          <p className="mt-5 max-w-md text-sm leading-7 text-white/75 sm:text-base">
            Welcome to the administration space for Remain In My Love.
            Together, we nurture meaningful relationships, stronger families
            and caring communities.
          </p>
        </div>

        <div className="relative z-10 mt-10 hidden border-t border-white/15 pt-6 lg:block">
          <p className="text-sm text-white/60">
            Serving with faith, compassion and purpose.
          </p>
        </div>
      </section>

      <section className="flex items-center justify-center px-6 py-12 sm:px-10 lg:px-16">
        <div className="w-full max-w-md">
          <div className="mb-9">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a47b43]">
              Secure admin access
            </p>

            <h2 className="mt-3 font-serif text-4xl text-[#481a2c] sm:text-5xl">
              Welcome back
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#756a6c]">
              Sign in with your administrator account to continue to your
              dashboard.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="admin-email"
                className="mb-2 block text-sm font-medium text-[#30242a]"
              >
                Email address
              </label>

              <input
                id="admin-email"
                type="email"
                name="email"
                autoComplete="username"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your admin email"
                className="w-full rounded-xl border border-[#e6dcd1] bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-[#aaa0a0] focus:border-[#70263b] focus:ring-2 focus:ring-[#70263b]/10"
              />
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="admin-password"
                  className="block text-sm font-medium text-[#30242a]"
                >
                  Password
                </label>
              </div>

              <div className="relative">
                <input
                  id="admin-password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-[#e6dcd1] bg-white px-4 py-3.5 pr-20 text-sm outline-none transition placeholder:text-[#aaa0a0] focus:border-[#70263b] focus:ring-2 focus:ring-[#70263b]/10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((current) => !current)}
                  className="absolute inset-y-0 right-0 px-4 text-xs font-semibold text-[#70263b] hover:text-[#481a2c]"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {error && (
              <div
                role="alert"
                className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="flex w-full items-center justify-center rounded-xl bg-[#70263b] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#481a2c] focus:outline-none focus:ring-2 focus:ring-[#70263b] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-65"
            >
              {isLoading ? "Signing you in..." : "Sign in to dashboard"}
            </button>
          </form>

          <p className="mt-8 text-center text-xs leading-6 text-[#8b8080]">
            This area is restricted to authorised Remain In My Love
            administrators.
          </p>
        </div>
      </section>
    </main>
  );
}
