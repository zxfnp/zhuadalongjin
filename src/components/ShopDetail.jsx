import { useState } from "react";
import { renderStars, openNavigation } from "../utils/share";
import ReviewCard from "./ReviewCard";
import WechatContact from "./WechatContact";

export default function ShopDetail({ shop, onBack, onBooking }) {
  const [photoIdx, setPhotoIdx] = useState(0);

  if (!shop) return null;

  const hasPhotos = shop.photos && shop.photos.length > 0;
  const photoCount = hasPhotos ? shop.photos.length : 1;

  const prevPhoto = () => {
    setPhotoIdx((i) => (i === 0 ? photoCount - 1 : i - 1));
  };
  const nextPhoto = () => {
    setPhotoIdx((i) => (i === photoCount - 1 ? 0 : i + 1));
  };

  return (
    <div className="page shop-detail-page">
      <button className="back-btn" onClick={onBack}>
        ← 返回
      </button>

      {/* 照片轮播 */}
      <div className="photo-carousel">
        <div
          className={`photo-slide ${!hasPhotos ? "photo-placeholder" : ""}`}
          style={
            hasPhotos
              ? { backgroundImage: `url(${shop.photos[photoIdx]})` }
              : {}
          }
        >
          {!hasPhotos && (
            <span className="placeholder-large">暂无照片</span>
          )}
          {photoCount > 1 && (
            <>
              <button className="photo-nav photo-prev" onClick={prevPhoto}>
                ‹
              </button>
              <button className="photo-nav photo-next" onClick={nextPhoto}>
                ›
              </button>
              <div className="photo-dots">
                {Array.from({ length: photoCount }).map((_, i) => (
                  <span
                    key={i}
                    className={`dot ${i === photoIdx ? "active" : ""}`}
                    onClick={() => setPhotoIdx(i)}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* 基本信息 */}
      <div className="detail-section">
        <div className="detail-header">
          <h2 className="detail-name">{shop.name}</h2>
          <span className="detail-type">{shop.type}</span>
        </div>
        <div className="detail-rating">
          <span className="stars-gold">{renderStars(shop.rating)}</span>
          <span className="rating-score">{shop.rating}</span>
          <span className="rating-count">({shop.reviewCount}条评价)</span>
        </div>
        <div className="detail-tags">
          {shop.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <p className="detail-address">📍 {shop.address}</p>
        <p className="detail-hours">🕐 {shop.businessHours}</p>
        <p className="detail-desc">{shop.description}</p>

        {/* 导航按钮 */}
        <button
          className="nav-btn"
          onClick={() => openNavigation(shop.address)}
        >
          🗺️ 导航到店
        </button>
      </div>

      {/* 服务项目 */}
      <div className="detail-section">
        <h3 className="section-subtitle">💆 服务项目</h3>
        <div className="service-list">
          {shop.services.map((svc) => (
            <div key={svc.name} className="service-item">
              <div className="service-info">
                <span className="service-name">{svc.name}</span>
                <span className="service-duration">{svc.duration}</span>
              </div>
              <span className="service-price">¥{svc.price}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 客户评价 */}
      <div className="detail-section">
        <h3 className="section-subtitle">💬 客户评价</h3>
        <div className="review-list">
          {shop.reviews.map((r, i) => (
            <ReviewCard key={i} review={r} />
          ))}
        </div>
      </div>

      {/* 操作按钮 */}
      <div className="detail-actions">
        <button
          className="action-btn action-primary"
          onClick={() => onBooking(shop)}
        >
          📅 立即预约
        </button>
        <WechatContact compact />
      </div>
    </div>
  );
}
