// "use client";
// import React from "react";
// import { Moon, Sun, Monitor } from "lucide-react";
// import { useTheme } from "../context/ThemeContext";

// export const ThemeToggle: React.FC = () => {
//   const { theme, actualTheme, toggleTheme } = useTheme();

//   const getIcon = () => {
//     switch (theme) {
//       case "light":
//         return <Sun className="w-5 h-5 text-yellow-500" />;
//       case "dark":
//         return <Moon className="w-5 h-5 text-blue-400" />;
//       case "system":
//         return <Monitor className="w-5 h-5 text-gray-600 dark:text-gray-300" />;
//       default:
//         return <Sun className="w-5 h-5 text-yellow-500" />;
//     }
//   };

//   const getTooltip = () => {
//     switch (theme) {
//       case "light":
//         return "Mode Terang (klik untuk Dark)";
//       case "dark":
//         return "Mode Gelap (klik untuk System)";
//       case "system":
//         return `Mode System - ${
//           actualTheme === "dark" ? "Gelap" : "Terang"
//         } (klik untuk Light)`;
//       default:
//         return "Toggle tema";
//     }
//   };

//   return (
//     <button
//       onClick={toggleTheme}
//       className="relative group p-3 rounded-lg bg-white/10 hover:bg-white/20 dark:bg-gray-800/50 dark:hover:bg-gray-700/50 transition-all duration-200 border border-white/20 dark:border-gray-600/50"
//       aria-label={getTooltip()}
//       title={getTooltip()}
//     >
//       {getIcon()}

//       {/* Status indicator */}
//       <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-white dark:border-gray-800 transition-colors">
//         {theme === "system" && (
//           <div
//             className={`w-full h-full rounded-full ${
//               actualTheme === "dark" ? "bg-blue-400" : "bg-yellow-400"
//             }`}
//           />
//         )}
//         {theme === "light" && (
//           <div className="w-full h-full rounded-full bg-yellow-400" />
//         )}
//         {theme === "dark" && (
//           <div className="w-full h-full rounded-full bg-blue-400" />
//         )}
//       </div>

//       {/* Tooltip */}
//       <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 dark:bg-gray-700 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
//         {getTooltip()}
//         <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800 dark:border-t-gray-700"></div>
//       </div>
//     </button>
//   );
// };

// // Advanced Theme Selector Component
// export const ThemeSelector: React.FC = () => {
//   const { theme, actualTheme, setLightTheme, setDarkTheme, setSystemTheme } =
//     useTheme();

//   const options = [
//     {
//       key: "light",
//       label: "Terang",
//       icon: <Sun className="w-4 h-4" />,
//       action: setLightTheme,
//     },
//     {
//       key: "dark",
//       label: "Gelap",
//       icon: <Moon className="w-4 h-4" />,
//       action: setDarkTheme,
//     },
//     {
//       key: "system",
//       label: `System (${actualTheme === "dark" ? "Gelap" : "Terang"})`,
//       icon: <Monitor className="w-4 h-4" />,
//       action: setSystemTheme,
//     },
//   ];

//   return (
//     <div className="flex space-x-2 p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
//       {options.map((option) => (
//         <button
//           key={option.key}
//           onClick={option.action}
//           className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-all duration-200 ${
//             theme === option.key
//               ? "bg-white dark:bg-gray-700 shadow-sm text-blue-600 dark:text-blue-400"
//               : "text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
//           }`}
//         >
//           {option.icon}
//           <span className="text-sm font-medium">{option.label}</span>
//         </button>
//       ))}
//     </div>
//   );
// };

// export default ThemeToggle;

export {};
