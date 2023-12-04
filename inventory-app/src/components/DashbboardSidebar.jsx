import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const DashbboardSidebar = () => {
  const [QuotationMenuOpen, setQuotationMenuOpen] = useState(false);
  const [UserMenuOpen, setUserMenuOpen] = useState(false);
  const [PSMenu, setPSMenu] = useState(false);
  const [ClientMenu, setClientMenu] = useState(false);
  const [AdminMenu, setAdminMenu] = useState(false);
  const [QRMenu, setQRMenu] = useState(false);

  const toggleMenuQuotations = () => {
    if (!QuotationMenuOpen) {
      setQuotationMenuOpen(true);
    } else {
      setQuotationMenuOpen(false);
    }
    console.log(QuotationMenuOpen);
  };

  const toggleMenuUsers = () => {
    if (!UserMenuOpen) {
      setUserMenuOpen(true);
    } else {
      setUserMenuOpen(false);
    }
    console.log(UserMenuOpen);
  };

  const togglePSMenu = () => {
    if (!PSMenu) {
      setPSMenu(true);
    } else {
      setPSMenu(false);
    }
    console.log(PSMenu);
  };

  const toggleClientMenu = () => {
    if (!ClientMenu) {
      setClientMenu(true);
    } else {
      setClientMenu(false);
    }
    console.log(ClientMenu);
  };

  const toggleAdminMenu = () => {
    if (!AdminMenu) {
      setAdminMenu(true);
    } else {
      setAdminMenu(false);
    }
    console.log(AdminMenu);
  };

  const toggleQRMenu = () => {
    if (!QRMenu) {
      setQRMenu(true);
    } else {
      setQRMenu(false);
    }
    console.log(QRMenu);
  };

  return (
    <>
      <aside className="fixed top-100 left-0 z-40 w-[300px] h-full">
        <div className="h-full px-3 py-4 bg-gray-50">
          <ul className="font-medium flex flex-col gap-4">
            <li onClick={toggleMenuQuotations}>
              <Link
                to="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-300"
              >
                <span className="ms-3">Quotations</span>
              </Link>
            </li>
            {QuotationMenuOpen ? (
              <ul className="flex flex-col gap-1 ml-4 bg-gray-200 rounded-lg">
                <li className="p-2 text-gray-900 rounded-lg hover:bg-gray-300 border border-slate-400">
                  <a href="#">Create Quotation</a>
                </li>
                <li className="p-2 text-gray-900 rounded-lg hover:bg-gray-300 border border-slate-400">
                  <a href="#">All Quotation</a>
                </li>
                <li className="p-2 text-gray-900 rounded-lg hover:bg-gray-300 border border-slate-400">
                  <a href="#">New Quotation</a>
                </li>
                <li className="p-2 text-gray-900 rounded-lg hover:bg-gray-300 border border-slate-400">
                  <a href="#">Sent to Client</a>
                </li>
                <li className="p-2 text-gray-900 rounded-lg hover:bg-gray-300 border border-slate-400">
                  <a href="#">Accepted</a>
                </li>
                <li className="p-2 text-gray-900 rounded-lg hover:bg-gray-300 border border-slate-400">
                  <a href="#">Declined</a>
                </li>
                <li className="p-2 text-gray-900 rounded-lg hover:bg-gray-300 border border-slate-400">
                  <a href="#">Analyze Decline</a>
                </li>
              </ul>
            ) : (
              <div className="hidden"></div>
            )}

            <li onClick={toggleMenuUsers}>
              <Link
                to="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-300"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
              </Link>
            </li>
            {UserMenuOpen ? (
              <ul className="flex flex-col gap-1 ml-4 bg-gray-200 rounded-lg">
                <li className="p-2 text-gray-900 rounded-lg hover:bg-gray-300 border border-slate-400">
                  <a href="#">Add User</a>
                </li>
                <li className="p-2 text-gray-900 rounded-lg hover:bg-gray-300 border border-slate-400">
                  <a href="#">All Users</a>
                </li>
              </ul>
            ) : (
              <div className="hidden"></div>
            )}

            <li onClick={togglePSMenu}>
              <Link
                to="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-300"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Products/Services
                </span>
              </Link>
            </li>
            {PSMenu ? (
              <ul className="flex flex-col gap-1 ml-4 bg-gray-200 rounded-lg">
                <li className="p-2 text-gray-900 rounded-lg hover:bg-gray-300 border border-slate-400">
                  <a href="#">Add Products/Services</a>
                </li>
                <li className="p-2 text-gray-900 rounded-lg hover:bg-gray-300 border border-slate-400">
                  <a href="#">All Products/Services</a>
                </li>
              </ul>
            ) : (
              <div className="hidden"></div>
            )}

            <li onClick={toggleClientMenu}>
              <Link
                to="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-300"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Clients</span>
              </Link>
            </li>
            {ClientMenu ? (
              <ul className="flex flex-col gap-1 ml-4 bg-gray-200 rounded-lg">
                <li className="p-2 text-gray-900 rounded-lg hover:bg-gray-300 border border-slate-400">
                  <a href="#">Add Client</a>
                </li>
                <li className="p-2 text-gray-900 rounded-lg hover:bg-gray-300 border border-slate-400">
                  <a href="#">All Clients</a>
                </li>
              </ul>
            ) : (
              <div className="hidden"></div>
            )}

            <li onClick={toggleAdminMenu}>
              <Link
                to="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-300"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Admin</span>
              </Link>
            </li>

            {AdminMenu ? (
              <ul className="flex flex-col gap-1 ml-4 bg-gray-200 rounded-lg">
                <li className="p-2 text-gray-900 rounded-lg hover:bg-gray-300 border border-slate-400">
                  <a href="#">Create Company</a>
                </li>
                <li className="p-2 text-gray-900 rounded-lg hover:bg-gray-300 border border-slate-400">
                  <a href="#">Company Details</a>
                </li>
              </ul>
            ) : (
              <div className="hidden"></div>
            )}

            <li onClick={toggleQRMenu}>
              <Link
                to="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-300"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Quotation Requests
                </span>
              </Link>
            </li>
            {QRMenu ? (
              <ul className="flex flex-col gap-1 ml-4 bg-gray-200 rounded-lg">
                <li className="p-2 text-gray-900 rounded-lg hover:bg-gray-300 border border-slate-400">
                  <a href="#">Request Quotation</a>
                </li>
                <li className="p-2 text-gray-900 rounded-lg hover:bg-gray-300 border border-slate-400">
                  <a href="#">All Requests</a>
                </li>
                <li className="p-2 text-gray-900 rounded-lg hover:bg-gray-300 border border-slate-400">
                  <a href="#">My Requests</a>
                </li>
                <li className="p-2 text-gray-900 rounded-lg hover:bg-gray-300 border border-slate-400">
                  <a href="#">Overdue Requests</a>
                </li>
              </ul>
            ) : (
              <div className="hidden"></div>
            )}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default DashbboardSidebar;
