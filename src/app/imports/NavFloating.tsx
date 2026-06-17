import ResponsiveWrapper from "../components/ResponsiveWrapper";
import NavBarDesktop from "../components/desktop/NavBar";
import NavBarTablet from "../components/tablet/NavBar";
import NavBarMobile from "../components/mobile/NavBar";

export default function NavFloating() {
  return (
    <ResponsiveWrapper
      desktop={<NavBarDesktop />}
      tablet={<NavBarTablet />}
      mobile={<NavBarMobile />}
    />
  );
}
