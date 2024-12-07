import React, { useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Container from "../container/Container";
import Logo from "../Logo";
import LogoutBtn from "./LogoutBtn";
import usersStorageService from "../../appwrite/usersStorage";

export default function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const userProfile = useSelector((state) => state.user.userData);
  const [active, setActive] = useState(true);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", slug: "/", visible: true },
    { name: "Login", slug: "/login", visible: !authStatus },
    { name: "Signup", slug: "/signup", visible: !authStatus },
    { name: "My Posts", slug: "/my-posts", visible: authStatus },
    { name: "Add Post", slug: "/add-post", visible: authStatus },
  ];

  
  return (
    <Disclosure as="nav" className="bg-gray-900 sticky top-0 z-50 shadow">
      {({ open }) => (
        <>
          <Container>
            <div className="flex justify-between items-center h-16">
              {/* Mobile Menu Button */}
              <DisclosureButton
                className="sm:hidden p-2 rounded-md text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none"
                aria-label="Toggle menu"
                aria-expanded={open}
              >
                {open ? (
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                )}
              </DisclosureButton>

              {/* Logo */}
              <Link to="/" aria-label="Home">
                <Logo width="70px" />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden sm:flex space-x-4">
                {navItems
                  .filter((item) => item.visible)
                  .map((item) => (
                    <button
                      key={item.name}
                      onClick={() => navigate(item.slug)}
                      className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                      aria-label={item.name}
                    >
                      {item.name}
                    </button>
                  ))}
              </div>

              {/* Profile Dropdown */}
              {authStatus && (
                <Menu as="div" className="relative">
                  <MenuButton
                    className="flex items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    aria-label="Open user menu"
                  >
                   { <img
                      alt="User profile"
                      src={usersStorageService.getFilePreview(
                        userProfile.profileImage
                      )}
                      className="h-8 w-8 rounded-full object-cover"
                    /> || <svg
                    className="h-8 w-8 rounded-full text-gray-300"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>}
                  </MenuButton>
                  <MenuItems
                    className="absolute right-0 mt-2 w-48 bg-gray-800 text-gray-300 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    aria-label="User menu options"
                  >
                    <MenuItem>
                      <Link
                        to="/profile"
                        className={`block px-4 py-2 text-sm hover:bg-gray-700 hover:text-white`}
                      >
                        Your Profile
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        to="/settings"
                        className={`block px-4 py-2 text-sm hover:bg-gray-700 hover:text-white`}
                      >
                        Settings
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <div
                        className={`block px-4 py-2 text-sm hover:bg-gray-700 hover:text-white cursor-pointer`}
                      >
                        <LogoutBtn />
                      </div>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              )}
            </div>
          </Container>

          {/* Mobile Menu */}
          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navItems
                .filter((item) => item.visible)
                .map((item) => (
                  <button
                    key={item.name}
                    onClick={() => navigate(item.slug)}
                    className="block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium"
                    aria-label={item.name}
                  >
                    {item.name}
                  </button>
                ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
