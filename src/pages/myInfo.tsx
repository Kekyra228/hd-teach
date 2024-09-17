import { useQuery } from "@apollo/client";
import { MY_PROFILE_QUERY } from "../graphql/mutation";
import { Image } from "lucide-react";
import { useEffect } from "react";
import { useRouter } from "next/router";

const MyInfo = () => {
  const { data, loading, error } = useQuery(MY_PROFILE_QUERY);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      router.push("/login"); // Перенаправляем на логин, если нет токена
    }
  }, []);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error.message}</p>;

  return (
    <div>
      <h1>Привет, {data.myProfile.name}</h1>
      {/* <Image src={data.myProfile.avatar} alt="avatar" /> */}
    </div>
  );
};

export default MyInfo;
