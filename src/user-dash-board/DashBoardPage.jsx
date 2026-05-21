import React, { useContext, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { navItems } from "@/data/dashboard/navItem";
import { ContentContext } from "../UseContext/context";
import { FeaturesForDashboard } from "@/components/DashBoard/FeaturesForDashboard";
import { Friend } from "@/components/DashBoard/Friend";
import { Settings } from "@/components/DashBoard/Settings";
import { Events } from "@/components/DashBoard/Events";
import { CommPage } from "@/components/DashBoard/CommPage";
import { Message } from "@/components/DashBoard/Message";
import { NotificationsPage } from "@/components/DashBoard/NotificationPage";

export const DashBoardPage = () => {
  const { handleSelect, selectedItem } = useContext(ContentContext);
  const [mobile, setMobile] = useState(false);

  function handleMobile() {
    setMobile(!mobile);
  }

  return (
    <div className="relative">
      {/* ✅ Mobile Section */}
      <div className="block lg:hidden bg-[#040e28] min-h-screen pb-16">
        <div className="bg-[#040e28] w-full fixed top-0 flex justify-between items-center py-3 px-2 z-50">
          <div>
            <img
              src="/twinrally_icon-removebg-preview (1).png"
              alt=""
              className="w-8 h-8"
            />
          </div>
          <button
            onClick={handleMobile}
            className="rounded-[6px] h-6 w-6 bg-white flex items-center justify-center cursor-pointer"
          >
            <IoMdMenu className="text-black" />
          </button>
        </div>

        {mobile && (
          <>
            <div className="fixed inset-0 bg-black/35" onClick={handleMobile} />
            <div className="bg-[#040e28] w-[70%] min-h-screen fixed top-0 left-0 z-50">
              <div className="overflow-y-auto text-white shadow-lg p-4">
                {navItems.map((el) => {
                  const Icon = el.icon;
                  return (
                    <div
                      key={el.id}
                      className="flex items-center gap-5 py-2 px-2 hover:bg-[#a6c0ee] rounded-md cursor-pointer"
                      onClick={() => handleSelect(el.id)}
                    >
                      <Icon size={18} />
                      <span>{el.label}</span>
                      {el.badge && (
                        <span className="ml-auto bg-red-500 text-xs px-2 py-0.5 rounded-full">
                          {el.badge}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}

        <div className="pt-20 w-[95%] m-auto ">
          {selectedItem === "dashboard" && <FeaturesForDashboard />}
          {selectedItem === "friends" && <Friend />}
          {selectedItem === "community" && <CommPage />}
          {selectedItem === "settings" && <Settings />}
          {selectedItem === "events" && <Events />}
          {selectedItem === "messages" && <Message />}
          {selectedItem === "notifications" && <NotificationsPage />}
        </div>
      </div>

      {/* ✅ Big Screen Section */}
      <div className="hidden lg:flex bg-[#040e28] min-h-screen pb-8">
        {/* Sidebar */}
        <div className="bg-[#040e28] w-[220px] h-screen fixed top-0 left-0 border-r border-white/10 z-40">
          <div className="overflow-y-auto h-full text-white shadow-lg p-3">
            {navItems.map((el) => {
              const Icon = el.icon;
              return (
                <div
                  key={el.id}
                  className="flex items-center gap-5 py-2 px-2 hover:bg-[#a6c0ee] rounded-md cursor-pointer"
                  onClick={() => handleSelect(el.id)}
                >
                  <Icon size={18} />
                  <span>{el.label}</span>
                  {el.badge && (
                    <span className="ml-auto bg-red-500 text-xs px-2 py-0.5 rounded-full">
                      {el.badge}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-[220px]">
          {/* ✅ The margin-left prevents sidebar overlap */}
          <nav className="bg-[#040e28] fixed text-black shadow-md left-[220px] right-0 flex justify-end items-center p-2  border-black/20 z-30">
            <div className="space-x-3 text-xs">
              <button className="bg-[#040e28] text-white px-3.5 py-2 rounded-full">
                Log out
              </button>
              <button className="bg-[#040e28] text-white px-3.5 py-2 rounded-full">
                Sign in
              </button>
            </div>
          </nav>

          {/* Add padding-top to avoid overlap with fixed header */}
          <div className="p-4 mt-[70px]">
            <div className="  mx-auto">
              {selectedItem === "dashboard" && <FeaturesForDashboard />}
              {selectedItem === "friends" && <Friend />}
              {selectedItem === "community" && <CommPage />}
              {selectedItem === "settings" && <Settings />}
              {selectedItem === "events" && <Events />}
              {selectedItem === "messages" && <Message />}
              {selectedItem === "notifications" && <NotificationsPage />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardPage;
