import { renderStars } from "../utils/share";

export default function ShopCard({ shop, onClick }) {
  const bgStyle =
    shop.photos && shop.photos.length > 0
      ? { backgroundImage: `url(${shop.photos[0]})` }
      : {};

  return (
    <div className="shop-card" onClick={() => onClick(shop.id)}>
      <div
        className={`shop-card-img ${!bgStyle.backgroundImage ? "shop-card-placeholder" : ""}`}
        style={bgStyle}
      >
        {!bgStyle.backgroundImage && (
          <span className="placeholder-text">暂无照片</span>
        )}
        <span className="shop-card-badge">{shop.type}</span>
      </div>
      <div className="shop-card-body">
        <h3 className="shop-card-name">{shop.name}</h3>
        <div className="shop-card-info">
          <span className="shop-card-area">📍 {shop.area}</span>
          <span className="shop-card-rating">
            <span className="stars-gold">{renderStars(shop.rating)}</span>
            <span className="rating-num">{shop.rating}</span>
            <span className="review-count">({shop.reviewCount}评)</span>
          </span>
        </div>
        <div className="shop-card-tags">
          {shop.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
