import svgPaths from "./svg-rnps3s14kl";
import imgSectionHeader from "figma:asset/9ad6b0d3e947fa4fe57996f13b69872e93e50e77.png";
import imgLogoWnp from "figma:asset/25cb180292319ac52c81bd2039f4923d646f0f3a.png";
import imgScrollItems from "figma:asset/13bfcb8f53534cf6d1fb269faec467e6086f07ac.png";
import { useEffect, useRef, useState } from "react";
import SectionHeaderContent from "../components/SectionHeaderContent";
import SectionContent from "../components/SectionContent";
import ResponsiveWrapper from "../components/ResponsiveWrapper";
import FooterDesktop from "../components/desktop/Footer";
import FooterTablet from "../components/tablet/Footer";
import FooterMobile from "../components/mobile/Footer";
import ContactDesktop from "../components/desktop/Contact";
import ContactTablet from "../components/tablet/Contact";
import ContactMobile from "../components/mobile/Contact";

function Spacing() {
  return (
    <div className="h-[210px] max-[991px]:h-[114px] relative shrink-0 w-full" data-name="spacing">
      <div className="size-full">
        <div className="h-[210px] max-[991px]:h-[114px] w-full" />
      </div>
    </div>
  );
}

function SectionHeader() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? currentScroll / maxScroll : 0;
      setScrollProgress(progress);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-[700px] h-[calc(100vh-210px)] max-[1712px]:h-auto relative shrink-0 w-full bg-transparent" data-name="section/header">
      <div className="absolute inset-0 pointer-events-none">
        <img 
          alt="" 
          className="absolute inset-0 w-full h-full object-fill blur-[2px]" 
          src={imgSectionHeader} 
          style={{ transform: `translateY(-${scrollProgress * 25}%)` }}
        />
      </div>
      <div className="relative z-[60] size-full bg-transparent">
        <SectionHeaderContent />
      </div>
    </div>
  );
}

function IconCopyright() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="icon/copyright">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="icon/copyright">
          <path d={svgPaths.p1b55b400} id="Vector" stroke="var(--stroke-0, #70A4CA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Copyrights() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="copyrights">
      <IconCopyright />
      <div className="flex flex-col font-['Montez:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#70a4ca] text-[24px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">
          <span className="font-['Montserrat:Bold',sans-serif] font-bold">A</span>
          <span className="font-['Montserrat:Regular',sans-serif] font-normal">{`nnemieke’s `}</span>
          <span className="font-['Montserrat:Bold',sans-serif] font-bold">A</span>
          <span className="font-['Montserrat:Regular',sans-serif] font-normal">{`cting `}</span>
          <span className="font-['Montserrat:Bold',sans-serif] font-bold">A</span>
          <span className="font-['Montserrat:Regular',sans-serif] font-normal">gency</span>
        </p>
      </div>
    </div>
  );
}

function Padding() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-full items-start justify-end pb-[14px] pt-0 px-0 relative shrink-0" data-name="padding">
      <Copyrights />
    </div>
  );
}

function Credits() {
  return (
    <div className="content-stretch flex gap-[12px] items-end relative shrink-0" data-name="credits">
      <a 
        href="http://www.writtenandperformed.com/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="h-[100px] relative shrink-0 w-[409px] cursor-pointer" 
        data-name="logo/wnp"
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogoWnp} />
      </a>
      <div className="flex flex-row items-end self-stretch">
        <Padding />
      </div>
    </div>
  );
}

function SectionFooter() {
  return (
    <div className="relative shrink-0 w-full bg-transparent" data-name="section/footer">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full bg-transparent">
        <div className="box-border content-stretch flex flex-col gap-[36px] items-center px-[48px] py-[96px] relative w-full">
          <Credits />
        </div>
      </div>
    </div>
  );
}

export default function ScrollItems() {
  const [scrollOffset, setScrollOffset] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [lockedMaxScroll, setLockedMaxScroll] = useState<number | null>(null);
  const [lockedBgHeight, setLockedBgHeight] = useState<number | null>(null);
  const [bgScrollProgress, setBgScrollProgress] = useState(0);
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize viewport state on mount
    const updateViewport = () => {
      setIsTabletOrMobile(window.innerWidth < 1713);
      setIsMobile(window.innerWidth < 992);
    };
    
    updateViewport();

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? currentScroll / maxScroll : 0;
      
      setScrollOffset(currentScroll);
      setScrollProgress(progress);

      // For tablet and mobile viewport, use locked maxScroll for background parallax
      const viewportWidth = window.innerWidth;
      if (viewportWidth < 1713 && lockedMaxScroll !== null) {
        const bgProgress = lockedMaxScroll > 0 ? currentScroll / lockedMaxScroll : 0;
        setBgScrollProgress(Math.min(bgProgress, 1)); // Cap at 1
      } else {
        setBgScrollProgress(progress);
      }
    };

    // Lock max scroll and background height on initial load for tablet and mobile viewport (<1713)
    const lockMaxScroll = () => {
      const viewportWidth = window.innerWidth;
      if (viewportWidth < 1713) {
        // Capture the initial max scroll and bg container height for tablet/mobile viewport
        const initialMaxScroll = document.body.scrollHeight - window.innerHeight;
        setLockedMaxScroll(initialMaxScroll);
        
        // Lock the background container height
        if (bgRef.current) {
          const bgHeight = bgRef.current.offsetHeight;
          setLockedBgHeight(bgHeight);
        }
      } else {
        setLockedMaxScroll(null);
        setLockedBgHeight(null);
      }
    };

    // Lock on initial load
    setTimeout(lockMaxScroll, 100);

    // Re-lock on viewport resize
    const handleResize = () => {
      updateViewport();
      lockMaxScroll();
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [lockedMaxScroll]);

  const effectiveProgress = isTabletOrMobile ? bgScrollProgress : scrollProgress;
  const parallaxDistance = isMobile ? 1000 : 500;

  return (
    <div className="content-stretch flex flex-col relative w-full min-h-screen bg-[#050407]" data-name="scroll/items">
      <div 
        ref={bgRef}
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={isTabletOrMobile && lockedBgHeight ? { height: `${lockedBgHeight}px` } : undefined}
      >
        <img 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover blur-[4px]"
          src={imgScrollItems} 
          style={{ transform: `translateY(${parallaxDistance * (1 - effectiveProgress)}px)` }}
        />
      </div>
      <Spacing />
      <SectionHeader />
      <SectionContent />
      <ResponsiveWrapper
        desktop={<ContactDesktop />}
        tablet={<ContactTablet />}
        mobile={<ContactMobile />}
      />
      <ResponsiveWrapper
        desktop={<FooterDesktop />}
        tablet={<FooterTablet />}
        mobile={<FooterMobile />}
      />
    </div>
  );
}