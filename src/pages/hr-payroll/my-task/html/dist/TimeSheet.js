import React from 'react'
import '../../../../../../src/assets/payroll/css/Emaize.style.min.scss';
import { Link } from 'react-router-dom';

function TimeSheet() {
  return (
<>
  <div id="mytask-layout" className="theme-indigo">
    {/* sidebar */}
    <div className="sidebar px-4 py-4 py-md-5 me-0">
    <div className="d-flex flex-column h-100">
      {/* <a href="index-2.html" className="mb-0 brand-icon"> */}
        <Link to="/Indx2" className="mb-0 brand-icon">

        <span className="logo-icon">
          <img
            src="favicon.png"
            alt=""
            style={{ width: "100%", margin: "0 auto", objectFit: "cover" }}
            />
        </span>
        <span className="logo-text">Emaize</span>
            </Link>
      {/* </a> */}
      {/* Menu: main ul */}
      <ul className="menu-list flex-grow-1 mt-3">
        <li className="collapsed">
          <a
            className="m-link active"
            data-bs-toggle="collapse"
            data-bs-target="#dashboard-Components"
            href='#'
          >
            <i className="icofont-home fs-5" /> <span>Dashboard</span>{" "}
            <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
          </a>
          {/* Menu: Sub menu ul */}
          <ul className="sub-menu collapse show" id="dashboard-Components">
            <li>
              {/* <a className="ms-link active" href="index-2.html"> */}
                {" "}
                <Link to="/Indx2" className="ms-link active"> 
                <span>Hr Dashboard</span>.
                </Link>
              {/* </a> */}
            </li>
            <li>
              {/* <a className="ms-link" href="project-dashboard.html"> */}
                {" "}
                <Link to="/project_Dashboard" className="ms-link">
                <span>Project Dashboard</span>
                </Link>
              {/* </a> */}
            </li>
          </ul>
        </li>
        <li className="collapsed">
          <a
            className="m-link"
            data-bs-toggle="collapse"
            data-bs-target="#project-Components"
            href="#"
          >
            <i className="icofont-briefcase" />
            <span>Projects</span>{" "}
            <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
          </a>
          {/* Menu: Sub menu ul */}
          <ul className="sub-menu collapse" id="project-Components">
            <li>
              {/* <a className="ms-link" href="projects.html"> */}
                <Link to="/Projects" className='ms-link'>
                <span>Projects</span>
                </Link>
              {/* </a> */}
            </li>
            <li>
              {/* <a className="ms-link" href="task.html"> */}
              <Link to="/Task" className='ms-link'>
                <span>Tasks</span>
              </Link>
            </li>
            <li>
              {/* <a className="ms-link" href="timesheet.html"> */}
              <Link to="/TimeSheet" className='ms-link'>
                <span>Timesheet</span>
              </Link>
            </li>
            <li>
              {/* <a className="ms-link" href="team-leader.html"> */}
            <Link to="/Team_Leader" className='ms-link'>

                <span>Leaders</span>
            </Link>
              {/* </a> */}
            </li>
          </ul>
        </li>
        <li className="collapsed">
          <a
            className="m-link"
            data-bs-toggle="collapse"
            data-bs-target="#tikit-Components"
            href="#"
          >
            <i className="icofont-ticket" /> <span>Tickets</span>{" "}
            <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
          </a>
          {/* Menu: Sub menu ul */}
          <ul className="sub-menu collapse" id="tikit-Components">
            <li>
              {/* <a className="ms-link" href="tickets.html"> */}
                {" "}
                <Link to="/Ticket" className="ms-link">
                <span>Tickets View</span>
                </Link>
            </li>
            <li>
              {/* <a className="ms-link" href="ticket-detail.html"> */}

                {" "}
                <Link to="/Ticket_Detail" className="ms-link">
                <span>Ticket Detail</span>
              </Link>
            </li>
          </ul>
        </li>
        <li className="collapsed">
          <a
            className="m-link"
            data-bs-toggle="collapse"
            data-bs-target="#client-Components"
            href="#"
          >
            <i className="icofont-user-male" /> <span>Our Clients</span>{" "}
            <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
          </a>
          {/* Menu: Sub menu ul */}
          <ul className="sub-menu collapse" id="client-Components">
            <li>
              {/* <a className="ms-link" href="ourclients.html"> */}
              <Link to="/OurClients" className="ms-link" >
                {" "}
                <span>Clients</span>
                </Link>
              {/* </a> */}
            </li>
            <li>
              <Link className="ms-link" to="/Profile">
                {" "}
                <span>Client Profile</span>
              </Link>
            </li>
          </ul>
        </li>
        <li className="collapsed">
          <a
            className="m-link"
            data-bs-toggle="collapse"
            data-bs-target="#emp-Components"
            href="#"
          >
            <i className="icofont-users-alt-5" /> <span>Employees</span>{" "}
            <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
          </a>
          {/* Menu: Sub menu ul */}
          <ul className="sub-menu collapse" id="emp-Components">
            <li>
              {/* <a className="ms-link" href="members.html"> */}
              <Link to="/Members" className="ms-link">
                {" "}
                <span>Members</span>
              </Link>
              {/* </a> */}

            </li>
            <li>
              {/* <a className="ms-link" href="employee-profile.html"> */}
                {" "}
                <Link to="/Employee_Profile" className="ms-link">
                <span>Members Profile</span>
              </Link>
              {/* </a> */}

            </li>
            <li>
              {/* <a className="ms-link" href="holidays.html"> */}
                {" "}
                <Link to="/Holidays" className="ms-link">
                
                <span>Holidays</span>
              </Link>
            </li>
            <li>
              {/* <a className="ms-link" href="attendance-employees.html"> */}
                {" "}
                <Link to="/Attendance_Employees" className="ms-link">
                <span>Attendance Employees</span>
              </Link>
            </li>
            <li>
              <Link className="ms-link" to="Attendance">
                {" "}
                <span>Attendance</span>
              </Link>
            </li>
            <li>
              <Link className="ms-link" to="Leave_Request">
                {" "}
                <span>Leave Request</span>
              </Link>
            </li>
            <li>
              <Link className="ms-link" to="Department">
                {" "}
                <span>Department</span>
              </Link>
            </li>
            <li>
              <Link className="ms-link" to="Loan">
                {" "}
                <span>Loan</span>
              </Link>
            </li>
          </ul>
        </li>
        <li className="collapsed">
          <a
            className="m-link"
            data-bs-toggle="collapse"
            data-bs-target="#menu-Componentsone"
            href="#"
          >
            <i className="icofont-ui-calculator" /> <span>Accounts</span>{" "}
            <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
          </a>
          {/* Menu: Sub menu ul */}
          <ul className="sub-menu collapse" id="menu-Componentsone">
            <li>
              {/* <a className="ms-link" href="invoices.html"> */}
              <Link to="/Invoices" className="ms-link">
                <span>Invoices</span>{" "}
                </Link>
              {/* </a> */}
            </li>
            <li>
              {/* <a className="ms-link" href="payments.html"> */}
              <Link to="/Payments" className="ms-link">
                <span>Payments</span>{" "}
                </Link>
              {/* </a> */}
            </li>
            <li>
              {/* <a className="ms-link" href="expenses.html"> */}
              <Link to="/Expenses" className="ms-link">
                <span>Expenses</span>{" "}
              </Link>
            </li>
            <li>
              {/* <a className="ms-link" href="create-invoice.html"> */}
              <Link to="/Create_Invoice" className="ms-link">
                <span>Create Invoice</span>{" "}
              </Link>
            </li>
          </ul>
        </li>
        <li className="collapsed">
          <a
            className="m-link"
            data-bs-toggle="collapse"
            data-bs-target="#payroll-Components"
            href="#"
          >
            <i className="icofont-users-alt-5" /> <span>Payroll</span>{" "}
            <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
          </a>
          {/* Menu: Sub menu ul */}
          <ul className="sub-menu collapse" id="payroll-Components">
            <li>
              {/* <a className="ms-link" href="salaryslip.html"> */}
              <Link to="/SalarySlip" className="ms-link">
                <span>Employee Salary</span>{" "}
              </Link>
            </li>
          </ul>
        </li>
        <li className="collapsed">
          <a
            className="m-link"
            data-bs-toggle="collapse"
            data-bs-target="#app-Components"
            href="#"
          >
            <i className="icofont-contrast" /> <span>Tasks</span>{" "}
            <span className="arrow icofont-dotted-down ms-auto text-end fs-5" />
          </a>
          {/* Menu: Sub menu ul */}
          <ul className="sub-menu collapse" id="app-Components">
            <li>
              {/* <a className="ms-link" href="calendar.html"> */}
              <Link className="ms-link" to="/Calender">
                {" "}
                <span>Calander</span>
              </Link>
            </li>
            {/* <li><a class="ms-link" href="chat.html"><span>Chat App</span></a></li> */}
          </ul>
        </li>
        {/* <li class="collapsed">
                  <a class="m-link" data-bs-toggle="collapse" data-bs-target="#extra-Components" href="#">
                      <i class="icofont-code-alt"></i> <span>Other Pages</span> <span class="arrow icofont-dotted-down ms-auto text-end fs-5"></span></a> */}
        {/* Menu: Sub menu ul */}
        {/* <ul class="sub-menu collapse" id="extra-Components">
                      <li><a class="ms-link" href="charts.html"> <span>Apex Charts</span></a></li>
                      <li><a class="ms-link" href="forms.html"><span>Forms Example</span></a></li>
                      <li><a class="ms-link" href="table.html"> <span>Table Example</span></a></li>
                      <li><a class="ms-link" href="icon.html"><span>Reviews Page</span></a></li>
                      <li><a class="ms-link" href="icon.html"><span></span>Icons</span></a></li>
                  </ul>
              </li> */}
        {/* <li><a class="m-link" href="ui-elements/ui-alerts.html"><i class="icofont-paint"></i> <span>UI Components</span></a></li> */}
      </ul>
      {/* Theme: Switch Theme */}
      <ul className="list-unstyled mb-0">
        <li className="d-flex align-items-center justify-content-center">
          <div className="form-check form-switch theme-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="theme-switch"
            />
            <label className="form-check-label" htmlFor="theme-switch">
              Enable Dark Mode!
            </label>
          </div>
        </li>
        {/* <li class="d-flex align-items-center justify-content-center">
              <div class="form-check form-switch theme-rtl">
                  <input class="form-check-input" type="checkbox" id="theme-rtl">
                  <label class="form-check-label" for="theme-rtl">Enable RTL Mode!</label>
              </div>
          </li> */}
      </ul>
      {/* Menu: menu collepce btn */}
      <button
        type="button"
        className="btn btn-link sidebar-mini-btn text-light"
      >
        <span className="ms-2">
          <i className="icofont-bubble-right" />
        </span>
      </button>
    </div>
  </div>
    {/* main body area */}
    <div className="main px-lg-4 px-md-4">
      {/* Body: Header */}
      <div className="header">
      <nav className="navbar py-4">
        <div className="container-xxl">
          {/* header rightbar icon */}
          <div className="h-right d-flex align-items-center mr-5 mr-lg-0 order-1">
            <div className="d-flex">
              <Link
                className="nav-link text-primary collapsed"
                to="/Help"                
                title="Get Help"
              >
                <i className="icofont-info-square fs-5" />
              </Link>
              <div className="avatar-list avatar-list-stacked px-3">
                <img
                  className="avatar rounded-circle"
                  src="assets/images/xs/avatar2.jpg"
                  alt=""
                />
                <img
                  className="avatar rounded-circle"
                  src="assets/images/xs/avatar1.jpg"
                  alt=""
                />
                <img
                  className="avatar rounded-circle"
                  src="assets/images/xs/avatar3.jpg"
                  alt=""
                />
                <img
                  className="avatar rounded-circle"
                  src="assets/images/xs/avatar4.jpg"
                  alt=""
                />
                <img
                  className="avatar rounded-circle"
                  src="assets/images/xs/avatar7.jpg"
                  alt=""
                />
                <img
                  className="avatar rounded-circle"
                  src="assets/images/xs/avatar8.jpg"
                  alt=""
                />
                <span
                  className="avatar rounded-circle text-center pointer"
                  data-bs-toggle="modal"
                  data-bs-target="#addUser"
                >
                  <i className="icofont-ui-add" />
                </span>
              </div>
            </div>
            <div className="dropdown notifications zindex-popover">
              <a
                className="nav-link dropdown-toggle pulse"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                <i className="icofont-alarm fs-5" />
                <span className="pulse-ring" />
              </a>
              <div
                id="NotificationsDiv"
                className="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-sm-end p-0 m-0"
              >
                <div className="card border-0 w380">
                  <div className="card-header border-0 p-3">
                    <h5 className="mb-0 font-weight-light d-flex justify-content-between">
                      <span>Notifications</span>
                      <span className="badge text-white">11</span>
                    </h5>
                  </div>
                  <div className="tab-content card-body">
                    <div className="tab-pane fade show active">
                      <ul className="list-unstyled list mb-0">
                        <li className="py-2 mb-1 border-bottom">
                          <a href="javascript:void(0);" className="d-flex">
                            <img
                              className="avatar rounded-circle"
                              src="assets/images/xs/avatar1.jpg"
                              alt=""
                            />
                            <div className="flex-fill ms-2">
                              <p className="d-flex justify-content-between mb-0 ">
                                <span className="font-weight-bold">
                                  Dylan Hunter
                                </span>{" "}
                                <small>2MIN</small>
                              </p>
                              <span className="">
                                Added 2021-02-19 Emaize ui/ux Design{" "}
                                <span className="badge bg-success">Review</span>
                              </span>
                            </div>
                          </a>
                        </li>
                        <li className="py-2 mb-1 border-bottom">
                          <a href="javascript:void(0);" className="d-flex">
                            <div className="avatar rounded-circle no-thumbnail">
                              DF
                            </div>
                            <div className="flex-fill ms-2">
                              <p className="d-flex justify-content-between mb-0 ">
                                <span className="font-weight-bold">
                                  Diane Fisher
                                </span>{" "}
                                <small>13MIN</small>
                              </p>
                              <span className="">
                                Task added Get Started with Fast Cad project
                              </span>
                            </div>
                          </a>
                        </li>
                        <li className="py-2 mb-1 border-bottom">
                          <a href="javascript:void(0);" className="d-flex">
                            <img
                              className="avatar rounded-circle"
                              src="assets/images/xs/avatar3.jpg"
                              alt=""
                            />
                            <div className="flex-fill ms-2">
                              <p className="d-flex justify-content-between mb-0 ">
                                <span className="font-weight-bold">
                                  Andrea Gill
                                </span>{" "}
                                <small>1HR</small>
                              </p>
                              <span className="">
                                Quality Assurance Task Completed
                              </span>
                            </div>
                          </a>
                        </li>
                        <li className="py-2 mb-1 border-bottom">
                          <a href="javascript:void(0);" className="d-flex">
                            <img
                              className="avatar rounded-circle"
                              src="assets/images/xs/avatar5.jpg"
                              alt=""
                            />
                            <div className="flex-fill ms-2">
                              <p className="d-flex justify-content-between mb-0 ">
                                <span className="font-weight-bold">
                                  Diane Fisher
                                </span>{" "}
                                <small>13MIN</small>
                              </p>
                              <span className="">
                                Add New Project for App Developemnt
                              </span>
                            </div>
                          </a>
                        </li>
                        <li className="py-2 mb-1 border-bottom">
                          <a href="javascript:void(0);" className="d-flex">
                            <img
                              className="avatar rounded-circle"
                              src="assets/images/xs/avatar6.jpg"
                              alt=""
                            />
                            <div className="flex-fill ms-2">
                              <p className="d-flex justify-content-between mb-0 ">
                                <span className="font-weight-bold">
                                  Andrea Gill
                                </span>{" "}
                                <small>1HR</small>
                              </p>
                              <span className="">
                                Add Timesheet For Rhinestone project
                              </span>
                            </div>
                          </a>
                        </li>
                        <li className="py-2">
                          <a href="javascript:void(0);" className="d-flex">
                            <img
                              className="avatar rounded-circle"
                              src="assets/images/xs/avatar7.jpg"
                              alt=""
                            />
                            <div className="flex-fill ms-2">
                              <p className="d-flex justify-content-between mb-0 ">
                                <span className="font-weight-bold">
                                  Zoe Wright
                                </span>{" "}
                                <small className="">1DAY</small>
                              </p>
                              <span className="">Add Calander Event</span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <a className="card-footer text-center border-top-0" href="#">
                    {" "}
                    View all notifications
                  </a>
                </div>
              </div>
            </div>
            <div className="dropdown user-profile ml-2 ml-sm-3 d-flex align-items-center zindex-popover">
              <div className="u-info me-2">
                <p className="mb-0 text-end line-height-sm ">
                  <span className="font-weight-bold">Dylan Hunter</span>
                </p>
                <small>Admin Profile</small>
              </div>
              <a
                className="nav-link dropdown-toggle pulse p-0"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                data-bs-display="static"
              >
                <img
                  className="avatar lg rounded-circle img-thumbnail"
                  src="assets/images/profile_av.png"
                  alt="profile"
                />
              </a>
              <div className="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-end p-0 m-0">
                <div className="card border-0 w280">
                  <div className="card-body pb-0">
                    <div className="d-flex py-1">
                      <img
                        className="avatar rounded-circle"
                        src="assets/images/profile_av.png"
                        alt="profile"
                      />
                      <div className="flex-fill ms-3">
                        <p className="mb-0">
                          <span className="font-weight-bold">Dylan Hunter</span>
                        </p>
                        <small className="">Dylan.hunter@gmail.com</small>
                      </div>
                    </div>
                    <div>
                      <hr className="dropdown-divider border-dark" />
                    </div>
                  </div>
                  <div className="list-group m-2 ">
                    <Link
                      to="/Task"
                      className="list-group-item list-group-item-action border-0 "
                    >
                      <i className="icofont-tasks fs-5 me-3" />
                      My Task
                    </Link>
                    <Link
                      to="/Members"
                      className="list-group-item list-group-item-action border-0 "
                    >
                      <i className="icofont-ui-user-group fs-6 me-3" />
                      members
                    </Link>
                    <a
                      href="ui-elements/auth-signin.html"
                      className="list-group-item list-group-item-action border-0 "
                    >
                      <i className="icofont-logout fs-6 me-3" />
                      Signout
                    </a>
                    <div>
                      <hr className="dropdown-divider border-dark" />
                    </div>
                    <a
                      href="ui-elements/auth-signup.html"
                      className="list-group-item list-group-item-action border-0 "
                    >
                      <i className="icofont-contact-add fs-5 me-3" />
                      Add personal account
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* menu toggler */}
          <button
            className="navbar-toggler p-0 border-0 menu-toggle order-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainHeader"
          >
            <span className="fa fa-bars" />
          </button>
          {/* main menu Search*/}
          <div className="order-0 col-lg-4 col-md-4 col-sm-12 col-12 mb-3 mb-md-0 ">
            <div className="input-group flex-nowrap input-group-lg">
              <button
                type="button"
                className="input-group-text"
                id="addon-wrapping"
              >
                <i className="fa fa-search" />
              </button>
              <input
                type="search"
                className="form-control"
                placeholder="Search"
                aria-label="search"
                aria-describedby="addon-wrapping"
              />
              <button
                type="button"
                className="input-group-text add-member-top"
                id="addon-wrappingone"
                data-bs-toggle="modal"
                data-bs-target="#addUser"
              >
                <i className="fa fa-plus" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
      {/* Body: Body */}
      <div className="body d-flex py-lg-3 py-md-2">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="border-0 mb-4">
              <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                <h3 className="fw-bold mb-0">Project Timesheet</h3>
                <div className="col-auto d-flex w-sm-100">
                  <button
                    type="button"
                    className="btn btn-dark btn-set-task w-sm-100"
                    data-bs-toggle="modal"
                    data-bs-target="#sendsheet"
                  >
                    <i className="icofont-file-spreadsheet me-2 fs-6" />
                    Sheets Sent
                  </button>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* Row end  */}
          <div className="row clearfix g-3">
            <div className="col-sm-12">
              <div className="card mb-3">
                <div className="card-body">
                  <table
                    id="myProjectTable"
                    className="table table-hover align-middle mb-0"
                    style={{ width: "100%" }}
                  >
                    <thead>
                      <tr>
                        <th>Project Name</th>
                        <th>Mon</th>
                        <th>Tue</th>
                        <th>Wed</th>
                        <th>Thur</th>
                        <th>Fri</th>
                        <th>Sat</th>
                        <th>Sun</th>
                        <th>Total</th>
                        <th>
                          <i className="icofont-gear fs-5" />
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <select
                            className="form-select"
                            aria-label="Default select Project Category"
                          >
                            <option selected="">Rhinestone</option>
                            <option value={1}>Fast Cad</option>
                            <option value={2}>Box of Crayons</option>
                            <option value={3}>Gob Geeklords</option>
                            <option value={4}>Java Dalia</option>
                            <option value={5}>Practice to Perfect</option>
                            <option value={6}>Rhinestone</option>
                            <option value={7}>Social Geek Made</option>
                          </select>
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded1"
                            defaultValue="08:00:00"
                          />
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded2"
                            defaultValue="08:00:00"
                          />
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded3"
                            defaultValue="08:00:00"
                          />
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded4"
                            defaultValue="08:00:00"
                          />
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded5"
                            defaultValue="08:00:00"
                          />
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded6"
                            defaultValue="08:00:00"
                          />
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded7"
                            defaultValue="08:00:00"
                          />
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn light-success-bg"
                          >
                            56
                          </button>
                        </td>
                        <td>
                          <div
                            className="btn-group"
                            role="group"
                            aria-label="Basic outlined example"
                          >
                            <button
                              type="button"
                              className="btn btn-outline-secondary"
                            >
                              <i className="icofont-edit text-success" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary deleterow"
                            >
                              <i className="icofont-ui-delete text-danger" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <select
                            className="form-select"
                            aria-label="Default select Project Category"
                          >
                            <option selected="">Practice to Perfect</option>
                            <option value={1}>Fast Cad</option>
                            <option value={2}>Box of Crayons</option>
                            <option value={3}>Gob Geeklords</option>
                            <option value={4}>Java Dalia</option>
                            <option value={5}>Practice to Perfect</option>
                            <option value={6}>Rhinestone</option>
                            <option value={7}>Social Geek Made</option>
                          </select>
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded8"
                            defaultValue="08:00:00"
                          />
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded9"
                            defaultValue="08:00:00"
                          />
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded10"
                            defaultValue="08:00:00"
                          />
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded11"
                            defaultValue="08:00:00"
                          />
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded12"
                            defaultValue="08:00:00"
                          />
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded13"
                            defaultValue="06:20:00"
                          />
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded14"
                            defaultValue="08:00:00"
                          />
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn light-success-bg"
                          >
                            54.20
                          </button>
                        </td>
                        <td>
                          <div
                            className="btn-group"
                            role="group"
                            aria-label="Basic outlined example"
                          >
                            <button
                              type="button"
                              className="btn btn-outline-secondary"
                            >
                              <i className="icofont-edit text-success" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary deleterow"
                            >
                              <i className="icofont-ui-delete text-danger" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <select
                            className="form-select"
                            aria-label="Default select Project Category"
                          >
                            <option selected="">Java Dalia</option>
                            <option value={1}>Fast Cad</option>
                            <option value={2}>Box of Crayons</option>
                            <option value={3}>Gob Geeklords</option>
                            <option value={4}>Java Dalia</option>
                            <option value={5}>Practice to Perfect</option>
                            <option value={6}>Rhinestone</option>
                            <option value={7}>Social Geek Made</option>
                          </select>
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded15"
                            defaultValue="08:00:00"
                          />
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded16"
                            defaultValue="08:00:00"
                          />
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded17"
                            defaultValue="08:00:00"
                          />
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded18"
                            defaultValue="08:00:00"
                          />
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded19"
                            defaultValue="08:00:00"
                          />
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded20"
                            defaultValue="08:00:00"
                          />
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded21"
                            defaultValue="08:00:00"
                          />
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn light-success-bg"
                          >
                            56
                          </button>
                        </td>
                        <td>
                          <div
                            className="btn-group"
                            role="group"
                            aria-label="Basic outlined example"
                          >
                            <button
                              type="button"
                              className="btn btn-outline-secondary"
                            >
                              <i className="icofont-edit text-success" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary deleterow"
                            >
                              <i className="icofont-ui-delete text-danger" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <select
                            className="form-select"
                            aria-label="Default select Project Category"
                          >
                            <option selected="">Gob Geeklords</option>
                            <option value={1}>Fast Cad</option>
                            <option value={2}>Box of Crayons</option>
                            <option value={3}>Gob Geeklords</option>
                            <option value={4}>Java Dalia</option>
                            <option value={5}>Practice to Perfect</option>
                            <option value={6}>Rhinestone</option>
                            <option value={7}>Social Geek Made</option>
                          </select>
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded22"
                            defaultValue="08:00:00"
                          />
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded23"
                            defaultValue="04:00:00"
                          />
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded24"
                            defaultValue="04:00:00"
                          />
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded25"
                            defaultValue="08:00:00"
                          />
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded26"
                            defaultValue="08:00:00"
                          />
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded27"
                            defaultValue="08:00:00"
                          />
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded28"
                            defaultValue="08:00:00"
                          />
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn light-success-bg"
                          >
                            48
                          </button>
                        </td>
                        <td>
                          <div
                            className="btn-group"
                            role="group"
                            aria-label="Basic outlined example"
                          >
                            <button
                              type="button"
                              className="btn btn-outline-secondary"
                            >
                              <i className="icofont-edit text-success" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary deleterow"
                            >
                              <i className="icofont-ui-delete text-danger" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <select
                            className="form-select"
                            aria-label="Default select Project Category"
                          >
                            <option selected="">Box of Crayons</option>
                            <option value={1}>Fast Cad</option>
                            <option value={2}>Box of Crayons</option>
                            <option value={3}>Gob Geeklords</option>
                            <option value={4}>Java Dalia</option>
                            <option value={5}>Practice to Perfect</option>
                            <option value={6}>Rhinestone</option>
                            <option value={7}>Social Geek Made</option>
                          </select>
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded29"
                            defaultValue="08:00:00"
                          />
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded30"
                            defaultValue="08:00:00"
                          />
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded31"
                            defaultValue="08:00:00"
                          />
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded32"
                            defaultValue="08:00:00"
                          />
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded33"
                            defaultValue="08:00:00"
                          />
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded34"
                            defaultValue="05:00:00"
                          />
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded35"
                            defaultValue="05:00:00"
                          />
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn light-success-bg"
                          >
                            50
                          </button>
                        </td>
                        <td>
                          <div
                            className="btn-group"
                            role="group"
                            aria-label="Basic outlined example"
                          >
                            <button
                              type="button"
                              className="btn btn-outline-secondary"
                            >
                              <i className="icofont-edit text-success" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary deleterow"
                            >
                              <i className="icofont-ui-delete text-danger" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <select
                            className="form-select"
                            aria-label="Default select Project Category"
                          >
                            <option selected="">Fast Cad</option>
                            <option value={1}>Fast Cad</option>
                            <option value={2}>Box of Crayons</option>
                            <option value={3}>Gob Geeklords</option>
                            <option value={4}>Java Dalia</option>
                            <option value={5}>Practice to Perfect</option>
                            <option value={6}>Rhinestone</option>
                            <option value={7}>Social Geek Made</option>
                          </select>
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded36"
                            defaultValue="08:00:00"
                          />
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded37"
                            defaultValue="08:00:00"
                          />
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded38"
                            defaultValue="08:00:00"
                          />
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded39"
                            defaultValue="08:00:00"
                          />
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded40"
                            defaultValue="08:00:00"
                          />
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded41"
                            defaultValue="08:00:00"
                          />
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded42"
                            defaultValue="08:00:00"
                          />
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn light-success-bg"
                          >
                            56
                          </button>
                        </td>
                        <td>
                          <div
                            className="btn-group"
                            role="group"
                            aria-label="Basic outlined example"
                          >
                            <button
                              type="button"
                              className="btn btn-outline-secondary"
                            >
                              <i className="icofont-edit text-success" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary deleterow"
                            >
                              <i className="icofont-ui-delete text-danger" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <select
                            className="form-select"
                            aria-label="Default select Project Category"
                          >
                            <option selected="">Project Name Select</option>
                            <option value={1}>Fast Cad</option>
                            <option value={2}>Box of Crayons</option>
                            <option value={3}>Gob Geeklords</option>
                            <option value={4}>Java Dalia</option>
                            <option value={5}>Practice to Perfect</option>
                            <option value={6}>Rhinestone</option>
                            <option value={7}>Social Geek Made</option>
                          </select>
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded43"
                          />
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded44"
                          />
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded45"
                          />
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded46"
                          />
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded47"
                          />
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded48"
                          />
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded49"
                          />
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn light-success-bg"
                          >
                            00
                          </button>
                        </td>
                        <td>
                          <div
                            className="btn-group"
                            role="group"
                            aria-label="Basic outlined example"
                          >
                            <button
                              type="button"
                              className="btn btn-outline-secondary"
                            >
                              <i className="icofont-edit text-success" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary deleterow"
                            >
                              <i className="icofont-ui-delete text-danger" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <select
                            className="form-select"
                            aria-label="Default select Project Category"
                          >
                            <option selected="">Project Name Select</option>
                            <option value={1}>Fast Cad</option>
                            <option value={2}>Box of Crayons</option>
                            <option value={3}>Gob Geeklords</option>
                            <option value={4}>Java Dalia</option>
                            <option value={5}>Practice to Perfect</option>
                            <option value={6}>Rhinestone</option>
                            <option value={7}>Social Geek Made</option>
                          </select>
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded50"
                          />
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded51"
                          />
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded52"
                          />
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded53"
                          />
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded54"
                          />
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded55"
                          />
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control"
                            id="timepickerded56"
                          />
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn light-success-bg"
                          >
                            00
                          </button>
                        </td>
                        <td>
                          <div
                            className="btn-group"
                            role="group"
                            aria-label="Basic outlined example"
                          >
                            <button
                              type="button"
                              className="btn btn-outline-secondary"
                            >
                              <i className="icofont-edit text-success" />
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary deleterow"
                            >
                              <i className="icofont-ui-delete text-danger" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* Row End */}
        </div>
      </div>
      {/* Modal Members*/}
      <div
        className="modal fade"
        id="addUser"
        tabIndex={-1}
        aria-labelledby="addUserLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title  fw-bold" id="addUserLabel">
                Employee Invitation
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="inviteby_email">
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email address"
                    id="exampleInputEmail1"
                    aria-describedby="exampleInputEmail1"
                  />
                  <button
                    className="btn btn-dark"
                    type="button"
                    id="button-addon2"
                  >
                    Sent
                  </button>
                </div>
              </div>
              <div className="members_list">
                <h6 className="fw-bold ">Employee </h6>
                <ul className="list-unstyled list-group list-group-custom list-group-flush mb-0">
                  <li className="list-group-item py-3 text-center text-md-start">
                    <div className="d-flex align-items-center flex-column flex-sm-column flex-md-column flex-lg-row">
                      <div className="no-thumbnail mb-2 mb-md-0">
                        <img
                          className="avatar lg rounded-circle"
                          src="assets/images/xs/avatar2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="flex-fill ms-3 text-truncate">
                        <h6 className="mb-0  fw-bold">Rachel Carr(you)</h6>
                        <span className="text-muted">
                          rachel.carr@gmail.com
                        </span>
                      </div>
                      <div className="members-action">
                        <span className="members-role ">Admin</span>
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn bg-transparent dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="icofont-ui-settings  fs-6" />
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="icofont-ui-password fs-6 me-2" />
                                ResetPassword
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="icofont-chart-line fs-6 me-2" />
                                ActivityReport
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item py-3 text-center text-md-start">
                    <div className="d-flex align-items-center flex-column flex-sm-column flex-md-column flex-lg-row">
                      <div className="no-thumbnail mb-2 mb-md-0">
                        <img
                          className="avatar lg rounded-circle"
                          src="assets/images/xs/avatar3.jpg"
                          alt=""
                        />
                      </div>
                      <div className="flex-fill ms-3 text-truncate">
                        <h6 className="mb-0  fw-bold">
                          Lucas Baker
                          <a href="#" className="link-secondary ms-2">
                            (Resend invitation)
                          </a>
                        </h6>
                        <span className="text-muted">
                          lucas.baker@gmail.com
                        </span>
                      </div>
                      <div className="members-action">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn bg-transparent dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Members
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="icofont-check-circled" />
                                <span>All operations permission</span>
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="fs-6 p-2 me-1" />
                                <span>Only Invite &amp; manage team</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn bg-transparent dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="icofont-ui-settings  fs-6" />
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="icofont-delete-alt fs-6 me-2" />
                                Delete Member
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item py-3 text-center text-md-start">
                    <div className="d-flex align-items-center flex-column flex-sm-column flex-md-column flex-lg-row">
                      <div className="no-thumbnail mb-2 mb-md-0">
                        <img
                          className="avatar lg rounded-circle"
                          src="assets/images/xs/avatar8.jpg"
                          alt=""
                        />
                      </div>
                      <div className="flex-fill ms-3 text-truncate">
                        <h6 className="mb-0  fw-bold">Una Coleman</h6>
                        <span className="text-muted">
                          una.coleman@gmail.com
                        </span>
                      </div>
                      <div className="members-action">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn bg-transparent dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Members
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="icofont-check-circled" />
                                <span>All operations permission</span>
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                <i className="fs-6 p-2 me-1" />
                                <span>Only Invite &amp; manage team</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="btn-group">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn bg-transparent dropdown-toggle"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="icofont-ui-settings  fs-6" />
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="icofont-ui-password fs-6 me-2" />
                                  ResetPassword
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="icofont-chart-line fs-6 me-2" />
                                  ActivityReport
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="icofont-delete-alt fs-6 me-2" />
                                  Suspend member
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  <i className="icofont-not-allowed fs-6 me-2" />
                                  Delete Member
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Send sheet*/}
      <div
        className="modal fade"
        id="sendsheet"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title  fw-bold" id="sendsheetLabel">
                {" "}
                Sheets Sent
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Done
              </button>
              <button type="submit" className="btn btn-primary">
                sent
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Jquery Core Js */}
  {/* Plugin Js*/}
  {/* Jquery Page Js */}
</>

  )
}

export default TimeSheet