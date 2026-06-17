import svgPaths from "./svg-xxlau4uw7b";

function IconLinkedin() {
  return (
    <div className="relative shrink-0 size-[100px]" data-name="icon/linkedin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
        <g id="icon/linkedin">
          <g filter="url(#filter0_d_7_346)" id="Vector">
            <path clipRule="evenodd" d={svgPaths.p3aa6a900} fill="var(--fill-0, #94D751)" fillRule="evenodd" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="85.3333" id="filter0_d_7_346" width="85.3333" x="8.33333" y="8.33333">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="2" dy="2" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.00392157 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_7_346" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_7_346" mode="normal" result="shape" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function IconPadding() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="icon/padding">
      <IconLinkedin />
    </div>
  );
}

export default function ContainerLinkedin() {
  return (
    <div className="content-stretch flex gap-[48px] items-center relative size-full" data-name="container/linkedin">
      <IconPadding />
      <div className="[text-shadow:#010000_2px_2px_0px] basis-0 flex flex-col font-['Montserrat:Bold',sans-serif] font-bold grow justify-center leading-[36.4px] min-h-px min-w-px relative shrink-0 text-[#94d751] text-[26px]">
        <p className="mb-0">/ annemieke-buijs</p>
        <p>-a13b3517</p>
      </div>
    </div>
  );
}