import { useState } from "react";
import Header from "./components/Header";
import TabBar from "./components/TabBar";
import HomePage from "./components/HomePage";
import ShopList from "./components/ShopList";
import ShopDetail from "./components/ShopDetail";
import BookingForm from "./components/BookingForm";
import { shops } from "./data/shops";
import "./App.css";

export default function App() {
  const [tab, setTab] = useState("home");
  const [view, setView] = useState("main");
  const [selectedShop, setSelectedShop] = useState(null);

  const handleShopClick = (shopId) => {
    const shop = shops.find((s) => s.id === shopId);
    setSelectedShop(shop);
    setView("detail");
  };

  const handleBack = () => {
    setView("main");
  };

  const handleBooking = (shop) => {
    setSelectedShop(shop);
    setView("booking");
  };

  const handleTabChange = (newTab) => {
    setTab(newTab);
    setView("main");
  };

  if (view === "detail" && selectedShop) {
    return (
      <div className="app">
        <ShopDetail
          shop={selectedShop}
          onBack={handleBack}
          onBooking={handleBooking}
        />
      </div>
    );
  }

  if (view === "booking") {
    return (
      <div className="app">
        <BookingForm selectedShop={selectedShop} onBack={handleBack} />
      </div>
    );
  }

  return (
    <div className="app">
      <Header />
      <main className="app-main">
        {tab === "home" && <HomePage onShopClick={handleShopClick} />}
        {tab === "shops" && <ShopList onShopClick={handleShopClick} />}
        {tab === "booking" && (
          <BookingForm selectedShop={null} onBack={() => setTab("home")} />
        )}
      </main>
      <TabBar activeTab={tab} onTabChange={handleTabChange} />
    </div>
  );
}
