import imgLogo from "figma:asset/50243256a1ec03f8aeaa5a35d552d375b6fb7345.png";

export default function PaddingLogo() {
  return (
    <div className="box-border content-stretch flex flex-col items-start relative shadow-[4px_4px_8px_0px_#0f172a] size-full" data-name="padding/logo">
      <div className="aspect-[628/372] relative shrink-0 w-full" data-name="logo">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogo} />
      </div>
    </div>
  );
}