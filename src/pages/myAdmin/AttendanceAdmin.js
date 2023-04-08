import React from 'react'

function AttendanceAdmin() {
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
                     <a href="leave-settings.html">Leave Settings</a>
                   </li>
                   <li>
                     <a className="active" href="attendance.html">
                       Attendance (Admin)
                     </a>
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
         <div className="content container-fluid">
           {/* Page Header */}
           <div className="page-header">
             <div className="row">
               <div className="col-sm-12">
                 <h3 className="page-title">Attendance</h3>
                 <ul className="breadcrumb">
                   <li className="breadcrumb-item">
                     <a href="index.html">Dashboard</a>
                   </li>
                   <li className="breadcrumb-item active">Attendance</li>
                 </ul>
               </div>
             </div>
           </div>
           {/* /Page Header */}
           {/* Search Filter */}
           <div className="row filter-row">
             <div className="col-sm-6 col-md-3">
               <div className="form-group form-focus">
                 <input type="text" className="form-control floating" />
                 <label className="focus-label">Employee Name</label>
               </div>
             </div>
             <div className="col-sm-6 col-md-3">
               <div className="form-group form-focus select-focus">
                 <select className="select floating">
                   <option>-</option>
                   <option>Jan</option>
                   <option>Feb</option>
                   <option>Mar</option>
                   <option>Apr</option>
                   <option>May</option>
                   <option>Jun</option>
                   <option>Jul</option>
                   <option>Aug</option>
                   <option>Sep</option>
                   <option>Oct</option>
                   <option>Nov</option>
                   <option>Dec</option>
                 </select>
                 <label className="focus-label">Select Month</label>
               </div>
             </div>
             <div className="col-sm-6 col-md-3">
               <div className="form-group form-focus select-focus">
                 <select className="select floating">
                   <option>-</option>
                   <option>2019</option>
                   <option>2018</option>
                   <option>2017</option>
                   <option>2016</option>
                   <option>2015</option>
                 </select>
                 <label className="focus-label">Select Year</label>
               </div>
             </div>
             <div className="col-sm-6 col-md-3">
               <a href="#" className="btn btn-success btn-block">
                 {" "}
                 Search{" "}
               </a>
             </div>
           </div>
           {/* /Search Filter */}
           <div className="row">
             <div className="col-lg-12">
               <div className="table-responsive">
                 <table className="table table-striped custom-table table-nowrap mb-0">
                   <thead>
                     <tr>
                       <th>Employee</th>
                       <th>1</th>
                       <th>2</th>
                       <th>3</th>
                       <th>4</th>
                       <th>5</th>
                       <th>6</th>
                       <th>7</th>
                       <th>8</th>
                       <th>9</th>
                       <th>10</th>
                       <th>11</th>
                       <th>12</th>
                       <th>13</th>
                       <th>14</th>
                       <th>15</th>
                       <th>16</th>
                       <th>17</th>
                       <th>18</th>
                       <th>19</th>
                       <th>20</th>
                       <th>22</th>
                       <th>23</th>
                       <th>24</th>
                       <th>25</th>
                       <th>26</th>
                       <th>27</th>
                       <th>28</th>
                       <th>29</th>
                       <th>30</th>
                       <th>31</th>
                     </tr>
                   </thead>
                   <tbody>
                     <tr>
                       <td>
                         <h2 className="table-avatar">
                           <a className="avatar avatar-xs" href="profile.html">
                             <img alt="" src="assets/img/profiles/avatar-09.jpg" />
                           </a>
                           <a href="profile.html">John Doe</a>
                         </h2>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <div className="half-day">
                           <span className="first-off">
                             <a
                               href="javascript:void(0);"
                               data-toggle="modal"
                               data-target="#attendance_info"
                             >
                               <i className="fa fa-check text-success" />
                             </a>
                           </span>
                           <span className="first-off">
                             <i className="fa fa-close text-danger" />
                           </span>
                         </div>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <div className="half-day">
                           <span className="first-off">
                             <i className="fa fa-close text-danger" />
                           </span>
                           <span className="first-off">
                             <a
                               href="javascript:void(0);"
                               data-toggle="modal"
                               data-target="#attendance_info"
                             >
                               <i className="fa fa-check text-success" />
                             </a>
                           </span>
                         </div>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                     </tr>
                     <tr>
                       <td>
                         <h2 className="table-avatar">
                           <a className="avatar avatar-xs" href="profile.html">
                             <img alt="" src="assets/img/profiles/avatar-09.jpg" />
                           </a>
                           <a href="profile.html">Richard Miles</a>
                         </h2>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                     </tr>
                     <tr>
                       <td>
                         <h2 className="table-avatar">
                           <a className="avatar avatar-xs" href="profile.html">
                             <img alt="" src="assets/img/profiles/avatar-10.jpg" />
                           </a>
                           <a href="profile.html">John Smith</a>
                         </h2>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                     </tr>
                     <tr>
                       <td>
                         <h2 className="table-avatar">
                           <a className="avatar avatar-xs" href="profile.html">
                             <img alt="" src="assets/img/profiles/avatar-05.jpg" />
                           </a>
                           <a href="profile.html">Mike Litorus</a>
                         </h2>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                     </tr>
                     <tr>
                       <td>
                         <h2 className="table-avatar">
                           <a className="avatar avatar-xs" href="profile.html">
                             <img alt="" src="assets/img/profiles/avatar-11.jpg" />
                           </a>
                           <a href="profile.html">Wilmer Deluna</a>
                         </h2>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                     </tr>
                     <tr>
                       <td>
                         <h2 className="table-avatar">
                           <a className="avatar avatar-xs" href="profile.html">
                             <img alt="" src="assets/img/profiles/avatar-12.jpg" />
                           </a>
                           <a href="profile.html">Jeffrey Warden</a>
                         </h2>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                     </tr>
                     <tr>
                       <td>
                         <h2 className="table-avatar">
                           <a className="avatar avatar-xs" href="profile.html">
                             <img alt="" src="assets/img/profiles/avatar-13.jpg" />
                           </a>
                           <a href="profile.html">Bernardo Galaviz</a>
                         </h2>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                     </tr>
                     <tr>
                       <td>
                         <h2 className="table-avatar">
                           <a className="avatar avatar-xs" href="profile.html">
                             <img alt="" src="assets/img/profiles/avatar-01.jpg" />
                           </a>
                           <a href="profile.html">Lesley Grauer</a>
                         </h2>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                     </tr>
                     <tr>
                       <td>
                         <h2 className="table-avatar">
                           <a className="avatar avatar-xs" href="profile.html">
                             <img alt="" src="assets/img/profiles/avatar-16.jpg" />
                           </a>
                           <a href="profile.html">Jeffery Lalor</a>
                         </h2>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                     </tr>
                     <tr>
                       <td>
                         <h2 className="table-avatar">
                           <a className="avatar avatar-xs" href="profile.html">
                             <img alt="" src="assets/img/profiles/avatar-04.jpg" />
                           </a>
                           <a href="profile.html">Loren Gatlin</a>
                         </h2>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <i className="fa fa-close text-danger" />{" "}
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                       <td>
                         <a
                           href="javascript:void(0);"
                           data-toggle="modal"
                           data-target="#attendance_info"
                         >
                           <i className="fa fa-check text-success" />
                         </a>
                       </td>
                     </tr>
                   </tbody>
                 </table>
               </div>
             </div>
           </div>
         </div>
         {/* /Page Content */}
         {/* Attendance Modal */}
         <div
           className="modal custom-modal fade"
           id="attendance_info"
           role="dialog"
         >
           <div
             className="modal-dialog modal-dialog-centered modal-lg"
             role="document"
           >
             <div className="modal-content">
               <div className="modal-header">
                 <h5 className="modal-title">Attendance Info</h5>
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
                 <div className="row">
                   <div className="col-md-6">
                     <div className="card punch-status">
                       <div className="card-body">
                         <h5 className="card-title">
                           Timesheet{" "}
                           <small className="text-muted">11 Mar 2019</small>
                         </h5>
                         <div className="punch-det">
                           <h6>Punch In at</h6>
                           <p>Wed, 11th Mar 2019 10.00 AM</p>
                         </div>
                         <div className="punch-info">
                           <div className="punch-hours">
                             <span>3.45 hrs</span>
                           </div>
                         </div>
                         <div className="punch-det">
                           <h6>Punch Out at</h6>
                           <p>Wed, 20th Feb 2019 9.00 PM</p>
                         </div>
                         <div className="statistics">
                           <div className="row">
                             <div className="col-md-6 col-6 text-center">
                               <div className="stats-box">
                                 <p>Break</p>
                                 <h6>1.21 hrs</h6>
                               </div>
                             </div>
                             <div className="col-md-6 col-6 text-center">
                               <div className="stats-box">
                                 <p>Overtime</p>
                                 <h6>3 hrs</h6>
                               </div>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                   <div className="col-md-6">
                     <div className="card recent-activity">
                       <div className="card-body">
                         <h5 className="card-title">Activity</h5>
                         <ul className="res-activity-list">
                           <li>
                             <p className="mb-0">Punch In at</p>
                             <p className="res-activity-time">
                               <i className="fa fa-clock-o" />
                               10.00 AM.
                             </p>
                           </li>
                           <li>
                             <p className="mb-0">Punch Out at</p>
                             <p className="res-activity-time">
                               <i className="fa fa-clock-o" />
                               11.00 AM.
                             </p>
                           </li>
                           <li>
                             <p className="mb-0">Punch In at</p>
                             <p className="res-activity-time">
                               <i className="fa fa-clock-o" />
                               11.15 AM.
                             </p>
                           </li>
                           <li>
                             <p className="mb-0">Punch Out at</p>
                             <p className="res-activity-time">
                               <i className="fa fa-clock-o" />
                               1.30 PM.
                             </p>
                           </li>
                           <li>
                             <p className="mb-0">Punch In at</p>
                             <p className="res-activity-time">
                               <i className="fa fa-clock-o" />
                               2.00 PM.
                             </p>
                           </li>
                           <li>
                             <p className="mb-0">Punch Out at</p>
                             <p className="res-activity-time">
                               <i className="fa fa-clock-o" />
                               7.30 PM.
                             </p>
                           </li>
                         </ul>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
         {/* /Attendance Modal */}
       </div>
       {/* Page Wrapper */}
     </div>
     {/* /Main Wrapper */}
     {/* jQuery */}
     {/* Bootstrap Core JS */}
     {/* Slimscroll JS */}
     {/* Select2 JS */}
     {/* Datetimepicker JS */}
     {/* Custom JS */}
   </>
   
  
  )
}

export default AttendanceAdmin