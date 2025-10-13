"use client"

import { Button } from "../ui/button"
import { resourceItems } from "@/data/dropdown"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { Heropage } from "./Heropage"
import { useState } from "react"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

export const Header = () => {
  const [openHeader, setOpenHeader] = useState(false);
  const [resources, setResources] = useState(false);

  function handleToogle() {
    setOpenHeader(!openHeader)
  }

  return (
    <div className={`relative`}>
      {/* Mobile Navigation */}
      <div className="block lg:hidden">
        <div className="fixed bg-transparent border-b border-white/10 top-0 w-full flex justify-between items-center px-1 z-50 shadow-lg">
          <img className="w-36 h-auto" src="/twinrally_lg_06-removebg-preview (1).png" alt="TwinRally Logo" />
          <Button
            onClick={handleToogle}
            className="p-2 rounded-lg bg-transparent hover:bg-transparent transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <FaBars className={` ${openHeader ? <FaBars/> :   <FaTimes />} text-white`} />
          </Button>
        </div>

        <div
          className={`fixed inset-0 z-40 transition-all duration-300 ease-in-out ${openHeader ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={handleToogle}></div>
          <nav
            className={`absolute top-0 right-0 h-screen w-full pb-5 bg-[#040E28] shadow-2xl transform transition-transform duration-300 ease-in-out ${openHeader ? "translate-x-0" : "translate-x-full"
              }`}
          >
            <div className="pt-20 px-6 pb-6 h-full flex flex-col">
              <ul className="flex flex-col gap-6 text-white mb-8">
                <li className="text-lg font-medium hover:text-blue-300 transition-colors cursor-pointer py-2 border-b border-white/10">
                  Home
                </li>
                <li className="text-lg font-medium hover:text-blue-300 transition-colors cursor-pointer py-2 border-b border-white/10">
                  Features
                </li>
                <li className="text-lg font-medium hover:text-blue-300 transition-colors cursor-pointer py-2 border-b border-white/10">
                  Pricing
                </li>
                <li className="text-lg font-medium hover:text-blue-300 transition-colors cursor-pointer py-2 border-b border-white/10">
                  About
                </li>

                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1 font-medium hover:text-blue-300 transition-colors">
                    Resources
                    <ChevronDown className="h-4 w-4 cursor-pointer" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="w-screen h-[40vh] mt-3.5 left-0 right-0 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 backdrop-blur border-white/10 text-white"
                    style={{ transform: "translateX(calc(-50vw + 50%))" }}
                  >
                    <div className=" mx-auto px-8 py-4">
                      <div className="grid grid-cols-1 gap-8">
                        {resourceItems.map((section, index) => (
                          <div key={index}>
                            <h3 className="font-semibold text-blue-300 mb-3">{section.title}</h3>
                            {section.items.map((item, itemIndex) => (
                              <DropdownMenuItem key={itemIndex} className="hover:bg-white/10 focus:bg-white/10 text-xs">
                                {item}
                              </DropdownMenuItem>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>

              </ul>

              <div className="flex flex-col gap-4 justify-center">
                <div className="flex justify-center items-center">
                  <Button
                    className="h-12 w-[80%] bg-transparent border-white/20 text-white hover:bg-transparent hover:text-white transition-all duration-200 rounded-full"
                    variant="outline"
                  >
                    Login
                  </Button>
                </div>
                <div className="flex justify-center items-center">
                  <Button
                    className="h-12 w-[80%] bg-[#FBC2EB] text-white rounded-full hover:bg-gradient-to-r from-[#FBC2EB] to-[#A6C0EE] border-0 transition-all duration-200 shadow-lg"
                    variant="default"
                  >
                    Sign up
                  </Button>
                </div>
                <div className="flex justify-center items-center">
                  <Button
                    className="h-12 w-[80%] bg-[#A6C0EE] text-white rounded-full hover:bg-gradient-to-r from-[#A6C0EE] to-[#667EEA] border-0 transition-all duration-200 shadow-lg"
                    variant="default"
                  >
                    Download
                  </Button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Desktop Navigation */}
      <div className="hidden lg:block">
        <div className="fixed bg-transparent border-b border-white/10 w-full top-0 z-50 shadow-lg">
          <nav className="flex justify-between items-center px-3 py-0 max-w-7xl mx-auto text-sm relative">
            <div>
              <img className="w-32 h-auto" src="/twinrally_lg_06-removebg-preview (1).png" alt="TwinRally Logo" />
            </div>

            <ul className="relative flex gap-8 text-white">
              <li
                className="relative font-medium hover:text-blue-300 transition-colors cursor-pointer"
                onMouseEnter={() => setResources(true)}
                onMouseLeave={() => setResources(false)}
              >
                Resources
                {resources && (
                  <div
                    className="absolute top-12 left-0"
                    onMouseEnter={() => setResources(true)}
                    onMouseLeave={() => setResources(false)}
                  >
                    <div className="absolute -top-12 left-0 w-full h-12 bg-transparent"></div>
                    {/* Dropdown */}
                    <div className="bg-[#040E28] shadow-lg text-white z-50 w-[550px] py-8 px-5 rounded-md">
                      <ul className="grid grid-cols-4 gap-8">
                        {resourceItems.map((section, index) => (
                          <div key={index}>
                            <h3 className="font-semibold text-blue-300 mb-3">{section.title}</h3>
                            {section.items.map((item, itemIndex) => (
                              <div key={itemIndex} className=" mt-3 hover:text-[#A6C0EE] focus:bg-white/10 text-xs">
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
              <li className="font-medium hover:text-[#FBC2EB] transition-colors cursor-pointer">
                Home
              </li>
              <li className="font-medium hover:text-[#FBC2EB] transition-colors cursor-pointer">
                Features
              </li>
              <li className="font-medium hover:text-[#FBC2EB] transition-colors cursor-pointer">
                Pricing
              </li>
              <li className="font-medium hover:text-[#FBC2EB] transition-colors cursor-pointer">
                About
              </li>

            </ul>

            <div className="flex gap-3">
              <Link to='/login'>
                <Button
                  className="h-10 px-6 bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white hover:border-white/40 transition-all duration-200 rounded-full"
                  variant="outline"
                >
                  Login
                </Button>
              </Link>
              <Button
                className="h-10 px-6 bg-[#FBC2EB] text-white rounded-full hover:bg-gradient-to-r from-[#FBC2EB] to-[#A6C0EE] border-0 transition-all duration-200 shadow-lg"
                variant="default"
              >
                Sign up
              </Button>
              <Button
                className="h-10 px-6 bg-[#A6C0EE] text-white rounded-full hover:bg-gradient-to-r from-[#A6C0EE] to-[#667EEA] border-0 transition-all duration-200 shadow-lg"
                variant="default"
              >
                Download
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}