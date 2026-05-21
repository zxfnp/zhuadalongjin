import { shops } from "../data/shops";
import ShopCard from "./ShopCard";
import WechatContact from "./WechatContact";

export default function HomePage({ onShopClick }) {
  const featured = shops.filter((s) => s.featured);

  return (
    <div className="page home-page">
      <div className="hero-banner">
        <h1 className="hero-title">广州专业抓龙筋</h1>
        <p className="hero-desc">精选优质店铺 · 帮你找到最合适的</p>
      </div>

      <section className="section">
        <h2 className="section-title">🔥 热门推荐</h2>
        <div className="shop-list">
          {featured.map((shop) => (
            <ShopCard key={shop.id} shop={shop} onClick={onShopClick} />
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">✨ 为什么选我们</h2>
        <div className="features">
          <div className="feature-item">
            <span className="feature-icon">🔍</span>
            <span className="feature-label">精选10+店铺</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">💰</span>
            <span className="feature-label">价格透明</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">⭐</span>
            <span className="feature-label">真实评价</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">📞</span>
            <span className="feature-label">免费预约</span>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">📲 联系我预约</h2>
        <WechatContact />
      </section>
    </div>
  );
}
