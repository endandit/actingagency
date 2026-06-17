import svgPaths from "../../imports/svg-88rzb6b6h7";
import imgLogo from "figma:asset/50243256a1ec03f8aeaa5a35d552d375b6fb7345.png";
import imgNavFloating from "figma:asset/9a2fdd26ecf5c81afb974b6a25a455b1b13a6553.png";
import { useState } from "react";

function PaddingLogo({ onClick }: { onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="content-stretch flex flex-col h-[120px] items-start relative shrink-0 w-[203px] cursor-pointer" 
      data-name="padding/logo"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        filter: isHovered ? 'drop-shadow(0 0 20px rgba(255, 247, 228, 0.6))' : 'drop-shadow(4px 4px 8px #0f172a)',
        transition: 'filter 0.3s ease'
      }}
    >
      <div className="h-[120px] relative shrink-0 w-[203px]" data-name="logo">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogo} />
      </div>
    </div>
  );
}

function DribbbleLightPreview() {
  return (
    <div className="absolute contents inset-0" data-name="Dribbble-Light-Preview">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="icons">
          <path clipRule="evenodd" d={svgPaths.p29032030} fill="var(--fill-0, #FFF7E4)" fillRule="evenodd" id="script-[#1603]" />
        </g>
      </svg>
    </div>
  );
}

function Page() {
  return (
    <div className="absolute contents inset-0" data-name="Page-1">
      <DribbbleLightPreview />
    </div>
  );
}

function IconScript({ onClick }: { onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="overflow-clip relative shrink-0 size-[60px] cursor-pointer" 
      data-name="icon/script"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        filter: isHovered ? 'drop-shadow(0 0 20px rgba(255, 247, 228, 0.6))' : 'drop-shadow(4px 4px 8px #0f172a)',
        transition: 'filter 0.3s ease'
      }}
    >
      <Page />
    </div>
  );
}

function IconRetroPhone({ onClick }: { onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative shrink-0 size-[75px] cursor-pointer" 
      data-name="icon/retro-phone"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        filter: isHovered ? 'drop-shadow(0 0 20px rgba(255, 247, 228, 0.6))' : 'drop-shadow(4px 4px 8px #0f172a)',
        transition: 'filter 0.3s ease'
      }}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75 75">
        <g id="icon/retro-phone">
          <path d={svgPaths.p609500} id="Vector" stroke="var(--stroke-0, #FFF7E4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" />
          <path d={svgPaths.p139a8bd6} id="Vector_2" stroke="var(--stroke-0, #FFF7E4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" />
          <path d={svgPaths.p278ecc00} id="Vector_3" stroke="var(--stroke-0, #FFF7E4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" />
        </g>
      </svg>
    </div>
  );
}

function BarNav({ onScriptClick, onPhoneClick }: { onScriptClick: () => void; onPhoneClick: () => void }) {
  return (
    <div className="content-stretch flex gap-[72px] items-center justify-center relative shrink-0" data-name="bar/nav">
      <IconScript onClick={onScriptClick} />
      <IconRetroPhone onClick={onPhoneClick} />
    </div>
  );
}

function NavCentered({ onLogoClick, onScriptClick, onPhoneClick }: { onLogoClick: () => void; onScriptClick: () => void; onPhoneClick: () => void }) {
  return (
    <div className="absolute box-border content-stretch flex h-[216px] items-center justify-between left-0 px-[72px] py-[48px] top-0 w-full" data-name="nav/centered">
      <PaddingLogo onClick={onLogoClick} />
      <BarNav onScriptClick={onScriptClick} onPhoneClick={onPhoneClick} />
    </div>
  );
}

export default function NavBarDesktop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContent = () => {
    const contentSection = document.querySelector('[data-name="section/content"]');
    if (contentSection) {
      const elementPosition = contentSection.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 210;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector('[data-name="section/contact"]');
    if (contactSection) {
      const elementPosition = contactSection.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 210;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-[235px] z-[100]" data-name="nav/floating">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[126.01%] left-[-0.16%] max-w-none top-[-0.68%] w-[100.31%]" src={imgNavFloating} />
      </div>
      <NavCentered onLogoClick={scrollToTop} onScriptClick={scrollToContent} onPhoneClick={scrollToContact} />
    </div>
  );
}