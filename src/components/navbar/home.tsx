"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Backendless from "@/app/lib/backendless";
import Logo from "./logo";

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
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await Backendless.UserService.getCurrentUser();
      setUser(currentUser);
    };
    fetchUser();
  }, []);

  const handleLogout = async () => {
    await Backendless.UserService.logout();
    setUser(null);
    router.push("/login");
  };

  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Logo />
          <nav className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? "bg-blue-100 text-blue-700 font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <>
              <span className="text-sm text-gray-600 hidden md:inline">
                Hi, {user.name || user.email}
              </span>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 text-sm rounded-md transition-all"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm rounded-md transition-all"
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
