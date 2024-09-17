import { useState } from "react";
import { Label } from "@/components/ui/Label";
import { TextInput } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { LOGIN_MUTATION } from "../graphql/mutation";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { loading, error }] = useMutation(LOGIN_MUTATION);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login({
        variables: {
          email,
          password,
        },
      });

      if (response?.data) {
        // Сохраняем токены
        localStorage.setItem("access_token", response.data.login.access_token);
        localStorage.setItem(
          "refresh_token",
          response.data.login.refresh_token
        );
        console.log("Токены сохранены в localStorage");

        // Переходим на страницу только после сохранения токенов
        router.push("/myInfo");
      }
    } catch (err) {
      console.error("Ошибка входа:", err.networkError?.result?.errors || err);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8  rounded-md shadow-lg">
        <h2 className="text-3xl font-bold text-center">Login</h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="email">Email address</Label>
            <TextInput
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <TextInput
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1"
              placeholder="Enter your password"
            />
          </div>

          <Button type="submit">{loading ? "Logging in..." : "Login"}</Button>

          {error && <p className="text-red-500 mt-4">Error: {error.message}</p>}
        </form>
      </div>
    </div>
  );
}
