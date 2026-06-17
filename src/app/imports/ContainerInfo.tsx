import svgPaths from "./svg-1vsjcnbkma";

function IconPhoneCall() {
  return (
    <div className="relative shrink-0 size-[100px]" data-name="icon/phone-call">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
        <g id="icon/phone-call">
          <path d={svgPaths.p3e1a6a00} id="Vector" stroke="var(--stroke-0, #F987CF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
        </g>
      </svg>
    </div>
  );
}

function IconPadding() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="icon/padding">
      <IconPhoneCall />
    </div>
  );
}

function ContainerPhone() {
  return (
    <div className="absolute box-border content-stretch flex gap-[48px] h-[100px] items-center left-[46px] shadow-[2px_2px_0px_0px_#010000] top-[131px] w-[382px]" data-name="container/phone">
      <IconPadding />
      <div className="basis-0 flex flex-col font-['Montserrat:Bold',sans-serif] font-bold grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#f987cf] text-[30px]">
        <p className="leading-[42px]">06 88 37 56 22</p>
      </div>
    </div>
  );
}

function IconMail() {
  return (
    <div className="relative shrink-0 size-[100px]" data-name="icon/mail">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
        <g id="icon/mail">
          <path d={svgPaths.p20ff5600} id="Vector" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
          <path d={svgPaths.p26c82500} id="Vector_2" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
        </g>
      </svg>
    </div>
  );
}

function IconPadding1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="icon/padding">
      <IconMail />
    </div>
  );
}

function ContainerMail() {
  return (
    <div className="absolute box-border content-stretch flex gap-[48px] h-[100px] items-center left-[46px] shadow-[2px_2px_0px_0px_#010000] top-[279px] w-[382px]" data-name="container/mail">
      <IconPadding1 />
      <div className="basis-0 flex flex-col font-['Montserrat:Bold',sans-serif] font-bold grow justify-center leading-[33.6px] min-h-px min-w-px relative shrink-0 text-[24px] text-blue-500">
        <p className="mb-0">Annemieke@</p>
        <p>ActingAgency.nl</p>
      </div>
    </div>
  );
}

function IconLinkedin() {
  return (
    <div className="relative shrink-0 size-[100px]" data-name="icon/linkedin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
        <g id="icon/linkedin">
          <g filter="url(#filter0_d_23_58)" id="Vector">
            <path clipRule="evenodd" d={svgPaths.p3aa6a900} fill="var(--fill-0, #94D751)" fillRule="evenodd" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="85.3333" id="filter0_d_23_58" width="85.3333" x="8.33333" y="8.33333">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="2" dy="2" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.00392157 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_23_58" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_23_58" mode="normal" result="shape" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function IconPadding2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="icon/padding">
      <IconLinkedin />
    </div>
  );
}

function ContainerLinkedin() {
  return (
    <div className="absolute content-stretch flex gap-[48px] h-[110px] items-center left-[46px] top-[427px] w-[382px]" data-name="container/linkedin">
      <IconPadding2 />
      <div className="[text-shadow:#010000_2px_2px_0px] basis-0 flex flex-col font-['Montserrat:Bold',sans-serif] font-bold grow justify-center leading-[33.6px] min-h-px min-w-px relative shrink-0 text-[#94d751] text-[24px]">
        <p className="mb-0">/ annemieke-buijs</p>
        <p>-a13b3517</p>
      </div>
    </div>
  );
}

export default function ContainerInfo() {
  return (
    <div className="backdrop-blur-sm backdrop-filter bg-[rgba(249,135,207,0.25)] relative rounded-[24px] size-full" data-name="container/info">
      <ContainerPhone />
      <ContainerMail />
      <ContainerLinkedin />
    </div>
  );
}