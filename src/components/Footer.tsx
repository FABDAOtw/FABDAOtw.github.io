import React from 'react';
export function Footer() {
  return <footer className="w-full bg-[#093532] z-50 text-white py-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="h-10 w-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-2">
              <svg viewBox="0 0 24 24" className="h-6 w-6 text-white">
                <path fill="currentColor" d="M21,10.5V6.75C21,5.79 20.21,5 19.25,5H4.75C3.79,5 3,5.79 3,6.75V10.5C3,11.46 3.79,12.25 4.75,12.25H19.25C20.21,12.25 21,11.46 21,10.5M5.75,10.5H4.75V6.75H5.75M9.25,10.5H7.25V6.75H9.25M12.75,10.5H10.75V6.75H12.75M16.25,10.5H14.25V6.75H16.25M19.25,10.5H17.25V6.75H19.25M21,17.25V13.5C21,12.54 20.21,11.75 19.25,11.75H4.75C3.79,11.75 3,12.54 3,13.5V17.25C3,18.21 3.79,19 4.75,19H19.25C20.21,19 21,18.21 21,17.25M5.75,17.25H4.75V13.5H5.75M9.25,17.25H7.25V13.5H9.25M12.75,17.25H10.75V13.5H12.75M16.25,17.25H14.25V13.5H16.25M19.25,17.25H17.25V13.5H19.25" />
              </svg>
            </div>
            <div>
              <div className="text-sm font-medium">Powered by</div>
              <div className="font-bold">FAB DAO</div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Contact</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-teal-200">
                DISCORD
              </a>
              <a href="#" className="text-white hover:text-teal-200">
                X / Twitter
              </a>
              <a href="#" className="text-white hover:text-teal-200">
                HACKMD
              </a>
            </div>
          </div>
        </div>
        <div className="pt-4 border-t border-white border-opacity-20 text-sm text-white text-opacity-70">
          ©FAB DAO. All Rights Reserved.
        </div>
      </div>
    </footer>;
}