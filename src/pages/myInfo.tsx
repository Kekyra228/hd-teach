import { useQuery } from "@apollo/client";
import { MY_PROFILE_QUERY } from "../graphql/mutation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const MyInfo = () => {
  const { data, loading, error } = useQuery(MY_PROFILE_QUERY);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) {
      router.push("/login"); // Перенаправляем на логин, если нет токена
    }
  }, []);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("access_token");

    // Перенаправляем на страницу логина
    router.push("/login");
  };

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error.message}</p>;

  return (
    <div>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
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
            <div className="relative flex items-center ">
              <div className="absolute inset-y-0 left-0 top-1 pl-3 flex items-center pointer-events-none mr-6">
                <svg
                  className="h-5 w-5 hidden md:block text-gray-400"
                  width="24.006798"
                  height="23.993164"
                  viewBox="0 0 24.0068 23.9932"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <desc>Created with Pixso.</desc>
                  <defs>
                    <filter
                      id="filter_8_221_dd"
                      x="0.000000"
                      y="0.000000"
                      width="24.006798"
                      height="23.993164"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx="0" dy="4" />
                      <feGaussianBlur stdDeviation="1.33333" />
                      <feComposite
                        in2="hardAlpha"
                        operator="out"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect_dropShadow_1"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect_dropShadow_1"
                        result="shape"
                      />
                    </filter>
                  </defs>
                  <g filter="url(#filter_8_221_dd)">
                    <path
                      id="Vector"
                      d="M10.39 1.59C9.12 1.6 7.9 2.1 7 3C6.1 3.9 5.59 5.13 5.6 6.4C5.6 7.03 5.72 7.65 5.96 8.24C6.2 8.82 6.56 9.35 7 9.79C7.45 10.24 7.98 10.59 8.56 10.83C9.14 11.07 9.77 11.2 10.4 11.2C11.03 11.19 11.65 11.07 12.24 10.83C12.82 10.59 13.35 10.23 13.79 9.79C14.24 9.34 14.59 8.81 14.83 8.23C15.07 7.65 15.2 7.02 15.2 6.39C15.19 5.12 14.69 3.9 13.79 3C12.89 2.1 11.66 1.59 10.39 1.59ZM5.87 1.87C7.07 0.67 8.69 0 10.39 0C12.09 -0.01 13.72 0.67 14.92 1.87C16.12 3.07 16.79 4.69 16.79 6.39C16.8 7.23 16.63 8.06 16.31 8.84C16.09 9.37 15.8 9.86 15.45 10.32L19.77 14.62C20.08 14.93 20.08 15.44 19.77 15.75C19.46 16.07 18.95 16.07 18.64 15.75L14.32 11.45C13.87 11.8 13.38 12.09 12.85 12.31C12.07 12.63 11.24 12.79 10.4 12.8C9.56 12.8 8.73 12.63 7.95 12.31C7.17 11.99 6.47 11.52 5.87 10.92C5.28 10.33 4.81 9.63 4.48 8.85C4.16 8.07 4 7.24 4 6.4C3.99 4.7 4.67 3.07 5.87 1.87Z"
                      fill="#1C3144"
                      fill-opacity="1.000000"
                      fill-rule="evenodd"
                    />
                  </g>
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search"
                className="hidden md:block  w-[395px] bg-gray-100 border border-gray-300 rounded-xl pl-10 pr-4 py-2 w-72 focus:ring-blue-500 focus:border-blue-500 placeholder-black"
              />
            </div>

            <div className="flex space-x-4 items-center">
              <svg
                width="24.000000"
                height="24.000000"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <desc>Created with Pixso.</desc>
                <defs />
                <path
                  id="Vector"
                  d="M8.82 2.49C9.63 -0.84 14.36 -0.84 15.17 2.49C15.31 3.06 15.97 3.34 16.47 3.03C19.39 1.25 22.74 4.6 20.96 7.52C20.65 8.02 20.93 8.68 21.5 8.82C24.83 9.63 24.83 14.36 21.5 15.17C20.93 15.31 20.65 15.97 20.96 16.47C22.74 19.39 19.39 22.74 16.47 20.96C15.97 20.65 15.31 20.93 15.17 21.5C14.36 24.83 9.63 24.83 8.82 21.5C8.68 20.93 8.02 20.65 7.52 20.96C4.6 22.74 1.25 19.39 3.03 16.47C3.34 15.97 3.06 15.31 2.49 15.17C-0.84 14.36 -0.84 9.63 2.49 8.82C3.06 8.68 3.34 8.02 3.03 7.52C1.25 4.6 4.6 1.25 7.52 3.03C8.02 3.34 8.68 3.06 8.82 2.49ZM12.84 3.06C12.62 2.17 11.37 2.17 11.15 3.06C10.63 5.21 8.16 6.23 6.27 5.08C5.5 4.61 4.61 5.5 5.08 6.27C6.23 8.16 5.21 10.63 3.06 11.15C2.17 11.37 2.17 12.62 3.06 12.84C5.21 13.36 6.23 15.83 5.08 17.72C4.61 18.49 5.5 19.38 6.27 18.91C8.16 17.76 10.63 18.78 11.15 20.93C11.37 21.82 12.62 21.82 12.84 20.93C13.36 18.78 15.83 17.76 17.72 18.91C18.49 19.38 19.38 18.49 18.91 17.72C17.76 15.83 18.78 13.36 20.93 12.84C21.82 12.62 21.82 11.37 20.93 11.15C18.78 10.63 17.76 8.16 18.91 6.27C19.38 5.5 18.49 4.61 17.72 5.08C15.83 6.23 13.36 5.21 12.84 3.06ZM12 9.59C10.67 9.59 9.59 10.67 9.59 12C9.59 13.32 10.67 14.4 12 14.4C13.32 14.4 14.4 13.32 14.4 12C14.4 10.67 13.32 9.59 12 9.59ZM7.2 12C7.2 9.34 9.34 7.2 12 7.2C14.65 7.2 16.79 9.34 16.79 12C16.79 14.65 14.65 16.79 12 16.79C9.34 16.79 7.2 14.65 7.2 12Z"
                  fill="#1C3144"
                  fill-opacity="1.000000"
                  fill-rule="evenodd"
                />
              </svg>

              <svg
                width="24.000000"
                height="24.000000"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <desc>Created with Pixso.</desc>
                <defs />
                <path
                  id="Vector"
                  d="M12 2.4C9.45 2.4 7.01 3.41 5.21 5.21C3.41 7.01 2.4 9.45 2.4 12C2.4 13.26 2.64 14.5 3.13 15.67C3.61 16.83 4.32 17.89 5.21 18.78C6.1 19.67 7.16 20.38 8.32 20.86C9.49 21.35 10.73 21.6 12 21.6C13.26 21.6 14.5 21.35 15.67 20.86C16.83 20.38 17.89 19.67 18.78 18.78C19.67 17.89 20.38 16.83 20.86 15.67C21.35 14.5 21.6 13.26 21.6 12C21.6 9.45 20.58 7.01 18.78 5.21C16.98 3.41 14.54 2.4 12 2.4ZM3.51 3.51C5.76 1.26 8.81 0 12 0C15.18 0 18.23 1.26 20.48 3.51C22.73 5.76 24 8.81 24 12C24 13.57 23.68 15.13 23.08 16.59C22.48 18.04 21.59 19.37 20.48 20.48C19.37 21.59 18.04 22.48 16.59 23.08C15.13 23.68 13.57 24 12 24C10.42 24 8.86 23.68 7.4 23.08C5.95 22.48 4.62 21.59 3.51 20.48C2.4 19.37 1.51 18.04 0.91 16.59C0.31 15.13 0 13.57 0 12C0 8.81 1.26 5.76 3.51 3.51ZM12 7.2C10.23 7.2 8.96 8.04 8.55 8.91C8.27 9.51 7.56 9.76 6.96 9.48C6.36 9.2 6.1 8.48 6.38 7.88C7.29 5.95 9.58 4.79 12 4.79C13.56 4.79 15.01 5.27 16.11 6.09C17.21 6.91 18 8.14 18 9.59C18 12.08 15.79 13.8 13.41 14.26C13.33 14.28 13.26 14.32 13.22 14.36C13.2 14.38 13.2 14.39 13.2 14.39C13.2 15.06 12.66 15.6 12 15.6C11.33 15.6 10.8 15.06 10.8 14.4C10.8 13.02 11.89 12.11 12.96 11.9C14.73 11.57 15.6 10.47 15.6 9.59C15.6 9.06 15.31 8.49 14.67 8.01C14.03 7.53 13.09 7.2 12 7.2ZM10.8 18C10.8 17.33 11.33 16.79 12 16.79L12.01 16.79C12.67 16.79 13.21 17.33 13.21 18C13.21 18.66 12.67 19.2 12.01 19.2L12 19.2C11.33 19.2 10.8 18.66 10.8 18Z"
                  fill="#1C3144"
                  fill-opacity="1.000000"
                  fill-rule="evenodd"
                />
              </svg>
              <svg
                width="21.000000"
                height="24.000000"
                viewBox="0 0 21 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <desc>Created with Pixso.</desc>
                <defs />
                <path
                  id="Vector"
                  d="M8.02 1.05C8.68 0.37 9.57 0 10.5 0C11.42 0 12.31 0.37 12.97 1.05C13.53 1.63 13.88 2.39 13.97 3.19C15.25 3.81 16.35 4.76 17.16 5.94C18.14 7.36 18.66 9.06 18.66 10.8L18.66 14.58C18.66 14.75 18.69 14.91 18.75 15.06C18.81 15.21 18.9 15.35 19.01 15.46L20.65 17.15C20.99 17.49 21.09 18.01 20.91 18.45C20.73 18.9 20.3 19.2 19.83 19.2L15.16 19.2C15.16 20.47 14.67 21.69 13.79 22.59C12.92 23.49 11.73 24 10.5 24C9.26 24 8.07 23.49 7.2 22.59C6.32 21.69 5.83 20.47 5.83 19.2L1.16 19.2C0.69 19.2 0.26 18.9 0.08 18.45C-0.1 18.01 0 17.49 0.34 17.15L1.98 15.46C2.2 15.23 2.33 14.91 2.33 14.59L2.33 10.8C2.33 7.43 4.25 4.54 7.02 3.19C7.11 2.39 7.46 1.63 8.02 1.05ZM17.06 16.79C16.87 16.54 16.72 16.27 16.6 15.98C16.42 15.54 16.33 15.06 16.33 14.58L16.33 10.8C16.33 9.55 15.95 8.34 15.26 7.33C14.56 6.32 13.58 5.55 12.44 5.14C11.97 4.97 11.66 4.51 11.66 4L11.66 3.59C11.66 3.28 11.54 2.97 11.32 2.75C11.1 2.52 10.8 2.4 10.5 2.4C10.19 2.4 9.89 2.52 9.67 2.75C9.45 2.97 9.33 3.28 9.33 3.59L9.33 4C9.33 4.51 9.02 4.97 8.55 5.14C6.28 5.96 4.66 8.18 4.66 10.8L4.66 14.59C4.66 15.39 4.4 16.16 3.93 16.79L17.06 16.79ZM8.16 19.2C8.16 19.83 8.41 20.44 8.85 20.89C9.28 21.34 9.88 21.6 10.5 21.6C11.11 21.6 11.71 21.34 12.14 20.89C12.58 20.44 12.83 19.83 12.83 19.2L8.16 19.2Z"
                  fill="#1C3144"
                  fill-opacity="1.000000"
                  fill-rule="evenodd"
                />
              </svg>

              <Image
                src={data.myProfile.avatar}
                width={38}
                height={38}
                alt="avatar"
                className="rounded-full  relative h-10 w-10"
                onClick={() => setShowModal(true)} // Открытие модалки при клике
              />
              {showModal && (
                <div className="absolute right-5 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  <p className="text-center">Log out?</p>
                  <button
                    className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={handleLogout}
                  >
                    Yes
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      <div className="bg-blue-50 space-x-6 md:p-6 rounded-lg flex flex-col md:flex-row justify-between items-center md:items-center w-full md:flex-nowrap h-auto shadow-lg space-y-4 md:space-y-0">
        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-6 w-full md:w-auto">
          <Image
            src={data.myProfile.avatar}
            width={150}
            height={150}
            alt="avatar"
            className="w-16 h-16 md:w-[150px] md: ml-[60px] md:h-[150px] rounded-full object-cover"
          />

          <div className="mt-4 md:mt-0 text-center md:text-left">
            <h2 className="text-lg md:text-2xl font-bold md:mt-[80px] md:mb-[51px]">
              {data.myProfile.name}
            </h2>

            <div className="flex justify-center gap-[20px] flex-wrap md:justify-end md:gap-[63px]  space-x-4 mt-2 text-black">
              <a href="#" className="hover:text-black">
                Personal
              </a>
              <a href="#" className="hover:text-black">
                Job
              </a>
              <a href="#" className="text-black">
                Time Off
              </a>
              <a href="#" className="hover:text-black">
                Emergency
              </a>
              <a href="#" className="hover:text-black">
                Documents
              </a>
              <a href="#" className="hover:text-black">
                Notes
              </a>
              <a href="#" className="hover:text-black">
                Benefits
              </a>
              <a href="#" className="hover:text-black">
                Training
              </a>
              <a href="#" className="hover:text-black">
                Assets
              </a>
              <a href="#" className="hover:text-black">
                More
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 justify-centerspace-x-2 md: mr-[72px]">
          <button className="flex items-center justify-between w-[162px] h-[33px] bg-transperent border border-gray-300 text-gray-700 text-sm font-medium rounded-lg px-3 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-blue-300">
            Request a Change
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className="w-4 h-4 text-gray-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <button className="relative w-[33px] md:w-[56px] h-[33px] bg-transparent border border-gray-300 rounded-lg flex items-center p-2 gap-4 justify-center hover:bg-gray-100 focus:outline-none focus:ring focus:ring-blue-300">
            <svg
              width="16.012329"
              height="16.012390"
              viewBox="0 0 16.0123 16.0124"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <desc>Created with Pixso.</desc>
              <defs />
              <rect
                id="Icon"
                rx="-0.500000"
                width="15.000000"
                height="15.000000"
                transform="translate(0.500000 0.512390) rotate(-0.044264)"
                fill="#FFFFFF"
                fill-opacity="0"
              />
              <path
                id="Vector"
                d="M5.88 1.67C6.42 -0.55 9.57 -0.56 10.11 1.66C10.21 2.05 10.64 2.23 10.98 2.02C12.93 0.83 15.16 3.06 13.98 5.01C13.77 5.35 13.95 5.79 14.33 5.88C16.56 6.42 16.56 9.57 14.34 10.11C13.96 10.21 13.78 10.64 13.98 10.98C15.17 12.93 12.94 15.16 10.99 13.98C10.65 13.77 10.22 13.95 10.12 14.33C9.59 16.56 6.43 16.56 5.89 14.34C5.8 13.96 5.36 13.78 5.02 13.98C3.07 15.17 0.84 12.94 2.03 10.99C2.23 10.65 2.05 10.22 1.67 10.12C-0.55 9.59 -0.56 6.43 1.66 5.89C2.05 5.8 2.23 5.36 2.02 5.02C0.83 3.07 3.06 0.84 5.01 2.03C5.35 2.23 5.79 2.05 5.88 1.67ZM8.56 2.04C8.42 1.45 7.58 1.45 7.43 2.04C7.09 3.48 5.44 4.16 4.18 3.39C3.66 3.08 3.07 3.67 3.39 4.19C4.16 5.45 3.48 7.09 2.04 7.44C1.45 7.59 1.45 8.43 2.04 8.57C3.48 8.92 4.16 10.56 3.39 11.82C3.08 12.34 3.67 12.93 4.19 12.61C5.45 11.85 7.09 12.53 7.44 13.96C7.59 14.55 8.43 14.55 8.57 13.96C8.92 12.52 10.56 11.84 11.82 12.61C12.34 12.92 12.93 12.33 12.61 11.81C11.85 10.55 12.53 8.91 13.96 8.56C14.55 8.42 14.55 7.58 13.96 7.43C12.52 7.09 11.84 5.44 12.61 4.18C12.92 3.66 12.33 3.07 11.81 3.39C10.55 4.16 8.91 3.48 8.56 2.04ZM8 6.4C7.12 6.4 6.4 7.12 6.4 8C6.4 8.89 7.12 9.6 8 9.6C8.89 9.6 9.6 8.88 9.6 8C9.6 7.12 8.88 6.4 8 6.4ZM4.8 8C4.8 6.24 6.23 4.8 8 4.8C9.77 4.8 11.2 6.23 11.2 8C11.2 9.77 9.77 11.2 8 11.2C6.24 11.2 4.8 9.77 4.8 8Z"
                fill="#1C3144"
                fill-opacity="1.000000"
                fill-rule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className="w-4 h-4 text-gray-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex px-6">
        <div className="w-[250px] flex-shrink-0">
          <aside className=" p-6  mt-4 md:w-[225px] flex flex-col items-center space-y-6 box-border ">
            {/* Контактная информация */}
            <div className="md:w-[225px] box-border text-center space-y-2">
              <div className="flex bg-white rounded-lg shadow-inner p-6 flex-col items-start justify-start space-y-4">
                <div className="flex items-center justify-start space-x-2">
                  <svg
                    width="16.000061"
                    height="16.000000"
                    viewBox="0 0 16.0001 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <desc>Created with Pixso.</desc>
                    <defs />
                    <path
                      id="Vector"
                      d="M15.22 10.75L11.46 9.06L11.45 9.06C11.25 8.97 11.04 8.94 10.82 8.96C10.61 8.98 10.41 9.05 10.23 9.17C10.21 9.18 10.19 9.2 10.17 9.21L8.22 10.87C6.99 10.28 5.72 9.01 5.12 7.79L6.78 5.82C6.8 5.8 6.81 5.78 6.83 5.76C6.94 5.58 7.01 5.38 7.03 5.17C7.05 4.96 7.01 4.74 6.93 4.55L6.93 4.54L5.24 0.77C5.13 0.51 4.94 0.3 4.7 0.16C4.46 0.03 4.18 -0.03 3.91 0C2.82 0.15 1.83 0.68 1.11 1.5C0.39 2.32 -0.01 3.38 0 4.47C0 10.83 5.16 16 11.52 16C12.61 16 13.67 15.6 14.49 14.88C15.31 14.16 15.84 13.17 15.99 12.08C16.02 11.81 15.96 11.53 15.83 11.29C15.69 11.05 15.48 10.86 15.22 10.75ZM11.52 14.72C8.8 14.71 6.2 13.63 4.28 11.71C2.36 9.79 1.28 7.19 1.28 4.47C1.27 3.69 1.55 2.94 2.07 2.35C2.58 1.76 3.29 1.38 4.06 1.27C4.06 1.28 4.06 1.28 4.06 1.28L5.74 5.04L4.09 7.02C4.07 7.04 4.06 7.06 4.05 7.09C3.93 7.27 3.85 7.48 3.84 7.7C3.83 7.92 3.87 8.14 3.97 8.34C4.69 9.82 6.18 11.31 7.68 12.03C7.88 12.13 8.1 12.17 8.32 12.15C8.55 12.13 8.76 12.06 8.94 11.94C8.96 11.93 8.98 11.91 9 11.89L10.95 10.23L14.71 11.92L14.72 11.92C14.61 12.69 14.23 13.41 13.64 13.92C13.05 14.44 12.3 14.72 11.52 14.72Z"
                      fill="#1C3144"
                      fill-opacity="1.000000"
                      fill-rule="nonzero"
                    />
                  </svg>

                  <span className="text-sm text-black">07911 654321</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <svg
                    width="16.005615"
                    height="12.008636"
                    viewBox="0 0 16.0056 12.0086"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <desc>Created with Pixso.</desc>
                    <defs />
                    <path
                      id="Vector"
                      d="M0.7 0.66C1.15 0.24 1.76 0 2.39 0L13.59 0C14.23 -0.01 14.84 0.23 15.29 0.65C15.74 1.07 15.99 1.65 15.99 2.24L16 2.98C16 2.99 16 3 16 3L16 9.74C16 10.34 15.75 10.91 15.3 11.33C14.85 11.76 14.24 11.99 13.6 12L2.4 12C1.77 12 1.16 11.77 0.7 11.35C0.25 10.92 0 10.35 0 9.76L0 3.02C0 3.01 0 3 0 2.99L0 2.26C-0.01 1.66 0.25 1.09 0.7 0.66ZM1.6 4.41L1.6 9.75C1.6 9.95 1.69 10.14 1.84 10.28C1.99 10.42 2.19 10.5 2.4 10.5L13.6 10.5C13.81 10.49 14.02 10.42 14.17 10.27C14.32 10.13 14.4 9.94 14.4 9.74L14.4 4.4L9.33 7.57C9.33 7.57 9.33 7.57 9.33 7.57C8.94 7.81 8.47 7.95 8 7.95C7.53 7.95 7.06 7.82 6.67 7.57C6.67 7.57 6.67 7.57 6.67 7.57L1.6 4.41ZM14.4 2.59L8.44 6.32L8.44 6.32C8.31 6.4 8.16 6.45 8 6.45C7.84 6.45 7.69 6.4 7.55 6.32L7.55 6.32L1.6 2.6L1.59 2.25C1.59 2.06 1.68 1.86 1.83 1.72C1.98 1.58 2.18 1.5 2.39 1.5L13.59 1.5C13.81 1.49 14.01 1.57 14.16 1.71C14.31 1.85 14.39 2.05 14.39 2.24L14.4 2.59Z"
                      fill="#1C3144"
                      fill-opacity="1.000000"
                      fill-rule="evenodd"
                    />
                  </svg>
                  <span className="text-sm text-black">
                    avd.yana@videoroll.net
                  </span>
                </div>
                <div className="flex flex-row gap-[17px]">
                  <svg
                    width="16.500183"
                    height="17.499176"
                    viewBox="0 0 16.5002 17.4992"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <desc>Created with Pixso.</desc>
                    <defs />
                    <path
                      id="Vector"
                      d="M3.51 3.45C3.21 3.75 2.79 3.93 2.36 3.94C1.93 3.92 1.52 3.74 1.22 3.44C0.92 3.14 0.75 2.73 0.75 2.3C0.76 1.89 0.94 1.5 1.24 1.21C1.54 0.92 1.94 0.75 2.36 0.75C2.78 0.75 3.18 0.92 3.48 1.21C3.78 1.5 3.95 1.89 3.97 2.3C3.97 2.73 3.81 3.14 3.51 3.45ZM2.36 6.04C3.2 6.04 3.8 5.9 3.8 6.84L3.8 15.97C3.8 16.92 3.19 16.73 2.36 16.73C1.54 16.73 0.92 16.92 0.92 15.97L0.92 6.84C0.92 5.9 1.52 6.04 2.36 6.04ZM6.8 6.06C7.11 6 8.17 6.06 8.54 6.06C8.91 6.06 9.06 6.65 9.05 7.1C9.36 6.69 9.78 6.35 10.27 6.14C10.75 5.93 11.28 5.84 11.81 5.89C12.33 5.85 12.85 5.93 13.34 6.11C13.82 6.29 14.27 6.57 14.64 6.93C15.01 7.29 15.3 7.72 15.49 8.2C15.68 8.68 15.76 9.19 15.74 9.7L15.74 15.94C15.74 16.89 15.15 16.69 14.31 16.69C13.47 16.69 12.87 16.89 12.87 15.94L12.87 11.06C12.9 10.81 12.86 10.56 12.78 10.32C12.69 10.09 12.55 9.87 12.38 9.69C12.2 9.51 11.98 9.37 11.75 9.28C11.51 9.19 11.25 9.15 11 9.16C10.74 9.16 10.49 9.2 10.26 9.3C10.02 9.4 9.81 9.54 9.64 9.73C9.47 9.91 9.34 10.13 9.25 10.36C9.17 10.6 9.14 10.85 9.17 11.1L9.17 15.97C9.17 16.92 8.56 16.73 7.72 16.73C6.88 16.73 6.29 16.92 6.29 15.97L6.29 6.84L6.29 6.84C6.29 6.31 6.49 6.12 6.8 6.06Z"
                      stroke="#1C3144"
                      stroke-opacity="1.000000"
                      stroke-width="1.500000"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <svg
                    width="9.000000"
                    height="16.000000"
                    viewBox="0 0 9 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <desc>Created with Pixso.</desc>
                    <defs />
                    <path
                      id="Vector"
                      d="M3.34 1.26C4.12 0.45 5.17 0 6.27 0L8.4 0C8.56 0 8.71 0.06 8.82 0.18C8.93 0.29 8.99 0.45 8.99 0.61L8.99 3.56C8.99 3.73 8.93 3.88 8.82 4C8.71 4.11 8.56 4.18 8.4 4.18L6.27 4.18C6.26 4.18 6.24 4.18 6.23 4.19C6.21 4.2 6.2 4.2 6.19 4.22C6.18 4.23 6.17 4.24 6.16 4.26C6.16 4.27 6.15 4.29 6.15 4.3L6.15 5.9L8.4 5.9C8.49 5.9 8.58 5.92 8.66 5.96C8.74 6.01 8.81 6.07 8.87 6.14C8.92 6.21 8.96 6.3 8.98 6.39C9 6.48 9 6.58 8.98 6.67L8.27 9.62C8.23 9.75 8.16 9.87 8.06 9.96C7.95 10.04 7.82 10.09 7.69 10.09L6.15 10.09L6.15 15.38C6.15 15.54 6.09 15.7 5.98 15.81C5.87 15.93 5.72 16 5.56 16L2.72 16C2.56 16 2.41 15.93 2.3 15.81C2.19 15.7 2.13 15.54 2.13 15.38L2.13 10.09L0.59 10.09C0.43 10.09 0.28 10.02 0.17 9.91C0.06 9.79 0 9.64 0 9.47L0 6.52C0 6.44 0.01 6.36 0.04 6.28C0.07 6.21 0.11 6.14 0.17 6.08C0.22 6.03 0.29 5.98 0.36 5.95C0.43 5.92 0.51 5.9 0.59 5.9L2.13 5.9L2.13 4.3C2.13 3.16 2.56 2.06 3.34 1.26ZM6.27 1.23C5.49 1.23 4.73 1.55 4.18 2.13C3.62 2.7 3.31 3.49 3.31 4.3L3.31 6.52C3.31 6.68 3.25 6.84 3.14 6.95C3.03 7.07 2.88 7.13 2.72 7.13L1.18 7.13L1.18 8.86L2.72 8.86C2.88 8.86 3.03 8.92 3.14 9.04C3.25 9.15 3.31 9.31 3.31 9.47L3.31 14.76L4.97 14.76L4.97 9.47C4.97 9.31 5.03 9.15 5.14 9.04C5.25 8.92 5.4 8.86 5.56 8.86L7.23 8.86L7.64 7.13L5.56 7.13C5.4 7.13 5.25 7.07 5.14 6.95C5.03 6.84 4.97 6.68 4.97 6.52L4.97 4.3C4.97 3.94 5.11 3.6 5.35 3.35C5.59 3.09 5.93 2.95 6.27 2.95L7.81 2.95L7.81 1.23L6.27 1.23Z"
                      fill="#1C3144"
                      fill-opacity="1.000000"
                      fill-rule="evenodd"
                    />
                  </svg>
                  <svg
                    width="17.500732"
                    height="14.500580"
                    viewBox="0 0 17.5007 14.5006"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <desc>Created with Pixso.</desc>
                    <defs />
                    <path
                      id="Vector"
                      d="M1.98 11.55C1.86 11.59 1.76 11.67 1.68 11.77C1.61 11.87 1.57 11.99 1.57 12.11C1.57 12.24 1.61 12.36 1.68 12.46C1.76 12.56 1.86 12.63 1.98 12.67C10.66 16.07 16.18 10.82 15.34 5.01L16.75 2.24L15.12 2.24C13.08 -0.13 7.69 -0.01 8.58 5.05C8.58 5.05 5.7 5.54 2.01 2.09C1.92 2.01 1.82 1.95 1.7 1.93C1.58 1.9 1.46 1.91 1.35 1.95C1.23 1.99 1.14 2.06 1.06 2.15C0.99 2.25 0.95 2.35 0.94 2.47C0.55 3.99 0.75 5.6 1.49 7C2.24 8.4 3.48 9.5 5.01 10.11C4.11 10.78 3.08 11.27 1.98 11.55Z"
                      stroke="#1C3144"
                      stroke-opacity="1.000000"
                      stroke-width="1.500000"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Hire Date */}
            <div className="flex bg-white rounded-lg shadow-inner p-6 flex-col items-start justify-start space-y-4 md:w-[225px] box-border">
              <div className=" text-sm">Hire Date</div>
              <div className="font-semibold ">Sep. 3, 2020</div>
              <div className="text-sm ">3y · 9m · 20d</div>
            </div>

            {/* Дополнительная информация */}
            <div className="flex bg-white rounded-lg shadow-inner p-6 flex-col items-start justify-start space-y-4 md:w-[225px] box-border">
              <div className=" text-sm">Full-Time</div>
              <div className="font-semibold ">Operations</div>
              <div className="text-sm ">Europe, London, UK</div>
            </div>

            {/* Direct Reports */}
            <div className="flex bg-white rounded-lg shadow-inner p-6 flex-col items-start justify-start space-y-4 md:w-[225px] box-border">
              <div className=" text-sm">Direct Reports</div>
              <ul className=" text-sm space-y-1">
                <li>Shane</li>
                <li>Nathan</li>
                <li>Mitchell</li>
                <li>Philip</li>
                <li>
                  <a href="#">4 More...</a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
        <div className="flex-grow ml-[25px]">
          <div className=" bg-white p-6 rounded-lg shadow-lg mt-4">
            <div className="flex justify-between items-center border-b-4 pb-4 mb-4">
              <div className="flex items-center space-x-2">
                <svg
                  width="33.390961"
                  height="31.500305"
                  viewBox="0 0 33.391 31.5003"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <desc>Created with Pixso.</desc>
                  <defs />
                  <path
                    id="primary"
                    d="M24 22.5L24 28.5C24 28.89 23.84 29.27 23.56 29.56C23.27 29.84 22.89 30 22.5 30L3 30C2.6 30 2.22 29.84 1.93 29.56C1.65 29.27 1.5 28.89 1.5 28.5L1.5 4.5C1.5 4.1 1.65 3.72 1.93 3.43C2.22 3.15 2.6 3 3 3L13.5 3"
                    stroke="#1C3144"
                    stroke-opacity="1.000000"
                    stroke-width="3.000000"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  />
                  <path
                    id="primary"
                    d="M18 24L7.5 24M13.5 18L7.5 18"
                    stroke="#1C3144"
                    stroke-opacity="1.000000"
                    stroke-width="3.000000"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  />
                  <path
                    id="Vector"
                    d="M23.06 2.07C20.87 2.07 18.77 2.94 17.23 4.49C15.68 6.03 14.81 8.13 14.82 10.32C14.82 11.41 15.03 12.48 15.45 13.48C15.86 14.48 16.47 15.39 17.24 16.15C18 16.92 18.91 17.53 19.91 17.94C20.92 18.35 21.99 18.57 23.07 18.57C24.16 18.56 25.23 18.35 26.23 17.94C27.23 17.52 28.14 16.91 28.9 16.14C29.67 15.38 30.28 14.47 30.69 13.47C31.1 12.47 31.32 11.39 31.32 10.31C31.31 8.12 30.44 6.02 28.89 4.48C27.35 2.93 25.25 2.06 23.06 2.07ZM15.77 3.03C17.7 1.09 20.32 0.01 23.06 0C25.79 0 28.42 1.09 30.35 3.02C32.29 4.95 33.38 7.57 33.38 10.31C33.38 11.66 33.11 13 32.6 14.25C32.08 15.51 31.32 16.64 30.36 17.6C29.41 18.56 28.27 19.32 27.02 19.84C25.77 20.36 24.43 20.63 23.07 20.63C21.72 20.63 20.38 20.36 19.13 19.85C17.87 19.33 16.74 18.57 15.78 17.61C14.82 16.66 14.06 15.52 13.54 14.27C13.02 13.02 12.75 11.68 12.75 10.32C12.75 7.59 13.84 4.96 15.77 3.03ZM23.06 5.16C23.63 5.16 24.09 5.62 24.09 6.19L24.1 9.89L26.89 12.68C27.29 13.08 27.29 13.73 26.89 14.14C26.49 14.54 25.84 14.54 25.43 14.14L22.34 11.05C22.14 10.85 22.03 10.59 22.03 10.32L22.03 6.19C22.03 5.62 22.49 5.16 23.06 5.16Z"
                    fill="#1C3144"
                    fill-opacity="1.000000"
                    fill-rule="evenodd"
                  />
                </svg>

                <h2 className="text-lg text-textColor font-semibold">
                  Time Off
                </h2>
              </div>
              <div className="flex items-center space-x-4">
                <span className="">
                  Accrual Level Start Date{" "}
                  <a href="#" className="text-textColor">
                    03/09/2020
                  </a>
                </span>
                <button className="border border-black px-4 py-2 rounded-lg text-sm hover:bg-gray-100">
                  Add Time Off Policy
                </button>
              </div>
            </div>
            {/* Карточки с доступными днями */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="flex items-center flex-col ">
                <div className="flex flex-col items-center justify-center bg-customBackground w-[264px] h-[138px] p-4 rounded-lg">
                  <div className="text-2xl font-bold">
                    <h4>Sick</h4>
                    <div className="flex gap-2 items-center">
                      <svg
                        width="30.000000"
                        height="30.000000"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <desc>Created with Pixso.</desc>
                        <defs />
                        <path
                          id="Vector"
                          d="M8.33 3.33C8.33 2.44 8.68 1.6 9.3 0.97C9.93 0.35 10.78 0 11.66 0L18.33 0C19.21 0 20.06 0.35 20.69 0.97C21.31 1.6 21.66 2.44 21.66 3.33L21.66 7.33C21.66 7.88 22.11 8.33 22.66 8.33L26.66 8.33C27.55 8.33 28.39 8.68 29.02 9.3C29.64 9.93 30 10.78 30 11.66L30 18.33C30 19.21 29.64 20.06 29.02 20.69C28.39 21.31 27.55 21.66 26.66 21.66L22.66 21.66C22.11 21.66 21.66 22.11 21.66 22.66L21.66 26.66C21.66 27.55 21.31 28.39 20.69 29.02C20.06 29.64 19.21 30 18.33 30L11.66 30C10.78 30 9.93 29.64 9.3 29.02C8.68 28.39 8.33 27.55 8.33 26.66L8.33 22.66C8.33 22.11 7.88 21.66 7.33 21.66L3.33 21.66C2.44 21.66 1.6 21.31 0.97 20.69C0.35 20.06 0 19.21 0 18.33L0 11.66C0 10.78 0.35 9.93 0.97 9.3C1.6 8.68 2.44 8.33 3.33 8.33L7.33 8.33C7.88 8.33 8.33 7.88 8.33 7.33L8.33 3.33ZM17.33 3.33L12.66 3.33C12.11 3.33 11.66 3.78 11.66 4.33L11.66 10.66C11.66 11.21 11.21 11.66 10.66 11.66L4.33 11.66C3.78 11.66 3.33 12.11 3.33 12.66L3.33 17.33C3.33 17.88 3.78 18.33 4.33 18.33L10.66 18.33C11.21 18.33 11.66 18.78 11.66 19.33L11.66 25.66C11.66 26.21 12.11 26.66 12.66 26.66L17.33 26.66C17.88 26.66 18.33 26.21 18.33 25.66L18.33 19.33C18.33 18.78 18.78 18.33 19.33 18.33L25.66 18.33C26.21 18.33 26.66 17.88 26.66 17.33L26.66 12.66C26.66 12.11 26.21 11.66 25.66 11.66L19.33 11.66C18.78 11.66 18.33 11.21 18.33 10.66L18.33 4.33C18.33 3.78 17.88 3.33 17.33 3.33Z"
                          fill="#1C3144"
                          fill-opacity="1.000000"
                          fill-rule="evenodd"
                        />
                      </svg>
                      3
                    </div>
                  </div>
                  <div>Days Available</div>
                  <div className="text-centerBlock">1 day scheduled</div>
                </div>
                <div className="mt-4 text-centerBlock">Sick Full-Time</div>
              </div>
              <div className="flex items-center flex-col">
                <div className="flex flex-col items-center justify-center bg-customBackground w-[264px] h-[138px] p-4 rounded-lg">
                  <div className="text-2xl font-bold">
                    <h4>Sick</h4>
                    <div className="flex gap-2 items-center">
                      <svg
                        width="33.004997"
                        height="33.000000"
                        viewBox="0 0 33.005 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <desc>Created with Pixso.</desc>
                        <defs />
                        <path
                          id="primary"
                          d="M14.83 31.5L20.83 19.18C20.96 18.9 21.18 18.66 21.44 18.49C21.71 18.33 22.02 18.24 22.33 18.24C22.64 18.24 22.95 18.33 23.21 18.49C23.48 18.66 23.69 18.9 23.83 19.18L29.83 31.5L14.83 31.5L3.16 31.5L11.7 15.7C11.84 15.43 12.05 15.21 12.31 15.06C12.57 14.9 12.86 14.82 13.16 14.82C13.46 14.82 13.76 14.9 14.02 15.06C14.27 15.21 14.49 15.43 14.63 15.7L18.78 23.4L14.83 31.5M31.5 31.5L1.5 31.5L31.5 31.5ZM22.34 9.27C22.89 10.1 23.67 10.74 24.58 11.11C25.5 11.49 26.5 11.59 27.47 11.4C28.44 11.21 29.33 10.73 30.03 10.03C30.73 9.33 31.21 8.44 31.4 7.47C31.59 6.5 31.49 5.5 31.11 4.58C30.74 3.67 30.1 2.89 29.27 2.34C28.45 1.79 27.48 1.5 26.5 1.5C25.17 1.5 23.9 2.02 22.96 2.96C22.02 3.9 21.5 5.17 21.5 6.5C21.5 7.48 21.79 8.45 22.34 9.27Z"
                          stroke="#1C3144"
                          stroke-opacity="1.000000"
                          stroke-width="3.000000"
                          stroke-linejoin="round"
                        />
                      </svg>
                      3
                    </div>
                  </div>
                  <div>Days Available</div>
                  <div className="text-centerBlock">1 day scheduled</div>
                </div>
                <div className="mt-4 text-centerBlock">Sick Full-Time</div>
              </div>
              <div className="flex items-center flex-col">
                <div className="flex flex-col items-center justify-center bg-customBackground w-[264px] h-[138px] p-4 rounded-lg">
                  <div className="text-2xl font-bold">
                    <h4>Sick</h4>
                    <div className="flex gap-2 items-center">
                      <svg
                        width="33.390961"
                        height="31.500305"
                        viewBox="0 0 33.391 31.5003"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <desc>Created with Pixso.</desc>
                        <defs />
                        <path
                          id="primary"
                          d="M24 22.5L24 28.5C24 28.89 23.84 29.27 23.56 29.56C23.27 29.84 22.89 30 22.5 30L3 30C2.6 30 2.22 29.84 1.93 29.56C1.65 29.27 1.5 28.89 1.5 28.5L1.5 4.5C1.5 4.1 1.65 3.72 1.93 3.43C2.22 3.15 2.6 3 3 3L13.5 3"
                          stroke="#1C3144"
                          stroke-opacity="1.000000"
                          stroke-width="3.000000"
                          stroke-linejoin="round"
                          stroke-linecap="round"
                        />
                        <path
                          id="primary"
                          d="M18 24L7.5 24M13.5 18L7.5 18"
                          stroke="#1C3144"
                          stroke-opacity="1.000000"
                          stroke-width="3.000000"
                          stroke-linejoin="round"
                          stroke-linecap="round"
                        />
                        <path
                          id="Vector"
                          d="M23.06 2.07C20.87 2.07 18.77 2.94 17.23 4.49C15.68 6.03 14.81 8.13 14.82 10.32C14.82 11.41 15.03 12.48 15.45 13.48C15.86 14.48 16.47 15.39 17.24 16.15C18 16.92 18.91 17.53 19.91 17.94C20.92 18.35 21.99 18.57 23.07 18.57C24.16 18.56 25.23 18.35 26.23 17.94C27.23 17.52 28.14 16.91 28.9 16.14C29.67 15.38 30.28 14.47 30.69 13.47C31.1 12.47 31.32 11.39 31.32 10.31C31.31 8.12 30.44 6.02 28.89 4.48C27.35 2.93 25.25 2.06 23.06 2.07ZM15.77 3.03C17.7 1.09 20.32 0.01 23.06 0C25.79 0 28.42 1.09 30.35 3.02C32.29 4.95 33.38 7.57 33.38 10.31C33.38 11.66 33.11 13 32.6 14.25C32.08 15.51 31.32 16.64 30.36 17.6C29.41 18.56 28.27 19.32 27.02 19.84C25.77 20.36 24.43 20.63 23.07 20.63C21.72 20.63 20.38 20.36 19.13 19.85C17.87 19.33 16.74 18.57 15.78 17.61C14.82 16.66 14.06 15.52 13.54 14.27C13.02 13.02 12.75 11.68 12.75 10.32C12.75 7.59 13.84 4.96 15.77 3.03ZM23.06 5.16C23.63 5.16 24.09 5.62 24.09 6.19L24.1 9.89L26.89 12.68C27.29 13.08 27.29 13.73 26.89 14.14C26.49 14.54 25.84 14.54 25.43 14.14L22.34 11.05C22.14 10.85 22.03 10.59 22.03 10.32L22.03 6.19C22.03 5.62 22.49 5.16 23.06 5.16Z"
                          fill="#1C3144"
                          fill-opacity="1.000000"
                          fill-rule="evenodd"
                        />
                      </svg>
                      3
                    </div>
                  </div>
                  <div>Days Available</div>
                  <div className="text-centerBlock">1 day scheduled</div>
                </div>
                <div className="mt-4 text-centerBlock">Sick Full-Time</div>
              </div>
            </div>

            {/* Upcoming Time Off */}
            <div className="mb-6 ">
              <div className="font-semibold mb-2 border-b-4 pb-[15px]">
                Upcoming Time Off
              </div>
              <div className="flex items-center space-x-4 mb-2 border-b-4  pb-[15px]">
                <div className="flex items-center space-x-2 ">
                  <svg
                    width="30.000000"
                    height="30.000000"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <desc>Created with Pixso.</desc>
                    <defs />
                    <path
                      id="Vector"
                      d="M8.33 3.33C8.33 2.44 8.68 1.6 9.3 0.97C9.93 0.35 10.78 0 11.66 0L18.33 0C19.21 0 20.06 0.35 20.69 0.97C21.31 1.6 21.66 2.44 21.66 3.33L21.66 7.33C21.66 7.88 22.11 8.33 22.66 8.33L26.66 8.33C27.55 8.33 28.39 8.68 29.02 9.3C29.64 9.93 30 10.78 30 11.66L30 18.33C30 19.21 29.64 20.06 29.02 20.69C28.39 21.31 27.55 21.66 26.66 21.66L22.66 21.66C22.11 21.66 21.66 22.11 21.66 22.66L21.66 26.66C21.66 27.55 21.31 28.39 20.69 29.02C20.06 29.64 19.21 30 18.33 30L11.66 30C10.78 30 9.93 29.64 9.3 29.02C8.68 28.39 8.33 27.55 8.33 26.66L8.33 22.66C8.33 22.11 7.88 21.66 7.33 21.66L3.33 21.66C2.44 21.66 1.6 21.31 0.97 20.69C0.35 20.06 0 19.21 0 18.33L0 11.66C0 10.78 0.35 9.93 0.97 9.3C1.6 8.68 2.44 8.33 3.33 8.33L7.33 8.33C7.88 8.33 8.33 7.88 8.33 7.33L8.33 3.33ZM17.33 3.33L12.66 3.33C12.11 3.33 11.66 3.78 11.66 4.33L11.66 10.66C11.66 11.21 11.21 11.66 10.66 11.66L4.33 11.66C3.78 11.66 3.33 12.11 3.33 12.66L3.33 17.33C3.33 17.88 3.78 18.33 4.33 18.33L10.66 18.33C11.21 18.33 11.66 18.78 11.66 19.33L11.66 25.66C11.66 26.21 12.11 26.66 12.66 26.66L17.33 26.66C17.88 26.66 18.33 26.21 18.33 25.66L18.33 19.33C18.33 18.78 18.78 18.33 19.33 18.33L25.66 18.33C26.21 18.33 26.66 17.88 26.66 17.33L26.66 12.66C26.66 12.11 26.21 11.66 25.66 11.66L19.33 11.66C18.78 11.66 18.33 11.21 18.33 10.66L18.33 4.33C18.33 3.78 17.88 3.33 17.33 3.33Z"
                      fill="#1C3144"
                      fill-opacity="1.000000"
                      fill-rule="evenodd"
                    />
                  </svg>
                  <div>
                    <span className="font-semibold">Jan 27</span>
                    <span>+1 day of Sick</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4 border-b-4  pb-[15px]">
                <div className="flex items-center space-x-2">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <desc>Created with Pixso.</desc>
                    <defs />
                    <rect
                      id="Icon Big"
                      rx="-0.500000"
                      width="29.000000"
                      height="29.000000"
                      transform="translate(2.750000 1.750000)"
                      fill="#FFFFFF"
                      fill-opacity="0"
                    />
                    <path
                      id="Vector"
                      d="M29.7 22.91L32.91 21.25L32.91 15.41L29.44 13.96L29.58 7.91L22.08 10.41C20.78 10.08 18.97 9.58 17.52 9.58C10.37 9.58 4.58 14.03 4.58 19.51C4.58 22.66 6.49 25.47 9.48 27.29L8.67 29.96C8.62 30.1 8.61 30.26 8.64 30.42C8.67 30.57 8.73 30.72 8.82 30.84C8.91 30.97 9.03 31.07 9.17 31.14C9.31 31.21 9.47 31.25 9.62 31.25L12.56 31.25C12.78 31.25 12.99 31.18 13.16 31.05L15.49 29.3L19.55 29.3L21.88 31.05C22.05 31.18 22.26 31.25 22.48 31.25L25.42 31.25C25.57 31.25 25.73 31.21 25.86 31.14C26 31.07 26.13 30.97 26.22 30.84C26.31 30.72 26.37 30.57 26.4 30.42C26.43 30.26 26.42 30.1 26.37 29.96L25.56 27.29C27.34 26.21 28.74 24.77 29.58 23.12"
                      stroke="#1C3144"
                      stroke-opacity="1.000000"
                      stroke-width="2.500000"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    />
                    <path
                      id="Vector"
                      d="M23.16 17.67C23 17.51 22.91 17.3 22.91 17.08C22.91 16.86 23 16.65 23.16 16.49C23.31 16.33 23.52 16.25 23.75 16.25C23.97 16.25 24.18 16.33 24.33 16.49C24.49 16.65 24.58 16.86 24.58 17.08C24.58 17.3 24.49 17.51 24.33 17.67C24.18 17.82 23.97 17.91 23.75 17.91C23.52 17.91 23.31 17.82 23.16 17.67Z"
                      stroke="#1C3144"
                      stroke-opacity="1.000000"
                      stroke-width="2.500000"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector"
                      d="M1.25 12.91C1.25 12.91 1.25 16.91 4.58 17.91"
                      stroke="#1C3144"
                      stroke-opacity="1.000000"
                      stroke-width="2.500000"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    />
                    <path
                      id="Vector"
                      d="M19.25 9.17C19.46 8.55 19.58 7.88 19.58 7.19C19.58 3.91 16.97 1.25 13.75 1.25C10.52 1.25 7.91 3.91 7.91 7.19C7.91 8.76 8.51 10.18 9.48 11.25"
                      stroke="#1C3144"
                      stroke-opacity="1.000000"
                      stroke-width="2.500000"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div>
                    <span className="font-semibold">Jul 4</span>
                    <span>Independence Day</span>
                  </div>
                </div>
              </div>
            </div>

            {/* История */}
            <div className=" mb-6">
              <div className="font-semibold flex items-center justify-start mb-4">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <desc>Created with Pixso.</desc>
                  <defs />
                  <rect
                    id="Icon"
                    rx="-0.500000"
                    width="15.000000"
                    height="15.000000"
                    transform="translate(0.500061 0.500000)"
                    fill="#FFFFFF"
                    fill-opacity="0"
                  />
                  <path
                    id="Union"
                    d="M5.15198 14.5297L1.55035 14.5297Q1.35947 14.5297 1.1778 14.4887L1.17773 14.4887L1.17755 14.4887L1.17752 14.4887Q1.08203 14.4672 0.989044 14.4343Q0.793121 14.3651 0.62674 14.2523L0.626465 14.2521Q0.562927 14.2091 0.503723 14.1596Q0.34201 14.0246 0.229431 13.8566Q0.182343 13.7864 0.143829 13.7104Q0.065155 13.555 0.0295105 13.3904L0.0295105 13.3903L0.0295105 13.3903L0.0295105 13.3903Q0 13.254 0 13.1113L0 2.41837Q0 2.2757 0.02948 2.13941L0.0295105 2.13937L0.0295105 2.13937L0.0295105 2.13934Q0.065155 1.97467 0.143829 1.81933Q0.182343 1.74332 0.229431 1.67307L0.229431 1.67307Q0.34201 1.50513 0.503723 1.37011Q0.562927 1.32067 0.626434 1.27758L0.626434 1.27758L0.626465 1.27758Q0.792938 1.16465 0.989044 1.09539Q1.08209 1.06254 1.17764 1.041L1.17767 1.041L1.1778 1.04097Q1.35947 1.00006 1.55035 1.00006L14.3561 1.00006Q14.547 1.00006 14.7286 1.04097Q14.8243 1.06251 14.9174 1.09539Q15.1135 1.16465 15.2799 1.27755L15.28 1.27758Q15.3435 1.32067 15.4027 1.37011Q15.5643 1.50504 15.6769 1.67286L15.6771 1.67314Q15.7241 1.74336 15.7626 1.81933Q15.8413 1.97468 15.8769 2.13935Q15.9064 2.27567 15.9064 2.41837L15.9064 7.76485C15.9064 8.18486 15.5764 8.51485 15.1564 8.51485C14.7365 8.51485 14.4064 8.18486 14.4064 7.76485L14.4064 2.50524Q14.3853 2.50006 14.3561 2.50006L1.55035 2.50006Q1.52109 2.50006 1.5 2.50524L1.5 13.0245Q1.52109 13.0297 1.55035 13.0297L5.15198 13.0297C5.57196 13.0297 5.90198 13.3596 5.90198 13.7797C5.90198 14.1997 5.57196 14.5297 5.15198 14.5297ZM8.70337 4.42389L8.70337 7.76544Q8.70337 7.92077 8.64847 8.05336Q8.59354 8.18594 8.4837 8.29577Q8.37387 8.40561 8.2413 8.46053Q8.1087 8.51544 7.95337 8.51544L4.75195 8.51544C4.33194 8.51544 4.00195 8.18544 4.00195 7.76544C4.00195 7.34544 4.33194 7.01544 4.75195 7.01544L7.20337 7.01544L7.20337 4.42389C7.20337 4.00389 7.53339 3.67389 7.95337 3.67389C8.37338 3.67389 8.70337 4.00389 8.70337 4.42389ZM15.2134 12.32Q15.8548 11.4103 15.9966 10.1484C16.0436 9.73065 15.7524 9.3698 15.3348 9.3283C14.9172 9.28679 14.5523 9.58241 14.5053 10.0002Q14.401 10.9285 13.938 11.5387Q13.501 12.1146 12.6977 12.4685Q11.887 12.8258 10.6785 12.9717Q10.0093 13.0526 9.19745 13.0702L9.31796 12.9329C9.59668 12.6152 9.56863 12.1499 9.25421 11.8755C8.93976 11.6011 8.47369 11.6352 8.19498 11.9529L6.73105 13.6216Q6.52179 13.8601 6.54407 14.1741Q6.56564 14.479 6.7948 14.6789Q6.82611 14.7063 6.86029 14.7299Q6.89783 14.7558 6.93832 14.777L9.11108 15.9112C9.48151 16.1046 9.92841 15.9638 10.1268 15.5912C10.3251 15.2185 10.1899 14.7738 9.81952 14.5805L9.76059 14.5497Q10.3339 14.5213 10.8396 14.4602Q12.2713 14.2873 13.2884 13.8391Q14.4352 13.3337 15.1083 12.4624Q15.1118 12.4579 15.1153 12.4533Q15.1225 12.444 15.1295 12.4347Q15.1723 12.3783 15.213 12.3206L15.2134 12.32Z"
                    clip-rule="evenodd"
                    fill="#1C3144"
                    fill-opacity="1.000000"
                    fill-rule="evenodd"
                  />
                </svg>
                <p>History</p>
              </div>
              <div className="flex items-center mb-4">
                {/* Левый блок с двумя селектами */}
                <div className="flex space-x-4">
                  <select className="border border-gray-300 rounded-lg p-2 text-sm">
                    <option>Sick</option>
                    <option>Holiday</option>
                    <option>Comp/in Lieu Time</option>
                  </select>
                  <select className="border border-gray-300 rounded-lg p-2 text-sm">
                    <option>All</option>
                    <option>Last Week</option>
                    <option>Last Month</option>
                  </select>
                </div>

                {/* Добавляем отступ для правого селекта */}
                <div className="ml-auto">
                  <select className="border border-gray-300 rounded-lg p-2 text-sm">
                    <option>Balance History</option>
                    <option>Usage History</option>
                  </select>
                </div>
              </div>

              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-table">
                    <th className="p-3 text-sm font-semibold border">Date</th>
                    <th className="p-3 text-sm font-semibold border">
                      Description
                    </th>
                    <th className="p-3 text-sm font-semibold border">
                      Used Days (-)
                    </th>
                    <th className="p-3 text-sm font-semibold border">
                      Earned Days (+)
                    </th>
                    <th className="p-3 text-sm font-semibold border">
                      Balance
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border">23/05/2024</td>
                    <td className="p-3 border">
                      Accrual for 23/05/2024 to 20/11/2024
                    </td>
                    <td className="p-3 border">3.00</td>
                    <td className="p-3 border">3.00</td>
                    <td className="p-3 border">3.00</td>
                  </tr>
                  <tr>
                    <td className="p-3 border">23/05/2024</td>
                    <td className="p-3 border">
                      Accrual for 23/05/2024 to 20/11/2024
                    </td>
                    <td className="p-3 border">-6</td>
                    <td className="p-3 border">3.00</td>
                    <td className="p-3 border">3.00</td>
                  </tr>
                  <tr>
                    <td className="p-3 border">23/05/2024</td>
                    <td className="p-3 border">
                      Accrual for 23/05/2024 to 20/11/2024
                    </td>
                    <td className="p-3 border">-6</td>
                    <td className="p-3 border">3.00</td>
                    <td className="p-3 border">3.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyInfo;
