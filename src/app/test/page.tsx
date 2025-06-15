"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
// import { ThemeToggle, ThemeSelector } from "../../components/ThemeToggle";
import { Monitor, Sun, Moon, Laptop, Settings } from "lucide-react";

export default function TestPage() {
  const { theme, actualTheme, setLightTheme, setDarkTheme, setSystemTheme } =
    useTheme();
  const [systemTheme, setCurrentSystemTheme] = useState<"light" | "dark">(
    "light"
  );

  // Monitor system theme changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

      const updateSystemTheme = () => {
        setCurrentSystemTheme(mediaQuery.matches ? "dark" : "light");
      };

      updateSystemTheme(); // Set initial value
      mediaQuery.addEventListener("change", updateSystemTheme);

      return () => mediaQuery.removeEventListener("change", updateSystemTheme);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                🌓 Sistem Theme Mode Otomatis
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Testing automatic light/dark mode dengan sistem deteksi laptop
              </p>
            </div>
            {/* <ThemeToggle /> */}
          </div>
        </div>
        {/* Theme Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Current Theme */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <Settings className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">
                  Mode Aktif
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Pengaturan saat ini
                </p>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-800 dark:text-white capitalize">
              {theme === "system"
                ? "Sistem Otomatis"
                : theme === "light"
                ? "Terang"
                : "Gelap"}
            </div>
          </div>

          {/* System Theme */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                <Laptop className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">
                  Theme Laptop
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Deteksi sistem
                </p>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-800 dark:text-white capitalize">
              {systemTheme === "dark" ? "Gelap" : "Terang"}
            </div>
          </div>

          {/* Applied Theme */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                {actualTheme === "dark" ? (
                  <Moon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                ) : (
                  <Sun className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                )}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">
                  Theme Diterapkan
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Yang terlihat
                </p>
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-800 dark:text-white capitalize">
              {actualTheme === "dark" ? "Gelap" : "Terang"}
            </div>
          </div>
        </div>
        {/* Theme Selector */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Pilih Theme Mode
          </h2>
          {/* <ThemeSelector /> */}
        </div>
        {/* Manual Controls */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Kontrol Manual
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={setLightTheme}
              className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                theme === "light"
                  ? "border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20"
                  : "border-gray-200 dark:border-gray-600 hover:border-yellow-300"
              }`}
            >
              <div className="flex items-center space-x-3">
                <Sun className="w-6 h-6 text-yellow-500" />
                <div className="text-left">
                  <div className="font-medium text-gray-800 dark:text-white">
                    Mode Terang
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Selalu terang
                  </div>
                </div>
              </div>
            </button>

            <button
              onClick={setDarkTheme}
              className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                theme === "dark"
                  ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                  : "border-gray-200 dark:border-gray-600 hover:border-blue-300"
              }`}
            >
              <div className="flex items-center space-x-3">
                <Moon className="w-6 h-6 text-blue-500" />
                <div className="text-left">
                  <div className="font-medium text-gray-800 dark:text-white">
                    Mode Gelap
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Selalu gelap
                  </div>
                </div>
              </div>
            </button>

            <button
              onClick={setSystemTheme}
              className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                theme === "system"
                  ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                  : "border-gray-200 dark:border-gray-600 hover:border-green-300"
              }`}
            >
              <div className="flex items-center space-x-3">
                <Monitor className="w-6 h-6 text-green-500" />
                <div className="text-left">
                  <div className="font-medium text-gray-800 dark:text-white">
                    Mode Sistem
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Ikuti laptop ({systemTheme})
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
        {/* Feature Information */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            ✨ Fitur Theme System
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-800 dark:text-white mb-2">
                🔄 Auto Detection
              </h3>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <li>• Deteksi otomatis pengaturan laptop</li>
                <li>• Update real-time saat sistem berubah</li>
                <li>• Seamless transition antar mode</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 dark:text-white mb-2">
                💾 Local Storage
              </h3>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <li>• Menyimpan preferensi user</li>
                <li>• Persistent antar session</li>
                <li>• Fallback ke sistem jika tidak ada</li>
              </ul>
            </div>
          </div>
        </div>{" "}
        {/* Current Storage Info */}
        <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <span className="font-medium">LocalStorage:</span> theme-preference
            = &ldquo;{theme}&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}
