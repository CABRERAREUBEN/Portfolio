import "./PopupWindow1.css";
const PopupWindow1 = ({ onClose }) => {
  return (
    <div className="popup-window1">
      <b className="authenticate-your-item1">Authenticate your item</b>
      <div className="popup-window-item" />
      <img className="camera-icon" alt="" src="/camera.svg" />
      <img className="popup-window-inner" alt="" src="/group-27.svg" />
      <div className="rectangle-parent30">
        <div className="group-child91" />
        <img className="upload-icon" alt="" src="/upload@2x.png" />
        <div className="upload-qr-code">Upload QR Code</div>
      </div>
      <div className="rectangle-parent31">
        <div className="group-child91" />
        <div className="enter-item-code1">Enter Item Code</div>
      </div>
    </div>
  );
};

export default PopupWindow1;
