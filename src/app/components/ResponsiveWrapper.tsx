import { ReactNode } from "react";

interface ResponsiveWrapperProps {
  desktop: ReactNode;  // >1712px
  tablet: ReactNode;   // 992px - 1712px
  mobile: ReactNode;   // <992px
}

export default function ResponsiveWrapper({ desktop, tablet, mobile }: ResponsiveWrapperProps) {
  return (
    <>
      {/* Desktop: wider than 1712px */}
      <div className="hidden min-[1713px]:block">
        {desktop}
      </div>
      
      {/* Tablet: 992px to 1712px */}
      <div className="hidden min-[992px]:block min-[1713px]:hidden">
        {tablet}
      </div>
      
      {/* Mobile: less than 992px */}
      <div className="block min-[992px]:hidden">
        {mobile}
      </div>
    </>
  );
}
