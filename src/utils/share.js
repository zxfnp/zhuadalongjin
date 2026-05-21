import { config } from "../data/shops";

// 复制微信号到剪贴板
export function copyWechat() {
  const wechatId = config.yourWechatId;
  navigator.clipboard.writeText(wechatId).then(() => {
    showToast("微信号已复制：" + wechatId + "\n请打开微信添加好友");
  }).catch(() => {
    showToast("微信号：" + wechatId + "\n请手动复制添加");
  });
}

// 生成预约话术并复制
export function generateBookingMessage({ name, phone, shopName, service, time }) {
  const msg = [
    "你好，我想预约店铺：",
    "店铺：" + shopName,
    "称呼：" + name,
    "联系方式：" + phone,
    "想做的项目：" + (service || "到店再选"),
    "期望时间：" + (time || "待沟通"),
    "",
    "请帮我安排一下，谢谢！",
  ].join("\n");

  navigator.clipboard.writeText(msg).then(() => {
    showToast("预约信息已复制！\n请发送给我，我会尽快帮你安排");
  }).catch(() => {
    showToast("复制失败，请截图发给我");
  });

  return msg;
}

// Toast 提示
function showToast(text) {
  const existing = document.querySelector(".toast-container");
  if (existing) existing.remove();

  const container = document.createElement("div");
  container.className = "toast-container";
  container.innerHTML = `<div class="toast-content">${text.replace(/\n/g, "<br>")}</div>`;
  document.body.appendChild(container);

  setTimeout(() => {
    container.classList.add("toast-show");
  }, 10);

  setTimeout(() => {
    container.classList.remove("toast-show");
    setTimeout(() => container.remove(), 300);
  }, 3000);
}

// 打开地图导航
export function openNavigation(address) {
  const fullAddress = "广州市" + address;
  const encoded = encodeURIComponent(fullAddress);
  // 尝试高德地图，失败则用网页版
  const url = `https://uri.amap.com/navigation?to=${encoded}`;
  window.open(url, "_blank");
}

// 星级渲染辅助
export function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  let html = "";
  for (let i = 0; i < full; i++) html += "★";
  if (half) html += "☆";
  const empty = 5 - full - (half ? 1 : 0);
  for (let i = 0; i < empty; i++) html += "☆";
  return html;
}
