"use client"

import { useEffect, useState } from "react"
import { gallery } from "@/data/images"
import { Button } from "../ui/button"
import { resourceItems } from "@/data/dropdown"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { ChevronDown, Menu } from "lucide-react"

export const Header = () => {
  const [openHeader, setOpenHeader] = useState(false)
  const [index, setIndex] = useState(0)
  const [menu, setMenu] = useState(false)

  useEffect(() => {
    if (!gallery || gallery.length === 0) {
      return
    }

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % gallery.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [gallery])

  function handleToogle() {
    setOpenHeader(!openHeader)
  }

  function handleOpen() {
    setMenu(!menu)
  }

  return (
    <div className={`relative`}>
      {/* Mobile Navigation */}
      <div className="block lg:hidden">
        <div className="fixed bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 backdrop-blur-md border-b border-white/10 top-0 w-full flex justify-between items-center px-1 z-50 shadow-lg">
          <img className="w-24 h-auto" src="/twinrally_lg_02-removebg-preview.png" alt="TwinRally Logo" />
          <Button
            onClick={handleToogle}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <i className={`fa-solid ${openHeader ? "fa-times" : "fa-bars"} text-white text-xl`}></i>
          </Button>
        </div>

        <div
          className={`fixed inset-0 z-40 transition-all duration-300 ease-in-out ${openHeader ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={handleToogle}></div>
          <nav
            className={`absolute top-0 right-0 h-full w-full bg-gradient-to-b from-slate-900 to-blue-900 shadow-2xl transform transition-transform duration-300 ease-in-out ${openHeader ? "translate-x-0" : "translate-x-full"
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

              <div className="flex flex-col gap-4 mt-auto">
                <Button
                  className="h-12 w-full bg-transparent border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-200 rounded-full"
                  variant="outline"
                >
                  Login
                </Button>
                <Button
                  className="h-12 w-full bg-blue-600 hover:bg-blue-700 text-white border-0 transition-all duration-200 shadow-lg rounded-full"
                  variant="default"
                >
                  Sign up
                </Button>
                <Button
                  className="h-12 w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 transition-all duration-200 shadow-lg rounded-full"
                  variant="default"
                >
                  Download
                </Button>
              </div>
            </div>
          </nav>
        </div>

        <div
          style={{
            backgroundImage: `url(${gallery[index]?.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="min-h-screen w-full relative"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
          <div className="relative z-10 flex justify-center items-center min-h-screen px-6 pt-20">
            <div className="text-center max-w-2xl">
              <div className="flex justify-center">
                <img className="w-48" src="/twinrally_lg_02-removebg-preview.png" alt="" />
              </div>
              <h1 className="text-white text-3xl">
                Twin Rally Global Twins
              </h1>
              <h1 className="text-white text-3xl mt-3">Community Platform</h1>
              <p className="text-white mt-3">A world where twins are united through</p>
              <p className="text-white ">lifelong connections both online and offline.</p>
              <div className="flex justify-center gap-5 mt-3">
                <Button variant="outline" className={`bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 transition-all duration-200 shadow-lg rounded-full`}>Sign up</Button>
                <Button variant="outline" className={'bg-blue-600 hover:bg-blue-700 text-white border-0 transition-all duration-200 shadow-lg rounded-full'}>Login</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:block">
        <div className="fixed bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 backdrop-blur-md border-b border-white/10 w-full top-0 z-50 shadow-lg">
          <nav className="flex justify-between items-center px-8 py-0 max-w-7xl mx-auto text-sm">
            <div>
              <img className="w-32 h-auto" src="/twinrally_lg_06-removebg-preview (9).png" alt="TwinRally Logo" />
            </div>

            <div>
              <ul className="flex gap-8 text-white">
                <li className="font-medium hover:text-blue-300 transition-colors cursor-pointer">
                  Home
                </li>
                <li className="font-medium hover:text-blue-300 transition-colors cursor-pointer">
                  Features
                </li>
                <li className="font-medium hover:text-blue-300 transition-colors cursor-pointer">
                  Pricing
                </li>
                <li className="font-medium hover:text-blue-300 transition-colors cursor-pointer">
                  About
                </li>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1 font-medium hover:text-blue-300 transition-colors">
                    Resources
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="w-screen mt-6 left-0 right-0 bg-slate-900/95 backdrop-blur-md border-white text-white"
                    style={{ transform: "translateX(calc(-50vw + 50%))" }}
                  >
                    <div className=" mx-auto px-8 py-4">
                      <div className="grid grid-cols-4 gap-8">
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
            </div>

            <div className="flex gap-3">
              <Button
                className="h-10 px-6 bg-transparent border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-200 rounded-full"
                variant="outline"
              >
                Login
              </Button>
              <Button
                className="h-10 px-6 bg-blue-600 hover:bg-blue-700 text-white border-0 transition-all duration-200 shadow-lg rounded-full"
                variant="default"
              >
                Sign up
              </Button>
              <Button
                className="h-10 px-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 transition-all duration-200 shadow-lg rounded-full"
                variant="default"
              >
                Download
              </Button>
            </div>
          </nav>
        </div>

        <div
          style={{
            backgroundImage: `url(${gallery[index]?.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="h-screen w-full relative"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
          <div className="relative z-10 flex justify-center items-center h-screen px-8">
            <div className="flex flex-col justify-center items-center text-center max-w-4xl">
              <img className="w-48" src="/twinrally_lg_02-removebg-preview.png" alt="" />
              <h1 className="text-white text-4xl leading-relaxed ">
                Twin Rally Global Twins Community Platform
              </h1>
              <p className="text-white">A world where twins are united through lifelong connections both online and offline.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}