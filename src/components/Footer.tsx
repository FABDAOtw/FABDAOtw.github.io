import React from 'react';
import FooterLogo from '../Footer-logo.svg';
import FabDaoLogo from '../FABDAO-logo.svg';

export function Footer() {
  return <footer className="w-full bg-[#093532] z-50 text-white py-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <img src={FooterLogo} alt="FAB DAO" />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Contact</h3>
            <div className="flex space-x-4">
              <a href="https://discord.com/invite/skvQAGPBDV" className="text-white hover:text-teal-200">
                DISCORD
              </a>
              <a href="https://x.com/GreenSofa_TW" className="text-white hover:text-teal-200">
                X / Twitter
              </a>
              <a href="https://hackmd.io/@greensofa/home" className="text-white hover:text-teal-200">
                HACKMD
              </a>
            </div>
          </div>
        </div>
        <div className="pt-4 border-t border-white border-opacity-20 text-sm text-white text-opacity-70 flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="mr-2">Powered by</span>
            <img src={FabDaoLogo} alt="FAB DAO" />
          </div>
          <div>
            <span>©FAB DAO. All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>;
}