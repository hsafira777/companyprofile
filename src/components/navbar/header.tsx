"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Logo from "./logo";
import useAuthStore from "@/store/auth/authStore";
import { LogOut } from "lucide-react";
import { Plus } from "lucide-react";

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

  const handleLogout = () => {
    clearAuth();
    router.push("/login");
  };

  return (
    <header className="bg-white border-b border-gray-300 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <Logo />

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

        <div className="flex items-center gap-4">
          {user ? (
            <>
              <span className="text-sm text-indigo-700 font-semibold hidden md:inline">
                Hello there, {user.firstname}!
              </span>

              <Link
                href="/blogs/create"
                className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 text-sm rounded-md transition-all flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                <span>Create Blog</span>
              </Link>

              <button
                onClick={handleLogout}
                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 text-sm rounded-md transition-all"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 text-sm rounded-md transition-all"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
