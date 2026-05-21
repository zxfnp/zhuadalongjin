import { useState } from "react";
import { shops, config } from "../data/shops";
import { generateBookingMessage } from "../utils/share";

export default function BookingForm({ selectedShop, onBack }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    shopId: selectedShop ? selectedShop.id : "",
    service: "",
    time: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const selectedShopData = shops.find((s) => s.id === Number(form.shopId));

  const handleSubmit = (e) => {
    e.preventDefault();
    const shopName = selectedShopData ? selectedShopData.name : shops[0].name;
    const msg = generateBookingMessage({
      name: form.name,
      phone: form.phone,
      shopName,
      service: form.service,
      time: form.time,
    });
    if (msg) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="page booking-page">
        <div className="booking-success">
          <div className="success-icon">✅</div>
          <h2>信息已复制！</h2>
          <p>请打开微信，将刚才复制的内容发给我</p>
          <div className="success-wechat-id">
            我的微信号：<strong>{config.yourWechatId}</strong>
          </div>
          <button
            className="action-btn action-primary"
            onClick={() => {
              // 尝试跳转微信
              window.location.href = "weixin://";
              setTimeout(() => {
                setSubmitted(false);
                setForm({ name: "", phone: "", shopId: "", service: "", time: "" });
                onBack();
              }, 1000);
            }}
          >
            打开微信联系我
          </button>
          <button
            className="action-btn action-secondary"
            onClick={() => {
              setSubmitted(false);
              setForm({ name: "", phone: "", shopId: "", service: "", time: "" });
              onBack();
            }}
          >
            返回首页
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page booking-page">
      <button className="back-btn" style={{ position: "static", margin: "12px" }} onClick={onBack}>
        ← 返回
      </button>

      <div className="booking-header">
        <h2>📅 预约店铺</h2>
        <p>填写信息后自动生成预约话术，复制发给我的微信即可</p>
      </div>

      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>怎么称呼你</label>
          <input
            type="text"
            placeholder="如：张先生"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label>手机号 / 微信号</label>
          <input
            type="text"
            placeholder="方便联系到你"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label>选择店铺</label>
          <select
            value={form.shopId}
            onChange={(e) => setForm({ ...form, shopId: e.target.value })}
            required
          >
            <option value="">-- 请选择 --</option>
            {shops.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}（{s.area}）
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>想做的项目（可选）</label>
          <select
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
          >
            <option value="">-- 到店再选 --</option>
            {selectedShopData &&
              selectedShopData.services.map((svc) => (
                <option key={svc.name} value={svc.name}>
                  {svc.name} - ¥{svc.price}/{svc.duration}
                </option>
              ))}
          </select>
        </div>

        <div className="form-group">
          <label>期望时间（可选）</label>
          <input
            type="text"
            placeholder="如：5月22日下午3点"
            value={form.time}
            onChange={(e) => setForm({ ...form, time: e.target.value })}
          />
        </div>

        <button type="submit" className="action-btn action-primary">
          📋 生成预约信息并复制
        </button>
      </form>
    </div>
  );
}
