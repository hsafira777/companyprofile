"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Logo from "./logo";
import useAuthStore from "@/store/auth/authStore";
import { useState } from "react";
import { Menu, Plus, X, LogOut } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Teams", href: "/teams" },
  { name: "Blog", href: "/blogs" },
];

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const clearAuth = useAuthStore((state) => state.clearAuth);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    clearAuth();
    router.push("/login");
  };

  return (
    <header className="bg-white border-b border-gray-300 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4 md:gap-8">
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="md:block">
            <Logo />
          </div>

          <nav className="hidden md:flex gap-2">
            {navLinks.map(({ name, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "bg-indigo-100 text-indigo-700 font-semibold"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          {user && (
            <span className="text-sm text-indigo-700 font-semibold hidden md:inline">
              Hello there, {user.firstname}!
            </span>
          )}

          {user && (
            <Link
              href="/blogs/create"
              className="bg-green-500 hover:bg-green-700 text-white px-3 py-2 text-sm rounded-md transition-all flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">Create Blog</span>
            </Link>
          )}

          {user ? (
            <button
              onClick={handleLogout}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 text-sm rounded-md flex items-center gap-2"
            >
              <LogOut size={16} />
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 text-sm rounded-md"
            >
              Login
            </Link>
          )}
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-2">
          {user && (
            <div className="text-sm text-gray-700 font-semibold mb-2">
              Hello there, {user.firstname}!
            </div>
          )}

          {navLinks.map(({ name, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`block px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "bg-indigo-100 text-indigo-700 font-semibold"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Navbar;
