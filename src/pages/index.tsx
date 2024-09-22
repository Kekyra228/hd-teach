import { useEffect } from "react";
import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      router.push("/login");
    }
    router.push("/myInfo");
  }, [router]);

  return (
    <div className="h-screen flex justify-center items-center bg-customBackground">
      <h1 className="text-white text-4xl">Главная страница!</h1>
    </div>
  );
}
