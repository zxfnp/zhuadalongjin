export default function TabBar({ activeTab, onTabChange }) {
  const tabs = [
    { key: "home", label: "首页", icon: "🏠" },
    { key: "shops", label: "全部店铺", icon: "🏪" },
    { key: "booking", label: "预约", icon: "📅" },
  ];

  return (
    <nav className="tab-bar">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          className={`tab-btn ${activeTab === tab.key ? "active" : ""}`}
          onClick={() => onTabChange(tab.key)}
        >
          <span className="tab-icon">{tab.icon}</span>
          <span className="tab-label">{tab.label}</span>
        </button>
      ))}
    </nav>
  );
}
