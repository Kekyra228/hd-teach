import { useEffect } from "react";
import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = true; // Пример: замени на проверку реальной авторизации
    if (!isLoggedIn) {
      router.push("/login"); // Перенаправляем на страницу логина
    }
  }, [router]);

  return (
    <div className="h-screen flex justify-center items-center bg-blue-500">
      <h1 className="text-white text-4xl">Tailwind CSS работает!</h1>
    </div>
  );
}
