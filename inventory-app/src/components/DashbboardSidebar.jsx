import React from "react";
import { Sidebar } from "flowbite-react";
import {
  HiInbox,
  HiShoppingBag,
  HiOutlineUsers,
  HiUser,
  HiOutlineDocumentDuplicate,
  HiOutlineAcademicCap,
} from "react-icons/hi";

const Dashboard = () => {
  return (
    <>
      <Sidebar aria-label="Sidebar with multi-level dropdown example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Collapse
              icon={HiOutlineDocumentDuplicate}
              label="Quotation"
            >
              <Sidebar.Item href="#">Create Quotation</Sidebar.Item>
              <Sidebar.Item href="#">All Quotation</Sidebar.Item>
              <Sidebar.Item href="#">New Quotation</Sidebar.Item>
              <Sidebar.Item href="#">Send to Client</Sidebar.Item>
              <Sidebar.Item href="#">Accepted</Sidebar.Item>
              <Sidebar.Item href="#">Declined</Sidebar.Item>
              <Sidebar.Item href="#">Analyze Decline</Sidebar.Item>
            </Sidebar.Collapse>

            <Sidebar.Collapse icon={HiUser} label="User">
              <Sidebar.Item href="#">Add User</Sidebar.Item>
              <Sidebar.Item href="#">All User</Sidebar.Item>
            </Sidebar.Collapse>

            <Sidebar.Collapse icon={HiShoppingBag} label="Products/Services">
              <Sidebar.Item href="#">Add Product/Service</Sidebar.Item>
              <Sidebar.Item href="#">All Products/Service</Sidebar.Item>
            </Sidebar.Collapse>

            <Sidebar.Collapse icon={HiOutlineUsers} label="Clients">
              <Sidebar.Item href="#">Add Client</Sidebar.Item>
              <Sidebar.Item href="#">All Clients</Sidebar.Item>
            </Sidebar.Collapse>

            <Sidebar.Collapse icon={HiOutlineAcademicCap} label="Admin">
              <Sidebar.Item href="#">Create Company</Sidebar.Item>
              <Sidebar.Item href="#">Company Details</Sidebar.Item>
            </Sidebar.Collapse>

            <Sidebar.Collapse icon={HiInbox} label="Quotation Requests">
              <Sidebar.Item href="#">Request Quotation</Sidebar.Item>
              <Sidebar.Item href="#">All Requests</Sidebar.Item>
              <Sidebar.Item href="#">My Requests</Sidebar.Item>
              <Sidebar.Item href="#">Overdue Requests</Sidebar.Item>
            </Sidebar.Collapse>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
};

export default Dashboard;
