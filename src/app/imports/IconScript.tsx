import svgPaths from "./svg-voyrbv8dg8";

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

export default function IconScript() {
  return (
    <div className="relative shadow-[4px_4px_8px_0px_#0f172a] size-full" data-name="icon/script">
      <Page />
    </div>
  );
}