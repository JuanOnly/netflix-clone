import React from "react";

function BottomNav({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'search', label: 'Search', icon: '🔍' },
    { id: 'coming', label: 'Coming Soon', icon: '📅' },
    { id: 'downloads', label: 'Downloads', icon: '⬇️' },
  ];

  return (
    <div className="bottomNav">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`bottomNav__item ${activeTab === tab.id ? 'bottomNav__item--active' : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          <span className="bottomNav__icon">{tab.icon}</span>
          <span className="bottomNav__label">{tab.label}</span>
        </div>
      ))}
    </div>
  );
}

export default BottomNav;
