import imgImageSchool1 from "figma:asset/07c868c45111ef8b110b7252e86a855b2342499b.png";
import imgImageSchool2 from "figma:asset/31492db7fcd82ccf5d550b7838dc2df4375eb91c.png";
import imgImageSchool3 from "figma:asset/a68c03b73728afb87f1ce20b43c4a93ceeae1bd0.png";

function Menu() {
  return (
    <div className="h-[154px] relative rounded-[18px] shrink-0 w-full" data-name="menu">
      <div className="size-full">
        <div className="h-[154px] w-full" />
      </div>
    </div>
  );
}

function ContainerBackground() {
  return (
    <div className="bg-[#d0f4b9] h-[288px] relative rounded-[18px] w-[400px]" data-name="container/background">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.04352820664644241)+(var(--transform-inner-height)*0.9990521669387817)))] items-center justify-center left-[18.98px] top-[268.98px] translate-y-[-100%] w-[calc(1px*((var(--transform-inner-height)*0.04352820664644241)+(var(--transform-inner-width)*0.9990521669387817)))]" style={{ "--transform-inner-width": "352", "--transform-inner-height": "236" } as React.CSSProperties}>
        <div className="flex-none rotate-[2.495deg]">
          <div className="flex flex-col font-['Poppins:Light',sans-serif] h-[236px] justify-end leading-[0] not-italic relative text-[#010000] text-[24px] w-[352px]">
            <p className="leading-[33.6px]">
              <span className="font-['Poppins:Medium',sans-serif] not-italic">A</span>
              <span>{`nnemieke’s `}</span>
              <span className="font-['Poppins:Medium',sans-serif] not-italic">A</span>
              <span>{`cting `}</span>
              <span className="font-['Poppins:Medium',sans-serif] not-italic">A</span>
              <span>{`gency biedt dynamische dramacursussen en sociale vaardigheidstrainingen aan die speciaal zijn ontworpen voor kinderen, waarin plezier en creativiteit centraal staan. `}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerCopy() {
  return (
    <div className="h-[305px] relative shrink-0 w-[412px]" data-name="container/copy">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.04352821037173271)+(var(--transform-inner-height)*0.9990522265434265)))] items-center justify-center left-0 top-0 w-[calc(1px*((var(--transform-inner-height)*0.04352821037173271)+(var(--transform-inner-width)*0.9990522265434265)))]" style={{ "--transform-inner-width": "400", "--transform-inner-height": "288" } as React.CSSProperties}>
        <div className="flex-none rotate-[357.505deg]">
          <ContainerBackground />
        </div>
      </div>
    </div>
  );
}

function ContainerImage() {
  return (
    <div className="h-[305px] relative shrink-0 w-[388px]" data-name="container/image">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.022493720054626465)+(var(--transform-inner-height)*0.9997469782829285)))] items-center justify-center left-[-2.3px] top-[43.66px] w-[calc(1px*((var(--transform-inner-height)*0.022493720054626465)+(var(--transform-inner-width)*0.9997469782829285)))]" style={{ "--transform-inner-width": "388", "--transform-inner-height": "209" } as React.CSSProperties}>
        <div className="flex-none rotate-[1.289deg]">
          <div className="h-[209px] relative rounded-[12px] shadow-[0px_0px_0px_12px_#fbf8a4] w-[388px]" data-name="image/school1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[12px] size-full" src={imgImageSchool1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex h-[305px] items-center justify-between relative shrink-0 w-full" data-name="column/1">
      <ContainerCopy />
      <ContainerImage />
    </div>
  );
}

function ContainerImage1() {
  return (
    <div className="h-[429px] relative shrink-0 w-[402px]" data-name="container/image">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.011542635038495064)+(var(--transform-inner-height)*0.9999333620071411)))] items-center justify-center left-[-1.91px] top-[45.69px] w-[calc(1px*((var(--transform-inner-height)*0.011542635038495064)+(var(--transform-inner-width)*0.9999333620071411)))]" style={{ "--transform-inner-width": "402", "--transform-inner-height": "333" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.661deg]">
          <div className="h-[333px] relative rounded-[12px] shadow-[0px_0px_0px_12px_#8de6d8] w-[402px]" data-name="image/school2">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[12px] size-full" src={imgImageSchool2} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerBackground1() {
  return (
    <div className="bg-[#f4b9de] h-[417px] relative rounded-[18px] w-[400px]" data-name="container/background">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.030151931568980217)+(var(--transform-inner-height)*0.9995453357696533)))] items-center justify-center left-[18.32px] top-[398.28px] translate-y-[-100%] w-[calc(1px*((var(--transform-inner-height)*0.030151931568980217)+(var(--transform-inner-width)*0.9995453357696533)))]" style={{ "--transform-inner-width": "352", "--transform-inner-height": "335.9375" } as React.CSSProperties}>
        <div className="flex-none rotate-[1.728deg]">
          <div className="flex flex-col font-['Poppins:Light',sans-serif] justify-end leading-[0] not-italic relative text-[#010000] text-[24px] w-[352px]">
            <p className="leading-[33.6px]">Door middel van theateroefeningen, improvisatie en korte optredens leren kinderen zich uiten, samenwerken en hun emoties vormgeven. De cursussen zijn afgestemd op verschillende leeftijdsgroepen, waardoor elk kind op zijn eigen niveau kan groeien en stralen.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerCopy1() {
  return (
    <div className="absolute h-[429px] left-[450px] top-0 w-[412px]" data-name="container/copy">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.030151931568980217)+(var(--transform-inner-height)*0.9995453357696533)))] items-center justify-center left-0 top-0 w-[calc(1px*((var(--transform-inner-height)*0.030151931568980217)+(var(--transform-inner-width)*0.9995453357696533)))]" style={{ "--transform-inner-width": "400", "--transform-inner-height": "417" } as React.CSSProperties}>
        <div className="flex-none rotate-[358.272deg]">
          <ContainerBackground1 />
        </div>
      </div>
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex h-[429px] items-center justify-between relative shrink-0 w-full" data-name="column/2">
      <ContainerImage1 />
      <ContainerCopy1 />
    </div>
  );
}

function ContainerBackground2() {
  return (
    <div className="bg-[#b9cef4] h-[286px] relative rounded-[18px] w-[436px]" data-name="container/background">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.035123132169246674)+(var(--transform-inner-height)*0.9993830323219299)))] items-center justify-center left-[20.07px] top-[267.17px] translate-y-[-100%] w-[calc(1px*((var(--transform-inner-height)*0.035123132169246674)+(var(--transform-inner-width)*0.9993830323219299)))]" style={{ "--transform-inner-width": "388", "--transform-inner-height": "201.5625" } as React.CSSProperties}>
        <div className="flex-none rotate-[357.987deg]">
          <div className="flex flex-col font-['Poppins:Light',sans-serif] justify-end leading-[0] not-italic relative text-[#010000] text-[24px] w-[388px]">
            <p className="leading-[33.6px]">Met haar uitgebreide ervaring als docent in het onderwijs creëert Annemieke een veilige en speelse omgeving waarin kinderen hun verbeelding, zelfvertrouwen en sociale interactie ontwikkelen.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerCopy2() {
  return (
    <div className="h-[301px] relative shrink-0 w-[446px]" data-name="container/copy">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.035123132169246674)+(var(--transform-inner-height)*0.9993829727172852)))] items-center justify-center left-0 top-0 w-[calc(1px*((var(--transform-inner-height)*0.035123132169246674)+(var(--transform-inner-width)*0.9993829727172852)))]" style={{ "--transform-inner-width": "436", "--transform-inner-height": "286" } as React.CSSProperties}>
        <div className="flex-none rotate-[2.013deg]">
          <ContainerBackground2 />
        </div>
      </div>
    </div>
  );
}

function ContainerImage2() {
  return (
    <div className="h-[301px] relative shrink-0 w-[354px]" data-name="container/image">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.004567770753055811)+(var(--transform-inner-height)*0.9999895691871643)))] items-center justify-center left-0 top-[47.19px] w-[calc(1px*((var(--transform-inner-height)*0.004567770753055811)+(var(--transform-inner-width)*0.9999895691871643)))]" style={{ "--transform-inner-width": "354", "--transform-inner-height": "253" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.262deg]">
          <div className="h-[253px] relative rounded-[18px] shadow-[0px_0px_0px_12px_#cb92de] w-[354px]" data-name="image/school3">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[18px] size-full" src={imgImageSchool3} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex h-[301px] items-center justify-between relative shrink-0 w-full" data-name="column/3">
      <ContainerCopy2 />
      <ContainerImage2 />
    </div>
  );
}

function ContainerSchool() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="container/school">
      <Menu />
      <Column />
      <Column1 />
      <Column2 />
    </div>
  );
}

export default function SectionContent() {
  return (
    <div className="relative size-full" data-name="section/content">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col items-center p-[72px] relative size-full">
          <ContainerSchool />
        </div>
      </div>
    </div>
  );
}