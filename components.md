/**
 * v0 by Vercel.
 * @see https://v0.dev/t/PGavs4N7Om1
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Component() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  return (
    <div
      className={`flex flex-col h-screen w-full ${isDarkMode ? "bg-[#1e1e1e] text-white" : "bg-[#f5f5f5] text-black"}`}
    >
      <header className="flex items-center justify-between bg-[#6366f1] text-white px-4 py-3 shadow">
        <div className="text-xl font-bold">Chat App</div>
        <button
          className={`p-2 rounded-full transition-colors ${
            isDarkMode
              ? "bg-white text-[#6366f1] hover:bg-[#6366f1]/80"
              : "bg-[#6366f1] text-white hover:bg-[#6366f1]/80"
          }`}
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
        </button>
      </header>
      <div className="flex flex-1">
        <div
          className={`bg-[#ffffff] text-[#4b5563] w-64 border-r ${
            isDarkMode ? "border-[#2d3748]" : "border-[#e5e7eb]"
          }`}
        >
          <div className="px-4 py-3 border-b">
            <input
              type="text"
              placeholder="Search users"
              className={`w-full px-3 py-2 rounded-md bg-[#f3f4f6]/10 border-none focus:outline-none focus:ring-2 focus:ring-[#6366f1] ${
                isDarkMode ? "text-[#f3f4f6] placeholder-[#f3f4f6]/50" : "text-[#4b5563] placeholder-[#4b5563]/50"
              }`}
            />
          </div>
          <div className="overflow-y-auto h-[calc(100vh-64px)]">
            <div className="px-4 py-3 hover:bg-[#f3f4f6]/10 transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <Avatar className="w-8 h-8 border-2 border-[#6366f1]">
                  <AvatarImage src="/placeholder-user.jpg" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">John Doe</div>
                  <div className="text-sm text-[#6b7280]">Hey, how's it going?</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="px-4 py-3 border-b flex items-center justify-between">
            <div className="font-medium">General</div>
            <div className="flex items-center gap-3">
              <button
                className={`p-2 rounded-full transition-colors ${
                  isDarkMode
                    ? "bg-white text-[#6366f1] hover:bg-[#6366f1]/80"
                    : "bg-[#6366f1] text-white hover:bg-[#6366f1]/80"
                }`}
              >
                <SearchIcon className="w-5 h-5" />
              </button>
              <button
                className={`p-2 rounded-full transition-colors ${
                  isDarkMode
                    ? "bg-white text-[#6366f1] hover:bg-[#6366f1]/80"
                    : "bg-[#6366f1] text-white hover:bg-[#6366f1]/80"
                }`}
              >
                <SettingsIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <div className="flex items-start gap-3">
              <Avatar className="w-8 h-8 border-2 border-[#6366f1]">
                <AvatarImage src="/placeholder-user.jpg" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div
                className={`bg-[#ffffff] text-[#4b5563] px-4 py-3 rounded-lg max-w-[70%] ${
                  isDarkMode ? "shadow-md" : "shadow"
                }`}
              >
                <div className="font-medium">John Doe</div>
                <div>Hey, how's it going?</div>
              </div>
            </div>
            <div className="flex items-start gap-3 justify-end">
              <div
                className={`bg-[#6366f1] text-white px-4 py-3 rounded-lg max-w-[70%] ${
                  isDarkMode ? "shadow-md" : "shadow"
                }`}
              >
                <div>Pretty good, thanks for asking!</div>
              </div>
              <Avatar className="w-8 h-8 border-2 border-[#6366f1]">
                <AvatarImage src="/placeholder-user.jpg" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <div className={`px-4 py-3 border-t flex items-center gap-3 ${isDarkMode ? "bg-[#ffffff]" : "bg-[#f5f5f5]"}`}>
            <input
              type="text"
              placeholder="Type your message..."
              className={`flex-1 px-3 py-2 rounded-md bg-[#f3f4f6]/10 border-none focus:outline-none focus:ring-2 focus:ring-[#6366f1] ${
                isDarkMode ? "text-[#f3f4f6] placeholder-[#f3f4f6]/50" : "text-[#4b5563] placeholder-[#4b5563]/50"
              }`}
            />
            <button
              className={`p-2 rounded-full transition-colors ${
                isDarkMode
                  ? "bg-white text-[#6366f1] hover:bg-[#6366f1]/80"
                  : "bg-[#6366f1] text-white hover:bg-[#6366f1]/80"
              }`}
            >
              <SendIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function MoonIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function SendIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}


function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function SunIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  )
}