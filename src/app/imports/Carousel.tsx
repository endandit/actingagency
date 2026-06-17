import imgCarousel from "figma:asset/f49b759157f0a4301fabbdeed7f046668edaecb0.png";

function IconChevronLeft() {
  return (
    <div className="h-[60px] relative shrink-0 w-[30px]" data-name="icon/chevron-left">
      <div className="absolute bottom-[-6.67%] left-0 right-[-13.33%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 64">
          <g filter="url(#filter0_d_3_267)" id="icon/chevron-left">
            <rect fill="var(--fill-0, #D0F4B9)" height="60" rx="15" width="30" />
            <path d="M18.5 45L11 30L18.5 15" id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="64" id="filter0_d_3_267" width="34" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="4" dy="4" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.0588235 0 0 0 0 0.0901961 0 0 0 0 0.164706 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_3_267" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_3_267" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function ChevronLeft() {
  return (
    <div className="box-border content-stretch flex h-full items-center justify-center px-[24px] py-0 relative shrink-0" data-name="chevron/left">
      <IconChevronLeft />
    </div>
  );
}

function IconChevronRight() {
  return (
    <div className="h-[60px] relative shrink-0 w-[30px]" data-name="icon/chevron-right">
      <div className="absolute bottom-[-6.67%] left-0 right-[-13.33%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 64">
          <g filter="url(#filter0_d_3_270)" id="icon/chevron-right">
            <rect fill="var(--fill-0, #D0F4B9)" height="60" rx="15" width="30" />
            <path d="M11 45L18.5 30L11 15" id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="64" id="filter0_d_3_270" width="34" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="4" dy="4" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.0588235 0 0 0 0 0.0901961 0 0 0 0 0.164706 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_3_270" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_3_270" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="box-border content-stretch flex h-full items-center justify-center px-[24px] py-0 relative shrink-0" data-name="chevron/right">
      <IconChevronRight />
    </div>
  );
}

export default function Carousel() {
  return (
    <div className="content-stretch flex items-start justify-between relative rounded-[9px] size-full" data-name="carousel">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[9px] size-full" src={imgCarousel} />
      <ChevronLeft />
      <ChevronRight />
      <div className="absolute inset-0 pointer-events-none shadow-[-10px_-10px_30px_0px_inset_rgba(255,247,228,0.45),10px_10px_30px_0px_inset_rgba(255,247,228,0.45)]" />
    </div>
  );
}