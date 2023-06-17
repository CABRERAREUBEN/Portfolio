import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent1.module.css";
const FrameComponent1 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/authenticated");
  }, [navigate]);

  return (
    <div className={styles.authenticateYourItemParent}>
      <div className={styles.authenticateYourItem}>Authenticate your item</div>
      <div className={styles.frameChild} />
      <img className={styles.cameraIcon} alt="" src="/camera.svg" />
      <div className={styles.rectangleParent} onClick={onGroupContainerClick}>
        <div className={styles.groupChild} />
        <img className={styles.uploadIcon} alt="" src="/upload@2x.png" />
        <div className={styles.uploadQrCode}>Upload QR Code</div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupChild} />
        <div className={styles.enterItemCode}>Enter Item Code</div>
      </div>
      <img className={styles.frameItem} alt="" src="/group-27.svg" />
    </div>
  );
};

export default FrameComponent1;
