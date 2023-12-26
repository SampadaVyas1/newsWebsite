import useWindowUtil from "../../hooks/useWindowUtil";
import { DeviceType } from "../../utils/enum";
import FullWidthNavBar from "../fullWidthNavBar";
import NavDrawer from "../navDrawer";

const NavBar = (props: any) => {
  const { deviceType } = useWindowUtil();

  return (
    <div>
      {deviceType === DeviceType.DESKTOP ? <FullWidthNavBar /> : <NavDrawer />}
    </div>
  );
};

export default NavBar;
