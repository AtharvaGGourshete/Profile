import React from "react";
import Link from "next/link";
import useState from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeaderresume
} from "@/components/lib/utils/ui/sidebar";

const Navbar = () => {
  return (
    <nav className="bg-[#030301] p-4 sticky top-0 backdrop-blur-0">
      <div className="">
        <div className="container mx-auto ">
          <div className="flex justify-between items-center ">
            <Sidebar>
              <SidebarHeader />
              <SidebarContent>
                <SidebarGroup />
                <SidebarGroup />
              </SidebarContent>
              <SidebarFooter />
            </Sidebar>
            <div className="text-white font-bold text-xl">Resume</div>
            <ul className="flex space-x-10">
              <li>
                <Link
                  href="/"
                  className="text-white hover:text-gray-300 md:hover:text-orange-500"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/career"
                  className="text-white hover:text-gray-300 md:hover:text-orange-500"
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  href="/achievements"
                  className="text-white hover:text-gray-300 md:hover:text-orange-500"
                >
                  Achievements
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="text-white hover:text-gray-300 md:hover:text-orange-500"
                >
                  Log In
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="min-w-screen mt-5 ml-auto mr-auto" />
    </nav>
  );
};

export default Navbar;
