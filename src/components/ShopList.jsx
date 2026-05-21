import { useState, useMemo } from "react";
import { shops } from "../data/shops";
import ShopCard from "./ShopCard";

export default function ShopList({ onShopClick }) {
  const [filterArea, setFilterArea] = useState("全部");
  const [filterType, setFilterType] = useState("全部");

  const areas = useMemo(() => {
    const set = new Set(shops.map((s) => s.area));
    return ["全部", ...Array.from(set)];
  }, []);

  const types = ["全部", "个人工作室", "品牌店"];

  const filtered = useMemo(() => {
    return shops.filter((s) => {
      if (filterArea !== "全部" && s.area !== filterArea) return false;
      if (filterType !== "全部" && s.type !== filterType) return false;
      return true;
    });
  }, [filterArea, filterType]);

  return (
    <div className="page shop-list-page">
      <div className="filter-bar">
        <div className="filter-row">
          <span className="filter-label">区域</span>
          <div className="filter-options">
            {areas.map((a) => (
              <button
                key={a}
                className={`filter-btn ${filterArea === a ? "active" : ""}`}
                onClick={() => setFilterArea(a)}
              >
                {a}
              </button>
            ))}
          </div>
        </div>
        <div className="filter-row">
          <span className="filter-label">类型</span>
          <div className="filter-options">
            {types.map((t) => (
              <button
                key={t}
                className={`filter-btn ${filterType === t ? "active" : ""}`}
                onClick={() => setFilterType(t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="shop-count">共 {filtered.length} 家店铺</div>

      <div className="shop-list">
        {filtered.map((shop) => (
          <ShopCard key={shop.id} shop={shop} onClick={onShopClick} />
        ))}
      </div>
    </div>
  );
}
