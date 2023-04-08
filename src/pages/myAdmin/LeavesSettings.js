import React from 'react'

function LeavesSettings() {
  return (


<>
  {/* Main Wrapper */}
  <div className="main-wrapper">
    {/* Header */}
    <div className="header">
      {/* Logo */}
      <div className="header-left">
        <a href="index.html" className="logo">
          <img src="assets/img/logo.png" width={40} height={40} alt="" />
        </a>
      </div>
      {/* /Logo */}
      <a id="toggle_btn" href="javascript:void(0);">
        <span className="bar-icon">
          <span />
          <span />
          <span />
        </span>
      </a>
      {/* Header Title */}
      <div className="page-title-box">
        <h3>Emaize Web Admin</h3>
      </div>
      {/* /Header Title */}
      <a id="mobile_btn" className="mobile_btn" href="#sidebar">
        <i className="fa fa-bars" />
      </a>
      {/* Header Menu */}
      <ul className="nav user-menu">
        {/* Search */}
        <li className="nav-item">
          <div className="top-nav-search">
            <a href="javascript:void(0);" className="responsive-search">
              <i className="fa fa-search" />
            </a>
            <form action="search.html">
              <input
                className="form-control"
                type="text"
                placeholder="Search here"
              />
              <button className="btn" type="submit">
                <i className="fa fa-search" />
              </button>
            </form>
          </div>
        </li>
        {/* /Search */}
        {/* Flag */}
        <li className="nav-item dropdown has-arrow flag-nav">
          <a
            className="nav-link dropdown-toggle"
            data-toggle="dropdown"
            href="#"
            role="button"
          >
            <img src="assets/img/flags/us.png" alt="" height={20} />{" "}
            <span>English</span>
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <a href="javascript:void(0);" className="dropdown-item">
              <img src="assets/img/flags/us.png" alt="" height={16} /> English
            </a>
            <a href="javascript:void(0);" className="dropdown-item">
              <img src="assets/img/flags/fr.png" alt="" height={16} /> French
            </a>
            <a href="javascript:void(0);" className="dropdown-item">
              <img src="assets/img/flags/es.png" alt="" height={16} /> Spanish
            </a>
            <a href="javascript:void(0);" className="dropdown-item">
              <img src="assets/img/flags/de.png" alt="" height={16} /> German
            </a>
          </div>
        </li>
        {/* /Flag */}
        {/* Notifications */}
        <li className="nav-item dropdown">
          <a
            href="#"
            className="dropdown-toggle nav-link"
            data-toggle="dropdown"
          >
            <i className="fa fa-bell-o" />{" "}
            <span className="badge badge-pill">3</span>
          </a>
          <div className="dropdown-menu notifications">
            <div className="topnav-dropdown-header">
              <span className="notification-title">Notifications</span>
              <a href="javascript:void(0)" className="clear-noti">
                {" "}
                Clear All{" "}
              </a>
            </div>
            <div className="noti-content">
              <ul className="notification-list">
                <li className="notification-message">
                  <a href="activities.html">
                    <div className="media">
                      <span className="avatar">
                        <img alt="" src="assets/img/profiles/avatar-02.jpg" />
                      </span>
                      <div className="media-body">
                        <p className="noti-details">
                          <span className="noti-title">John Doe</span> added new
                          task{" "}
                          <span className="noti-title">
                            Patient appointment booking
                          </span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">4 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notification-message">
                  <a href="activities.html">
                    <div className="media">
                      <span className="avatar">
                        <img alt="" src="assets/img/profiles/avatar-03.jpg" />
                      </span>
                      <div className="media-body">
                        <p className="noti-details">
                          <span className="noti-title">Tarah Shropshire</span>{" "}
                          changed the task name{" "}
                          <span className="noti-title">
                            Appointment booking with payment gateway
                          </span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">6 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notification-message">
                  <a href="activities.html">
                    <div className="media">
                      <span className="avatar">
                        <img alt="" src="assets/img/profiles/avatar-06.jpg" />
                      </span>
                      <div className="media-body">
                        <p className="noti-details">
                          <span className="noti-title">Misty Tison</span> added{" "}
                          <span className="noti-title">Domenic Houston</span>{" "}
                          and <span className="noti-title">Claire Mapes</span>{" "}
                          to project{" "}
                          <span className="noti-title">
                            Doctor available module
                          </span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">8 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notification-message">
                  <a href="activities.html">
                    <div className="media">
                      <span className="avatar">
                        <img alt="" src="assets/img/profiles/avatar-17.jpg" />
                      </span>
                      <div className="media-body">
                        <p className="noti-details">
                          <span className="noti-title">Rolland Webber</span>{" "}
                          completed task{" "}
                          <span className="noti-title">
                            Patient and Doctor video conferencing
                          </span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">12 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notification-message">
                  <a href="activities.html">
                    <div className="media">
                      <span className="avatar">
                        <img alt="" src="assets/img/profiles/avatar-13.jpg" />
                      </span>
                      <div className="media-body">
                        <p className="noti-details">
                          <span className="noti-title">Bernardo Galaviz</span>{" "}
                          added new task{" "}
                          <span className="noti-title">
                            Private chat module
                          </span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">2 days ago</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="topnav-dropdown-footer">
              <a href="activities.html">View all Notifications</a>
            </div>
          </div>
        </li>
        {/* /Notifications */}
        {/* Message Notifications */}
        <li className="nav-item dropdown">
          <a
            href="#"
            className="dropdown-toggle nav-link"
            data-toggle="dropdown"
          >
            <i className="fa fa-comment-o" />{" "}
            <span className="badge badge-pill">8</span>
          </a>
          <div className="dropdown-menu notifications">
            <div className="topnav-dropdown-header">
              <span className="notification-title">Messages</span>
              <a href="javascript:void(0)" className="clear-noti">
                {" "}
                Clear All{" "}
              </a>
            </div>
            <div className="noti-content">
              <ul className="notification-list">
                <li className="notification-message">
                  <a href="chat.html">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">
                          <img alt="" src="assets/img/profiles/avatar-09.jpg" />
                        </span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">Richard Miles </span>
                        <span className="message-time">12:28 AM</span>
                        <div className="clearfix" />
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notification-message">
                  <a href="chat.html">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">
                          <img alt="" src="assets/img/profiles/avatar-02.jpg" />
                        </span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">John Doe</span>
                        <span className="message-time">6 Mar</span>
                        <div className="clearfix" />
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notification-message">
                  <a href="chat.html">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">
                          <img alt="" src="assets/img/profiles/avatar-03.jpg" />
                        </span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">
                          {" "}
                          Tarah Shropshire{" "}
                        </span>
                        <span className="message-time">5 Mar</span>
                        <div className="clearfix" />
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notification-message">
                  <a href="chat.html">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">
                          <img alt="" src="assets/img/profiles/avatar-05.jpg" />
                        </span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">Mike Litorus</span>
                        <span className="message-time">3 Mar</span>
                        <div className="clearfix" />
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notification-message">
                  <a href="chat.html">
                    <div className="list-item">
                      <div className="list-left">
                        <span className="avatar">
                          <img alt="" src="assets/img/profiles/avatar-08.jpg" />
                        </span>
                      </div>
                      <div className="list-body">
                        <span className="message-author">
                          {" "}
                          Catherine Manseau{" "}
                        </span>
                        <span className="message-time">27 Feb</span>
                        <div className="clearfix" />
                        <span className="message-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="topnav-dropdown-footer">
              <a href="chat.html">View all Messages</a>
            </div>
          </div>
        </li>
        {/* /Message Notifications */}
        <li className="nav-item dropdown has-arrow main-drop">
          <a
            href="#"
            className="dropdown-toggle nav-link"
            data-toggle="dropdown"
          >
            <span className="user-img">
              <img src="assets/img/profiles/avatar-21.jpg" alt="" />
              <span className="status online" />
            </span>
            <span>Admin</span>
          </a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="profile.html">
              My Profile
            </a>
            <a className="dropdown-item" href="settings.html">
              Settings
            </a>
            <a className="dropdown-item" href="login.html">
              Logout
            </a>
          </div>
        </li>
      </ul>
      {/* /Header Menu */}
      {/* Mobile Menu */}
      <div className="dropdown mobile-user-menu">
        <a
          href="#"
          className="nav-link dropdown-toggle"
          data-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fa fa-ellipsis-v" />
        </a>
        <div className="dropdown-menu dropdown-menu-right">
          <a className="dropdown-item" href="profile.html">
            My Profile
          </a>
          <a className="dropdown-item" href="settings.html">
            Settings
          </a>
          <a className="dropdown-item" href="login.html">
            Logout
          </a>
        </div>
      </div>
      {/* /Mobile Menu */}
    </div>
    {/* /Header */}
    {/* Sidebar */}
    <div className="sidebar" id="sidebar">
      <div className="sidebar-inner slimscroll">
        <div id="sidebar-menu" className="sidebar-menu">
          <ul>
            <li className="menu-title">
              <span>Main</span>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-dashboard" /> <span> Dashboard</span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="index.html">Admin Dashboard</a>
                </li>
                <li>
                  <a href="employee-dashboard.html">Employee Dashboard</a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-cube" /> <span> Apps</span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="chat.html">Chat</a>
                </li>
                <li className="submenu">
                  <a href="#">
                    <span> Calls</span> <span className="menu-arrow" />
                  </a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="voice-call.html">Voice Call</a>
                    </li>
                    <li>
                      <a href="video-call.html">Video Call</a>
                    </li>
                    <li>
                      <a href="outgoing-call.html">Outgoing Call</a>
                    </li>
                    <li>
                      <a href="incoming-call.html">Incoming Call</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="events.html">Calendar</a>
                </li>
                <li>
                  <a href="contacts.html">Contacts</a>
                </li>
                <li>
                  <a href="inbox.html">Email</a>
                </li>
                <li>
                  <a href="file-manager.html">File Manager</a>
                </li>
              </ul>
            </li>
            <li className="menu-title">
              <span>Employees</span>
            </li>
            <li className="submenu">
              <a href="#" className="noti-dot">
                <i className="la la-user" /> <span> Employees</span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="employees.html">All Employees</a>
                </li>
                <li>
                  <a href="holidays.html">Holidays</a>
                </li>
                <li>
                  <a href="leaves.html">
                    Leaves (Admin){" "}
                    <span className="badge badge-pill bg-primary float-right">
                      1
                    </span>
                  </a>
                </li>
                <li>
                  <a href="leaves-employee.html">Leaves (Employee)</a>
                </li>
                <li>
                  <a className="active" href="leave-settings.html">
                    Leave Settings
                  </a>
                </li>
                <li>
                  <a href="attendance.html">Attendance (Admin)</a>
                </li>
                <li>
                  <a href="attendance-employee.html">Attendance (Employee)</a>
                </li>
                <li>
                  <a href="departments.html">Departments</a>
                </li>
                <li>
                  <a href="designations.html">Designations</a>
                </li>
                <li>
                  <a href="timesheet.html">Timesheet</a>
                </li>
                <li>
                  <a href="overtime.html">Overtime</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="clients.html">
                <i className="la la-users" /> <span>Clients</span>
              </a>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-rocket" /> <span> Projects</span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="projects.html">Projects</a>
                </li>
                <li>
                  <a href="tasks.html">Tasks</a>
                </li>
                <li>
                  <a href="task-board.html">Task Board</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="leads.html">
                <i className="la la-user-secret" /> <span>Leads</span>
              </a>
            </li>
            <li>
              <a href="tickets.html">
                <i className="la la-ticket" /> <span>Tickets</span>
              </a>
            </li>
            <li className="menu-title">
              <span>HR</span>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-files-o" /> <span> Accounts </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="estimates.html">Estimates</a>
                </li>
                <li>
                  <a href="invoices.html">Invoices</a>
                </li>
                <li>
                  <a href="payments.html">Payments</a>
                </li>
                <li>
                  <a href="expenses.html">Expenses</a>
                </li>
                <li>
                  <a href="provident-fund.html">Provident Fund</a>
                </li>
                <li>
                  <a href="taxes.html">Taxes</a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-money" /> <span> Payroll </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="salary.html"> Employee Salary </a>
                </li>
                <li>
                  <a href="salary-view.html"> Payslip </a>
                </li>
                <li>
                  <a href="payroll-items.html"> Payroll Items </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="policies.html">
                <i className="la la-file-pdf-o" /> <span>Policies</span>
              </a>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-pie-chart" /> <span> Reports </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="expense-reports.html"> Expense Report </a>
                </li>
                <li>
                  <a href="invoice-reports.html"> Invoice Report </a>
                </li>
              </ul>
            </li>
            <li className="menu-title">
              <span>Performance</span>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-graduation-cap" />{" "}
                <span> Performance </span> <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="performance-indicator.html">
                    {" "}
                    Performance Indicator{" "}
                  </a>
                </li>
                <li>
                  <a href="performance.html"> Performance Review </a>
                </li>
                <li>
                  <a href="performance-appraisal.html">
                    {" "}
                    Performance Appraisal{" "}
                  </a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-crosshairs" /> <span> Goals </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="goal-tracking.html"> Goal List </a>
                </li>
                <li>
                  <a href="goal-type.html"> Goal Type </a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-edit" /> <span> Training </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="training.html"> Training List </a>
                </li>
                <li>
                  <a href="trainers.html"> Trainers</a>
                </li>
                <li>
                  <a href="training-type.html"> Training Type </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="promotion.html">
                <i className="la la-bullhorn" /> <span>Promotion</span>
              </a>
            </li>
            <li>
              <a href="resignation.html">
                <i className="la la-external-link-square" />{" "}
                <span>Resignation</span>
              </a>
            </li>
            <li>
              <a href="termination.html">
                <i className="la la-times-circle" /> <span>Termination</span>
              </a>
            </li>
            <li className="menu-title">
              <span>Administration</span>
            </li>
            <li>
              <a href="assets.html">
                <i className="la la-object-ungroup" /> <span>Assets</span>
              </a>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-briefcase" /> <span> Jobs </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="jobs.html"> Manage Jobs </a>
                </li>
                <li>
                  <a href="job-applicants.html"> Applied Candidates </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="knowledgebase.html">
                <i className="la la-question" /> <span>Knowledgebase</span>
              </a>
            </li>
            <li>
              <a href="activities.html">
                <i className="la la-bell" /> <span>Activities</span>
              </a>
            </li>
            <li>
              <a href="users.html">
                <i className="la la-user-plus" /> <span>Users</span>
              </a>
            </li>
            <li>
              <a href="settings.html">
                <i className="la la-cog" /> <span>Settings</span>
              </a>
            </li>
            <li className="menu-title">
              <span>Pages</span>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-user" /> <span> Profile </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="profile.html"> Employee Profile </a>
                </li>
                <li>
                  <a href="client-profile.html"> Client Profile </a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-key" /> <span> Authentication </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="login.html"> Login </a>
                </li>
                <li>
                  <a href="register.html"> Register </a>
                </li>
                <li>
                  <a href="forgot-password.html"> Forgot Password </a>
                </li>
                <li>
                  <a href="otp.html"> OTP </a>
                </li>
                <li>
                  <a href="lock-screen.html"> Lock Screen </a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-exclamation-triangle" />{" "}
                <span> Error Pages </span> <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="error-404.html">404 Error </a>
                </li>
                <li>
                  <a href="error-500.html">500 Error </a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-hand-o-up" /> <span> Subscriptions </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="subscriptions.html"> Subscriptions (Admin) </a>
                </li>
                <li>
                  <a href="subscriptions-company.html">
                    {" "}
                    Subscriptions (Company){" "}
                  </a>
                </li>
                <li>
                  <a href="subscribed-companies.html"> Subscribed Companies</a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-columns" /> <span> Pages </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="search.html"> Search </a>
                </li>
                <li>
                  <a href="faq.html"> FAQ </a>
                </li>
                <li>
                  <a href="terms.html"> Terms </a>
                </li>
                <li>
                  <a href="privacy-policy.html"> Privacy Policy </a>
                </li>
                <li>
                  <a href="blank-page.html"> Blank Page </a>
                </li>
              </ul>
            </li>
            <li className="menu-title">
              <span>UI Interface</span>
            </li>
            <li>
              <a href="components.html">
                <i className="la la-puzzle-piece" /> <span>Components</span>
              </a>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-object-group" /> <span> Forms </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="form-basic-inputs.html">Basic Inputs </a>
                </li>
                <li>
                  <a href="form-input-groups.html">Input Groups </a>
                </li>
                <li>
                  <a href="form-horizontal.html">Horizontal Form </a>
                </li>
                <li>
                  <a href="form-vertical.html"> Vertical Form </a>
                </li>
                <li>
                  <a href="form-mask.html"> Form Mask </a>
                </li>
                <li>
                  <a href="form-validation.html"> Form Validation </a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="la la-table" /> <span> Tables </span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="tables-basic.html">Basic Tables </a>
                </li>
                <li>
                  <a href="data-tables.html">Data Table </a>
                </li>
              </ul>
            </li>
            <li className="menu-title">
              <span>Extras</span>
            </li>
            <li>
              <a href="#">
                <i className="la la-file-text" /> <span>Documentation</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <i className="la la-info" /> <span>Change Log</span>{" "}
                <span className="badge badge-primary ml-auto">v3.4</span>
              </a>
            </li>
            <li className="submenu">
              <a href="javascript:void(0);">
                <i className="la la-share-alt" /> <span>Multi Level</span>{" "}
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li className="submenu">
                  <a href="javascript:void(0);">
                    {" "}
                    <span>Level 1</span> <span className="menu-arrow" />
                  </a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="javascript:void(0);">
                        <span>Level 2</span>
                      </a>
                    </li>
                    <li className="submenu">
                      <a href="javascript:void(0);">
                        {" "}
                        <span> Level 2</span> <span className="menu-arrow" />
                      </a>
                      <ul style={{ display: "none" }}>
                        <li>
                          <a href="javascript:void(0);">Level 3</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Level 3</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        {" "}
                        <span>Level 2</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="javascript:void(0);">
                    {" "}
                    <span>Level 1</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    {/* /Sidebar */}
    {/* Page Wrapper */}
    <div className="page-wrapper">
      {/* Page Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Leave Settings</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Leave Settings</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          <div className="col-md-12">
            {/* Annual Leave */}
            <div className="card leave-box" id="leave_annual">
              <div className="card-body">
                <div className="h3 card-title with-switch">
                  Annual
                  <div className="onoffswitch">
                    <input
                      type="checkbox"
                      name="onoffswitch"
                      className="onoffswitch-checkbox"
                      id="switch_annual"
                      defaultChecked=""
                    />
                    <label
                      className="onoffswitch-label"
                      htmlFor="switch_annual"
                    >
                      <span className="onoffswitch-inner" />
                      <span className="onoffswitch-switch" />
                    </label>
                  </div>
                </div>
                <div className="leave-item">
                  {/* Annual Days Leave */}
                  <div className="leave-row">
                    <div className="leave-left">
                      <div className="input-box">
                        <div className="form-group">
                          <label>Days</label>
                          <input
                            type="text"
                            className="form-control"
                            disabled=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="leave-right">
                      <button className="leave-edit-btn">Edit</button>
                    </div>
                  </div>
                  {/* /Annual Days Leave */}
                  {/* Carry Forward */}
                  <div className="leave-row">
                    <div className="leave-left">
                      <div className="input-box">
                        <label className="d-block">Carry forward</label>
                        <div className="leave-inline-form">
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="carry_no"
                              defaultValue="option1"
                              disabled=""
                            />
                            <label
                              className="form-check-label"
                              htmlFor="carry_no"
                            >
                              No
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="carry_yes"
                              defaultValue="option2"
                              disabled=""
                            />
                            <label
                              className="form-check-label"
                              htmlFor="carry_yes"
                            >
                              Yes
                            </label>
                          </div>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">Max</span>
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              disabled=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="leave-right">
                      <button className="leave-edit-btn">Edit</button>
                    </div>
                  </div>
                  {/* /Carry Forward */}
                  {/* Earned Leave */}
                  <div className="leave-row">
                    <div className="leave-left">
                      <div className="input-box">
                        <label className="d-block">Earned leave</label>
                        <div className="leave-inline-form">
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="earned_no"
                              defaultValue="option1"
                              disabled=""
                            />
                            <label
                              className="form-check-label"
                              htmlFor="earned_no"
                            >
                              No
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="earned_yes"
                              defaultValue="option2"
                              disabled=""
                            />
                            <label
                              className="form-check-label"
                              htmlFor="earned_yes"
                            >
                              Yes
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="leave-right">
                      <button className="leave-edit-btn">Edit</button>
                    </div>
                  </div>
                  {/* /Earned Leave */}
                </div>
                {/* Custom Policy */}
                <div className="custom-policy">
                  <div className="leave-header">
                    <div className="title">Custom policy</div>
                    <div className="leave-action">
                      <button
                        className="btn btn-sm btn-primary"
                        type="button"
                        data-toggle="modal"
                        data-target="#add_custom_policy"
                      >
                        <i className="fa fa-plus" /> Add custom policy
                      </button>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-hover table-nowrap leave-table mb-0">
                      <thead>
                        <tr>
                          <th className="l-name">Name</th>
                          <th className="l-days">Days</th>
                          <th className="l-assignee">Assignee</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>5 Year Service </td>
                          <td>5</td>
                          <td>
                            <a href="#" className="avatar">
                              <img
                                alt=""
                                src="assets/img/profiles/avatar-02.jpg"
                              />
                            </a>
                            <a href="#">John Doe</a>
                          </td>
                          <td className="text-right">
                            <div className="dropdown dropdown-action">
                              <a
                                aria-expanded="false"
                                data-toggle="dropdown"
                                className="action-icon dropdown-toggle"
                                href="#"
                              >
                                <i className="material-icons">more_vert</i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a
                                  href="#"
                                  className="dropdown-item"
                                  data-toggle="modal"
                                  data-target="#edit_custom_policy"
                                >
                                  <i className="fa fa-pencil m-r-5" /> Edit
                                </a>
                                <a
                                  href="#"
                                  className="dropdown-item"
                                  data-toggle="modal"
                                  data-target="#delete_custom_policy"
                                >
                                  <i className="fa fa-trash-o m-r-5" /> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* /Custom Policy */}
              </div>
            </div>
            {/* /Annual Leave */}
            {/* Sick Leave */}
            <div className="card leave-box" id="leave_sick">
              <div className="card-body">
                <div className="h3 card-title with-switch">
                  Sick
                  <div className="onoffswitch">
                    <input
                      type="checkbox"
                      name="onoffswitch"
                      className="onoffswitch-checkbox"
                      id="switch_sick"
                      defaultChecked=""
                    />
                    <label className="onoffswitch-label" htmlFor="switch_sick">
                      <span className="onoffswitch-inner" />
                      <span className="onoffswitch-switch" />
                    </label>
                  </div>
                </div>
                <div className="leave-item">
                  <div className="leave-row">
                    <div className="leave-left">
                      <div className="input-box">
                        <div className="form-group">
                          <label>Days</label>
                          <input
                            type="text"
                            className="form-control"
                            disabled=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="leave-right">
                      <button className="leave-edit-btn">Edit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Sick Leave */}
            {/* Hospitalisation Leave */}
            <div className="card leave-box" id="leave_hospitalisation">
              <div className="card-body">
                <div className="h3 card-title with-switch">
                  Hospitalisation
                  <div className="onoffswitch">
                    <input
                      type="checkbox"
                      name="onoffswitch"
                      className="onoffswitch-checkbox"
                      id="switch_hospitalisation"
                    />
                    <label
                      className="onoffswitch-label"
                      htmlFor="switch_hospitalisation"
                    >
                      <span className="onoffswitch-inner" />
                      <span className="onoffswitch-switch" />
                    </label>
                  </div>
                </div>
                <div className="leave-item">
                  {/* Annual Days Leave */}
                  <div className="leave-row">
                    <div className="leave-left">
                      <div className="input-box">
                        <div className="form-group">
                          <label>Days</label>
                          <input
                            type="text"
                            className="form-control"
                            disabled=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="leave-right">
                      <button className="leave-edit-btn">Edit</button>
                    </div>
                  </div>
                  {/* /Annual Days Leave */}
                </div>
                {/* Custom Policy */}
                <div className="custom-policy">
                  <div className="leave-header">
                    <div className="title">Custom policy</div>
                    <div className="leave-action">
                      <button
                        className="btn btn-sm btn-primary"
                        type="button"
                        data-toggle="modal"
                        data-target="#add_custom_policy"
                      >
                        <i className="fa fa-plus" /> Add custom policy
                      </button>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-hover table-nowrap leave-table mb-0">
                      <thead>
                        <tr>
                          <th className="l-name">Name</th>
                          <th className="l-days">Days</th>
                          <th className="l-assignee">Assignee</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>5 Year Service </td>
                          <td>5</td>
                          <td>
                            <a href="#" className="avatar">
                              <img
                                alt=""
                                src="assets/img/profiles/avatar-02.jpg"
                              />
                            </a>
                            <a href="#">John Doe</a>
                          </td>
                          <td className="text-right">
                            <div className="dropdown dropdown-action">
                              <a
                                aria-expanded="false"
                                data-toggle="dropdown"
                                className="action-icon dropdown-toggle"
                                href="#"
                              >
                                <i className="material-icons">more_vert</i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a href="#" className="dropdown-item">
                                  <i className="fa fa-pencil m-r-5" /> Edit
                                </a>
                                <a href="#" className="dropdown-item">
                                  <i className="fa fa-trash-o m-r-5" /> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* /Custom Policy */}
              </div>
            </div>
            {/* /Hospitalisation Leave */}
            {/* Maternity Leave */}
            <div className="card leave-box" id="leave_maternity">
              <div className="card-body">
                <div className="h3 card-title with-switch">
                  Maternity{" "}
                  <span className="subtitle">Assigned to female only</span>
                  <div className="onoffswitch">
                    <input
                      type="checkbox"
                      name="onoffswitch"
                      className="onoffswitch-checkbox"
                      id="switch_maternity"
                      defaultChecked=""
                    />
                    <label
                      className="onoffswitch-label"
                      htmlFor="switch_maternity"
                    >
                      <span className="onoffswitch-inner" />
                      <span className="onoffswitch-switch" />
                    </label>
                  </div>
                </div>
                <div className="leave-item">
                  <div className="leave-row">
                    <div className="leave-left">
                      <div className="input-box">
                        <div className="form-group">
                          <label>Days</label>
                          <input
                            type="text"
                            className="form-control"
                            disabled=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="leave-right">
                      <button className="leave-edit-btn">Edit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Maternity Leave */}
            {/* Paternity Leave */}
            <div className="card leave-box" id="leave_paternity">
              <div className="card-body">
                <div className="h3 card-title with-switch">
                  Paternity{" "}
                  <span className="subtitle">Assigned to male only</span>
                  <div className="onoffswitch">
                    <input
                      type="checkbox"
                      name="onoffswitch"
                      className="onoffswitch-checkbox"
                      id="switch_paternity"
                    />
                    <label
                      className="onoffswitch-label"
                      htmlFor="switch_paternity"
                    >
                      <span className="onoffswitch-inner" />
                      <span className="onoffswitch-switch" />
                    </label>
                  </div>
                </div>
                <div className="leave-item">
                  <div className="leave-row">
                    <div className="leave-left">
                      <div className="input-box">
                        <div className="form-group">
                          <label>Days</label>
                          <input
                            type="text"
                            className="form-control"
                            disabled=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="leave-right">
                      <button className="leave-edit-btn">Edit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Paternity Leave */}
            {/* Custom Create Leave */}
            <div className="card leave-box mb-0" id="leave_custom01">
              <div className="card-body">
                <div className="h3 card-title with-switch">
                  LOP
                  <div className="onoffswitch">
                    <input
                      type="checkbox"
                      name="onoffswitch"
                      className="onoffswitch-checkbox"
                      id="switch_custom01"
                      defaultChecked=""
                    />
                    <label
                      className="onoffswitch-label"
                      htmlFor="switch_custom01"
                    >
                      <span className="onoffswitch-inner" />
                      <span className="onoffswitch-switch" />
                    </label>
                  </div>
                  <button
                    className="btn btn-danger leave-delete-btn"
                    type="button"
                  >
                    Delete
                  </button>
                </div>
                <div className="leave-item">
                  {/* Annual Days Leave */}
                  <div className="leave-row">
                    <div className="leave-left">
                      <div className="input-box">
                        <div className="form-group">
                          <label>Days</label>
                          <input
                            type="text"
                            className="form-control"
                            disabled=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="leave-right">
                      <button className="leave-edit-btn">Edit</button>
                    </div>
                  </div>
                  {/* /Annual Days Leave */}
                  {/* Carry Forward */}
                  <div className="leave-row">
                    <div className="leave-left">
                      <div className="input-box">
                        <label className="d-block">Carry forward</label>
                        <div className="leave-inline-form">
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="carryForward"
                              id="carry_no_01"
                              defaultValue="option1"
                              disabled=""
                            />
                            <label
                              className="form-check-label"
                              htmlFor="carry_no_01"
                            >
                              No
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="carryForward"
                              id="carry_yes_01"
                              defaultValue="option2"
                              disabled=""
                            />
                            <label
                              className="form-check-label"
                              htmlFor="carry_yes_01"
                            >
                              Yes
                            </label>
                          </div>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">Max</span>
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              disabled=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="leave-right">
                      <button className="leave-edit-btn">Edit</button>
                    </div>
                  </div>
                  {/* /Carry Forward */}
                  {/* Earned Leave */}
                  <div className="leave-row">
                    <div className="leave-left">
                      <div className="input-box">
                        <label className="d-block">Earned leave</label>
                        <div className="leave-inline-form">
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="inlineRadio1"
                              defaultValue="option1"
                              disabled=""
                            />
                            <label
                              className="form-check-label"
                              htmlFor="inlineRadio1"
                            >
                              No
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="inlineRadio2"
                              defaultValue="option2"
                              disabled=""
                            />
                            <label
                              className="form-check-label"
                              htmlFor="inlineRadio2"
                            >
                              Yes
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="leave-right">
                      <button className="leave-edit-btn">Edit</button>
                    </div>
                  </div>
                  {/* /Earned Leave */}
                </div>
                {/* Custom Policy */}
                <div className="custom-policy">
                  <div className="leave-header">
                    <div className="title">Custom policy</div>
                    <div className="leave-action">
                      <button
                        className="btn btn-sm btn-primary"
                        type="button"
                        data-toggle="modal"
                        data-target="#add_custom_policy"
                      >
                        <i className="fa fa-plus" /> Add custom policy
                      </button>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-hover table-nowrap leave-table mb-0">
                      <thead>
                        <tr>
                          <th className="l-name">Name</th>
                          <th className="l-days">Days</th>
                          <th className="l-assignee">Assignee</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>5 Year Service </td>
                          <td>5</td>
                          <td>
                            <a href="#" className="avatar">
                              <img
                                alt=""
                                src="assets/img/profiles/avatar-02.jpg"
                              />
                            </a>
                            <a href="#">John Doe</a>
                          </td>
                          <td className="text-right">
                            <div className="dropdown dropdown-action">
                              <a
                                aria-expanded="false"
                                data-toggle="dropdown"
                                className="action-icon dropdown-toggle"
                                href="#"
                              >
                                <i className="material-icons">more_vert</i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a
                                  href="#"
                                  className="dropdown-item"
                                  data-toggle="modal"
                                  data-target="#edit_custom_policy"
                                >
                                  <i className="fa fa-pencil m-r-5" /> Edit
                                </a>
                                <a
                                  href="#"
                                  className="dropdown-item"
                                  data-toggle="modal"
                                  data-target="#delete_custom_policy"
                                >
                                  <i className="fa fa-trash-o m-r-5" /> Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* /Custom Policy */}
              </div>
            </div>
            {/* /Custom Create Leave */}
          </div>
        </div>
      </div>
      {/* /Page Content */}
      {/* Add Custom Policy Modal */}
      <div
        id="add_custom_policy"
        className="modal custom-modal fade"
        role="dialog"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Custom Policy</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label>
                    Policy Name <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label>
                    Days <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group leave-duallist">
                  <label>Add employee</label>
                  <div className="row">
                    <div className="col-lg-5 col-sm-5">
                      <select
                        name="customleave_from"
                        id="customleave_select"
                        className="form-control"
                        size={5}
                        multiple="multiple"
                      >
                        <option value={1}>Bernardo Galaviz </option>
                        <option value={2}>Jeffrey Warden</option>
                        <option value={2}>John Doe</option>
                        <option value={2}>John Smith</option>
                        <option value={3}>Mike Litorus</option>
                      </select>
                    </div>
                    <div className="multiselect-controls col-lg-2 col-sm-2">
                      <button
                        type="button"
                        id="customleave_select_rightAll"
                        className="btn btn-block btn-white"
                      >
                        <i className="fa fa-forward" />
                      </button>
                      <button
                        type="button"
                        id="customleave_select_rightSelected"
                        className="btn btn-block btn-white"
                      >
                        <i className="fa fa-chevron-right" />
                      </button>
                      <button
                        type="button"
                        id="customleave_select_leftSelected"
                        className="btn btn-block btn-white"
                      >
                        <i className="fa fa-chevron-left" />
                      </button>
                      <button
                        type="button"
                        id="customleave_select_leftAll"
                        className="btn btn-block btn-white"
                      >
                        <i className="fa fa-backward" />
                      </button>
                    </div>
                    <div className="col-lg-5 col-sm-5">
                      <select
                        name="customleave_to"
                        id="customleave_select_to"
                        className="form-control"
                        size={8}
                        multiple="multiple"
                      />
                    </div>
                  </div>
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Custom Policy Modal */}
      {/* Edit Custom Policy Modal */}
      <div
        id="edit_custom_policy"
        className="modal custom-modal fade"
        role="dialog"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Custom Policy</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label>
                    Policy Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="LOP"
                  />
                </div>
                <div className="form-group">
                  <label>
                    Days <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={4}
                  />
                </div>
                <div className="form-group leave-duallist">
                  <label>Add employee</label>
                  <div className="row">
                    <div className="col-lg-5 col-sm-5">
                      <select
                        name="edit_customleave_from"
                        id="edit_customleave_select"
                        className="form-control"
                        size={5}
                        multiple="multiple"
                      >
                        <option value={1}>Bernardo Galaviz </option>
                        <option value={2}>Jeffrey Warden</option>
                        <option value={2}>John Doe</option>
                        <option value={2}>John Smith</option>
                        <option value={3}>Mike Litorus</option>
                      </select>
                    </div>
                    <div className="multiselect-controls col-lg-2 col-sm-2">
                      <button
                        type="button"
                        id="edit_customleave_select_rightAll"
                        className="btn btn-block btn-white"
                      >
                        <i className="fa fa-forward" />
                      </button>
                      <button
                        type="button"
                        id="edit_customleave_select_rightSelected"
                        className="btn btn-block btn-white"
                      >
                        <i className="fa fa-chevron-right" />
                      </button>
                      <button
                        type="button"
                        id="edit_customleave_select_leftSelected"
                        className="btn btn-block btn-white"
                      >
                        <i className="fa fa-chevron-left" />
                      </button>
                      <button
                        type="button"
                        id="edit_customleave_select_leftAll"
                        className="btn btn-block btn-white"
                      >
                        <i className="fa fa-backward" />
                      </button>
                    </div>
                    <div className="col-lg-5 col-sm-5">
                      <select
                        name="customleave_to"
                        id="edit_customleave_select_to"
                        className="form-control"
                        size={8}
                        multiple="multiple"
                      />
                    </div>
                  </div>
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Custom Policy Modal */}
      {/* Delete Custom Policy Modal */}
      <div
        className="modal custom-modal fade"
        id="delete_custom_policy"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="form-header">
                <h3>Delete Custom Policy</h3>
                <p>Are you sure want to delete?</p>
              </div>
              <div className="modal-btn delete-action">
                <div className="row">
                  <div className="col-6">
                    <a
                      href="javascript:void(0);"
                      className="btn btn-primary continue-btn"
                    >
                      Delete
                    </a>
                  </div>
                  <div className="col-6">
                    <a
                      href="javascript:void(0);"
                      data-dismiss="modal"
                      className="btn btn-primary cancel-btn"
                    >
                      Cancel
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Delete Custom Policy Modal */}
    </div>
    {/* /Page Wrapper */}
  </div>
  {/* /Main Wrapper */}
  {/* jQuery */}
  {/* Bootstrap Core JS */}
  {/* Slimscroll JS */}
  {/* Select2 JS */}
  {/* Datetimepicker JS */}
  {/* Multiselect JS */}
  {/* Custom JS */}
</>
    )
}

export default LeavesSettings