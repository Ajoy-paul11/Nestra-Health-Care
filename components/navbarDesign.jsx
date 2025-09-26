"use client";

import Link from "next/link";
import React, { useState } from "react";
import logo from "../../public/120x40px.png";
import {
  IconBrandXing,
  IconMenuDeep,
  IconShoppingCart,
} from "@tabler/icons-react";
import Image from "next/image";
import { usePriceCardStore } from "./store";
import AdPurchaseModal from "./adPurchaseModal";

function NavbarDesign() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<Boolean>(false);
  const [navSubMenu, setNavSubMenu] = useState<Boolean>(false);
  const selectedCards = usePriceCardStore((state) => state.selectedCards);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNavMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleSubNavMenu = () => {
    setNavSubMenu((prev) => !prev);
  };
  return (
    <header className=" relative m-0 lg:my-7.5 z-100 border-b lg:border-b-0 border-b-[#FFFFFF1A]">
      <div className=" relative top-0 w-full lg:w-[calc(100%-40px)] bg-[#FFFFFF0F] border-none lg:border-1 lg:border-[#FFFFFF0F] rounded-none lg:rounded-[30px] z-100 2xl:max-w-[1860px] mx-auto">
        <nav className=" relative py-5 lg:py-4.5 lg:px-10 flex items-center lg:flex-wrap lg:justify-start w-full">
          <div className=" flex flex-wrap items-center justify-between px-4 lg:px-0 p-0 w-full">
            <Link href={"/"}>
              <picture>
                <Image src={logo} alt="Logo" />
              </picture>
            </Link>

            <div className=" hidden lg:flex items-center basis-auto">
              <div className=" flex flex-1 mx-[1.042vw]">
                <ul className=" inline-flex items-center list-none p-0 py-[0.5rem]">
                  <li className=" mx-1.5 relative">
                    <Link
                      href={"/"}
                      className=" text-base py-3.5 px-2.5 hover:text-[#e79d42]"
                    >
                      Home
                    </Link>
                  </li>
                  <li className=" mx-1.5 relative">
                    <Link
                      href={"/"}
                      className=" text-base py-3.5 px-2.5 hover:text-[#e79d42]"
                    >
                      About
                    </Link>
                  </li>
                  <li className=" mx-1.5 relative w-full group">
                    <Link
                      href="#"
                      className=" text-base py-3.5 px-2.5 hover:text-[#e79d42]"
                      onClick={handleSubNavMenu}
                    >
                      Services
                    </Link>
                    <ul
                      className={` hidden group-hover:block absolute top-full left-0 rounded-md !w-[240px] m-0 list-none overflow-hidden p-0 slicknav-menu`}
                    >
                      <div className=" w-full h-full flex gap-2.5">
                        <div>
                          <li className=" py-1.5 hover:text-[#1c1c1c]">
                            <Link
                              href="/newspaper"
                              className=" relative text-sm font-normal px-3  m-0 rounded-none "
                            >
                              NEWSPAPER
                            </Link>
                          </li>
                          <li className=" py-1 hover:text-[#1c1c1c]">
                            <Link
                              href="/radio"
                              className=" relative text-sm font-normal px-3  m-0 rounded-none"
                            >
                              RADIO
                            </Link>
                          </li>
                          <li className=" py-1 hover:text-[#1c1c1c]">
                            <Link
                              href="/television"
                              className=" relative text-sm font-normal px-3  m-0 rounded-none"
                            >
                              TELEVISION
                            </Link>
                          </li>
                          <li className=" py-1 hover:text-[#1c1c1c]">
                            <Link
                              href="/digital"
                              className=" relative text-sm font-normal px-3  m-0 rounded-none"
                            >
                              DIGITAL
                            </Link>
                          </li>
                          <li className=" py-1 hover:text-[#1c1c1c]">
                            <Link
                              href="/magazine"
                              className=" relative text-sm font-normal px-3  m-0 rounded-none"
                            >
                              MAGAZINE
                            </Link>
                          </li>
                        </div>
                        <div>
                          <li className=" py-1.5 hover:text-[#1c1c1c]">
                            <Link
                              href="/btl"
                              className=" relative text-sm font-normal px-3  m-0 rounded-none"
                            >
                              BTL
                            </Link>
                          </li>
                          <li className=" py-1 hover:text-[#1c1c1c]">
                            <Link
                              href="/outdoor"
                              className=" relative text-sm font-normal px-3  m-0 rounded-none"
                            >
                              OUTDOOR
                            </Link>
                          </li>
                          <li className=" py-1 hover:text-[#1c1c1c]">
                            <Link
                              href="/cinema"
                              className=" relative text-sm font-normal px-3  m-0 rounded-none"
                            >
                              CINEMA
                            </Link>
                          </li>
                          <li className=" py-1 hover:text-[#1c1c1c]">
                            <Link
                              href="/influencer"
                              className=" relative text-sm font-normal px-3  m-0 rounded-none"
                            >
                              INFLUENCER
                            </Link>
                          </li>
                          <li className=" py-1 hover:text-[#1c1c1c]">
                            <Link
                              href="/airport"
                              className=" relative text-sm font-normal px-3  m-0 rounded-none"
                            >
                              AIRPORT
                            </Link>
                          </li>
                        </div>
                      </div>
                    </ul>
                  </li>
                  <li className=" mx-1.5 relative">
                    <Link
                      href='/contact'
                      className=" text-base py-3.5 px-2.5 hover:text-[#e79d42]"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" hidden lg:flex items-center gap-3">
              {/* <button>Cart</button>
              <button>Sign In</button> */}
              <div
                onClick={() => {
                  setIsModalOpen(true);
                }}
                className=" relative px-3 py-1 text-white bg-[#0a0a0a] rounded-xl inline-flex items-center hover:cursor-pointer"
              >
                <IconShoppingCart stroke={2} width={36} height={36} />
                <span className="absolute -top-1 right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-xs text-white">
                  {selectedCards.length}
                </span>
              </div>
              <Link href={"/contact"} className=" contact-button">
                Get Started
              </Link>
            </div>
            <div className=" flex lg:hidden items-center gap-3">
              <div
                onClick={() => {
                  setIsModalOpen(true);
                }}
                className=" relative px-3 py-1.5 text-white bg-[#0a0a0a] rounded-md inline-flex items-center"
              >
                <IconShoppingCart stroke={2} width={28} height={28} />
                <span className="absolute top-1 right-2 flex h-3 w-3 items-center justify-center rounded-full bg-red-600 text-xs text-white">
                  {selectedCards.length}
                </span>
              </div>
              <div className=" lg:hidden" onClick={handleNavMenu}>
                <span className=" slicknav-btn">
                  {mobileMenuOpen ? (
                    <IconBrandXing stroke={2} />
                  ) : (
                    <IconMenuDeep stroke={2} />
                  )}
                </span>
              </div>
            </div>
          </div>
        </nav>
        {/* Mobile Menu */}
        <div
          className={` ${mobileMenuOpen ? "block" : "hidden"} top-0 relative`}
        >
          <div className=" slicknav-menu text-base">
            <ul className=" my-1 text-[#FFF] clear-both list-none overflow-hidden p-0">
              <li className=" block lg:hidden py-2 px-5">
                <Link
                  href="/home"
                  className=" relative text-base font-normal  m-0 rounded-none"
                >
                  Home
                </Link>
              </li>
              <li className=" block lg:hidden py-2 px-5">
                <Link
                  href="/about"
                  className=" relative text-base font-normal  m-0 rounded-none"
                >
                  About
                </Link>
              </li>
              <li className=" block lg:hidden py-2 px-5">
                <Link
                  href="#"
                  className=" relative text-base font-normal m-0 rounded-none"
                  onClick={handleSubNavMenu}
                >
                  Services
                </Link>
                <ul
                  className={` ${
                    navSubMenu ? "block" : "hidden"
                  } m-0 list-none overflow-hidden p-0`}
                >
                  <li className=" block lg:hidden">
                    <Link
                      href="/newspaper"
                      className=" relative text-base font-normal px-5  m-0 rounded-none"
                    >
                      Newspaper
                    </Link>
                  </li>
                  <li className=" py-1">
                    <Link
                      href="/radio"
                      className=" relative text-base font-normal px-5  m-0 rounded-none"
                    >
                      Radio
                    </Link>
                  </li>
                  <li className=" py-1">
                    <Link
                      href="/television"
                      className=" relative text-base font-normal px-5  m-0 rounded-none"
                    >
                      Television
                    </Link>
                  </li>
                  <li className=" py-1">
                    <Link
                      href="/digital"
                      className=" relative text-base font-normal px-5  m-0 rounded-none"
                    >
                      Digital
                    </Link>
                  </li>
                  <li className=" py-1">
                    <Link
                      href="/magazine"
                      className=" relative text-base font-normal px-5  m-0 rounded-none"
                    >
                      Magazine
                    </Link>
                  </li>
                  <li className=" block lg:hidden">
                    <Link
                      href="/btl"
                      className=" relative text-base font-normal px-5  m-0 rounded-none"
                    >
                      BTL
                    </Link>
                  </li>
                  <li className=" py-1">
                    <Link
                      href="/outdoor"
                      className=" relative text-base font-normal px-5  m-0 rounded-none"
                    >
                      Outdoor
                    </Link>
                  </li>
                  <li className=" py-1">
                    <Link
                      href="/influencer"
                      className=" relative text-base font-normal px-5  m-0 rounded-none"
                    >
                      Influencer
                    </Link>
                  </li>
                  <li className=" py-1">
                    <Link
                      href="/cinema"
                      className=" relative text-base font-normal px-5  m-0 rounded-none"
                    >
                      Cinema
                    </Link>
                  </li>
                  <li className=" py-1">
                    <Link
                      href="/airport"
                      className=" relative text-base font-normal px-5  m-0 rounded-none"
                    >
                      Airport
                    </Link>
                  </li>
                </ul>
              </li>
              <li className=" block lg:hidden py-2 px-5">
                <Link
                  href="/contact"
                  className=" relative text-base font-normal m-0 rounded-none"
                >
                  Contact
                </Link>
              </li>
              {/* <li className=" hidden lg:block">Sign In</li>
              <li className=" hidden lg:block">Sign Up</li> */}
            </ul>
          </div>
        </div>
      </div>
      <AdPurchaseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedCards={selectedCards}
        onClearCart={() => usePriceCardStore.getState().clearSelectedCard()}
      />
    </header>
  );
}

export default NavbarDesign;
