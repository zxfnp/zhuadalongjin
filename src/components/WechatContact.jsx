import { copyWechat } from "../utils/share";
import { config } from "../data/shops";

export default function WechatContact({ compact = false }) {
  if (compact) {
    return (
      <button className="wechat-btn-compact" onClick={copyWechat}>
        💬 一键复制微信
      </button>
    );
  }

  return (
    <div className="wechat-contact">
      <div className="wechat-card">
        <div className="wechat-avatar">👤</div>
        <div className="wechat-info">
          <div className="wechat-name">{config.yourWechatName}</div>
          <div className="wechat-desc">广州抓龙筋推荐 · 专业预约</div>
        </div>
        <button className="wechat-add-btn" onClick={copyWechat}>
          加微信
        </button>
      </div>
      <p className="wechat-tip">
        点击上方按钮复制微信号，打开微信添加我，帮你推荐最合适的店铺
      </p>
    </div>
  );
}
