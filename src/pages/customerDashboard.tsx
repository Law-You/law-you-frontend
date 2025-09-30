import React from "react";
import "../styles/customerDashboard.css";

const customerDashboard: React.FC = () => {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">LawYou</div>
        <ul className="sidebar-menu">
          <li>Dashboard</li>
          <li>My Cases</li>
          <li>Appointments</li>
          <li>Documents</li>
          <li>Legal Resources</li>
          <li>Find Lawyers</li>
          <li>Support</li>
        </ul>
      </aside>

      {/* Main content */}
      <main className="main-content">
        {/* Top bar */}
        <header className="topbar">
          <nav className="top-links">
            <a href="#">Messages</a>
            <a href="#">Calendar</a>
            <a href="#">Settings</a>
          </nav>
          <div className="top-user">
            <span className="welcome-btn">Welcome John</span>
            <div className="user-avatar"></div>
          </div>
        </header>

        {/* Main sections */}
        <section className="content">
          <h2 className="page-title">Client Dashboard</h2>
          <p className="subtitle">
            Manage your legal cases, track progress, and stay connected with your legal team.
          </p>

          <div className="grid">
            {/* Active Cases */}
            <div className="card span-2">
              <h3>Active Cases</h3>
              <div className="cases">
                <div className="case-box">
                  <h4>Property Dispute</h4>
                  <p>Boundary dispute resolution case</p>
                  <div className="case-user">
                    <div className="avatar"></div>
                    <span>Sarah Mitchell, Esq.</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress"></div>
                  </div>
                </div>
                <div className="case-box">
                  <h4>Contract Review</h4>
                  <p>Employment contract analysis</p>
                  <span className="tag">High Priority</span>
                  <div className="progress-bar">
                    <div className="progress"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming meetings */}
            <div className="card">
              <h3>Upcoming Appointments</h3>
              <div className="meeting">
                <p>Case Review Meeting</p>
                <p className="small">Tomorrow, 2:00 PM - 3:00 PM</p>
                <span>$250.00</span>
              </div>
            </div>

            {/* Legal Team */}
            <div className="card">
              <h3>Your Legal Team</h3>
              <ul className="meeting-list">
                <li>
                  <div className="avatar"></div> Sarah Mitchell
                </li>
                <li>
                  <div className="avatar"></div> David Rodriguez
                </li>
                <li>
                  <div className="avatar"></div> Emily Johnson
                </li>
                <li>
                  <div className="avatar"></div> Michael Thompson
                </li>
              </ul>
            </div>

            {/* Support & Feedback */}
            <div className="card">
              <h3>Support & Feedback</h3>
              <p>Need help or have questions? Our support team is here to assist you.</p>
              <button className="btn">Contact Support</button>
            </div>

            {/* Legal News */}
            <div className="card">
              <h3>Legal News</h3>
              <p>Stay updated with the latest legal developments and news.</p>
            </div>

            {/* Resource Section */}
            <div className="card">
              <h3>Resource Center</h3>
              <p>
                Access legal guides, templates, and educational materials to help you understand your case better.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default customerDashboard;
