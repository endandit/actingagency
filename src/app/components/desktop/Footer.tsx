import svgPaths from "../../imports/svg-rnps3s14kl";

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
          <span className="font-['Montserrat:Regular',sans-serif] font-normal">{`nnemieke's `}</span>
          <span className="font-['Montserrat:Bold',sans-serif] font-bold">A</span>
          <span className="font-['Montserrat:Regular',sans-serif] font-normal">{`cting `}</span>
          <span className="font-['Montserrat:Bold',sans-serif] font-bold">A</span>
          <span className="font-['Montserrat:Regular',sans-serif] font-normal">gency</span>
        </p>
      </div>
    </div>
  );
}

function Credits() {
  return (
    <div className="content-stretch flex gap-[12px] items-end relative shrink-0" data-name="credits">
      <Copyrights />
    </div>
  );
}

export default function FooterDesktop() {
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