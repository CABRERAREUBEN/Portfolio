import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent.module.css";
const FrameComponent = () => {
  const navigate = useNavigate();

  const onGroupContainer1Click = useCallback(() => {
    navigate("/authenticated");
  }, [navigate]);

  return (
    <div className={styles.authenticateYourItemParent}>
      <div className={styles.authenticateYourItem}>Authenticate your item</div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.enterItemCode}>Enter Item Code</div>
      </div>
      <div className={styles.rectangleGroup} onClick={onGroupContainer1Click}>
        <div className={styles.groupItem} />
        <div className={styles.submit}>Submit</div>
      </div>
      <img className={styles.frameChild} alt="" src="/group-27.svg" />
    </div>
  );
};

export default FrameComponent;
