'use client'

import { useState } from 'react';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import logo from '../static/images/logo.png'; // Import the logo image
import video from '../static/video/GoldColoredParticlesBg.mp4';
import { HiArrowLongRight } from "react-icons/hi2";
import { Link, NavLink } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  let location = useLocation();
  const { t, i18n } = useTranslation("global");

  return (
    <div className="navbar relative">
      <video autoPlay loop muted className="navbar-video absolute inset-0 w-full h-full object-cover z-0">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <nav aria-label="Global" className="menu menu-3 mx-auto flex max-w-7xl items-center py-9 justify-between lg:px-8 relative z-10">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only text-white">Your Company</span>
            <img alt="" src={logo} className="w-[130px] absolute -top-2 left-14" /> {/* Use the imported logo */}
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <NavLink to='/' className={`text-sm font-semibold leading-6 text-white ${location.pathname === '/' ? "line-decoration-active" : "line-decoration"}`}>
            {t('nav.home')}
          </NavLink>
          <span className='text-[#d1b26b] font-bold pt-1 -mx-6'>|</span>
          <NavLink to='/about' className={`text-sm font-semibold leading-6 text-white ${location.pathname === '/about' ? "line-decoration-active" : "line-decoration"}`}>
            {t('nav.about')}
          </NavLink>
          <span className='text-[#d1b26b] font-bold pt-1 -mx-6'>|</span>
          <NavLink to="/menu" className={`text-sm font-semibold leading-6 text-white ${location.pathname === '/menu' ? "line-decoration-active" : "line-decoration"}`}>
            {t('nav.menu')}
          </NavLink>
          <span className='text-[#d1b26b] font-bold pt-1 -mx-6'>|</span>
          <NavLink to="/gallery" className={`text-sm font-semibold leading-6 text-white ${location.pathname === '/gallery' ? "line-decoration-active" : "line-decoration"}`}>
            {t('nav.gallery')}
          </NavLink>
          <span className='text-[#d1b26b] font-bold pt-1 -mx-6'>|</span>
          <NavLink to="/contact" className={`text-sm font-semibold leading-6 text-white ${location.pathname === '/contact' ? "line-decoration-active" : "line-decoration"}`}>
            {t('nav.contact')}
          </NavLink>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <NavLink to="/réservation" className="text-sm font-semibold border-2 border-[#d1b26b] font-normal transition delay-100 duration-[420ms] px-4 py-1 hover:bg-[#d1b26b] hover-border rounded-3xl leading-6 text-white">
            {t('cta.reserveTable')} <span aria-hidden="true">&rarr;</span>
          </NavLink>
        </div>
      </nav>
    </div>
  )
}