import { useQuery } from "@apollo/client";
import { MY_PROFILE_QUERY } from "../graphql/mutation";
import Image from "next/image";
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
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-10">
            <Image
              src="/HarmonyHR.png"
              width={116}
              height={24}
              alt="logo"
              className="mr-5"
            />
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-900">
                Home
              </a>
              <a href="#" className="text-gray-900">
                My Info
              </a>
              <a href="#" className="text-gray-900">
                People
              </a>
              <a href="#" className="text-gray-900">
                Hiring
              </a>
              <a href="#" className="text-gray-900">
                Reports
              </a>
              <a href="#" className="text-gray-900">
                Files
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className=" hidden md:block h-[16px] w-[16px] text-#1C3144"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 2a6 6 0 014.472 10.24l4.588 4.588a1 1 0 01-1.414 1.414l-4.588-4.588A6 6 0 118 2zm0 2a4 4 0 100 8 4 4 0 000-8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <input
                type="text"
                placeholder="Search"
                className="hidden md:block bg-gray-100 border border-gray-300 rounded-xl pl-10 pr-4 py-2 w-72 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="flex space-x-4">
              <Image
                src="/icon1.png"
                width={24}
                height={24}
                alt="icon1"
                className="h-6 w-6"
              />
              <Image
                src="/icon2.png"
                width={24}
                height={24}
                alt="icon2"
                className="h-6 w-6"
              />
              <Image
                src="/icon3.png"
                width={24}
                height={24}
                alt="icon3"
                className="h-6 w-6"
              />

              <Image
                src={data.myProfile.avatar}
                width={38}
                height={38}
                alt="avatar"
                className="rounded-full h-10 w-10"
              />
            </div>
          </div>
        </div>
      </header>
      <aside className="bg-white p-6 rounded-lg shadow-lg col-span-1">
        <Image
          src={data.myProfile.avatar}
          width={150}
          height={150}
          alt="avatar"
          className="rounded-full"
        />
        <h2 className="text-xl font-semibold text-center">
          {data.myProfile.name}
        </h2>
        <ul className="text-gray-700 mt-4 space-y-2">
          <li>
            <strong>Phone:</strong> 07911 654321
          </li>
          <li>
            <strong>Position:</strong> Full-Time
          </li>
          <li>
            <strong>Department:</strong> Operations
          </li>
          <li>
            <strong>Location:</strong> London, UK
          </li>
        </ul>
        <div className="mt-6">
          <h3 className="font-semibold">Direct Reports</h3>
          <ul className="text-gray-600">
            <li>Shane</li>
            <li>Nathan</li>
            <li>Mitchell</li>
            <li>Philip</li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default MyInfo;
