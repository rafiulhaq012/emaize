import React from 'react'
import '../../../../../../src/assets/payroll/css/Emaize.style.min.scss';
import { Link } from 'react-router-dom';

function Icon() {
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
                                    <span className="badge bg-success">
                                      Review
                                    </span>
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
                      <a
                        className="card-footer text-center border-top-0"
                        href="#"
                      >
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
                              <span className="font-weight-bold">
                                Dylan Hunter
                              </span>
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
        <div className="body d-flex py-3">
          <div className="container-xxl">
            <div className="row align-items-center">
              <div className="border-0 mb-4">
                <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                  <h3 className="fw-bold mb-0">Font Icon</h3>
                </div>
              </div>
            </div>{" "}
            {/* Row end  */}
            <div className="row align-item-center">
              <div className="col-md-12">
                <div className="card mb-3">
                  <div className="card-header py-3 bg-transparent border-bottom-0">
                    <h6 className="mb-0 fw-bold ">Icon Fonts</h6>
                    <p>
                      {" "}
                      Icons Font- Used this Syntex{" "}
                      <code>&lt;i class="icofont-ICON_NAME"&gt;&lt;/i&gt;</code>
                      Reference site{" "}
                      <a
                        href="https://icofont.com/icons"
                        className="text-secondary"
                        target="_blank"
                      >
                        https://icofont.com/icons
                      </a>
                    </p>
                  </div>
                  <div className="card-body">
                    <div className="row iconlist row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 row-cols-xl-6 row-cols-xxl-6 g-3">
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-angry-monster" />
                          </div>
                          <span> angry-monster </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bathtub" />
                          </div>
                          <span> bathtub </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bird-wings" />
                          </div>
                          <span> bird-wings </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bow" />
                          </div>
                          <span> bow </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-castle" />
                          </div>
                          <span> castle </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-circuit" />
                          </div>
                          <span> circuit </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-crown-king" />
                          </div>
                          <span> crown-king </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-crown-queen" />
                          </div>
                          <span> crown-queen </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-dart" />
                          </div>
                          <span> dart </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-disability-race" />
                          </div>
                          <span> disability-race </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-diving-goggle" />
                          </div>
                          <span> diving-goggle </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-eye-open" />
                          </div>
                          <span> eye-open </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-flora-flower" />
                          </div>
                          <span> flora-flower </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-flora" />
                          </div>
                          <span> flora </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-gift-box" />
                          </div>
                          <span> gift-box </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-halloween-pumpkin" />
                          </div>
                          <span> halloween-pumpkin </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-hand-power" />
                          </div>
                          <span> hand-power </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-hand-thunder" />
                          </div>
                          <span> hand-thunder </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-king-monster" />
                          </div>
                          <span> king-monster </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-love" />
                          </div>
                          <span> love </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-magician-hat" />
                          </div>
                          <span> magician-hat </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-native-american" />
                          </div>
                          <span> native-american </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-owl-look" />
                          </div>
                          <span> owl-look </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-phoenix" />
                          </div>
                          <span> phoenix </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-robot-face" />
                          </div>
                          <span> robot-face </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-sand-clock" />
                          </div>
                          <span> sand-clock </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-shield-alt" />
                          </div>
                          <span> shield-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ship-wheel" />
                          </div>
                          <span> ship-wheel </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-skull-danger" />
                          </div>
                          <span> skull-danger </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-skull-face" />
                          </div>
                          <span> skull-face </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-snowmobile" />
                          </div>
                          <span> snowmobile </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-space-shuttle" />
                          </div>
                          <span> space-shuttle </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-star-shape" />
                          </div>
                          <span> star-shape </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-swirl" />
                          </div>
                          <span> swirl </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-tattoo-wing" />
                          </div>
                          <span> tattoo-wing </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-throne" />
                          </div>
                          <span> throne </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-tree-alt" />
                          </div>
                          <span> tree-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-triangle" />
                          </div>
                          <span> triangle </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-unity-hand" />
                          </div>
                          <span> unity-hand </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-weed" />
                          </div>
                          <span> weed </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-woman-bird" />
                          </div>
                          <span> woman-bird </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bat" />
                          </div>
                          <span> bat </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bear-face" />
                          </div>
                          <span> bear-face </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bear-tracks" />
                          </div>
                          <span> bear-tracks </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bear" />
                          </div>
                          <span> bear </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bird-alt" />
                          </div>
                          <span> bird-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bird-flying" />
                          </div>
                          <span> bird-flying </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bird" />
                          </div>
                          <span> bird </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-birds" />
                          </div>
                          <span> birds </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bone" />
                          </div>
                          <span> bone </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bull" />
                          </div>
                          <span> bull </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-butterfly-alt" />
                          </div>
                          <span> butterfly-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-butterfly" />
                          </div>
                          <span> butterfly </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-camel-alt" />
                          </div>
                          <span> camel-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-camel-head" />
                          </div>
                          <span> camel-head </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-camel" />
                          </div>
                          <span> camel </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-cat-alt-1" />
                          </div>
                          <span> cat-alt-1 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-cat-alt-2" />
                          </div>
                          <span> cat-alt-2 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-cat-alt-3" />
                          </div>
                          <span> cat-alt-3 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-cat-dog" />
                          </div>
                          <span> cat-dog </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-cat-face" />
                          </div>
                          <span> cat-face </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-cat" />
                          </div>
                          <span> cat </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-cow-head" />
                          </div>
                          <span> cow-head </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-cow" />
                          </div>
                          <span> cow </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-crab" />
                          </div>
                          <span> crab </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-crocodile" />
                          </div>
                          <span> crocodile </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-deer-head" />
                          </div>
                          <span> deer-head </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-dog-alt" />
                          </div>
                          <span> dog-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-dog-barking" />
                          </div>
                          <span> dog-barking </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-dog" />
                          </div>
                          <span> dog </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-dolphin" />
                          </div>
                          <span> dolphin </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-duck-tracks" />
                          </div>
                          <span> duck-tracks </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-eagle-head" />
                          </div>
                          <span> eagle-head </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-eaten-fish" />
                          </div>
                          <span> eaten-fish </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-elephant-alt" />
                          </div>
                          <span> elephant-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-elephant-head-alt" />
                          </div>
                          <span> elephant-head-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-elephant-head" />
                          </div>
                          <span> elephant-head </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-elephant" />
                          </div>
                          <span> elephant </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-elk" />
                          </div>
                          <span> elk </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-fish-1" />
                          </div>
                          <span> fish-1 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-fish-2" />
                          </div>
                          <span> fish-2 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-fish-3" />
                          </div>
                          <span> fish-3 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-fish-4" />
                          </div>
                          <span> fish-4 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-fish-5" />
                          </div>
                          <span> fish-5 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-fish" />
                          </div>
                          <span> fish </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-fox-alt" />
                          </div>
                          <span> fox-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-fox" />
                          </div>
                          <span> fox </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-frog-tracks" />
                          </div>
                          <span> frog-tracks </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-frog" />
                          </div>
                          <span> frog </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-froggy" />
                          </div>
                          <span> froggy </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-giraffe-head-1" />
                          </div>
                          <span> giraffe-head-1 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-giraffe-head-2" />
                          </div>
                          <span> giraffe-head-2 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-giraffe-head" />
                          </div>
                          <span> giraffe-head </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-giraffe" />
                          </div>
                          <span> giraffe </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-goat-head" />
                          </div>
                          <span> goat-head </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-gorilla" />
                          </div>
                          <span> gorilla </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-hen-tracks" />
                          </div>
                          <span> hen-tracks </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-horse-head-1" />
                          </div>
                          <span> horse-head-1 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-horse-head-2" />
                          </div>
                          <span> horse-head-2 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-horse-head" />
                          </div>
                          <span> horse-head </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-horse-tracks" />
                          </div>
                          <span> horse-tracks </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-jellyfish" />
                          </div>
                          <span> jellyfish </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-kangaroo" />
                          </div>
                          <span> kangaroo </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-lemur" />
                          </div>
                          <span> lemur </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-lion-head-1" />
                          </div>
                          <span> lion-head-1 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-lion-head-2" />
                          </div>
                          <span> lion-head-2 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-lion-head" />
                          </div>
                          <span> lion-head </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-lion" />
                          </div>
                          <span> lion </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-monkey-2" />
                          </div>
                          <span> monkey-2 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-monkey-3" />
                          </div>
                          <span> monkey-3 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-monkey-face" />
                          </div>
                          <span> monkey-face </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-monkey" />
                          </div>
                          <span> monkey </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-octopus-alt" />
                          </div>
                          <span> octopus-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-octopus" />
                          </div>
                          <span> octopus </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-owl" />
                          </div>
                          <span> owl </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-panda-face" />
                          </div>
                          <span> panda-face </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-panda" />
                          </div>
                          <span> panda </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-panther" />
                          </div>
                          <span> panther </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-parrot-lip" />
                          </div>
                          <span> parrot-lip </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-parrot" />
                          </div>
                          <span> parrot </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-paw" />
                          </div>
                          <span> paw </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-pelican" />
                          </div>
                          <span> pelican </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-penguin" />
                          </div>
                          <span> penguin </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-pig-face" />
                          </div>
                          <span> pig-face </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-pig" />
                          </div>
                          <span> pig </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-pigeon-1" />
                          </div>
                          <span> pigeon-1 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-pigeon-2" />
                          </div>
                          <span> pigeon-2 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-pigeon" />
                          </div>
                          <span> pigeon </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-rabbit" />
                          </div>
                          <span> rabbit </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-rat" />
                          </div>
                          <span> rat </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-rhino-head" />
                          </div>
                          <span> rhino-head </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-rhino" />
                          </div>
                          <span> rhino </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-rooster" />
                          </div>
                          <span> rooster </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-seahorse" />
                          </div>
                          <span> seahorse </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-seal" />
                          </div>
                          <span> seal </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-shrimp-alt" />
                          </div>
                          <span> shrimp-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-shrimp" />
                          </div>
                          <span> shrimp </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-snail-1" />
                          </div>
                          <span> snail-1 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-snail-2" />
                          </div>
                          <span> snail-2 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-snail-3" />
                          </div>
                          <span> snail-3 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-snail" />
                          </div>
                          <span> snail </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-snake" />
                          </div>
                          <span> snake </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-squid" />
                          </div>
                          <span> squid </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-squirrel" />
                          </div>
                          <span> squirrel </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-tiger-face" />
                          </div>
                          <span> tiger-face </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-tiger" />
                          </div>
                          <span> tiger </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-turtle" />
                          </div>
                          <span> turtle </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-whale" />
                          </div>
                          <span> whale </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-woodpecker" />
                          </div>
                          <span> woodpecker </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-zebra" />
                          </div>
                          <span> zebra </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-acer" />
                          </div>
                          <span> brand-acer </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-adidas" />
                          </div>
                          <span> brand-adidas </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-adobe" />
                          </div>
                          <span> brand-adobe </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-air-new-zealand" />
                          </div>
                          <span> brand-air-new-zealand </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-airbnb" />
                          </div>
                          <span> brand-airbnb </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-aircell" />
                          </div>
                          <span> brand-aircell </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-airtel" />
                          </div>
                          <span> brand-airtel </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-alcatel" />
                          </div>
                          <span> brand-alcatel </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-alibaba" />
                          </div>
                          <span> brand-alibaba </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-aliexpress" />
                          </div>
                          <span> brand-aliexpress </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-alipay" />
                          </div>
                          <span> brand-alipay </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-amazon" />
                          </div>
                          <span> brand-amazon </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-amd" />
                          </div>
                          <span> brand-amd </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-american-airlines" />
                          </div>
                          <span> brand-american-airlines </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-android-robot" />
                          </div>
                          <span> brand-android-robot </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-android" />
                          </div>
                          <span> brand-android </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-aol" />
                          </div>
                          <span> brand-aol </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-apple" />
                          </div>
                          <span> brand-apple </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-appstore" />
                          </div>
                          <span> brand-appstore </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-asus" />
                          </div>
                          <span> brand-asus </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-ati" />
                          </div>
                          <span> brand-ati </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-att" />
                          </div>
                          <span> brand-att </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-audi" />
                          </div>
                          <span> brand-audi </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-axiata" />
                          </div>
                          <span> brand-axiata </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-bada" />
                          </div>
                          <span> brand-bada </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-bbc" />
                          </div>
                          <span> brand-bbc </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-bing" />
                          </div>
                          <span> brand-bing </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-blackberry" />
                          </div>
                          <span> brand-blackberry </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-bmw" />
                          </div>
                          <span> brand-bmw </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-box" />
                          </div>
                          <span> brand-box </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-burger-king" />
                          </div>
                          <span> brand-burger-king </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-business-insider" />
                          </div>
                          <span> brand-business-insider </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-buzzfeed" />
                          </div>
                          <span> brand-buzzfeed </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-cannon" />
                          </div>
                          <span> brand-cannon </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-casio" />
                          </div>
                          <span> brand-casio </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-china-mobile" />
                          </div>
                          <span> brand-china-mobile </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-china-telecom" />
                          </div>
                          <span> brand-china-telecom </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-china-unicom" />
                          </div>
                          <span> brand-china-unicom </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-cisco" />
                          </div>
                          <span> brand-cisco </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-citibank" />
                          </div>
                          <span> brand-citibank </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-cnet" />
                          </div>
                          <span> brand-cnet </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-cnn" />
                          </div>
                          <span> brand-cnn </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-cocal-cola" />
                          </div>
                          <span> brand-cocal-cola </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-compaq" />
                          </div>
                          <span> brand-compaq </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-debian" />
                          </div>
                          <span> brand-debian </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-delicious" />
                          </div>
                          <span> brand-delicious </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-dell" />
                          </div>
                          <span> brand-dell </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-designbump" />
                          </div>
                          <span> brand-designbump </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-designfloat" />
                          </div>
                          <span> brand-designfloat </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-disney" />
                          </div>
                          <span> brand-disney </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-dodge" />
                          </div>
                          <span> brand-dodge </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-dove" />
                          </div>
                          <span> brand-dove </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-drupal" />
                          </div>
                          <span> brand-drupal </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-ebay" />
                          </div>
                          <span> brand-ebay </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-eleven" />
                          </div>
                          <span> brand-eleven </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-emirates" />
                          </div>
                          <span> brand-emirates </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-espn" />
                          </div>
                          <span> brand-espn </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-etihad-airways" />
                          </div>
                          <span> brand-etihad-airways </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-etisalat" />
                          </div>
                          <span> brand-etisalat </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-etsy" />
                          </div>
                          <span> brand-etsy </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-fastrack" />
                          </div>
                          <span> brand-fastrack </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-fedex" />
                          </div>
                          <span> brand-fedex </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-ferrari" />
                          </div>
                          <span> brand-ferrari </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-fitbit" />
                          </div>
                          <span> brand-fitbit </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-flikr" />
                          </div>
                          <span> brand-flikr </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-forbes" />
                          </div>
                          <span> brand-forbes </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-foursquare" />
                          </div>
                          <span> brand-foursquare </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-foxconn" />
                          </div>
                          <span> brand-foxconn </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-fujitsu" />
                          </div>
                          <span> brand-fujitsu </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-general-electric" />
                          </div>
                          <span> brand-general-electric </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-gillette" />
                          </div>
                          <span> brand-gillette </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-gizmodo" />
                          </div>
                          <span> brand-gizmodo </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-gnome" />
                          </div>
                          <span> brand-gnome </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-google" />
                          </div>
                          <span> brand-google </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-gopro" />
                          </div>
                          <span> brand-gopro </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-gucci" />
                          </div>
                          <span> brand-gucci </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-hallmark" />
                          </div>
                          <span> brand-hallmark </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-hi5" />
                          </div>
                          <span> brand-hi5 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-honda" />
                          </div>
                          <span> brand-honda </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-hp" />
                          </div>
                          <span> brand-hp </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-hsbc" />
                          </div>
                          <span> brand-hsbc </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-htc" />
                          </div>
                          <span> brand-htc </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-huawei" />
                          </div>
                          <span> brand-huawei </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-hulu" />
                          </div>
                          <span> brand-hulu </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-hyundai" />
                          </div>
                          <span> brand-hyundai </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-ibm" />
                          </div>
                          <span> brand-ibm </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-icofont" />
                          </div>
                          <span> brand-icofont </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-icq" />
                          </div>
                          <span> brand-icq </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-ikea" />
                          </div>
                          <span> brand-ikea </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-imdb" />
                          </div>
                          <span> brand-imdb </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-indiegogo" />
                          </div>
                          <span> brand-indiegogo </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-intel" />
                          </div>
                          <span> brand-intel </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-ipair" />
                          </div>
                          <span> brand-ipair </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-jaguar" />
                          </div>
                          <span> brand-jaguar </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-java" />
                          </div>
                          <span> brand-java </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-joomla" />
                          </div>
                          <span> brand-joomla </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-kickstarter" />
                          </div>
                          <span> brand-kickstarter </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-kik" />
                          </div>
                          <span> brand-kik </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-lastfm" />
                          </div>
                          <span> brand-lastfm </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-lego" />
                          </div>
                          <span> brand-lego </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-lenovo" />
                          </div>
                          <span> brand-lenovo </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-levis" />
                          </div>
                          <span> brand-levis </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-lexus" />
                          </div>
                          <span> brand-lexus </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-lg" />
                          </div>
                          <span> brand-lg </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-life-hacker" />
                          </div>
                          <span> brand-life-hacker </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-linux-mint" />
                          </div>
                          <span> brand-linux-mint </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-linux" />
                          </div>
                          <span> brand-linux </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-lionix" />
                          </div>
                          <span> brand-lionix </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-loreal" />
                          </div>
                          <span> brand-loreal </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-louis-vuitton" />
                          </div>
                          <span> brand-louis-vuitton </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-mac-os" />
                          </div>
                          <span> brand-mac-os </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-marvel-app" />
                          </div>
                          <span> brand-marvel-app </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-mashable" />
                          </div>
                          <span> brand-mashable </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-mazda" />
                          </div>
                          <span> brand-mazda </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-mcdonals" />
                          </div>
                          <span> brand-mcdonals </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-mercedes" />
                          </div>
                          <span> brand-mercedes </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-micromax" />
                          </div>
                          <span> brand-micromax </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-microsoft" />
                          </div>
                          <span> brand-microsoft </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-mobileme" />
                          </div>
                          <span> brand-mobileme </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-mobily" />
                          </div>
                          <span> brand-mobily </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-motorola" />
                          </div>
                          <span> brand-motorola </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-msi" />
                          </div>
                          <span> brand-msi </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-mts" />
                          </div>
                          <span> brand-mts </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-myspace" />
                          </div>
                          <span> brand-myspace </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-mytv" />
                          </div>
                          <span> brand-mytv </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-nasa" />
                          </div>
                          <span> brand-nasa </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-natgeo" />
                          </div>
                          <span> brand-natgeo </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-nbc" />
                          </div>
                          <span> brand-nbc </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-nescafe" />
                          </div>
                          <span> brand-nescafe </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-nestle" />
                          </div>
                          <span> brand-nestle </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-netflix" />
                          </div>
                          <span> brand-netflix </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-nexus" />
                          </div>
                          <span> brand-nexus </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-nike" />
                          </div>
                          <span> brand-nike </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-nokia" />
                          </div>
                          <span> brand-nokia </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-nvidia" />
                          </div>
                          <span> brand-nvidia </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-omega" />
                          </div>
                          <span> brand-omega </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-opensuse" />
                          </div>
                          <span> brand-opensuse </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-oracle" />
                          </div>
                          <span> brand-oracle </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-panasonic" />
                          </div>
                          <span> brand-panasonic </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-paypal" />
                          </div>
                          <span> brand-paypal </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-pepsi" />
                          </div>
                          <span> brand-pepsi </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-philips" />
                          </div>
                          <span> brand-philips </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-pizza-hut" />
                          </div>
                          <span> brand-pizza-hut </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-playstation" />
                          </div>
                          <span> brand-playstation </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-puma" />
                          </div>
                          <span> brand-puma </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-qatar-air" />
                          </div>
                          <span> brand-qatar-air </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-qvc" />
                          </div>
                          <span> brand-qvc </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-readernaut" />
                          </div>
                          <span> brand-readernaut </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-redbull" />
                          </div>
                          <span> brand-redbull </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-reebok" />
                          </div>
                          <span> brand-reebok </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-reuters" />
                          </div>
                          <span> brand-reuters </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-samsung" />
                          </div>
                          <span> brand-samsung </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-sap" />
                          </div>
                          <span> brand-sap </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-saudia-airlines" />
                          </div>
                          <span> brand-saudia-airlines </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-scribd" />
                          </div>
                          <span> brand-scribd </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-shell" />
                          </div>
                          <span> brand-shell </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-siemens" />
                          </div>
                          <span> brand-siemens </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-sk-telecom" />
                          </div>
                          <span> brand-sk-telecom </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-slideshare" />
                          </div>
                          <span> brand-slideshare </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-smashing-magazine" />
                          </div>
                          <span> brand-smashing-magazine </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-snapchat" />
                          </div>
                          <span> brand-snapchat </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-sony-ericsson" />
                          </div>
                          <span> brand-sony-ericsson </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-sony" />
                          </div>
                          <span> brand-sony </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-soundcloud" />
                          </div>
                          <span> brand-soundcloud </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-sprint" />
                          </div>
                          <span> brand-sprint </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-squidoo" />
                          </div>
                          <span> brand-squidoo </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-starbucks" />
                          </div>
                          <span> brand-starbucks </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-stc" />
                          </div>
                          <span> brand-stc </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-steam" />
                          </div>
                          <span> brand-steam </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-suzuki" />
                          </div>
                          <span> brand-suzuki </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-symbian" />
                          </div>
                          <span> brand-symbian </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-t-mobile" />
                          </div>
                          <span> brand-t-mobile </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-tango" />
                          </div>
                          <span> brand-tango </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-target" />
                          </div>
                          <span> brand-target </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-tata-indicom" />
                          </div>
                          <span> brand-tata-indicom </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-techcrunch" />
                          </div>
                          <span> brand-techcrunch </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-telenor" />
                          </div>
                          <span> brand-telenor </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-teliasonera" />
                          </div>
                          <span> brand-teliasonera </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-tesla" />
                          </div>
                          <span> brand-tesla </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-the-verge" />
                          </div>
                          <span> brand-the-verge </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-thenextweb" />
                          </div>
                          <span> brand-thenextweb </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-toshiba" />
                          </div>
                          <span> brand-toshiba </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-toyota" />
                          </div>
                          <span> brand-toyota </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-tribenet" />
                          </div>
                          <span> brand-tribenet </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-ubuntu" />
                          </div>
                          <span> brand-ubuntu </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-unilever" />
                          </div>
                          <span> brand-unilever </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-vaio" />
                          </div>
                          <span> brand-vaio </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-verizon" />
                          </div>
                          <span> brand-verizon </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-viber" />
                          </div>
                          <span> brand-viber </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-vodafone" />
                          </div>
                          <span> brand-vodafone </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-volkswagen" />
                          </div>
                          <span> brand-volkswagen </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-walmart" />
                          </div>
                          <span> brand-walmart </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-warnerbros" />
                          </div>
                          <span> brand-warnerbros </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-whatsapp" />
                          </div>
                          <span> brand-whatsapp </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-wikipedia" />
                          </div>
                          <span> brand-wikipedia </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-windows" />
                          </div>
                          <span> brand-windows </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-wire" />
                          </div>
                          <span> brand-wire </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-wordpress" />
                          </div>
                          <span> brand-wordpress </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-xiaomi" />
                          </div>
                          <span> brand-xiaomi </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-yahoobuzz" />
                          </div>
                          <span> brand-yahoobuzz </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-yamaha" />
                          </div>
                          <span> brand-yamaha </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-youtube" />
                          </div>
                          <span> brand-youtube </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brand-zain" />
                          </div>
                          <span> brand-zain </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bank-alt" />
                          </div>
                          <span> bank-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bank" />
                          </div>
                          <span> bank </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-barcode" />
                          </div>
                          <span> barcode </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bill-alt" />
                          </div>
                          <span> bill-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-billboard" />
                          </div>
                          <span> billboard </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-briefcase-1" />
                          </div>
                          <span> briefcase-1 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-briefcase-2" />
                          </div>
                          <span> briefcase-2 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-businessman" />
                          </div>
                          <span> businessman </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-businesswoman" />
                          </div>
                          <span> businesswoman </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-chair" />
                          </div>
                          <span> chair </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-coins" />
                          </div>
                          <span> coins </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-company" />
                          </div>
                          <span> company </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-contact-add" />
                          </div>
                          <span> contact-add </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-files-stack" />
                          </div>
                          <span> files-stack </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-handshake-deal" />
                          </div>
                          <span> handshake-deal </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-id-card" />
                          </div>
                          <span> id-card </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-meeting-add" />
                          </div>
                          <span> meeting-add </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-money-bag" />
                          </div>
                          <span> money-bag </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-pie-chart" />
                          </div>
                          <span> pie-chart </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-presentation-alt" />
                          </div>
                          <span> presentation-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-presentation" />
                          </div>
                          <span> presentation </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-stamp" />
                          </div>
                          <span> stamp </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-stock-mobile" />
                          </div>
                          <span> stock-mobile </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-chart-arrows-axis" />
                          </div>
                          <span> chart-arrows-axis </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-chart-bar-graph" />
                          </div>
                          <span> chart-bar-graph </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-chart-flow-1" />
                          </div>
                          <span> chart-flow-1 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-chart-flow-2" />
                          </div>
                          <span> chart-flow-2 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-chart-flow" />
                          </div>
                          <span> chart-flow </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-chart-growth" />
                          </div>
                          <span> chart-growth </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-chart-histogram-alt" />
                          </div>
                          <span> chart-histogram-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-chart-histogram" />
                          </div>
                          <span> chart-histogram </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-chart-line-alt" />
                          </div>
                          <span> chart-line-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-chart-line" />
                          </div>
                          <span> chart-line </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-chart-pie-alt" />
                          </div>
                          <span> chart-pie-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-chart-pie" />
                          </div>
                          <span> chart-pie </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-chart-radar-graph" />
                          </div>
                          <span> chart-radar-graph </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-architecture-alt" />
                          </div>
                          <span> architecture-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-architecture" />
                          </div>
                          <span> architecture </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-barricade" />
                          </div>
                          <span> barricade </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bolt" />
                          </div>
                          <span> bolt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bricks" />
                          </div>
                          <span> bricks </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-building-alt" />
                          </div>
                          <span> building-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bull-dozer" />
                          </div>
                          <span> bull-dozer </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-calculations" />
                          </div>
                          <span> calculations </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-cement-mix" />
                          </div>
                          <span> cement-mix </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-cement-mixer" />
                          </div>
                          <span> cement-mixer </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-concrete-mixer" />
                          </div>
                          <span> concrete-mixer </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-danger-zone" />
                          </div>
                          <span> danger-zone </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-drill" />
                          </div>
                          <span> drill </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-eco-energy" />
                          </div>
                          <span> eco-energy </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-eco-environmen" />
                          </div>
                          <span> eco-environmen </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-energy-air" />
                          </div>
                          <span> energy-air </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-energy-oil" />
                          </div>
                          <span> energy-oil </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-energy-savings" />
                          </div>
                          <span> energy-savings </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-energy-solar" />
                          </div>
                          <span> energy-solar </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-energy-water" />
                          </div>
                          <span> energy-water </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-engineer" />
                          </div>
                          <span> engineer </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-fire-extinguisher-alt" />
                          </div>
                          <span> fire-extinguisher-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-fire-extinguisher" />
                          </div>
                          <span> fire-extinguisher </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-fix-tools" />
                          </div>
                          <span> fix-tools </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-fork-lift" />
                          </div>
                          <span> fork-lift </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-glue-oil" />
                          </div>
                          <span> glue-oil </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-hammer-alt" />
                          </div>
                          <span> hammer-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-hammer" />
                          </div>
                          <span> hammer </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-help-robot" />
                          </div>
                          <span> help-robot </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-industries-1" />
                          </div>
                          <span> industries-1 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-industries-2" />
                          </div>
                          <span> industries-2 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-industries-3" />
                          </div>
                          <span> industries-3 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-industries-4" />
                          </div>
                          <span> industries-4 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-industries-5" />
                          </div>
                          <span> industries-5 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-industries" />
                          </div>
                          <span> industries </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-labour" />
                          </div>
                          <span> labour </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-mining" />
                          </div>
                          <span> mining </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-paint-brush" />
                          </div>
                          <span> paint-brush </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-pollution" />
                          </div>
                          <span> pollution </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-power-zone" />
                          </div>
                          <span> power-zone </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-radio-active" />
                          </div>
                          <span> radio-active </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-recycle-alt" />
                          </div>
                          <span> recycle-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-recycling-man" />
                          </div>
                          <span> recycling-man </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-safety-hat-light" />
                          </div>
                          <span> safety-hat-light </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-safety-hat" />
                          </div>
                          <span> safety-hat </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-saw" />
                          </div>
                          <span> saw </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-screw-driver" />
                          </div>
                          <span> screw-driver </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-tools-1" />
                          </div>
                          <span> tools-1 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-tools-bag" />
                          </div>
                          <span> tools-bag </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-tow-truck" />
                          </div>
                          <span> tow-truck </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-trolley" />
                          </div>
                          <span> trolley </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-trowel" />
                          </div>
                          <span> trowel </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-under-construction-alt" />
                          </div>
                          <span> under-construction-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-under-construction" />
                          </div>
                          <span> under-construction </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-vehicle-cement" />
                          </div>
                          <span> vehicle-cement </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-vehicle-crane" />
                          </div>
                          <span> vehicle-crane </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-vehicle-delivery-van" />
                          </div>
                          <span> vehicle-delivery-van </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-vehicle-dozer" />
                          </div>
                          <span> vehicle-dozer </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-vehicle-excavator" />
                          </div>
                          <span> vehicle-excavator </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-vehicle-trucktor" />
                          </div>
                          <span> vehicle-trucktor </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-vehicle-wrecking" />
                          </div>
                          <span> vehicle-wrecking </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-worker" />
                          </div>
                          <span> worker </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-workers-group" />
                          </div>
                          <span> workers-group </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-wrench" />
                          </div>
                          <span> wrench </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-afghani-false" />
                          </div>
                          <span> afghani-false </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-afghani-minus" />
                          </div>
                          <span> afghani-minus </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-afghani-plus" />
                          </div>
                          <span> afghani-plus </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-afghani-true" />
                          </div>
                          <span> afghani-true </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-afghani" />
                          </div>
                          <span> afghani </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-baht-false" />
                          </div>
                          <span> baht-false </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-baht-minus" />
                          </div>
                          <span> baht-minus </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-baht-plus" />
                          </div>
                          <span> baht-plus </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-baht-true" />
                          </div>
                          <span> baht-true </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-baht" />
                          </div>
                          <span> baht </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bitcoin-false" />
                          </div>
                          <span> bitcoin-false </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bitcoin-minus" />
                          </div>
                          <span> bitcoin-minus </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bitcoin-plus" />
                          </div>
                          <span> bitcoin-plus </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bitcoin-true" />
                          </div>
                          <span> bitcoin-true </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bitcoin" />
                          </div>
                          <span> bitcoin </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-dollar-flase" />
                          </div>
                          <span> dollar-flase </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-dollar-minus" />
                          </div>
                          <span> dollar-minus </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-dollar-plus" />
                          </div>
                          <span> dollar-plus </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-dollar-true" />
                          </div>
                          <span> dollar-true </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-dollar" />
                          </div>
                          <span> dollar </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-dong-false" />
                          </div>
                          <span> dong-false </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-dong-minus" />
                          </div>
                          <span> dong-minus </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-dong-plus" />
                          </div>
                          <span> dong-plus </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-dong-true" />
                          </div>
                          <span> dong-true </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-dong" />
                          </div>
                          <span> dong </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-euro-false" />
                          </div>
                          <span> euro-false </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-euro-minus" />
                          </div>
                          <span> euro-minus </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-euro-plus" />
                          </div>
                          <span> euro-plus </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-euro-true" />
                          </div>
                          <span> euro-true </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-euro" />
                          </div>
                          <span> euro </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-frank-false" />
                          </div>
                          <span> frank-false </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-frank-minus" />
                          </div>
                          <span> frank-minus </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-frank-plus" />
                          </div>
                          <span> frank-plus </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-frank-true" />
                          </div>
                          <span> frank-true </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-frank" />
                          </div>
                          <span> frank </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-hryvnia-false" />
                          </div>
                          <span> hryvnia-false </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-hryvnia-minus" />
                          </div>
                          <span> hryvnia-minus </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-hryvnia-plus" />
                          </div>
                          <span> hryvnia-plus </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-hryvnia-true" />
                          </div>
                          <span> hryvnia-true </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-hryvnia" />
                          </div>
                          <span> hryvnia </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-lira-false" />
                          </div>
                          <span> lira-false </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-lira-minus" />
                          </div>
                          <span> lira-minus </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-lira-plus" />
                          </div>
                          <span> lira-plus </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-lira-true" />
                          </div>
                          <span> lira-true </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-lira" />
                          </div>
                          <span> lira </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-peseta-false" />
                          </div>
                          <span> peseta-false </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-peseta-minus" />
                          </div>
                          <span> peseta-minus </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-peseta-plus" />
                          </div>
                          <span> peseta-plus </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-peseta-true" />
                          </div>
                          <span> peseta-true </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-peseta" />
                          </div>
                          <span> peseta </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-peso-false" />
                          </div>
                          <span> peso-false </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-peso-minus" />
                          </div>
                          <span> peso-minus </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-peso-plus" />
                          </div>
                          <span> peso-plus </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-peso-true" />
                          </div>
                          <span> peso-true </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-peso" />
                          </div>
                          <span> peso </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-pound-false" />
                          </div>
                          <span> pound-false </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-pound-minus" />
                          </div>
                          <span> pound-minus </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-pound-plus" />
                          </div>
                          <span> pound-plus </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-pound-true" />
                          </div>
                          <span> pound-true </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-pound" />
                          </div>
                          <span> pound </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-renminbi-false" />
                          </div>
                          <span> renminbi-false </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-renminbi-minus" />
                          </div>
                          <span> renminbi-minus </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-renminbi-plus" />
                          </div>
                          <span> renminbi-plus </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-renminbi-true" />
                          </div>
                          <span> renminbi-true </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-renminbi" />
                          </div>
                          <span> renminbi </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-riyal-false" />
                          </div>
                          <span> riyal-false </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-riyal-minus" />
                          </div>
                          <span> riyal-minus </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-riyal-plus" />
                          </div>
                          <span> riyal-plus </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-riyal-true" />
                          </div>
                          <span> riyal-true </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-riyal" />
                          </div>
                          <span> riyal </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-rouble-false" />
                          </div>
                          <span> rouble-false </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-rouble-minus" />
                          </div>
                          <span> rouble-minus </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-rouble-plus" />
                          </div>
                          <span> rouble-plus </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-rouble-true" />
                          </div>
                          <span> rouble-true </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-rouble" />
                          </div>
                          <span> rouble </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-rupee-false" />
                          </div>
                          <span> rupee-false </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-rupee-minus" />
                          </div>
                          <span> rupee-minus </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-rupee-plus" />
                          </div>
                          <span> rupee-plus </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-rupee-true" />
                          </div>
                          <span> rupee-true </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-rupee" />
                          </div>
                          <span> rupee </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-taka-false" />
                          </div>
                          <span> taka-false </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-taka-minus" />
                          </div>
                          <span> taka-minus </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-taka-plus" />
                          </div>
                          <span> taka-plus </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-taka-true" />
                          </div>
                          <span> taka-true </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-taka" />
                          </div>
                          <span> taka </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-turkish-lira-false" />
                          </div>
                          <span> turkish-lira-false </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-turkish-lira-minus" />
                          </div>
                          <span> turkish-lira-minus </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-turkish-lira-plus" />
                          </div>
                          <span> turkish-lira-plus </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-turkish-lira-true" />
                          </div>
                          <span> turkish-lira-true </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-turkish-lira" />
                          </div>
                          <span> turkish-lira </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-won-false" />
                          </div>
                          <span> won-false </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-won-minus" />
                          </div>
                          <span> won-minus </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-won-plus" />
                          </div>
                          <span> won-plus </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-won-true" />
                          </div>
                          <span> won-true </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-won" />
                          </div>
                          <span> won </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-yen-false" />
                          </div>
                          <span> yen-false </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-yen-minus" />
                          </div>
                          <span> yen-minus </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-yen-plus" />
                          </div>
                          <span> yen-plus </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-yen-true" />
                          </div>
                          <span> yen-true </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-yen" />
                          </div>
                          <span> yen </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-android-nexus" />
                          </div>
                          <span> android-nexus </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-android-tablet" />
                          </div>
                          <span> android-tablet </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-apple-watch" />
                          </div>
                          <span> apple-watch </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-drawing-tablet" />
                          </div>
                          <span> drawing-tablet </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-earphone" />
                          </div>
                          <span> earphone </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-flash-drive" />
                          </div>
                          <span> flash-drive </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-game-console" />
                          </div>
                          <span> game-console </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-game-controller" />
                          </div>
                          <span> game-controller </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-game-pad" />
                          </div>
                          <span> game-pad </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-game" />
                          </div>
                          <span> game </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-headphone-alt-1" />
                          </div>
                          <span> headphone-alt-1 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-headphone-alt-2" />
                          </div>
                          <span> headphone-alt-2 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-headphone-alt-3" />
                          </div>
                          <span> headphone-alt-3 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-headphone-alt" />
                          </div>
                          <span> headphone-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-headphone" />
                          </div>
                          <span> headphone </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-htc-one" />
                          </div>
                          <span> htc-one </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-imac" />
                          </div>
                          <span> imac </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ipad" />
                          </div>
                          <span> ipad </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-iphone" />
                          </div>
                          <span> iphone </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ipod-nano" />
                          </div>
                          <span> ipod-nano </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ipod-touch" />
                          </div>
                          <span> ipod-touch </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-keyboard-alt" />
                          </div>
                          <span> keyboard-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-keyboard-wireless" />
                          </div>
                          <span> keyboard-wireless </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-keyboard" />
                          </div>
                          <span> keyboard </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-laptop-alt" />
                          </div>
                          <span> laptop-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-laptop" />
                          </div>
                          <span> laptop </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-macbook" />
                          </div>
                          <span> macbook </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-magic-mouse" />
                          </div>
                          <span> magic-mouse </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-micro-chip" />
                          </div>
                          <span> micro-chip </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-microphone-alt" />
                          </div>
                          <span> microphone-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-microphone" />
                          </div>
                          <span> microphone </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-monitor" />
                          </div>
                          <span> monitor </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-mouse" />
                          </div>
                          <span> mouse </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-mp3-player" />
                          </div>
                          <span> mp3-player </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-nintendo" />
                          </div>
                          <span> nintendo </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-playstation-alt" />
                          </div>
                          <span> playstation-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-psvita" />
                          </div>
                          <span> psvita </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-radio-mic" />
                          </div>
                          <span> radio-mic </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-radio" />
                          </div>
                          <span> radio </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-refrigerator" />
                          </div>
                          <span> refrigerator </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-samsung-galaxy" />
                          </div>
                          <span> samsung-galaxy </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-surface-tablet" />
                          </div>
                          <span> surface-tablet </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-head-phone" />
                          </div>
                          <span> ui-head-phone </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-keyboard" />
                          </div>
                          <span> ui-keyboard </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-washing-machine" />
                          </div>
                          <span> washing-machine </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-wifi-router" />
                          </div>
                          <span> wifi-router </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-wii-u" />
                          </div>
                          <span> wii-u </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-windows-lumia" />
                          </div>
                          <span> windows-lumia </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-wireless-mouse" />
                          </div>
                          <span> wireless-mouse </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-xbox-360" />
                          </div>
                          <span> xbox-360 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-arrow-down" />
                          </div>
                          <span> arrow-down </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-arrow-left" />
                          </div>
                          <span> arrow-left </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-arrow-right" />
                          </div>
                          <span> arrow-right </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-arrow-up" />
                          </div>
                          <span> arrow-up </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-block-down" />
                          </div>
                          <span> block-down </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-block-left" />
                          </div>
                          <span> block-left </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-block-right" />
                          </div>
                          <span> block-right </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-block-up" />
                          </div>
                          <span> block-up </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bubble-down" />
                          </div>
                          <span> bubble-down </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bubble-left" />
                          </div>
                          <span> bubble-left </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bubble-right" />
                          </div>
                          <span> bubble-right </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bubble-up" />
                          </div>
                          <span> bubble-up </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-caret-down" />
                          </div>
                          <span> caret-down </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-caret-left" />
                          </div>
                          <span> caret-left </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-caret-right" />
                          </div>
                          <span> caret-right </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-caret-up" />
                          </div>
                          <span> caret-up </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-circled-down" />
                          </div>
                          <span> circled-down </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-circled-left" />
                          </div>
                          <span> circled-left </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-circled-right" />
                          </div>
                          <span> circled-right </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-circled-up" />
                          </div>
                          <span> circled-up </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-collapse" />
                          </div>
                          <span> collapse </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-cursor-drag" />
                          </div>
                          <span> cursor-drag </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-curved-double-left" />
                          </div>
                          <span> curved-double-left </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-curved-double-right" />
                          </div>
                          <span> curved-double-right </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-curved-down" />
                          </div>
                          <span> curved-down </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-curved-left" />
                          </div>
                          <span> curved-left </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-curved-right" />
                          </div>
                          <span> curved-right </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-curved-up" />
                          </div>
                          <span> curved-up </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-dotted-down" />
                          </div>
                          <span> dotted-down </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-dotted-left" />
                          </div>
                          <span> dotted-left </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-dotted-right" />
                          </div>
                          <span> dotted-right </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-dotted-up" />
                          </div>
                          <span> dotted-up </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-double-left" />
                          </div>
                          <span> double-left </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-double-right" />
                          </div>
                          <span> double-right </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-expand-alt" />
                          </div>
                          <span> expand-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-hand-down" />
                          </div>
                          <span> hand-down </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-hand-drag" />
                          </div>
                          <span> hand-drag </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-hand-drag1" />
                          </div>
                          <span> hand-drag1 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-hand-drag2" />
                          </div>
                          <span> hand-drag2 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-hand-drawn-alt-down" />
                          </div>
                          <span> hand-drawn-alt-down </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-hand-drawn-alt-left" />
                          </div>
                          <span> hand-drawn-alt-left </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-hand-drawn-alt-right" />
                          </div>
                          <span> hand-drawn-alt-right </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-hand-drawn-alt-up" />
                          </div>
                          <span> hand-drawn-alt-up </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-hand-drawn-down" />
                          </div>
                          <span> hand-drawn-down </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-hand-drawn-left" />
                          </div>
                          <span> hand-drawn-left </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-hand-drawn-right" />
                          </div>
                          <span> hand-drawn-right </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-hand-drawn-up" />
                          </div>
                          <span> hand-drawn-up </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-hand-grippers" />
                          </div>
                          <span> hand-grippers </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-hand-left" />
                          </div>
                          <span> hand-left </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-hand-right" />
                          </div>
                          <span> hand-right </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-hand-up" />
                          </div>
                          <span> hand-up </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-line-block-down" />
                          </div>
                          <span> line-block-down </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-line-block-left" />
                          </div>
                          <span> line-block-left </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-line-block-right" />
                          </div>
                          <span> line-block-right </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-line-block-up" />
                          </div>
                          <span> line-block-up </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-long-arrow-down" />
                          </div>
                          <span> long-arrow-down </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-long-arrow-left" />
                          </div>
                          <span> long-arrow-left </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-long-arrow-right" />
                          </div>
                          <span> long-arrow-right </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-long-arrow-up" />
                          </div>
                          <span> long-arrow-up </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-rounded-collapse" />
                          </div>
                          <span> rounded-collapse </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-rounded-double-left" />
                          </div>
                          <span> rounded-double-left </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-rounded-double-right" />
                          </div>
                          <span> rounded-double-right </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-rounded-down" />
                          </div>
                          <span> rounded-down </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-rounded-expand" />
                          </div>
                          <span> rounded-expand </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-rounded-left-down" />
                          </div>
                          <span> rounded-left-down </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-rounded-left-up" />
                          </div>
                          <span> rounded-left-up </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-rounded-left" />
                          </div>
                          <span> rounded-left </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-rounded-right-down" />
                          </div>
                          <span> rounded-right-down </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-rounded-right-up" />
                          </div>
                          <span> rounded-right-up </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-rounded-right" />
                          </div>
                          <span> rounded-right </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-rounded-up" />
                          </div>
                          <span> rounded-up </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-scroll-bubble-down" />
                          </div>
                          <span> scroll-bubble-down </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-scroll-bubble-left" />
                          </div>
                          <span> scroll-bubble-left </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-scroll-bubble-right" />
                          </div>
                          <span> scroll-bubble-right </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-scroll-bubble-up" />
                          </div>
                          <span> scroll-bubble-up </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-scroll-double-down" />
                          </div>
                          <span> scroll-double-down </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-scroll-double-left" />
                          </div>
                          <span> scroll-double-left </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-scroll-double-right" />
                          </div>
                          <span> scroll-double-right </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-scroll-double-up" />
                          </div>
                          <span> scroll-double-up </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-scroll-down" />
                          </div>
                          <span> scroll-down </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-scroll-left" />
                          </div>
                          <span> scroll-left </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-scroll-long-down" />
                          </div>
                          <span> scroll-long-down </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-scroll-long-left" />
                          </div>
                          <span> scroll-long-left </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-scroll-long-right" />
                          </div>
                          <span> scroll-long-right </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-scroll-long-up" />
                          </div>
                          <span> scroll-long-up </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-scroll-right" />
                          </div>
                          <span> scroll-right </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-scroll-up" />
                          </div>
                          <span> scroll-up </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-simple-down" />
                          </div>
                          <span> simple-down </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-simple-left-down" />
                          </div>
                          <span> simple-left-down </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-simple-left-up" />
                          </div>
                          <span> simple-left-up </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-simple-left" />
                          </div>
                          <span> simple-left </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-simple-right-down" />
                          </div>
                          <span> simple-right-down </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-simple-right-up" />
                          </div>
                          <span> simple-right-up </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-simple-right" />
                          </div>
                          <span> simple-right </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-simple-up" />
                          </div>
                          <span> simple-up </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-square-down" />
                          </div>
                          <span> square-down </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-square-left" />
                          </div>
                          <span> square-left </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-square-right" />
                          </div>
                          <span> square-right </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-square-up" />
                          </div>
                          <span> square-up </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-stylish-down" />
                          </div>
                          <span> stylish-down </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-stylish-left" />
                          </div>
                          <span> stylish-left </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-stylish-right" />
                          </div>
                          <span> stylish-right </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-stylish-up" />
                          </div>
                          <span> stylish-up </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-swoosh-down" />
                          </div>
                          <span> swoosh-down </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-swoosh-left" />
                          </div>
                          <span> swoosh-left </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-swoosh-right" />
                          </div>
                          <span> swoosh-right </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-swoosh-up" />
                          </div>
                          <span> swoosh-up </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-thin-double-left" />
                          </div>
                          <span> thin-double-left </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-thin-double-right" />
                          </div>
                          <span> thin-double-right </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-thin-down" />
                          </div>
                          <span> thin-down </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-thin-left" />
                          </div>
                          <span> thin-left </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-thin-right" />
                          </div>
                          <span> thin-right </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-thin-up" />
                          </div>
                          <span> thin-up </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-abc" />
                          </div>
                          <span> abc </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-atom" />
                          </div>
                          <span> atom </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-award" />
                          </div>
                          <span> award </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bell-alt" />
                          </div>
                          <span> bell-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-black-board" />
                          </div>
                          <span> black-board </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-book-alt" />
                          </div>
                          <span> book-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-book" />
                          </div>
                          <span> book </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brainstorming" />
                          </div>
                          <span> brainstorming </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-certificate-alt-1" />
                          </div>
                          <span> certificate-alt-1 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-certificate-alt-2" />
                          </div>
                          <span> certificate-alt-2 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-certificate" />
                          </div>
                          <span> certificate </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-education" />
                          </div>
                          <span> education </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-electron" />
                          </div>
                          <span> electron </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-fountain-pen" />
                          </div>
                          <span> fountain-pen </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-globe-alt" />
                          </div>
                          <span> globe-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-graduate-alt" />
                          </div>
                          <span> graduate-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-graduate" />
                          </div>
                          <span> graduate </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-group-students" />
                          </div>
                          <span> group-students </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-hat-alt" />
                          </div>
                          <span> hat-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-hat" />
                          </div>
                          <span> hat </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-instrument" />
                          </div>
                          <span> instrument </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-lamp-light" />
                          </div>
                          <span> lamp-light </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-medal" />
                          </div>
                          <span> medal </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-microscope-alt" />
                          </div>
                          <span> microscope-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-microscope" />
                          </div>
                          <span> microscope </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-paper" />
                          </div>
                          <span> paper </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-pen-alt-4" />
                          </div>
                          <span> pen-alt-4 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-pen-nib" />
                          </div>
                          <span> pen-nib </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-pencil-alt-5" />
                          </div>
                          <span> pencil-alt-5 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-quill-pen" />
                          </div>
                          <span> quill-pen </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-read-book-alt" />
                          </div>
                          <span> read-book-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-read-book" />
                          </div>
                          <span> read-book </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-school-bag" />
                          </div>
                          <span> school-bag </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-school-bus" />
                          </div>
                          <span> school-bus </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-student-alt" />
                          </div>
                          <span> student-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-student" />
                          </div>
                          <span> student </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-teacher" />
                          </div>
                          <span> teacher </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-test-bulb" />
                          </div>
                          <span> test-bulb </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-test-tube-alt" />
                          </div>
                          <span> test-tube-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-university" />
                          </div>
                          <span> university </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-angry" />
                          </div>
                          <span> angry </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-astonished" />
                          </div>
                          <span> astonished </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-confounded" />
                          </div>
                          <span> confounded </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-confused" />
                          </div>
                          <span> confused </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-crying" />
                          </div>
                          <span> crying </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-dizzy" />
                          </div>
                          <span> dizzy </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-expressionless" />
                          </div>
                          <span> expressionless </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-heart-eyes" />
                          </div>
                          <span> heart-eyes </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-laughing" />
                          </div>
                          <span> laughing </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-nerd-smile" />
                          </div>
                          <span> nerd-smile </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-open-mouth" />
                          </div>
                          <span> open-mouth </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-rage" />
                          </div>
                          <span> rage </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-rolling-eyes" />
                          </div>
                          <span> rolling-eyes </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-sad" />
                          </div>
                          <span> sad </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-simple-smile" />
                          </div>
                          <span> simple-smile </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-slightly-smile" />
                          </div>
                          <span> slightly-smile </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-smirk" />
                          </div>
                          <span> smirk </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-stuck-out-tongue" />
                          </div>
                          <span> stuck-out-tongue </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-wink-smile" />
                          </div>
                          <span> wink-smile </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-worried" />
                          </div>
                          <span> worried </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-file-alt" />
                          </div>
                          <span> file-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-file-audio" />
                          </div>
                          <span> file-audio </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-file-avi-mp4" />
                          </div>
                          <span> file-avi-mp4 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-file-bmp" />
                          </div>
                          <span> file-bmp </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-file-code" />
                          </div>
                          <span> file-code </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-file-css" />
                          </div>
                          <span> file-css </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-file-document" />
                          </div>
                          <span> file-document </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-file-eps" />
                          </div>
                          <span> file-eps </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-file-excel" />
                          </div>
                          <span> file-excel </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-file-exe" />
                          </div>
                          <span> file-exe </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-file-file" />
                          </div>
                          <span> file-file </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-file-flv" />
                          </div>
                          <span> file-flv </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-file-gif" />
                          </div>
                          <span> file-gif </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-file-html5" />
                          </div>
                          <span> file-html5 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-file-image" />
                          </div>
                          <span> file-image </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-file-iso" />
                          </div>
                          <span> file-iso </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-file-java" />
                          </div>
                          <span> file-java </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-file-javascript" />
                          </div>
                          <span> file-javascript </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-file-jpg" />
                          </div>
                          <span> file-jpg </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-file-midi" />
                          </div>
                          <span> file-midi </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-file-mov" />
                          </div>
                          <span> file-mov </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-file-mp3" />
                          </div>
                          <span> file-mp3 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-file-pdf" />
                          </div>
                          <span> file-pdf </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-file-php" />
                          </div>
                          <span> file-php </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-file-png" />
                          </div>
                          <span> file-png </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-file-powerpoint" />
                          </div>
                          <span> file-powerpoint </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-file-presentation" />
                          </div>
                          <span> file-presentation </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-file-psb" />
                          </div>
                          <span> file-psb </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-file-psd" />
                          </div>
                          <span> file-psd </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-file-python" />
                          </div>
                          <span> file-python </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-file-ruby" />
                          </div>
                          <span> file-ruby </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-file-spreadsheet" />
                          </div>
                          <span> file-spreadsheet </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-file-sql" />
                          </div>
                          <span> file-sql </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-file-svg" />
                          </div>
                          <span> file-svg </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-file-text" />
                          </div>
                          <span> file-text </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-file-tiff" />
                          </div>
                          <span> file-tiff </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-file-video" />
                          </div>
                          <span> file-video </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-file-wave" />
                          </div>
                          <span> file-wave </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-file-wmv" />
                          </div>
                          <span> file-wmv </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-file-word" />
                          </div>
                          <span> file-word </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-file-zip" />
                          </div>
                          <span> file-zip </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-cycling-alt" />
                          </div>
                          <span> cycling-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-cycling" />
                          </div>
                          <span> cycling </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-dumbbell" />
                          </div>
                          <span> dumbbell </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-dumbbells" />
                          </div>
                          <span> dumbbells </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-gym-alt-1" />
                          </div>
                          <span> gym-alt-1 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-gym-alt-2" />
                          </div>
                          <span> gym-alt-2 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-gym-alt-3" />
                          </div>
                          <span> gym-alt-3 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-gym" />
                          </div>
                          <span> gym </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-muscle-weight" />
                          </div>
                          <span> muscle-weight </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-muscle" />
                          </div>
                          <span> muscle </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-apple" />
                          </div>
                          <span> apple </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-arabian-coffee" />
                          </div>
                          <span> arabian-coffee </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-artichoke" />
                          </div>
                          <span> artichoke </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-asparagus" />
                          </div>
                          <span> asparagus </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-avocado" />
                          </div>
                          <span> avocado </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-baby-food" />
                          </div>
                          <span> baby-food </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-banana" />
                          </div>
                          <span> banana </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bbq" />
                          </div>
                          <span> bbq </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-beans" />
                          </div>
                          <span> beans </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-beer" />
                          </div>
                          <span> beer </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bell-pepper-capsicum" />
                          </div>
                          <span> bell-pepper-capsicum </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-birthday-cake" />
                          </div>
                          <span> birthday-cake </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bread" />
                          </div>
                          <span> bread </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-broccoli" />
                          </div>
                          <span> broccoli </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-burger" />
                          </div>
                          <span> burger </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-cabbage" />
                          </div>
                          <span> cabbage </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-carrot" />
                          </div>
                          <span> carrot </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-cauli-flower" />
                          </div>
                          <span> cauli-flower </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-cheese" />
                          </div>
                          <span> cheese </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-chef" />
                          </div>
                          <span> chef </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-cherry" />
                          </div>
                          <span> cherry </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-chicken-fry" />
                          </div>
                          <span> chicken-fry </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-chicken" />
                          </div>
                          <span> chicken </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-cocktail" />
                          </div>
                          <span> cocktail </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-coconut-water" />
                          </div>
                          <span> coconut-water </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-coconut" />
                          </div>
                          <span> coconut </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-coffee-alt" />
                          </div>
                          <span> coffee-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-coffee-cup" />
                          </div>
                          <span> coffee-cup </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-coffee-mug" />
                          </div>
                          <span> coffee-mug </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-coffee-pot" />
                          </div>
                          <span> coffee-pot </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-cola" />
                          </div>
                          <span> cola </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-corn" />
                          </div>
                          <span> corn </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-croissant" />
                          </div>
                          <span> croissant </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-crop-plant" />
                          </div>
                          <span> crop-plant </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-cucumber" />
                          </div>
                          <span> cucumber </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-culinary" />
                          </div>
                          <span> culinary </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-cup-cake" />
                          </div>
                          <span> cup-cake </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-dining-table" />
                          </div>
                          <span> dining-table </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-donut" />
                          </div>
                          <span> donut </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-egg-plant" />
                          </div>
                          <span> egg-plant </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-egg-poached" />
                          </div>
                          <span> egg-poached </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-farmer-alt" />
                          </div>
                          <span> farmer-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-farmer" />
                          </div>
                          <span> farmer </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-fast-food" />
                          </div>
                          <span> fast-food </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-food-basket" />
                          </div>
                          <span> food-basket </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-food-cart" />
                          </div>
                          <span> food-cart </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-fork-and-knife" />
                          </div>
                          <span> fork-and-knife </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-french-fries" />
                          </div>
                          <span> french-fries </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-fruits" />
                          </div>
                          <span> fruits </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-grapes" />
                          </div>
                          <span> grapes </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-honey" />
                          </div>
                          <span> honey </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-hot-dog" />
                          </div>
                          <span> hot-dog </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ice-cream-alt" />
                          </div>
                          <span> ice-cream-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ice-cream" />
                          </div>
                          <span> ice-cream </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-juice" />
                          </div>
                          <span> juice </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ketchup" />
                          </div>
                          <span> ketchup </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-kiwi" />
                          </div>
                          <span> kiwi </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-layered-cake" />
                          </div>
                          <span> layered-cake </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-lemon-alt" />
                          </div>
                          <span> lemon-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-lemon" />
                          </div>
                          <span> lemon </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-lobster" />
                          </div>
                          <span> lobster </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-mango" />
                          </div>
                          <span> mango </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-milk" />
                          </div>
                          <span> milk </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-mushroom" />
                          </div>
                          <span> mushroom </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-noodles" />
                          </div>
                          <span> noodles </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-onion" />
                          </div>
                          <span> onion </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-orange" />
                          </div>
                          <span> orange </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-pear" />
                          </div>
                          <span> pear </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-peas" />
                          </div>
                          <span> peas </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-pepper" />
                          </div>
                          <span> pepper </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-pie-alt" />
                          </div>
                          <span> pie-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-pie" />
                          </div>
                          <span> pie </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-pineapple" />
                          </div>
                          <span> pineapple </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-pizza-slice" />
                          </div>
                          <span> pizza-slice </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-pizza" />
                          </div>
                          <span> pizza </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-plant" />
                          </div>
                          <span> plant </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-popcorn" />
                          </div>
                          <span> popcorn </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-potato" />
                          </div>
                          <span> potato </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-pumpkin" />
                          </div>
                          <span> pumpkin </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-raddish" />
                          </div>
                          <span> raddish </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-restaurant-menu" />
                          </div>
                          <span> restaurant-menu </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-restaurant" />
                          </div>
                          <span> restaurant </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-salt-and-pepper" />
                          </div>
                          <span> salt-and-pepper </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-sandwich" />
                          </div>
                          <span> sandwich </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-sausage" />
                          </div>
                          <span> sausage </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-soft-drinks" />
                          </div>
                          <span> soft-drinks </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-soup-bowl" />
                          </div>
                          <span> soup-bowl </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-spoon-and-fork" />
                          </div>
                          <span> spoon-and-fork </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-steak" />
                          </div>
                          <span> steak </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-strawberry" />
                          </div>
                          <span> strawberry </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-sub-sandwich" />
                          </div>
                          <span> sub-sandwich </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-sushi" />
                          </div>
                          <span> sushi </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-taco" />
                          </div>
                          <span> taco </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-tea-pot" />
                          </div>
                          <span> tea-pot </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-tea" />
                          </div>
                          <span> tea </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-tomato" />
                          </div>
                          <span> tomato </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-watermelon" />
                          </div>
                          <span> watermelon </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-wheat" />
                          </div>
                          <span> wheat </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-baby-backpack" />
                          </div>
                          <span> baby-backpack </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-baby-cloth" />
                          </div>
                          <span> baby-cloth </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-baby-milk-bottle" />
                          </div>
                          <span> baby-milk-bottle </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-baby-trolley" />
                          </div>
                          <span> baby-trolley </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-baby" />
                          </div>
                          <span> baby </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-candy" />
                          </div>
                          <span> candy </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-holding-hands" />
                          </div>
                          <span> holding-hands </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-infant-nipple" />
                          </div>
                          <span> infant-nipple </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-kids-scooter" />
                          </div>
                          <span> kids-scooter </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-safety-pin" />
                          </div>
                          <span> safety-pin </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-teddy-bear" />
                          </div>
                          <span> teddy-bear </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-toy-ball" />
                          </div>
                          <span> toy-ball </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-toy-cat" />
                          </div>
                          <span> toy-cat </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-toy-duck" />
                          </div>
                          <span> toy-duck </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-toy-elephant" />
                          </div>
                          <span> toy-elephant </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-toy-hand" />
                          </div>
                          <span> toy-hand </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-toy-horse" />
                          </div>
                          <span> toy-horse </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-toy-lattu" />
                          </div>
                          <span> toy-lattu </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-toy-train" />
                          </div>
                          <span> toy-train </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-burglar" />
                          </div>
                          <span> burglar </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-cannon-firing" />
                          </div>
                          <span> cannon-firing </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-cc-camera" />
                          </div>
                          <span> cc-camera </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-cop-badge" />
                          </div>
                          <span> cop-badge </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-cop" />
                          </div>
                          <span> cop </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-court-hammer" />
                          </div>
                          <span> court-hammer </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-court" />
                          </div>
                          <span> court </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-finger-print" />
                          </div>
                          <span> finger-print </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-gavel" />
                          </div>
                          <span> gavel </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-handcuff-alt" />
                          </div>
                          <span> handcuff-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-handcuff" />
                          </div>
                          <span> handcuff </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-investigation" />
                          </div>
                          <span> investigation </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-investigator" />
                          </div>
                          <span> investigator </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-jail" />
                          </div>
                          <span> jail </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-judge" />
                          </div>
                          <span> judge </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-law-alt-1" />
                          </div>
                          <span> law-alt-1 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-law-alt-2" />
                          </div>
                          <span> law-alt-2 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-law-alt-3" />
                          </div>
                          <span> law-alt-3 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-law-book" />
                          </div>
                          <span> law-book </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-law-document" />
                          </div>
                          <span> law-document </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-law-order" />
                          </div>
                          <span> law-order </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-law-protect" />
                          </div>
                          <span> law-protect </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-law-scales" />
                          </div>
                          <span> law-scales </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-law" />
                          </div>
                          <span> law </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-lawyer-alt-1" />
                          </div>
                          <span> lawyer-alt-1 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-lawyer-alt-2" />
                          </div>
                          <span> lawyer-alt-2 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-lawyer" />
                          </div>
                          <span> lawyer </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-legal" />
                          </div>
                          <span> legal </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-pistol" />
                          </div>
                          <span> pistol </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-police-badge" />
                          </div>
                          <span> police-badge </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-police-cap" />
                          </div>
                          <span> police-cap </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-police-car-alt-1" />
                          </div>
                          <span> police-car-alt-1 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-police-car-alt-2" />
                          </div>
                          <span> police-car-alt-2 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-police-car" />
                          </div>
                          <span> police-car </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-police-hat" />
                          </div>
                          <span> police-hat </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-police-van" />
                          </div>
                          <span> police-van </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-police" />
                          </div>
                          <span> police </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-thief-alt" />
                          </div>
                          <span> thief-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-thief" />
                          </div>
                          <span> thief </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-abacus-alt" />
                          </div>
                          <span> abacus-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-abacus" />
                          </div>
                          <span> abacus </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-angle-180" />
                          </div>
                          <span> angle-180 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-angle-45" />
                          </div>
                          <span> angle-45 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-angle-90" />
                          </div>
                          <span> angle-90 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-angle" />
                          </div>
                          <span> angle </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-calculator-alt-1" />
                          </div>
                          <span> calculator-alt-1 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-calculator-alt-2" />
                          </div>
                          <span> calculator-alt-2 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-calculator" />
                          </div>
                          <span> calculator </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-circle-ruler-alt" />
                          </div>
                          <span> circle-ruler-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-circle-ruler" />
                          </div>
                          <span> circle-ruler </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-compass-alt-1" />
                          </div>
                          <span> compass-alt-1 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-compass-alt-2" />
                          </div>
                          <span> compass-alt-2 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-compass-alt-3" />
                          </div>
                          <span> compass-alt-3 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-compass-alt-4" />
                          </div>
                          <span> compass-alt-4 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-golden-ratio" />
                          </div>
                          <span> golden-ratio </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-marker-alt-1" />
                          </div>
                          <span> marker-alt-1 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-marker-alt-2" />
                          </div>
                          <span> marker-alt-2 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-marker-alt-3" />
                          </div>
                          <span> marker-alt-3 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-marker" />
                          </div>
                          <span> marker </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-math" />
                          </div>
                          <span> math </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-mathematical-alt-1" />
                          </div>
                          <span> mathematical-alt-1 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-mathematical-alt-2" />
                          </div>
                          <span> mathematical-alt-2 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-mathematical" />
                          </div>
                          <span> mathematical </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-pen-alt-1" />
                          </div>
                          <span> pen-alt-1 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-pen-alt-2" />
                          </div>
                          <span> pen-alt-2 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-pen-alt-3" />
                          </div>
                          <span> pen-alt-3 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-pen-holder-alt-1" />
                          </div>
                          <span> pen-holder-alt-1 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-pen-holder" />
                          </div>
                          <span> pen-holder </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-pen" />
                          </div>
                          <span> pen </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-pencil-alt-1" />
                          </div>
                          <span> pencil-alt-1 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-pencil-alt-2" />
                          </div>
                          <span> pencil-alt-2 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-pencil-alt-3" />
                          </div>
                          <span> pencil-alt-3 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-pencil-alt-4" />
                          </div>
                          <span> pencil-alt-4 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-pencil" />
                          </div>
                          <span> pencil </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ruler-alt-1" />
                          </div>
                          <span> ruler-alt-1 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ruler-alt-2" />
                          </div>
                          <span> ruler-alt-2 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ruler-compass-alt" />
                          </div>
                          <span> ruler-compass-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ruler-compass" />
                          </div>
                          <span> ruler-compass </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ruler-pencil-alt-1" />
                          </div>
                          <span> ruler-pencil-alt-1 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ruler-pencil-alt-2" />
                          </div>
                          <span> ruler-pencil-alt-2 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ruler-pencil" />
                          </div>
                          <span> ruler-pencil </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ruler" />
                          </div>
                          <span> ruler </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-rulers-alt" />
                          </div>
                          <span> rulers-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-rulers" />
                          </div>
                          <span> rulers </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-square-root" />
                          </div>
                          <span> square-root </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-calculator" />
                          </div>
                          <span> ui-calculator </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-aids" />
                          </div>
                          <span> aids </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ambulance-crescent" />
                          </div>
                          <span> ambulance-crescent </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ambulance-cross" />
                          </div>
                          <span> ambulance-cross </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ambulance" />
                          </div>
                          <span> ambulance </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-autism" />
                          </div>
                          <span> autism </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bandage" />
                          </div>
                          <span> bandage </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-blind" />
                          </div>
                          <span> blind </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-blood-drop" />
                          </div>
                          <span> blood-drop </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-blood-test" />
                          </div>
                          <span> blood-test </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-blood" />
                          </div>
                          <span> blood </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brain-alt" />
                          </div>
                          <span> brain-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brain" />
                          </div>
                          <span> brain </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-capsule" />
                          </div>
                          <span> capsule </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-crutch" />
                          </div>
                          <span> crutch </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-disabled" />
                          </div>
                          <span> disabled </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-dna-alt-1" />
                          </div>
                          <span> dna-alt-1 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-dna-alt-2" />
                          </div>
                          <span> dna-alt-2 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-dna" />
                          </div>
                          <span> dna </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-doctor-alt" />
                          </div>
                          <span> doctor-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-doctor" />
                          </div>
                          <span> doctor </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-drug-pack" />
                          </div>
                          <span> drug-pack </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-drug" />
                          </div>
                          <span> drug </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-first-aid-alt" />
                          </div>
                          <span> first-aid-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-first-aid" />
                          </div>
                          <span> first-aid </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-heart-beat-alt" />
                          </div>
                          <span> heart-beat-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-heart-beat" />
                          </div>
                          <span> heart-beat </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-heartbeat" />
                          </div>
                          <span> heartbeat </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-herbal" />
                          </div>
                          <span> herbal </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-hospital" />
                          </div>
                          <span> hospital </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-icu" />
                          </div>
                          <span> icu </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-injection-syringe" />
                          </div>
                          <span> injection-syringe </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-laboratory" />
                          </div>
                          <span> laboratory </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-medical-sign-alt" />
                          </div>
                          <span> medical-sign-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-medical-sign" />
                          </div>
                          <span> medical-sign </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-nurse-alt" />
                          </div>
                          <span> nurse-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-nurse" />
                          </div>
                          <span> nurse </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-nursing-home" />
                          </div>
                          <span> nursing-home </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-operation-theater" />
                          </div>
                          <span> operation-theater </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-paralysis-disability" />
                          </div>
                          <span> paralysis-disability </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-patient-bed" />
                          </div>
                          <span> patient-bed </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-patient-file" />
                          </div>
                          <span> patient-file </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-pills" />
                          </div>
                          <span> pills </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-prescription" />
                          </div>
                          <span> prescription </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-pulse" />
                          </div>
                          <span> pulse </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-stethoscope-alt" />
                          </div>
                          <span> stethoscope-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-stethoscope" />
                          </div>
                          <span> stethoscope </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-stretcher" />
                          </div>
                          <span> stretcher </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-surgeon-alt" />
                          </div>
                          <span> surgeon-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-surgeon" />
                          </div>
                          <span> surgeon </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-tablets" />
                          </div>
                          <span> tablets </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-test-bottle" />
                          </div>
                          <span> test-bottle </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-test-tube" />
                          </div>
                          <span> test-tube </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-thermometer-alt" />
                          </div>
                          <span> thermometer-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-thermometer" />
                          </div>
                          <span> thermometer </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-tooth" />
                          </div>
                          <span> tooth </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-xray" />
                          </div>
                          <span> xray </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-add" />
                          </div>
                          <span> ui-add </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-alarm" />
                          </div>
                          <span> ui-alarm </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-battery" />
                          </div>
                          <span> ui-battery </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-block" />
                          </div>
                          <span> ui-block </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-bluetooth" />
                          </div>
                          <span> ui-bluetooth </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-brightness" />
                          </div>
                          <span> ui-brightness </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-browser" />
                          </div>
                          <span> ui-browser </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-calendar" />
                          </div>
                          <span> ui-calendar </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-call" />
                          </div>
                          <span> ui-call </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-camera" />
                          </div>
                          <span> ui-camera </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-cart" />
                          </div>
                          <span> ui-cart </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-cell-phone" />
                          </div>
                          <span> ui-cell-phone </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-chat" />
                          </div>
                          <span> ui-chat </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-check" />
                          </div>
                          <span> ui-check </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-clip-board" />
                          </div>
                          <span> ui-clip-board </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-clip" />
                          </div>
                          <span> ui-clip </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-clock" />
                          </div>
                          <span> ui-clock </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-close" />
                          </div>
                          <span> ui-close </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-contact-list" />
                          </div>
                          <span> ui-contact-list </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-copy" />
                          </div>
                          <span> ui-copy </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-cut" />
                          </div>
                          <span> ui-cut </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-delete" />
                          </div>
                          <span> ui-delete </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-dial-phone" />
                          </div>
                          <span> ui-dial-phone </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-edit" />
                          </div>
                          <span> ui-edit </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-email" />
                          </div>
                          <span> ui-email </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-file" />
                          </div>
                          <span> ui-file </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-fire-wall" />
                          </div>
                          <span> ui-fire-wall </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-flash-light" />
                          </div>
                          <span> ui-flash-light </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-flight" />
                          </div>
                          <span> ui-flight </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-folder" />
                          </div>
                          <span> ui-folder </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-game" />
                          </div>
                          <span> ui-game </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-handicapped" />
                          </div>
                          <span> ui-handicapped </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-home" />
                          </div>
                          <span> ui-home </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-image" />
                          </div>
                          <span> ui-image </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-laoding" />
                          </div>
                          <span> ui-laoding </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-lock" />
                          </div>
                          <span> ui-lock </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-love-add" />
                          </div>
                          <span> ui-love-add </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-love-broken" />
                          </div>
                          <span> ui-love-broken </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-love-remove" />
                          </div>
                          <span> ui-love-remove </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-love" />
                          </div>
                          <span> ui-love </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-map" />
                          </div>
                          <span> ui-map </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-message" />
                          </div>
                          <span> ui-message </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-messaging" />
                          </div>
                          <span> ui-messaging </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-movie" />
                          </div>
                          <span> ui-movie </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-music-player" />
                          </div>
                          <span> ui-music-player </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-music" />
                          </div>
                          <span> ui-music </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-mute" />
                          </div>
                          <span> ui-mute </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-network" />
                          </div>
                          <span> ui-network </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-next" />
                          </div>
                          <span> ui-next </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-note" />
                          </div>
                          <span> ui-note </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-office" />
                          </div>
                          <span> ui-office </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-password" />
                          </div>
                          <span> ui-password </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-pause" />
                          </div>
                          <span> ui-pause </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-play-stop" />
                          </div>
                          <span> ui-play-stop </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-play" />
                          </div>
                          <span> ui-play </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-pointer" />
                          </div>
                          <span> ui-pointer </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-power" />
                          </div>
                          <span> ui-power </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-press" />
                          </div>
                          <span> ui-press </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-previous" />
                          </div>
                          <span> ui-previous </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-rate-add" />
                          </div>
                          <span> ui-rate-add </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-rate-blank" />
                          </div>
                          <span> ui-rate-blank </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-rate-remove" />
                          </div>
                          <span> ui-rate-remove </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-rating" />
                          </div>
                          <span> ui-rating </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-record" />
                          </div>
                          <span> ui-record </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-remove" />
                          </div>
                          <span> ui-remove </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-reply" />
                          </div>
                          <span> ui-reply </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-rotation" />
                          </div>
                          <span> ui-rotation </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-rss" />
                          </div>
                          <span> ui-rss </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-search" />
                          </div>
                          <span> ui-search </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-settings" />
                          </div>
                          <span> ui-settings </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-social-link" />
                          </div>
                          <span> ui-social-link </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-tag" />
                          </div>
                          <span> ui-tag </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-text-chat" />
                          </div>
                          <span> ui-text-chat </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-text-loading" />
                          </div>
                          <span> ui-text-loading </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-theme" />
                          </div>
                          <span> ui-theme </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-timer" />
                          </div>
                          <span> ui-timer </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-touch-phone" />
                          </div>
                          <span> ui-touch-phone </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-travel" />
                          </div>
                          <span> ui-travel </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-unlock" />
                          </div>
                          <span> ui-unlock </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-user-group" />
                          </div>
                          <span> ui-user-group </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-user" />
                          </div>
                          <span> ui-user </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-v-card" />
                          </div>
                          <span> ui-v-card </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-video-chat" />
                          </div>
                          <span> ui-video-chat </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-video-message" />
                          </div>
                          <span> ui-video-message </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-video-play" />
                          </div>
                          <span> ui-video-play </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-video" />
                          </div>
                          <span> ui-video </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-volume" />
                          </div>
                          <span> ui-volume </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-weather" />
                          </div>
                          <span> ui-weather </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-wifi" />
                          </div>
                          <span> ui-wifi </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-zoom-in" />
                          </div>
                          <span> ui-zoom-in </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ui-zoom-out" />
                          </div>
                          <span> ui-zoom-out </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-cassette-player" />
                          </div>
                          <span> cassette-player </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-cassette" />
                          </div>
                          <span> cassette </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-forward" />
                          </div>
                          <span> forward </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-guiter" />
                          </div>
                          <span> guiter </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-movie" />
                          </div>
                          <span> movie </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-multimedia" />
                          </div>
                          <span> multimedia </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-music-alt" />
                          </div>
                          <span> music-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-music-disk" />
                          </div>
                          <span> music-disk </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-music-note" />
                          </div>
                          <span> music-note </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-music-notes" />
                          </div>
                          <span> music-notes </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-music" />
                          </div>
                          <span> music </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-mute-volume" />
                          </div>
                          <span> mute-volume </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-pause" />
                          </div>
                          <span> pause </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-play-alt-1" />
                          </div>
                          <span> play-alt-1 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-play-alt-2" />
                          </div>
                          <span> play-alt-2 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-play-alt-3" />
                          </div>
                          <span> play-alt-3 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-play-pause" />
                          </div>
                          <span> play-pause </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-play" />
                          </div>
                          <span> play </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-record" />
                          </div>
                          <span> record </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-retro-music-disk" />
                          </div>
                          <span> retro-music-disk </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-rewind" />
                          </div>
                          <span> rewind </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-song-notes" />
                          </div>
                          <span> song-notes </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-sound-wave-alt" />
                          </div>
                          <span> sound-wave-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-sound-wave" />
                          </div>
                          <span> sound-wave </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-stop" />
                          </div>
                          <span> stop </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-video-alt" />
                          </div>
                          <span> video-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-video-cam" />
                          </div>
                          <span> video-cam </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-video-clapper" />
                          </div>
                          <span> video-clapper </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-video" />
                          </div>
                          <span> video </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-volume-bar" />
                          </div>
                          <span> volume-bar </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-volume-down" />
                          </div>
                          <span> volume-down </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-volume-mute" />
                          </div>
                          <span> volume-mute </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-volume-off" />
                          </div>
                          <span> volume-off </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-volume-up" />
                          </div>
                          <span> volume-up </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-youtube-play" />
                          </div>
                          <span> youtube-play </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-2checkout-alt" />
                          </div>
                          <span> 2checkout-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-2checkout" />
                          </div>
                          <span> 2checkout </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-amazon-alt" />
                          </div>
                          <span> amazon-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-amazon" />
                          </div>
                          <span> amazon </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-american-express-alt" />
                          </div>
                          <span> american-express-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-american-express" />
                          </div>
                          <span> american-express </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-apple-pay-alt" />
                          </div>
                          <span> apple-pay-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-apple-pay" />
                          </div>
                          <span> apple-pay </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bank-transfer-alt" />
                          </div>
                          <span> bank-transfer-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bank-transfer" />
                          </div>
                          <span> bank-transfer </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-braintree-alt" />
                          </div>
                          <span> braintree-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-braintree" />
                          </div>
                          <span> braintree </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-cash-on-delivery-alt" />
                          </div>
                          <span> cash-on-delivery-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-cash-on-delivery" />
                          </div>
                          <span> cash-on-delivery </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-diners-club-alt-1" />
                          </div>
                          <span> diners-club-alt-1 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-diners-club-alt-2" />
                          </div>
                          <span> diners-club-alt-2 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-diners-club-alt-3" />
                          </div>
                          <span> diners-club-alt-3 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-diners-club" />
                          </div>
                          <span> diners-club </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-discover-alt" />
                          </div>
                          <span> discover-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-discover" />
                          </div>
                          <span> discover </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-eway-alt" />
                          </div>
                          <span> eway-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-eway" />
                          </div>
                          <span> eway </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-google-wallet-alt-1" />
                          </div>
                          <span> google-wallet-alt-1 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-google-wallet-alt-2" />
                          </div>
                          <span> google-wallet-alt-2 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-google-wallet-alt-3" />
                          </div>
                          <span> google-wallet-alt-3 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-google-wallet" />
                          </div>
                          <span> google-wallet </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-jcb-alt" />
                          </div>
                          <span> jcb-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-jcb" />
                          </div>
                          <span> jcb </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-maestro-alt" />
                          </div>
                          <span> maestro-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-maestro" />
                          </div>
                          <span> maestro </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-mastercard-alt" />
                          </div>
                          <span> mastercard-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-mastercard" />
                          </div>
                          <span> mastercard </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-payoneer-alt" />
                          </div>
                          <span> payoneer-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-payoneer" />
                          </div>
                          <span> payoneer </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-paypal-alt" />
                          </div>
                          <span> paypal-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-paypal" />
                          </div>
                          <span> paypal </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-sage-alt" />
                          </div>
                          <span> sage-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-sage" />
                          </div>
                          <span> sage </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-skrill-alt" />
                          </div>
                          <span> skrill-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-skrill" />
                          </div>
                          <span> skrill </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-stripe-alt" />
                          </div>
                          <span> stripe-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-stripe" />
                          </div>
                          <span> stripe </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-visa-alt" />
                          </div>
                          <span> visa-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-visa-electron" />
                          </div>
                          <span> visa-electron </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-visa" />
                          </div>
                          <span> visa </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-western-union-alt" />
                          </div>
                          <span> western-union-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-western-union" />
                          </div>
                          <span> western-union </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-boy" />
                          </div>
                          <span> boy </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-business-man-alt-1" />
                          </div>
                          <span> business-man-alt-1 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-business-man-alt-2" />
                          </div>
                          <span> business-man-alt-2 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-business-man-alt-3" />
                          </div>
                          <span> business-man-alt-3 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-business-man" />
                          </div>
                          <span> business-man </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-female" />
                          </div>
                          <span> female </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-funky-man" />
                          </div>
                          <span> funky-man </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-girl-alt" />
                          </div>
                          <span> girl-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-girl" />
                          </div>
                          <span> girl </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-group" />
                          </div>
                          <span> group </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-hotel-boy-alt" />
                          </div>
                          <span> hotel-boy-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-hotel-boy" />
                          </div>
                          <span> hotel-boy </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-kid" />
                          </div>
                          <span> kid </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-man-in-glasses" />
                          </div>
                          <span> man-in-glasses </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-people" />
                          </div>
                          <span> people </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-support" />
                          </div>
                          <span> support </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-user-alt-1" />
                          </div>
                          <span> user-alt-1 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-user-alt-2" />
                          </div>
                          <span> user-alt-2 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-user-alt-3" />
                          </div>
                          <span> user-alt-3 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-user-alt-4" />
                          </div>
                          <span> user-alt-4 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-user-alt-5" />
                          </div>
                          <span> user-alt-5 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-user-alt-6" />
                          </div>
                          <span> user-alt-6 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-user-alt-7" />
                          </div>
                          <span> user-alt-7 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-user-female" />
                          </div>
                          <span> user-female </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-user-male" />
                          </div>
                          <span> user-male </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-user-suited" />
                          </div>
                          <span> user-suited </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-user" />
                          </div>
                          <span> user </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-users-alt-1" />
                          </div>
                          <span> users-alt-1 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-users-alt-2" />
                          </div>
                          <span> users-alt-2 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-users-alt-3" />
                          </div>
                          <span> users-alt-3 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-users-alt-4" />
                          </div>
                          <span> users-alt-4 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-users-alt-5" />
                          </div>
                          <span> users-alt-5 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-users-alt-6" />
                          </div>
                          <span> users-alt-6 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-users-social" />
                          </div>
                          <span> users-social </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-users" />
                          </div>
                          <span> users </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-waiter-alt" />
                          </div>
                          <span> waiter-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-waiter" />
                          </div>
                          <span> waiter </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-woman-in-glasses" />
                          </div>
                          <span> woman-in-glasses </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-search-1" />
                          </div>
                          <span> search-1 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-search-2" />
                          </div>
                          <span> search-2 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-search-document" />
                          </div>
                          <span> search-document </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-search-folder" />
                          </div>
                          <span> search-folder </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-search-job" />
                          </div>
                          <span> search-job </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-search-map" />
                          </div>
                          <span> search-map </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-search-property" />
                          </div>
                          <span> search-property </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-search-restaurant" />
                          </div>
                          <span> search-restaurant </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-search-stock" />
                          </div>
                          <span> search-stock </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-search-user" />
                          </div>
                          <span> search-user </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-search" />
                          </div>
                          <span> search </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-500px" />
                          </div>
                          <span> 500px </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-aim" />
                          </div>
                          <span> aim </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-badoo" />
                          </div>
                          <span> badoo </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-baidu-tieba" />
                          </div>
                          <span> baidu-tieba </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bbm-messenger" />
                          </div>
                          <span> bbm-messenger </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bebo" />
                          </div>
                          <span> bebo </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-behance" />
                          </div>
                          <span> behance </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-blogger" />
                          </div>
                          <span> blogger </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bootstrap" />
                          </div>
                          <span> bootstrap </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brightkite" />
                          </div>
                          <span> brightkite </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-cloudapp" />
                          </div>
                          <span> cloudapp </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-concrete5" />
                          </div>
                          <span> concrete5 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-delicious" />
                          </div>
                          <span> delicious </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-designbump" />
                          </div>
                          <span> designbump </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-designfloat" />
                          </div>
                          <span> designfloat </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-deviantart" />
                          </div>
                          <span> deviantart </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-digg" />
                          </div>
                          <span> digg </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-dotcms" />
                          </div>
                          <span> dotcms </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-dribbble" />
                          </div>
                          <span> dribbble </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-dribble" />
                          </div>
                          <span> dribble </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-dropbox" />
                          </div>
                          <span> dropbox </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ebuddy" />
                          </div>
                          <span> ebuddy </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ello" />
                          </div>
                          <span> ello </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ember" />
                          </div>
                          <span> ember </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-envato" />
                          </div>
                          <span> envato </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-evernote" />
                          </div>
                          <span> evernote </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-facebook-messenger" />
                          </div>
                          <span> facebook-messenger </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-facebook" />
                          </div>
                          <span> facebook </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-feedburner" />
                          </div>
                          <span> feedburner </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-flikr" />
                          </div>
                          <span> flikr </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-folkd" />
                          </div>
                          <span> folkd </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-foursquare" />
                          </div>
                          <span> foursquare </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-friendfeed" />
                          </div>
                          <span> friendfeed </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ghost" />
                          </div>
                          <span> ghost </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-github" />
                          </div>
                          <span> github </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-gnome" />
                          </div>
                          <span> gnome </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-google-buzz" />
                          </div>
                          <span> google-buzz </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-google-hangouts" />
                          </div>
                          <span> google-hangouts </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-google-map" />
                          </div>
                          <span> google-map </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-google-plus" />
                          </div>
                          <span> google-plus </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-google-talk" />
                          </div>
                          <span> google-talk </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-hype-machine" />
                          </div>
                          <span> hype-machine </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-instagram" />
                          </div>
                          <span> instagram </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-kakaotalk" />
                          </div>
                          <span> kakaotalk </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-kickstarter" />
                          </div>
                          <span> kickstarter </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-kik" />
                          </div>
                          <span> kik </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-kiwibox" />
                          </div>
                          <span> kiwibox </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-line-messenger" />
                          </div>
                          <span> line-messenger </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-line" />
                          </div>
                          <span> line </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-linkedin" />
                          </div>
                          <span> linkedin </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-linux-mint" />
                          </div>
                          <span> linux-mint </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-live-messenger" />
                          </div>
                          <span> live-messenger </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-livejournal" />
                          </div>
                          <span> livejournal </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-magento" />
                          </div>
                          <span> magento </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-meetme" />
                          </div>
                          <span> meetme </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-meetup" />
                          </div>
                          <span> meetup </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-mixx" />
                          </div>
                          <span> mixx </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-newsvine" />
                          </div>
                          <span> newsvine </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-nimbuss" />
                          </div>
                          <span> nimbuss </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-odnoklassniki" />
                          </div>
                          <span> odnoklassniki </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-opencart" />
                          </div>
                          <span> opencart </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-oscommerce" />
                          </div>
                          <span> oscommerce </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-pandora" />
                          </div>
                          <span> pandora </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-photobucket" />
                          </div>
                          <span> photobucket </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-picasa" />
                          </div>
                          <span> picasa </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-pinterest" />
                          </div>
                          <span> pinterest </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-prestashop" />
                          </div>
                          <span> prestashop </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-qik" />
                          </div>
                          <span> qik </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-qq" />
                          </div>
                          <span> qq </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-readernaut" />
                          </div>
                          <span> readernaut </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-reddit" />
                          </div>
                          <span> reddit </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-renren" />
                          </div>
                          <span> renren </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-rss" />
                          </div>
                          <span> rss </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-shopify" />
                          </div>
                          <span> shopify </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-silverstripe" />
                          </div>
                          <span> silverstripe </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-skype" />
                          </div>
                          <span> skype </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-slack" />
                          </div>
                          <span> slack </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-slashdot" />
                          </div>
                          <span> slashdot </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-slidshare" />
                          </div>
                          <span> slidshare </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-smugmug" />
                          </div>
                          <span> smugmug </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-snapchat" />
                          </div>
                          <span> snapchat </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-soundcloud" />
                          </div>
                          <span> soundcloud </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-spotify" />
                          </div>
                          <span> spotify </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-stack-exchange" />
                          </div>
                          <span> stack-exchange </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-stack-overflow" />
                          </div>
                          <span> stack-overflow </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-steam" />
                          </div>
                          <span> steam </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-stumbleupon" />
                          </div>
                          <span> stumbleupon </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-tagged" />
                          </div>
                          <span> tagged </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-technorati" />
                          </div>
                          <span> technorati </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-telegram" />
                          </div>
                          <span> telegram </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-tinder" />
                          </div>
                          <span> tinder </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-trello" />
                          </div>
                          <span> trello </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-tumblr" />
                          </div>
                          <span> tumblr </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-twitch" />
                          </div>
                          <span> twitch </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-twitter" />
                          </div>
                          <span> twitter </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-typo3" />
                          </div>
                          <span> typo3 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ubercart" />
                          </div>
                          <span> ubercart </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-viber" />
                          </div>
                          <span> viber </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-viddler" />
                          </div>
                          <span> viddler </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-vimeo" />
                          </div>
                          <span> vimeo </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-vine" />
                          </div>
                          <span> vine </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-virb" />
                          </div>
                          <span> virb </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-virtuemart" />
                          </div>
                          <span> virtuemart </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-vk" />
                          </div>
                          <span> vk </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-wechat" />
                          </div>
                          <span> wechat </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-weibo" />
                          </div>
                          <span> weibo </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-whatsapp" />
                          </div>
                          <span> whatsapp </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-xing" />
                          </div>
                          <span> xing </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-yahoo" />
                          </div>
                          <span> yahoo </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-yelp" />
                          </div>
                          <span> yelp </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-youku" />
                          </div>
                          <span> youku </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-youtube" />
                          </div>
                          <span> youtube </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-zencart" />
                          </div>
                          <span> zencart </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-badminton-birdie" />
                          </div>
                          <span> badminton-birdie </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-baseball" />
                          </div>
                          <span> baseball </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-baseballer" />
                          </div>
                          <span> baseballer </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-basketball-hoop" />
                          </div>
                          <span> basketball-hoop </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-basketball" />
                          </div>
                          <span> basketball </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-billiard-ball" />
                          </div>
                          <span> billiard-ball </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-boot-alt-1" />
                          </div>
                          <span> boot-alt-1 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-boot-alt-2" />
                          </div>
                          <span> boot-alt-2 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-boot" />
                          </div>
                          <span> boot </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bowling-alt" />
                          </div>
                          <span> bowling-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bowling" />
                          </div>
                          <span> bowling </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-canoe" />
                          </div>
                          <span> canoe </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-cheer-leader" />
                          </div>
                          <span> cheer-leader </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-climbing" />
                          </div>
                          <span> climbing </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-corner" />
                          </div>
                          <span> corner </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-field-alt" />
                          </div>
                          <span> field-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-field" />
                          </div>
                          <span> field </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-football-alt" />
                          </div>
                          <span> football-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-football-american" />
                          </div>
                          <span> football-american </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-football" />
                          </div>
                          <span> football </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-foul" />
                          </div>
                          <span> foul </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-goal-keeper" />
                          </div>
                          <span> goal-keeper </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-goal" />
                          </div>
                          <span> goal </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-golf-alt" />
                          </div>
                          <span> golf-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-golf-bag" />
                          </div>
                          <span> golf-bag </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-golf-cart" />
                          </div>
                          <span> golf-cart </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-golf-field" />
                          </div>
                          <span> golf-field </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-golf" />
                          </div>
                          <span> golf </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-golfer" />
                          </div>
                          <span> golfer </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-helmet" />
                          </div>
                          <span> helmet </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-hockey-alt" />
                          </div>
                          <span> hockey-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-hockey" />
                          </div>
                          <span> hockey </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ice-skate" />
                          </div>
                          <span> ice-skate </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-jersey-alt" />
                          </div>
                          <span> jersey-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-jersey" />
                          </div>
                          <span> jersey </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-jumping" />
                          </div>
                          <span> jumping </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-kick" />
                          </div>
                          <span> kick </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-leg" />
                          </div>
                          <span> leg </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-match-review" />
                          </div>
                          <span> match-review </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-medal-sport" />
                          </div>
                          <span> medal-sport </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-offside" />
                          </div>
                          <span> offside </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-olympic-logo" />
                          </div>
                          <span> olympic-logo </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-olympic" />
                          </div>
                          <span> olympic </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-padding" />
                          </div>
                          <span> padding </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-penalty-card" />
                          </div>
                          <span> penalty-card </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-racer" />
                          </div>
                          <span> racer </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-racing-car" />
                          </div>
                          <span> racing-car </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-racing-flag-alt" />
                          </div>
                          <span> racing-flag-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-racing-flag" />
                          </div>
                          <span> racing-flag </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-racings-wheel" />
                          </div>
                          <span> racings-wheel </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-referee" />
                          </div>
                          <span> referee </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-refree-jersey" />
                          </div>
                          <span> refree-jersey </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-result-sport" />
                          </div>
                          <span> result-sport </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-rugby-ball" />
                          </div>
                          <span> rugby-ball </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-rugby-player" />
                          </div>
                          <span> rugby-player </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-rugby" />
                          </div>
                          <span> rugby </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-runner-alt-1" />
                          </div>
                          <span> runner-alt-1 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-runner-alt-2" />
                          </div>
                          <span> runner-alt-2 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-runner" />
                          </div>
                          <span> runner </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-score-board" />
                          </div>
                          <span> score-board </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-skiing-man" />
                          </div>
                          <span> skiing-man </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-skydiving-goggles" />
                          </div>
                          <span> skydiving-goggles </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-snow-mobile" />
                          </div>
                          <span> snow-mobile </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-steering" />
                          </div>
                          <span> steering </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-stopwatch" />
                          </div>
                          <span> stopwatch </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-substitute" />
                          </div>
                          <span> substitute </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-swimmer" />
                          </div>
                          <span> swimmer </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-table-tennis" />
                          </div>
                          <span> table-tennis </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-team-alt" />
                          </div>
                          <span> team-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-team" />
                          </div>
                          <span> team </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-tennis-player" />
                          </div>
                          <span> tennis-player </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-tennis" />
                          </div>
                          <span> tennis </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-tracking" />
                          </div>
                          <span> tracking </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-trophy-alt" />
                          </div>
                          <span> trophy-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-trophy" />
                          </div>
                          <span> trophy </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-volleyball-alt" />
                          </div>
                          <span> volleyball-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-volleyball-fire" />
                          </div>
                          <span> volleyball-fire </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-volleyball" />
                          </div>
                          <span> volleyball </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-water-bottle" />
                          </div>
                          <span> water-bottle </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-whistle-alt" />
                          </div>
                          <span> whistle-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-whistle" />
                          </div>
                          <span> whistle </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-win-trophy" />
                          </div>
                          <span> win-trophy </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-align-center" />
                          </div>
                          <span> align-center </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-align-left" />
                          </div>
                          <span> align-left </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-align-right" />
                          </div>
                          <span> align-right </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-all-caps" />
                          </div>
                          <span> all-caps </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bold" />
                          </div>
                          <span> bold </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-brush" />
                          </div>
                          <span> brush </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-clip-board" />
                          </div>
                          <span> clip-board </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-code-alt" />
                          </div>
                          <span> code-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-color-bucket" />
                          </div>
                          <span> color-bucket </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-color-picker" />
                          </div>
                          <span> color-picker </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-copy-invert" />
                          </div>
                          <span> copy-invert </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-copy" />
                          </div>
                          <span> copy </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-cut" />
                          </div>
                          <span> cut </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-delete-alt" />
                          </div>
                          <span> delete-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-edit-alt" />
                          </div>
                          <span> edit-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-eraser-alt" />
                          </div>
                          <span> eraser-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-font" />
                          </div>
                          <span> font </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-heading" />
                          </div>
                          <span> heading </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-indent" />
                          </div>
                          <span> indent </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-italic-alt" />
                          </div>
                          <span> italic-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-italic" />
                          </div>
                          <span> italic </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-justify-all" />
                          </div>
                          <span> justify-all </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-justify-center" />
                          </div>
                          <span> justify-center </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-justify-left" />
                          </div>
                          <span> justify-left </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-justify-right" />
                          </div>
                          <span> justify-right </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-link-broken" />
                          </div>
                          <span> link-broken </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-outdent" />
                          </div>
                          <span> outdent </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-paper-clip" />
                          </div>
                          <span> paper-clip </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-paragraph" />
                          </div>
                          <span> paragraph </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-pin" />
                          </div>
                          <span> pin </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-printer" />
                          </div>
                          <span> printer </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-redo" />
                          </div>
                          <span> redo </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-rotation" />
                          </div>
                          <span> rotation </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-save" />
                          </div>
                          <span> save </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-small-cap" />
                          </div>
                          <span> small-cap </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-strike-through" />
                          </div>
                          <span> strike-through </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-sub-listing" />
                          </div>
                          <span> sub-listing </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-subscript" />
                          </div>
                          <span> subscript </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-superscript" />
                          </div>
                          <span> superscript </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-table" />
                          </div>
                          <span> table </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-text-height" />
                          </div>
                          <span> text-height </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-text-width" />
                          </div>
                          <span> text-width </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-trash" />
                          </div>
                          <span> trash </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-underline" />
                          </div>
                          <span> underline </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-undo" />
                          </div>
                          <span> undo </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-air-balloon" />
                          </div>
                          <span> air-balloon </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-airplane-alt" />
                          </div>
                          <span> airplane-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-airplane" />
                          </div>
                          <span> airplane </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-articulated-truck" />
                          </div>
                          <span> articulated-truck </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-auto-mobile" />
                          </div>
                          <span> auto-mobile </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-auto-rickshaw" />
                          </div>
                          <span> auto-rickshaw </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bicycle-alt-1" />
                          </div>
                          <span> bicycle-alt-1 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bicycle-alt-2" />
                          </div>
                          <span> bicycle-alt-2 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bicycle" />
                          </div>
                          <span> bicycle </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bus-alt-1" />
                          </div>
                          <span> bus-alt-1 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bus-alt-2" />
                          </div>
                          <span> bus-alt-2 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bus-alt-3" />
                          </div>
                          <span> bus-alt-3 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bus" />
                          </div>
                          <span> bus </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-cab" />
                          </div>
                          <span> cab </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-cable-car" />
                          </div>
                          <span> cable-car </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-car-alt-1" />
                          </div>
                          <span> car-alt-1 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-car-alt-2" />
                          </div>
                          <span> car-alt-2 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-car-alt-3" />
                          </div>
                          <span> car-alt-3 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-car-alt-4" />
                          </div>
                          <span> car-alt-4 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-car" />
                          </div>
                          <span> car </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-delivery-time" />
                          </div>
                          <span> delivery-time </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-fast-delivery" />
                          </div>
                          <span> fast-delivery </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-fire-truck-alt" />
                          </div>
                          <span> fire-truck-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-fire-truck" />
                          </div>
                          <span> fire-truck </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-free-delivery" />
                          </div>
                          <span> free-delivery </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-helicopter" />
                          </div>
                          <span> helicopter </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-motor-bike-alt" />
                          </div>
                          <span> motor-bike-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-motor-bike" />
                          </div>
                          <span> motor-bike </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-motor-biker" />
                          </div>
                          <span> motor-biker </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-oil-truck" />
                          </div>
                          <span> oil-truck </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-rickshaw" />
                          </div>
                          <span> rickshaw </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-rocket-alt-1" />
                          </div>
                          <span> rocket-alt-1 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-rocket-alt-2" />
                          </div>
                          <span> rocket-alt-2 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-rocket" />
                          </div>
                          <span> rocket </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-sail-boat-alt-1" />
                          </div>
                          <span> sail-boat-alt-1 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-sail-boat-alt-2" />
                          </div>
                          <span> sail-boat-alt-2 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-sail-boat" />
                          </div>
                          <span> sail-boat </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-scooter" />
                          </div>
                          <span> scooter </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-sea-plane" />
                          </div>
                          <span> sea-plane </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ship-alt" />
                          </div>
                          <span> ship-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ship" />
                          </div>
                          <span> ship </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-speed-boat" />
                          </div>
                          <span> speed-boat </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-taxi" />
                          </div>
                          <span> taxi </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-tractor" />
                          </div>
                          <span> tractor </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-train-line" />
                          </div>
                          <span> train-line </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-train-steam" />
                          </div>
                          <span> train-steam </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-tram" />
                          </div>
                          <span> tram </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-truck-alt" />
                          </div>
                          <span> truck-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-truck-loaded" />
                          </div>
                          <span> truck-loaded </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-truck" />
                          </div>
                          <span> truck </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-van-alt" />
                          </div>
                          <span> van-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-van" />
                          </div>
                          <span> van </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-yacht" />
                          </div>
                          <span> yacht </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-5-star-hotel" />
                          </div>
                          <span> 5-star-hotel </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-air-ticket" />
                          </div>
                          <span> air-ticket </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-beach-bed" />
                          </div>
                          <span> beach-bed </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-beach" />
                          </div>
                          <span> beach </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-camping-vest" />
                          </div>
                          <span> camping-vest </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-direction-sign" />
                          </div>
                          <span> direction-sign </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-hill-side" />
                          </div>
                          <span> hill-side </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-hill" />
                          </div>
                          <span> hill </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-hotel" />
                          </div>
                          <span> hotel </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-island-alt" />
                          </div>
                          <span> island-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-island" />
                          </div>
                          <span> island </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-sandals-female" />
                          </div>
                          <span> sandals-female </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-sandals-male" />
                          </div>
                          <span> sandals-male </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-travelling" />
                          </div>
                          <span> travelling </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-breakdown" />
                          </div>
                          <span> breakdown </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-celsius" />
                          </div>
                          <span> celsius </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-clouds" />
                          </div>
                          <span> clouds </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-cloudy" />
                          </div>
                          <span> cloudy </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-dust" />
                          </div>
                          <span> dust </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-eclipse" />
                          </div>
                          <span> eclipse </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-fahrenheit" />
                          </div>
                          <span> fahrenheit </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-forest-fire" />
                          </div>
                          <span> forest-fire </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-full-night" />
                          </div>
                          <span> full-night </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-full-sunny" />
                          </div>
                          <span> full-sunny </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-hail-night" />
                          </div>
                          <span> hail-night </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-hail-rainy-night" />
                          </div>
                          <span> hail-rainy-night </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-hail-rainy-sunny" />
                          </div>
                          <span> hail-rainy-sunny </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-hail-rainy" />
                          </div>
                          <span> hail-rainy </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-hail-sunny" />
                          </div>
                          <span> hail-sunny </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-hail-thunder-night" />
                          </div>
                          <span> hail-thunder-night </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-hail-thunder-sunny" />
                          </div>
                          <span> hail-thunder-sunny </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-hail-thunder" />
                          </div>
                          <span> hail-thunder </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-hail" />
                          </div>
                          <span> hail </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-hill-night" />
                          </div>
                          <span> hill-night </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-hill-sunny" />
                          </div>
                          <span> hill-sunny </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-hurricane" />
                          </div>
                          <span> hurricane </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-meteor" />
                          </div>
                          <span> meteor </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-night" />
                          </div>
                          <span> night </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-rainy-night" />
                          </div>
                          <span> rainy-night </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-rainy-sunny" />
                          </div>
                          <span> rainy-sunny </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-rainy-thunder" />
                          </div>
                          <span> rainy-thunder </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-rainy" />
                          </div>
                          <span> rainy </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-snow-alt" />
                          </div>
                          <span> snow-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-snow-flake" />
                          </div>
                          <span> snow-flake </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-snow-temp" />
                          </div>
                          <span> snow-temp </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-snow" />
                          </div>
                          <span> snow </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-snowy-hail" />
                          </div>
                          <span> snowy-hail </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-snowy-night-hail" />
                          </div>
                          <span> snowy-night-hail </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-snowy-night-rainy" />
                          </div>
                          <span> snowy-night-rainy </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-snowy-night" />
                          </div>
                          <span> snowy-night </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-snowy-rainy" />
                          </div>
                          <span> snowy-rainy </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-snowy-sunny-hail" />
                          </div>
                          <span> snowy-sunny-hail </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-snowy-sunny-rainy" />
                          </div>
                          <span> snowy-sunny-rainy </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-snowy-sunny" />
                          </div>
                          <span> snowy-sunny </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-snowy-thunder-night" />
                          </div>
                          <span> snowy-thunder-night </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-snowy-thunder-sunny" />
                          </div>
                          <span> snowy-thunder-sunny </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-snowy-thunder" />
                          </div>
                          <span> snowy-thunder </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-snowy-windy-night" />
                          </div>
                          <span> snowy-windy-night </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-snowy-windy-sunny" />
                          </div>
                          <span> snowy-windy-sunny </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-snowy-windy" />
                          </div>
                          <span> snowy-windy </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-snowy" />
                          </div>
                          <span> snowy </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-sun-alt" />
                          </div>
                          <span> sun-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-sun-rise" />
                          </div>
                          <span> sun-rise </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-sun-set" />
                          </div>
                          <span> sun-set </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-sun" />
                          </div>
                          <span> sun </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-sunny-day-temp" />
                          </div>
                          <span> sunny-day-temp </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-sunny" />
                          </div>
                          <span> sunny </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-thunder-light" />
                          </div>
                          <span> thunder-light </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-tornado" />
                          </div>
                          <span> tornado </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-umbrella-alt" />
                          </div>
                          <span> umbrella-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-umbrella" />
                          </div>
                          <span> umbrella </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-volcano" />
                          </div>
                          <span> volcano </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-wave" />
                          </div>
                          <span> wave </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-wind-scale-0" />
                          </div>
                          <span> wind-scale-0 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-wind-scale-1" />
                          </div>
                          <span> wind-scale-1 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-wind-scale-10" />
                          </div>
                          <span> wind-scale-10 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-wind-scale-11" />
                          </div>
                          <span> wind-scale-11 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-wind-scale-12" />
                          </div>
                          <span> wind-scale-12 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-wind-scale-2" />
                          </div>
                          <span> wind-scale-2 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-wind-scale-3" />
                          </div>
                          <span> wind-scale-3 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-wind-scale-4" />
                          </div>
                          <span> wind-scale-4 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-wind-scale-5" />
                          </div>
                          <span> wind-scale-5 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-wind-scale-6" />
                          </div>
                          <span> wind-scale-6 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-wind-scale-7" />
                          </div>
                          <span> wind-scale-7 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-wind-scale-8" />
                          </div>
                          <span> wind-scale-8 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-wind-scale-9" />
                          </div>
                          <span> wind-scale-9 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-wind-waves" />
                          </div>
                          <span> wind-waves </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-wind" />
                          </div>
                          <span> wind </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-windy-hail" />
                          </div>
                          <span> windy-hail </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-windy-night" />
                          </div>
                          <span> windy-night </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-windy-raining" />
                          </div>
                          <span> windy-raining </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-windy-sunny" />
                          </div>
                          <span> windy-sunny </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-windy-thunder-raining" />
                          </div>
                          <span> windy-thunder-raining </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-windy-thunder" />
                          </div>
                          <span> windy-thunder </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-windy" />
                          </div>
                          <span> windy </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-addons" />
                          </div>
                          <span> addons </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-address-book" />
                          </div>
                          <span> address-book </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-adjust" />
                          </div>
                          <span> adjust </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-alarm" />
                          </div>
                          <span> alarm </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-anchor" />
                          </div>
                          <span> anchor </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-archive" />
                          </div>
                          <span> archive </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-at" />
                          </div>
                          <span> at </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-attachment" />
                          </div>
                          <span> attachment </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-audio" />
                          </div>
                          <span> audio </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-automation" />
                          </div>
                          <span> automation </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-badge" />
                          </div>
                          <span> badge </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bag-alt" />
                          </div>
                          <span> bag-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bag" />
                          </div>
                          <span> bag </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ban" />
                          </div>
                          <span> ban </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bar-code" />
                          </div>
                          <span> bar-code </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bars" />
                          </div>
                          <span> bars </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-basket" />
                          </div>
                          <span> basket </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-battery-empty" />
                          </div>
                          <span> battery-empty </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-battery-full" />
                          </div>
                          <span> battery-full </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-battery-half" />
                          </div>
                          <span> battery-half </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-battery-low" />
                          </div>
                          <span> battery-low </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-beaker" />
                          </div>
                          <span> beaker </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-beard" />
                          </div>
                          <span> beard </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bed" />
                          </div>
                          <span> bed </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bell" />
                          </div>
                          <span> bell </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-beverage" />
                          </div>
                          <span> beverage </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bill" />
                          </div>
                          <span> bill </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bin" />
                          </div>
                          <span> bin </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-binary" />
                          </div>
                          <span> binary </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-binoculars" />
                          </div>
                          <span> binoculars </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bluetooth" />
                          </div>
                          <span> bluetooth </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bomb" />
                          </div>
                          <span> bomb </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-book-mark" />
                          </div>
                          <span> book-mark </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-box" />
                          </div>
                          <span> box </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-briefcase" />
                          </div>
                          <span> briefcase </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-broken" />
                          </div>
                          <span> broken </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bucket" />
                          </div>
                          <span> bucket </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bucket1" />
                          </div>
                          <span> bucket1 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bucket2" />
                          </div>
                          <span> bucket2 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bug" />
                          </div>
                          <span> bug </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-building" />
                          </div>
                          <span> building </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bulb-alt" />
                          </div>
                          <span> bulb-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bullet" />
                          </div>
                          <span> bullet </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bullhorn" />
                          </div>
                          <span> bullhorn </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-bullseye" />
                          </div>
                          <span> bullseye </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-calendar" />
                          </div>
                          <span> calendar </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-camera-alt" />
                          </div>
                          <span> camera-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-camera" />
                          </div>
                          <span> camera </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-card" />
                          </div>
                          <span> card </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-cart-alt" />
                          </div>
                          <span> cart-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-cart" />
                          </div>
                          <span> cart </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-cc" />
                          </div>
                          <span> cc </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-charging" />
                          </div>
                          <span> charging </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-chat" />
                          </div>
                          <span> chat </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-check-alt" />
                          </div>
                          <span> check-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-check-circled" />
                          </div>
                          <span> check-circled </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-check" />
                          </div>
                          <span> check </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-checked" />
                          </div>
                          <span> checked </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-children-care" />
                          </div>
                          <span> children-care </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-clip" />
                          </div>
                          <span> clip </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-clock-time" />
                          </div>
                          <span> clock-time </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-close-circled" />
                          </div>
                          <span> close-circled </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-close-line-circled" />
                          </div>
                          <span> close-line-circled </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-close-line-squared-alt" />
                          </div>
                          <span> close-line-squared-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-close-line-squared" />
                          </div>
                          <span> close-line-squared </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-close-line" />
                          </div>
                          <span> close-line </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-close-squared-alt" />
                          </div>
                          <span> close-squared-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-close-squared" />
                          </div>
                          <span> close-squared </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-close" />
                          </div>
                          <span> close </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-cloud-download" />
                          </div>
                          <span> cloud-download </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-cloud-refresh" />
                          </div>
                          <span> cloud-refresh </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-cloud-upload" />
                          </div>
                          <span> cloud-upload </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-cloud" />
                          </div>
                          <span> cloud </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-code-not-allowed" />
                          </div>
                          <span> code-not-allowed </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-code" />
                          </div>
                          <span> code </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-comment" />
                          </div>
                          <span> comment </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-compass-alt" />
                          </div>
                          <span> compass-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-compass" />
                          </div>
                          <span> compass </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-computer" />
                          </div>
                          <span> computer </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-connection" />
                          </div>
                          <span> connection </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-console" />
                          </div>
                          <span> console </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-contacts" />
                          </div>
                          <span> contacts </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-contrast" />
                          </div>
                          <span> contrast </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-copyright" />
                          </div>
                          <span> copyright </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-credit-card" />
                          </div>
                          <span> credit-card </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-crop" />
                          </div>
                          <span> crop </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-crown" />
                          </div>
                          <span> crown </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-cube" />
                          </div>
                          <span> cube </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-cubes" />
                          </div>
                          <span> cubes </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-dashboard-web" />
                          </div>
                          <span> dashboard-web </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-dashboard" />
                          </div>
                          <span> dashboard </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-data" />
                          </div>
                          <span> data </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-database-add" />
                          </div>
                          <span> database-add </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-database-locked" />
                          </div>
                          <span> database-locked </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-database-remove" />
                          </div>
                          <span> database-remove </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-database" />
                          </div>
                          <span> database </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-delete" />
                          </div>
                          <span> delete </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-diamond" />
                          </div>
                          <span> diamond </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-dice-multiple" />
                          </div>
                          <span> dice-multiple </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-dice" />
                          </div>
                          <span> dice </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-disc" />
                          </div>
                          <span> disc </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-diskette" />
                          </div>
                          <span> diskette </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-document-folder" />
                          </div>
                          <span> document-folder </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-download-alt" />
                          </div>
                          <span> download-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-download" />
                          </div>
                          <span> download </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-downloaded" />
                          </div>
                          <span> downloaded </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-drag" />
                          </div>
                          <span> drag </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-drag1" />
                          </div>
                          <span> drag1 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-drag2" />
                          </div>
                          <span> drag2 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-drag3" />
                          </div>
                          <span> drag3 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-earth" />
                          </div>
                          <span> earth </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ebook" />
                          </div>
                          <span> ebook </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-edit" />
                          </div>
                          <span> edit </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-eject" />
                          </div>
                          <span> eject </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-email" />
                          </div>
                          <span> email </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-envelope-open" />
                          </div>
                          <span> envelope-open </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-envelope" />
                          </div>
                          <span> envelope </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-eraser" />
                          </div>
                          <span> eraser </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-error" />
                          </div>
                          <span> error </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-excavator" />
                          </div>
                          <span> excavator </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-exchange" />
                          </div>
                          <span> exchange </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-exclamation-circle" />
                          </div>
                          <span> exclamation-circle </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-exclamation-square" />
                          </div>
                          <span> exclamation-square </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-exclamation-tringle" />
                          </div>
                          <span> exclamation-tringle </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-exclamation" />
                          </div>
                          <span> exclamation </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-exit" />
                          </div>
                          <span> exit </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-expand" />
                          </div>
                          <span> expand </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-external-link" />
                          </div>
                          <span> external-link </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-external" />
                          </div>
                          <span> external </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-eye-alt" />
                          </div>
                          <span> eye-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-eye-blocked" />
                          </div>
                          <span> eye-blocked </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-eye-dropper" />
                          </div>
                          <span> eye-dropper </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-eye" />
                          </div>
                          <span> eye </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-favourite" />
                          </div>
                          <span> favourite </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-fax" />
                          </div>
                          <span> fax </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-file-fill" />
                          </div>
                          <span> file-fill </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-film" />
                          </div>
                          <span> film </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-filter" />
                          </div>
                          <span> filter </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-fire-alt" />
                          </div>
                          <span> fire-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-fire-burn" />
                          </div>
                          <span> fire-burn </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-fire" />
                          </div>
                          <span> fire </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-flag-alt-1" />
                          </div>
                          <span> flag-alt-1 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-flag-alt-2" />
                          </div>
                          <span> flag-alt-2 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-flag" />
                          </div>
                          <span> flag </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-flame-torch" />
                          </div>
                          <span> flame-torch </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-flash-light" />
                          </div>
                          <span> flash-light </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-flash" />
                          </div>
                          <span> flash </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-flask" />
                          </div>
                          <span> flask </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-focus" />
                          </div>
                          <span> focus </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-folder-open" />
                          </div>
                          <span> folder-open </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-folder" />
                          </div>
                          <span> folder </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-foot-print" />
                          </div>
                          <span> foot-print </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-garbage" />
                          </div>
                          <span> garbage </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-gear-alt" />
                          </div>
                          <span> gear-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-gear" />
                          </div>
                          <span> gear </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-gears" />
                          </div>
                          <span> gears </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-gift" />
                          </div>
                          <span> gift </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-glass" />
                          </div>
                          <span> glass </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-globe" />
                          </div>
                          <span> globe </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-graffiti" />
                          </div>
                          <span> graffiti </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-grocery" />
                          </div>
                          <span> grocery </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-hand" />
                          </div>
                          <span> hand </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-hanger" />
                          </div>
                          <span> hanger </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-hard-disk" />
                          </div>
                          <span> hard-disk </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-heart-alt" />
                          </div>
                          <span> heart-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-heart" />
                          </div>
                          <span> heart </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-history" />
                          </div>
                          <span> history </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-home" />
                          </div>
                          <span> home </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-horn" />
                          </div>
                          <span> horn </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-hour-glass" />
                          </div>
                          <span> hour-glass </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-id" />
                          </div>
                          <span> id </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-image" />
                          </div>
                          <span> image </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-inbox" />
                          </div>
                          <span> inbox </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-infinite" />
                          </div>
                          <span> infinite </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-info-circle" />
                          </div>
                          <span> info-circle </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-info-square" />
                          </div>
                          <span> info-square </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-info" />
                          </div>
                          <span> info </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-institution" />
                          </div>
                          <span> institution </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-interface" />
                          </div>
                          <span> interface </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-invisible" />
                          </div>
                          <span> invisible </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-jacket" />
                          </div>
                          <span> jacket </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-jar" />
                          </div>
                          <span> jar </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-jewlery" />
                          </div>
                          <span> jewlery </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-karate" />
                          </div>
                          <span> karate </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-key-hole" />
                          </div>
                          <span> key-hole </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-key" />
                          </div>
                          <span> key </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-label" />
                          </div>
                          <span> label </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-lamp" />
                          </div>
                          <span> lamp </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-layers" />
                          </div>
                          <span> layers </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-layout" />
                          </div>
                          <span> layout </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-leaf" />
                          </div>
                          <span> leaf </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-leaflet" />
                          </div>
                          <span> leaflet </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-learn" />
                          </div>
                          <span> learn </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-lego" />
                          </div>
                          <span> lego </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-lens" />
                          </div>
                          <span> lens </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-letter" />
                          </div>
                          <span> letter </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-letterbox" />
                          </div>
                          <span> letterbox </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-library" />
                          </div>
                          <span> library </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-license" />
                          </div>
                          <span> license </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-life-bouy" />
                          </div>
                          <span> life-bouy </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-life-buoy" />
                          </div>
                          <span> life-buoy </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-life-jacket" />
                          </div>
                          <span> life-jacket </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-life-ring" />
                          </div>
                          <span> life-ring </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-light-bulb" />
                          </div>
                          <span> light-bulb </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-lighter" />
                          </div>
                          <span> lighter </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-lightning-ray" />
                          </div>
                          <span> lightning-ray </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-like" />
                          </div>
                          <span> like </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-line-height" />
                          </div>
                          <span> line-height </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-link-alt" />
                          </div>
                          <span> link-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-link" />
                          </div>
                          <span> link </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-list" />
                          </div>
                          <span> list </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-listening" />
                          </div>
                          <span> listening </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-listine-dots" />
                          </div>
                          <span> listine-dots </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-listing-box" />
                          </div>
                          <span> listing-box </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-listing-number" />
                          </div>
                          <span> listing-number </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-live-support" />
                          </div>
                          <span> live-support </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-location-arrow" />
                          </div>
                          <span> location-arrow </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-location-pin" />
                          </div>
                          <span> location-pin </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-lock" />
                          </div>
                          <span> lock </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-login" />
                          </div>
                          <span> login </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-logout" />
                          </div>
                          <span> logout </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-lollipop" />
                          </div>
                          <span> lollipop </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-long-drive" />
                          </div>
                          <span> long-drive </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-look" />
                          </div>
                          <span> look </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-loop" />
                          </div>
                          <span> loop </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-luggage" />
                          </div>
                          <span> luggage </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-lunch" />
                          </div>
                          <span> lunch </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-lungs" />
                          </div>
                          <span> lungs </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-magic-alt" />
                          </div>
                          <span> magic-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-magic" />
                          </div>
                          <span> magic </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-magnet" />
                          </div>
                          <span> magnet </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-mail-box" />
                          </div>
                          <span> mail-box </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-mail" />
                          </div>
                          <span> mail </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-male" />
                          </div>
                          <span> male </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-map-pins" />
                          </div>
                          <span> map-pins </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-map" />
                          </div>
                          <span> map </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-maximize" />
                          </div>
                          <span> maximize </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-measure" />
                          </div>
                          <span> measure </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-medicine" />
                          </div>
                          <span> medicine </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-mega-phone" />
                          </div>
                          <span> mega-phone </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-megaphone-alt" />
                          </div>
                          <span> megaphone-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-megaphone" />
                          </div>
                          <span> megaphone </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-memorial" />
                          </div>
                          <span> memorial </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-memory-card" />
                          </div>
                          <span> memory-card </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-mic-mute" />
                          </div>
                          <span> mic-mute </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-mic" />
                          </div>
                          <span> mic </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-military" />
                          </div>
                          <span> military </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-mill" />
                          </div>
                          <span> mill </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-minus-circle" />
                          </div>
                          <span> minus-circle </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-minus-square" />
                          </div>
                          <span> minus-square </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-minus" />
                          </div>
                          <span> minus </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-mobile-phone" />
                          </div>
                          <span> mobile-phone </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-molecule" />
                          </div>
                          <span> molecule </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-money" />
                          </div>
                          <span> money </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-moon" />
                          </div>
                          <span> moon </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-mop" />
                          </div>
                          <span> mop </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-muffin" />
                          </div>
                          <span> muffin </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-mustache" />
                          </div>
                          <span> mustache </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-navigation-menu" />
                          </div>
                          <span> navigation-menu </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-navigation" />
                          </div>
                          <span> navigation </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-network-tower" />
                          </div>
                          <span> network-tower </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-network" />
                          </div>
                          <span> network </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-news" />
                          </div>
                          <span> news </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-newspaper" />
                          </div>
                          <span> newspaper </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-no-smoking" />
                          </div>
                          <span> no-smoking </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-not-allowed" />
                          </div>
                          <span> not-allowed </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-notebook" />
                          </div>
                          <span> notebook </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-notepad" />
                          </div>
                          <span> notepad </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-notification" />
                          </div>
                          <span> notification </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-numbered" />
                          </div>
                          <span> numbered </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-opposite" />
                          </div>
                          <span> opposite </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-optic" />
                          </div>
                          <span> optic </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-options" />
                          </div>
                          <span> options </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-package" />
                          </div>
                          <span> package </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-page" />
                          </div>
                          <span> page </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-paint" />
                          </div>
                          <span> paint </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-paper-plane" />
                          </div>
                          <span> paper-plane </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-paperclip" />
                          </div>
                          <span> paperclip </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-papers" />
                          </div>
                          <span> papers </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-pay" />
                          </div>
                          <span> pay </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-penguin-linux" />
                          </div>
                          <span> penguin-linux </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-pestle" />
                          </div>
                          <span> pestle </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-phone-circle" />
                          </div>
                          <span> phone-circle </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-phone" />
                          </div>
                          <span> phone </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-picture" />
                          </div>
                          <span> picture </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-pine" />
                          </div>
                          <span> pine </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-pixels" />
                          </div>
                          <span> pixels </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-plugin" />
                          </div>
                          <span> plugin </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-plus-circle" />
                          </div>
                          <span> plus-circle </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-plus-square" />
                          </div>
                          <span> plus-square </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-plus" />
                          </div>
                          <span> plus </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-polygonal" />
                          </div>
                          <span> polygonal </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-power" />
                          </div>
                          <span> power </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-price" />
                          </div>
                          <span> price </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-print" />
                          </div>
                          <span> print </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-puzzle" />
                          </div>
                          <span> puzzle </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-qr-code" />
                          </div>
                          <span> qr-code </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-queen" />
                          </div>
                          <span> queen </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-question-circle" />
                          </div>
                          <span> question-circle </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-question-square" />
                          </div>
                          <span> question-square </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-question" />
                          </div>
                          <span> question </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-quote-left" />
                          </div>
                          <span> quote-left </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-quote-right" />
                          </div>
                          <span> quote-right </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-random" />
                          </div>
                          <span> random </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-recycle" />
                          </div>
                          <span> recycle </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-refresh" />
                          </div>
                          <span> refresh </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-repair" />
                          </div>
                          <span> repair </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-reply-all" />
                          </div>
                          <span> reply-all </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-reply" />
                          </div>
                          <span> reply </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-resize" />
                          </div>
                          <span> resize </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-responsive" />
                          </div>
                          <span> responsive </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-retweet" />
                          </div>
                          <span> retweet </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-road" />
                          </div>
                          <span> road </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-robot" />
                          </div>
                          <span> robot </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-royal" />
                          </div>
                          <span> royal </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-rss-feed" />
                          </div>
                          <span> rss-feed </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-safety" />
                          </div>
                          <span> safety </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-sale-discount" />
                          </div>
                          <span> sale-discount </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-satellite" />
                          </div>
                          <span> satellite </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-send-mail" />
                          </div>
                          <span> send-mail </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-server" />
                          </div>
                          <span> server </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-settings-alt" />
                          </div>
                          <span> settings-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-settings" />
                          </div>
                          <span> settings </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-share-alt" />
                          </div>
                          <span> share-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-share-boxed" />
                          </div>
                          <span> share-boxed </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-share" />
                          </div>
                          <span> share </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-shield" />
                          </div>
                          <span> shield </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-shopping-cart" />
                          </div>
                          <span> shopping-cart </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-sign-in" />
                          </div>
                          <span> sign-in </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-sign-out" />
                          </div>
                          <span> sign-out </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-signal" />
                          </div>
                          <span> signal </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-site-map" />
                          </div>
                          <span> site-map </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-smart-phone" />
                          </div>
                          <span> smart-phone </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-soccer" />
                          </div>
                          <span> soccer </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-sort-alt" />
                          </div>
                          <span> sort-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-sort" />
                          </div>
                          <span> sort </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-space" />
                          </div>
                          <span> space </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-spanner" />
                          </div>
                          <span> spanner </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-speech-comments" />
                          </div>
                          <span> speech-comments </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-speed-meter" />
                          </div>
                          <span> speed-meter </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-spinner-alt-1" />
                          </div>
                          <span> spinner-alt-1 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-spinner-alt-2" />
                          </div>
                          <span> spinner-alt-2 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-spinner-alt-3" />
                          </div>
                          <span> spinner-alt-3 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-spinner-alt-4" />
                          </div>
                          <span> spinner-alt-4 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-spinner-alt-5" />
                          </div>
                          <span> spinner-alt-5 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-spinner-alt-6" />
                          </div>
                          <span> spinner-alt-6 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-spinner" />
                          </div>
                          <span> spinner </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-spreadsheet" />
                          </div>
                          <span> spreadsheet </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-square" />
                          </div>
                          <span> square </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ssl-security" />
                          </div>
                          <span> ssl-security </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-star-alt-1" />
                          </div>
                          <span> star-alt-1 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-star-alt-2" />
                          </div>
                          <span> star-alt-2 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-star" />
                          </div>
                          <span> star </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-street-view" />
                          </div>
                          <span> street-view </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-support-faq" />
                          </div>
                          <span> support-faq </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-tack-pin" />
                          </div>
                          <span> tack-pin </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-tag" />
                          </div>
                          <span> tag </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-tags" />
                          </div>
                          <span> tags </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-tasks-alt" />
                          </div>
                          <span> tasks-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-tasks" />
                          </div>
                          <span> tasks </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-telephone" />
                          </div>
                          <span> telephone </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-telescope" />
                          </div>
                          <span> telescope </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-terminal" />
                          </div>
                          <span> terminal </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-thumbs-down" />
                          </div>
                          <span> thumbs-down </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-thumbs-up" />
                          </div>
                          <span> thumbs-up </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-tick-boxed" />
                          </div>
                          <span> tick-boxed </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-tick-mark" />
                          </div>
                          <span> tick-mark </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-ticket" />
                          </div>
                          <span> ticket </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-tie" />
                          </div>
                          <span> tie </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-toggle-off" />
                          </div>
                          <span> toggle-off </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-toggle-on" />
                          </div>
                          <span> toggle-on </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-tools-alt-2" />
                          </div>
                          <span> tools-alt-2 </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-tools" />
                          </div>
                          <span> tools </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-touch" />
                          </div>
                          <span> touch </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-traffic-light" />
                          </div>
                          <span> traffic-light </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-transparent" />
                          </div>
                          <span> transparent </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-tree" />
                          </div>
                          <span> tree </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-unique-idea" />
                          </div>
                          <span> unique-idea </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-unlock" />
                          </div>
                          <span> unlock </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-unlocked" />
                          </div>
                          <span> unlocked </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-upload-alt" />
                          </div>
                          <span> upload-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-upload" />
                          </div>
                          <span> upload </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-usb-drive" />
                          </div>
                          <span> usb-drive </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-usb" />
                          </div>
                          <span> usb </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-vector-path" />
                          </div>
                          <span> vector-path </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-verification-check" />
                          </div>
                          <span> verification-check </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-wall-clock" />
                          </div>
                          <span> wall-clock </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-wall" />
                          </div>
                          <span> wall </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-wallet" />
                          </div>
                          <span> wallet </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-warning-alt" />
                          </div>
                          <span> warning-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-warning" />
                          </div>
                          <span> warning </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-water-drop" />
                          </div>
                          <span> water-drop </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-web" />
                          </div>
                          <span> web </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-wheelchair" />
                          </div>
                          <span> wheelchair </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-wifi-alt" />
                          </div>
                          <span> wifi-alt </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-wifi" />
                          </div>
                          <span> wifi </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-world" />
                          </div>
                          <span> world </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-zigzag" />
                          </div>
                          <span> zigzag </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="icon-holder">
                          <div className="icon">
                            <i className="icofont-zipped" />
                          </div>
                          <span> zipped </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Row end  */}
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
      </div>
    </div>
    {/* Jquery Core Js */}
    {/* Jquery Page Js */}
  </>
  
  )
}

export default Icon
