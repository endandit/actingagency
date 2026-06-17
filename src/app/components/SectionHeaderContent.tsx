import ResponsiveWrapper from "./ResponsiveWrapper";
import HeaderContentDesktop from "./desktop/HeaderContent";
import HeaderContentTablet from "./tablet/HeaderContent";
import HeaderContentMobile from "./mobile/HeaderContent";

export default function SectionHeaderContent() {
  return (
    <ResponsiveWrapper
      desktop={<HeaderContentDesktop />}
      tablet={<HeaderContentTablet />}
      mobile={<HeaderContentMobile />}
    />
  );
}
