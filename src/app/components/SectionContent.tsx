import ResponsiveWrapper from "./ResponsiveWrapper";
import ContentDesktop from "./desktop/Content";
import ContentTablet from "./tablet/Content";
import ContentMobile from "./mobile/Content";

export default function SectionContent() {
  return (
    <ResponsiveWrapper
      desktop={<ContentDesktop />}
      tablet={<ContentTablet />}
      mobile={<ContentMobile />}
    />
  );
}
