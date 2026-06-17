import svgPaths from "../../imports/svg-pml0n9a706";

function IconCopyright() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="icon/copyright">
      <div className="absolute inset-[-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="icon/copyright">
            <path d={svgPaths.p36253380} id="Vector" stroke="var(--stroke-0, #70A4CA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Copyrights() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full" data-name="copyrights">
      <IconCopyright />
      <div className="flex flex-col font-['Montez:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#70a4ca] text-[0px] text-nowrap">
        <p className="leading-[28px] text-[20px] whitespace-pre">
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
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-end max-w-[550px] relative shrink-0 w-full" data-name="credits">
      <Copyrights />
    </div>
  );
}

export default function FooterMobile() {
  return (
    <div className="relative size-full bg-transparent" data-name="section/footer">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[36px] items-center px-[24px] py-[72px] relative size-full">
          <Credits />
        </div>
      </div>
    </div>
  );
}