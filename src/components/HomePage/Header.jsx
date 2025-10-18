"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { FaBars, FaTimes } from "react-icons/fa"
import { resourceItems } from "@/data/dropdown"

export const Header = () => {
  const [openHeader, setOpenHeader] = useState(false)

  const handleToogle = () => {
    setOpenHeader(!openHeader)
  }

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Features", href: "/features" },
    { title: "Pricing", href: "/pricing" },
    { title: "About", href: "/about" },
  ]

  return (
    <div className={`relative`}>
      {/* Mobile Navigation */}
      <div className="block lg:hidden">
        {/* Fixed Header Bar  */}
        <div className="fixed **bg-[#040E28]/90** border-b border-white/10 top-0 w-full flex justify-between items-center px-4 py-0.5 z-50 shadow-xl">
          <Link to="/">
            <img
              className="w-36 h-auto"
              src="/twinrally_lg_06-removebg-preview (1).png"
              alt="TwinRally Logo"
            />
          </Link>
          <Button
            onClick={handleToogle}
            className="p-2 rounded-lg bg-transparent hover:bg-white/10 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {openHeader ? (
              <FaTimes className="w-6 h-6 text-white" />
            ) : (
              <FaBars className="w-6 h-6 text-white" />
            )}
          </Button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
            openHeader ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          {/* Dark Overlay - No blur */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={handleToogle}
          ></div>

          {/* Nav Drawer */}
          <nav
            className={`absolute top-0 right-0 h-screen w-3/4 max-w-sm pb-5 bg-[#040E28] shadow-2xl transform transition-transform duration-300 ease-in-out ${
              openHeader ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Links and Buttons - pt-12 to align content */}
            <div className="pt-12 px-6 pb-6 h-full flex flex-col overflow-y-auto">
              <ul className="flex flex-col gap-1 text-white mb-8">
                {navLinks.map((link) => (
                  <Link to={link.href} key={link.title} onClick={handleToogle}>
                    <li className="text-lg font-medium hover:text-[#fbc2eb] transition-colors py-3 border-b border-white/10">
                      {link.title}
                    </li>
                  </Link>
                ))}

                <li className="py-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1 font-medium text-lg w-full text-left py-1 hover:text-[#fbc2eb] transition-colors">
                      Resources
                      <ChevronDown className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="w-full mt-2 bg-[#040E28] border border-white/10 text-white shadow-2xl"
                    >
                      <div className="px-4 py-4">
                        <div className="grid grid-cols-1 gap-4">
                          {resourceItems.map((section, index) => (
                            <div key={index} className="border-b border-white/5 pb-2 last:border-b-0">
                              <h3 className="font-semibold text-[#a6c0ee] mb-2">{section.title}</h3>
                              {section.items.map((item, itemIndex) => (
                                <DropdownMenuItem
                                  key={itemIndex}
                                  className="hover:bg-white/10 focus:bg-white/10 text-sm py-1 cursor-pointer"
                                >
                                  {item}
                                </DropdownMenuItem>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
              </ul>

              <div className="flex flex-col gap-4 mt-auto pt-6">
                <Link to="/login" onClick={handleToogle}>
                  <Button
                    className="h-12 w-full bg-transparent border border-[#a6c0ee]/50 text-white hover:bg-[#a6c0ee]/20 hover:text-white transition-all duration-300 rounded-full font-semibold shadow-lg"
                    variant="outline"
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/signup" onClick={handleToogle}>
                  <Button
                    className="h-12 w-full bg-[#FBC2EB] text-[#040E28] rounded-full hover:bg-gradient-to-r hover:from-[#FBC2EB] hover:to-[#A6C0EE] border-0 transition-all duration-300 font-bold shadow-xl"
                    variant="default"
                  >
                    Sign up
                  </Button>
                </Link>
                <Link to="/download" onClick={handleToogle}>
                  <Button
                    className="h-12 w-full bg-[#A6C0EE] text-[#040E28] rounded-full hover:bg-gradient-to-r hover:from-[#A6C0EE] hover:to-[#667EEA] border-0 transition-all duration-300 font-bold shadow-xl"
                    variant="default"
                  >
                    Download
                  </Button>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Desktop Navigation (Unchanged) */}
      <div className="hidden lg:block">
        <div className="fixed bg-transparent backdrop-blur-md border-b border-white/10 w-full top-0 z-50 shadow-xl">
          <nav className="flex justify-between items-center px-6 py-1 max-w-7xl mx-auto text-sm relative">
            <Link to="/">
              <img
                className="w-32 h-auto"
                src="/twinrally_lg_06-removebg-preview (1).png"
                alt="TwinRally Logo"
              />
            </Link>

            <ul className="flex gap-10 text-white items-center">
                <li
                  className="relative font-medium transition-colors cursor-pointer py-2 group"
                  onMouseEnter={() => setOpenHeader(true)}
                  onMouseLeave={() => setOpenHeader(false)}
                >
                  <span className="flex items-center gap-1 group-hover:text-[#fbc2eb] transition-colors">
                    Resources
                    <ChevronDown className="h-4 w-4 group-hover:text-[#fbc2eb] transition-colors" />
                  </span>

                  {openHeader && (
                    <div
                      className="absolute top-full left-1/2 transform -translate-x-1/2 pt-5"
                      onMouseEnter={() => setOpenHeader(true)}
                      onMouseLeave={() => setOpenHeader(false)}
                    >
                      <div className="bg-[#040e28] border border-white/10 shadow-2xl text-white z-50 w-[600px] py-6 px-8 rounded-xl ring-2 ring-[#fbc2eb]/30">
                        <ul className="grid grid-cols-4 gap-6">
                          {resourceItems.map((section, index) => (
                            <div key={index}>
                              <h3 className="font-bold text-base text-[#a6c0ee] mb-3 border-b border-[#a6c0ee]/20 pb-1">
                                {section.title}
                              </h3>
                              {section.items.map((item, itemIndex) => (
                                <div
                                  key={itemIndex}
                                  className="mt-2 text-sm text-white/90 hover:text-[#fbc2eb] transition-colors cursor-pointer"
                                >
                                  {item}
                                </div>
                              ))}
                            </div>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </li>

              {navLinks.filter(link => link.title !== 'Resources').map((link) => (
                <Link to={link.href} key={link.title}>
                  <li className="font-medium hover:text-[#FBC2EB] transition-colors cursor-pointer py-2">
                    {link.title}
                  </li>
                </Link>
              ))}
            </ul>

            <div className="flex gap-3">
              <Link to="/login">
                <Button
                  className="h-10 px-6 bg-transparent border border-white/20 text-white hover:bg-white/10 hover:text-white hover:border-white/40 transition-all duration-300 rounded-full font-semibold"
                  variant="outline"
                >
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button
                  className="h-10 px-6 bg-[#FBC2EB] text-[#040E28] rounded-full hover:bg-gradient-to-r hover:from-[#FBC2EB] hover:to-[#A6C0EE] border-0 transition-all duration-300 font-bold shadow-md shadow-[#fbc2eb]/50"
                  variant="default"
                >
                  Sign up
                </Button>
              </Link>
              <Link to="/download">
                <Button
                  className="h-10 px-6 bg-[#A6C0EE] text-[#040E28] rounded-full hover:bg-gradient-to-r hover:from-[#A6C0EE] hover:to-[#667EEA] border-0 transition-all duration-300 font-bold shadow-md shadow-[#a6c0ee]/50"
                  variant="default"
                >
                  Download
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}