import { ALERT_VARIENT } from "../../utils/constants.utils";
import { IoClose } from "react-icons/io5";

const CloseAlert = ({ text, setText, variant = ALERT_VARIENT.PRIMARY }) =>
  text ? (
    <div className="alert-container">
      <div
        className={`alert alert-${variant} d-flex justify-content-between align-items-center`}
      >
        {text}
        <IoClose onClick={() => setText("")} className="cursor-pointer" />
      </div>
    </div>
  ) : null;

export default CloseAlert;
