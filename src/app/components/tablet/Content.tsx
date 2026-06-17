import imgImageSchool1 from "figma:asset/07c868c45111ef8b110b7252e86a855b2342499b.png";
import imgImageSchool2 from "figma:asset/31492db7fcd82ccf5d550b7838dc2df4375eb91c.png";
import imgImageSchool3 from "figma:asset/a68c03b73728afb87f1ce20b43c4a93ceeae1bd0.png";
import imgImageAnlies1 from "figma:asset/f0e76d8e1f48eb8c7db6da8f0f8349a3e8a4026b.png";
import imgImageAnlies2 from "figma:asset/af23e8bb7f9ce3e72671c0a45ae52125bbb0818d.png";
import imgImageCompany1 from "figma:asset/eb8c7c7ca631a3fd0b67e594e4f0d4255a5fc0ad.png";
import imgCarousel from "figma:asset/f49b759157f0a4301fabbdeed7f046668edaecb0.png";
import imgNavSchoolDefault from "figma:asset/fae9dc288df5ae5acb07ac84cf921dce2dcc93b6.png";
import imgNavSchoolHover from "figma:asset/72ab378ddc46021e5c3b88d4c979a2306777890a.png";
import imgNavSchoolPressed from "figma:asset/e3a760b9065776125b1a0fa62ebf58dfe0625c24.png";
import imgNavAnliesDefault from "figma:asset/69a1c6c10de78bdea8ea0cd9f9c461dcf2e5d480.png";
import imgNavAnliesHover from "figma:asset/80b6026eead5b247aa77d212dd5f5cf2be00ed5b.png";
import imgNavAnliesPressed from "figma:asset/6aa7c1d7ee15da95601c95210122f5a35c7aeff8.png";
import imgNavCompanyDefault from "figma:asset/503ff2eeaa3c9fb8c476ac04c8822b9c9d8aeb79.png";
import imgNavCompanyHover from "figma:asset/6f3dcdbad04b2185467f1ff1ce3e9d8eda625252.png";
import imgNavCompanyPressed from "figma:asset/2dac1b217681e423a834c3b31f3f47a53d3c555d.png";
import { useState } from "react";

type ContentType = "school" | "anlies" | "company";

// Nav Components
function NavSchool({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative shrink-0 size-[154px] bg-transparent border-none cursor-pointer p-0"
      data-name="nav/school"
    >
      <div 
        className="absolute left-0 size-[154px] top-0" 
        data-name="nav/school/default"
        style={{ opacity: !isHovered && !isActive ? 1 : 0 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgNavSchoolDefault} />
      </div>
      <div 
        className="absolute left-0 size-[154px] top-0" 
        data-name="nav/school/hover"
        style={{ opacity: isHovered && !isActive ? 1 : 0 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgNavSchoolHover} />
      </div>
      <div 
        className="absolute left-0 size-[154px] top-0" 
        data-name="nav/school/pressed"
        style={{ opacity: isActive ? 1 : 0 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgNavSchoolPressed} />
      </div>
    </button>
  );
}

function NavAnlies({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative shrink-0 size-[154px] bg-transparent border-none cursor-pointer p-0"
      data-name="nav/anlies"
    >
      <div 
        className="absolute left-0 size-[154px] top-0" 
        data-name="nav/anlies/default"
        style={{ opacity: !isHovered && !isActive ? 1 : 0 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgNavAnliesDefault} />
      </div>
      <div 
        className="absolute left-0 size-[154px] top-0" 
        data-name="nav/anlies/hover"
        style={{ opacity: isHovered && !isActive ? 1 : 0 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgNavAnliesPressed} />
      </div>
      <div 
        className="absolute left-0 size-[154px] top-0" 
        data-name="nav/anlies/pressed"
        style={{ opacity: isActive ? 1 : 0 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgNavAnliesHover} />
      </div>
    </button>
  );
}

function NavCompany({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative shrink-0 size-[154px] bg-transparent border-none cursor-pointer p-0"
      data-name="nav/company"
    >
      <div 
        className="absolute left-0 size-[154px] top-0" 
        data-name="nav/company/default"
        style={{ opacity: !isHovered && !isActive ? 1 : 0 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgNavCompanyDefault} />
      </div>
      <div 
        className="absolute left-0 size-[154px] top-0" 
        data-name="nav/company/hover"
        style={{ opacity: isHovered && !isActive ? 1 : 0 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgNavCompanyHover} />
      </div>
      <div 
        className="absolute left-0 size-[154px] top-0" 
        data-name="nav/company/pressed"
        style={{ opacity: isActive ? 1 : 0 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgNavCompanyPressed} />
      </div>
    </button>
  );
}

function Menu({ activeContent, onContentChange }: { activeContent: ContentType; onContentChange: (content: ContentType) => void }) {
  return (
    <div className="rounded-[18px] shrink-0 w-[896px] flex items-center justify-between mb-[36px]" data-name="menu">
      <NavSchool isActive={activeContent === "school"} onClick={() => onContentChange("school")} />
      <NavAnlies isActive={activeContent === "anlies"} onClick={() => onContentChange("anlies")} />
      <NavCompany isActive={activeContent === "company"} onClick={() => onContentChange("company")} />
    </div>
  );
}

// SCHOOL CONTAINER
function ContainerBackgroundSchool1() {
  return (
    <div className="bg-[#d0f4b9] h-[288px] relative rounded-[18px] w-[400px] backdrop-blur-[8px] opacity-85" data-name="container/background">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.04352820664644241)+(var(--transform-inner-height)*0.9990521669387817)))] items-center justify-center left-[18.98px] top-[268.98px] translate-y-[-100%] w-[calc(1px*((var(--transform-inner-height)*0.04352820664644241)+(var(--transform-inner-width)*0.9990521669387817)))]" style={{ "--transform-inner-width": "352", "--transform-inner-height": "236" } as React.CSSProperties}>
        <div className="flex-none rotate-[2.495deg]">
          <div className="flex flex-col font-['Poppins:Light',sans-serif] h-[236px] justify-end leading-[0] not-italic relative text-[#010000] text-[24px] w-[352px]">
            <p className="leading-[33.6px]">
              <span className="font-['Poppins:Medium',sans-serif] not-italic">A</span>
              <span>{`nnemieke's `}</span>
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

function ContainerCopySchool1() {
  return (
    <div className="absolute h-[305px] left-0 top-0 w-[412px]" data-name="container/copy">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.04352821037173271)+(var(--transform-inner-height)*0.9990522265434265)))] items-center justify-center left-0 top-0 w-[calc(1px*((var(--transform-inner-height)*0.04352821037173271)+(var(--transform-inner-width)*0.9990522265434265)))]" style={{ "--transform-inner-width": "400", "--transform-inner-height": "288" } as React.CSSProperties}>
        <div className="flex-none rotate-[357.505deg]">
          <ContainerBackgroundSchool1 />
        </div>
      </div>
    </div>
  );
}

function ContainerImageSchool1() {
  return (
    <div className="absolute h-[305px] left-[508px] top-0 w-[388px]" data-name="container/image">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.022493720054626465)+(var(--transform-inner-height)*0.9997469782829285)))] items-center justify-center left-[-2px] top-[44px] w-[calc(1px*((var(--transform-inner-height)*0.022493720054626465)+(var(--transform-inner-width)*0.9997469782829285)))]" style={{ "--transform-inner-width": "388", "--transform-inner-height": "209" } as React.CSSProperties}>
        <div className="flex-none rotate-[1.289deg]">
          <div className="h-[209px] relative rounded-[12px] shadow-[0px_0px_0px_12px_#fbf8a4] w-[388px]" data-name="image/school1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[12px] size-full" src={imgImageSchool1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ColumnSchool1() {
  return (
    <div className="h-[305px] relative shrink-0 w-[896px]" data-name="column/1">
      <ContainerCopySchool1 />
      <ContainerImageSchool1 />
    </div>
  );
}

function ContainerImageSchool2() {
  return (
    <div className="absolute h-[429px] left-0 top-0 w-[402px]" data-name="container/image">
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

function ContainerBackgroundSchool2() {
  return (
    <div className="bg-[#f4b9de] h-[417px] relative rounded-[18px] w-[400px] backdrop-blur-[8px] opacity-85" data-name="container/background">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.030151931568980217)+(var(--transform-inner-height)*0.9995453357696533)))] items-center justify-center left-[18.32px] top-[398.28px] translate-y-[-100%] w-[calc(1px*((var(--transform-inner-height)*0.030151931568980217)+(var(--transform-inner-width)*0.9995453357696533)))]" style={{ "--transform-inner-width": "352", "--transform-inner-height": "336" } as React.CSSProperties}>
        <div className="flex-none rotate-[1.728deg]">
          <div className="flex flex-col font-['Poppins:Light',sans-serif] justify-end leading-[0] not-italic relative text-[#010000] text-[24px] w-[352px]">
            <p className="leading-[33.6px] mt-[-30px]">Door middel van theateroefeningen, improvisatie en korte optredens leren kinderen zich uiten, samenwerken en hun emoties vormgeven. De cursussen zijn afgestemd op verschillende leeftijdsgroepen, waardoor elk kind op zijn eigen niveau kan groeien en stralen.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerCopySchool2() {
  return (
    <div className="absolute h-[429px] left-[484px] top-0 w-[412px]" data-name="container/copy">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.030151931568980217)+(var(--transform-inner-height)*0.9995453357696533)))] items-center justify-center left-0 top-0 w-[calc(1px*((var(--transform-inner-height)*0.030151931568980217)+(var(--transform-inner-width)*0.9995453357696533)))]" style={{ "--transform-inner-width": "400", "--transform-inner-height": "417" } as React.CSSProperties}>
        <div className="flex-none rotate-[358.272deg]">
          <ContainerBackgroundSchool2 />
        </div>
      </div>
    </div>
  );
}

function ColumnSchool2() {
  return (
    <div className="h-[429px] relative shrink-0 w-[896px]" data-name="column/2">
      <ContainerImageSchool2 />
      <ContainerCopySchool2 />
    </div>
  );
}

function ContainerBackgroundSchool3() {
  return (
    <div className="bg-[#b9cef4] h-[286px] relative rounded-[18px] w-[436px] backdrop-blur-[8px] opacity-85" data-name="container/background">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.035123132169246674)+(var(--transform-inner-height)*0.9993830323219299)))] items-center justify-center left-[20.07px] top-[267.17px] translate-y-[-100%] w-[calc(1px*((var(--transform-inner-height)*0.035123132169246674)+(var(--transform-inner-width)*0.9993830323219299)))]" style={{ "--transform-inner-width": "388", "--transform-inner-height": "202" } as React.CSSProperties}>
        <div className="flex-none rotate-[357.987deg]">
          <div className="flex flex-col font-['Poppins:Light',sans-serif] justify-end leading-[0] not-italic relative text-[#010000] text-[24px] w-[388px]">
            <p className="leading-[33.6px] mt-[-30px]">Met haar uitgebreide ervaring als docent in het onderwijs creëert Annemieke een veilige en speelse omgeving waarin kinderen hun verbeelding, zelfvertrouwen en sociale interactie ontwikkelen.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerCopySchool3() {
  return (
    <div className="absolute h-[301px] left-0 top-0 w-[446px]" data-name="container/copy">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.035123132169246674)+(var(--transform-inner-height)*0.9993829727172852)))] items-center justify-center left-0 top-0 w-[calc(1px*((var(--transform-inner-height)*0.035123132169246674)+(var(--transform-inner-width)*0.9993829727172852)))]" style={{ "--transform-inner-width": "436", "--transform-inner-height": "286" } as React.CSSProperties}>
        <div className="flex-none rotate-[2.013deg]">
          <ContainerBackgroundSchool3 />
        </div>
      </div>
    </div>
  );
}

function ContainerImageSchool3() {
  return (
    <div className="absolute h-[301px] left-[542px] top-0 w-[354px]" data-name="container/image">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.004567770753055811)+(var(--transform-inner-height)*0.9999895691871643)))] items-center justify-center left-0 top-[47px] w-[calc(1px*((var(--transform-inner-height)*0.004567770753055811)+(var(--transform-inner-width)*0.9999895691871643)))]" style={{ "--transform-inner-width": "354", "--transform-inner-height": "253" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.262deg]">
          <div className="h-[253px] relative rounded-[18px] shadow-[0px_0px_0px_12px_#cb92de] w-[354px]" data-name="image/school3">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[18px] size-full" src={imgImageSchool3} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ColumnSchool3() {
  return (
    <div className="h-[301px] relative shrink-0 w-[896px]" data-name="column/3">
      <ContainerCopySchool3 />
      <ContainerImageSchool3 />
    </div>
  );
}

function ContainerSchool({ activeContent, onContentChange }: { activeContent: ContentType; onContentChange: (content: ContentType) => void }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[896px]" data-name="container/school">
      <Menu activeContent={activeContent} onContentChange={onContentChange} />
      <ColumnSchool1 />
      <ColumnSchool2 />
      <ColumnSchool3 />
    </div>
  );
}

// ANLIES CONTAINER
function ContainerImageAnlies1() {
  return (
    <div className="absolute h-[293px] left-[448px] top-[5px] w-[448px]" data-name="container/image">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.025642002001404762)+(var(--transform-inner-height)*0.9996711611747742)))] items-center justify-center left-[-4px] top-[-6px] w-[calc(1px*((var(--transform-inner-height)*0.025642002001404762)+(var(--transform-inner-width)*0.9996711611747742)))]" style={{ "--transform-inner-width": "448", "--transform-inner-height": "293" } as React.CSSProperties}>
        <div className="flex-none rotate-[358.531deg]">
          <div className="h-[293px] relative rounded-[12px] shadow-[0px_0px_0px_12px_#b9cef4] w-[448px]" data-name="image/anlies1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[12px] size-full" src={imgImageAnlies1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerBackgroundAnlies1() {
  return (
    <div className="bg-[#cb92de] h-[282px] relative rounded-[18px] w-[400px] backdrop-blur-[8px] opacity-85" data-name="container/background">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.02823586016893387)+(var(--transform-inner-height)*0.9996013045310974)))] items-center justify-center left-[20.85px] top-[264.33px] translate-y-[-100%] w-[calc(1px*((var(--transform-inner-height)*0.02823586016893387)+(var(--transform-inner-width)*0.9996013045310974)))]" style={{ "--transform-inner-width": "352", "--transform-inner-height": "235.15625" } as React.CSSProperties}>
        <div className="flex-none rotate-[358.382deg]">
          <div className="flex flex-col font-['Poppins:Light',sans-serif] justify-end leading-[0] not-italic relative text-[#010000] text-[24px] w-[352px]">
            <p className="leading-[33.6px]">{`Annemieke Buijs vormt samen met Elise Fernandez het dynamische theaterduo 'An&Lies'. Het gepassioneerde tweetal produceert en speelt in diverse voorstellingen voor (speciaal) basisonderwijs.`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerCopyAnlies1() {
  return (
    <div className="absolute h-[293px] left-0 top-[5px] w-[400px]" data-name="container/copy">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.028235862031579018)+(var(--transform-inner-height)*0.9996013641357422)))] items-center justify-center left-[-4px] top-0 w-[calc(1px*((var(--transform-inner-height)*0.028235862031579018)+(var(--transform-inner-width)*0.9996013641357422)))]" style={{ "--transform-inner-width": "400", "--transform-inner-height": "282" } as React.CSSProperties}>
        <div className="flex-none rotate-[1.618deg]">
          <ContainerBackgroundAnlies1 />
        </div>
      </div>
    </div>
  );
}

function ColumnAnlies1() {
  return (
    <div className="h-[303px] relative shrink-0 w-[896px]" data-name="column/1">
      <ContainerImageAnlies1 />
      <ContainerCopyAnlies1 />
    </div>
  );
}

function ContainerBackgroundAnlies2() {
  return (
    <div className="bg-[#fbf8a4] h-[180px] relative rounded-[18px] w-[399px] backdrop-blur-[8px] opacity-85" data-name="container/background">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.025403883308172226)+(var(--transform-inner-height)*0.999677300453186)))] items-center justify-center left-[22.11px] top-[161.4px] translate-y-[-100%] w-[calc(1px*((var(--transform-inner-height)*0.025403883308172226)+(var(--transform-inner-width)*0.999677300453186)))]" style={{ "--transform-inner-width": "352", "--transform-inner-height": "135" } as React.CSSProperties}>
        <div className="flex-none rotate-[358.544deg]">
          <div className="flex flex-col font-['Poppins:Light',sans-serif] h-[135px] justify-end leading-[0] not-italic relative text-[#010000] text-[24px] w-[352px]">
            <p className="leading-[33.6px]">{`An&Lies is ook als team inzetbaar voor zowel dramacursussen als sociale vaardigsheidstrainingen.`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerCopyAnlies2() {
  return (
    <div className="absolute h-[190px] left-[492px] top-[69px] w-[404px]" data-name="container/copy">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.025403883308172226)+(var(--transform-inner-height)*0.999677300453186)))] items-center justify-center left-0 top-0 w-[calc(1px*((var(--transform-inner-height)*0.025403883308172226)+(var(--transform-inner-width)*0.999677300453186)))]" style={{ "--transform-inner-width": "399", "--transform-inner-height": "180" } as React.CSSProperties}>
        <div className="flex-none rotate-[1.456deg]">
          <ContainerBackgroundAnlies2 />
        </div>
      </div>
    </div>
  );
}

function ContainerImageAnlies2() {
  return (
    <div className="absolute h-[259px] left-0 top-0 w-[444px]" data-name="container/image">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.011542635038495064)+(var(--transform-inner-height)*0.9999333620071411)))] items-center justify-center left-[-1px] top-[48px] w-[calc(1px*((var(--transform-inner-height)*0.011542635038495064)+(var(--transform-inner-width)*0.9999333620071411)))]" style={{ "--transform-inner-width": "444", "--transform-inner-height": "206" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.661deg]">
          <div className="h-[206px] relative rounded-[12px] shadow-[0px_0px_0px_12px_#f4b9de] w-[444px]" data-name="image/anlies2">
            <img alt="" className="absolute inset-0 max-w-none object-top object-cover pointer-events-none rounded-[12px] size-full" src={imgCarousel} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ColumnAnlies2() {
  return (
    <div className="h-[259px] relative shrink-0 w-[896px]" data-name="column/2">
      <ContainerCopyAnlies2 />
      <ContainerImageAnlies2 />
    </div>
  );
}

function ContainerAnlies({ activeContent, onContentChange }: { activeContent: ContentType; onContentChange: (content: ContentType) => void }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[896px]" data-name="container/anlies">
      <Menu activeContent={activeContent} onContentChange={onContentChange} />
      <ColumnAnlies1 />
      <ColumnAnlies2 />
    </div>
  );
}

// COMPANY CONTAINER
function ContainerImageCompany1() {
  return (
    <div className="absolute h-[363px] left-[460px] top-0 w-[436px]" data-name="container/image">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.01948852464556694)+(var(--transform-inner-height)*0.9998100996017456)))] items-center justify-center left-[-3px] top-[-4px] w-[calc(1px*((var(--transform-inner-height)*0.01948852464556694)+(var(--transform-inner-width)*0.9998100996017456)))]" style={{ "--transform-inner-width": "436", "--transform-inner-height": "363" } as React.CSSProperties}>
        <div className="flex-none rotate-[1.117deg]">
          <div className="h-[363px] relative rounded-[12px] shadow-[0px_0px_0px_12px_#cb92de] w-[436px]" data-name="image/company1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[12px] size-full" src={imgImageCompany1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerBackgroundCompany1() {
  return (
    <div className="bg-[#b9cef4] h-[350px] relative rounded-[18px] w-[400px] backdrop-blur-[8px] opacity-85" data-name="container/background">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.03177317976951599)+(var(--transform-inner-height)*0.9994950890541077)))] items-center justify-center left-[18.81px] top-[332.23px] translate-y-[-100%] w-[calc(1px*((var(--transform-inner-height)*0.03177317976951599)+(var(--transform-inner-width)*0.9994950890541077)))]" style={{ "--transform-inner-width": "352", "--transform-inner-height": "268.75" } as React.CSSProperties}>
        <div className="flex-none rotate-[1.821deg]">
          <div className="flex flex-col font-['Poppins:Light',sans-serif] justify-end leading-[0] not-italic relative text-[#010000] text-[24px] w-[352px]">
            <p className="leading-[33.6px] mt-[-30px]">Annemieke's Acting Agency biedt professionele bedrijfscursussen waarbij drama- en theatertechnieken worden ingezet om communicatie, samenwerking en presentatievaardigheden te versterken.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerCopyCompany1() {
  return (
    <div className="absolute h-[363px] left-0 top-0 w-[412px]" data-name="container/copy">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.03177317976951599)+(var(--transform-inner-height)*0.9994950890541077)))] items-center justify-center left-0 top-0 w-[calc(1px*((var(--transform-inner-height)*0.03177317976951599)+(var(--transform-inner-width)*0.9994950890541077)))]" style={{ "--transform-inner-width": "400", "--transform-inner-height": "350" } as React.CSSProperties}>
        <div className="flex-none rotate-[358.179deg]">
          <ContainerBackgroundCompany1 />
        </div>
      </div>
    </div>
  );
}

function ColumnCompany1() {
  return (
    <div className="h-[363px] relative shrink-0 w-[896px]" data-name="column/1">
      <ContainerImageCompany1 />
      <ContainerCopyCompany1 />
    </div>
  );
}

function ContainerBackgroundCompany2() {
  return (
    <div className="bg-[#b9cef4] h-[280px] relative rounded-[18px] w-[400px] backdrop-blur-[8px] opacity-85" data-name="container/background">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.021001238375902176)+(var(--transform-inner-height)*0.999779462814331)))] items-center justify-center left-[21.67px] top-[261.5px] translate-y-[-100%] w-[calc(1px*((var(--transform-inner-height)*0.021001238375902176)+(var(--transform-inner-width)*0.999779462814331)))]" style={{ "--transform-inner-width": "352", "--transform-inner-height": "235.15625" } as React.CSSProperties}>
        <div className="flex-none rotate-[1.203deg]">
          <div className="flex flex-col font-['Poppins:Light',sans-serif] justify-end leading-[0] not-italic relative text-[#010000] text-[24px] w-[352px]">
            <p className="leading-[33.6px]">Deelnemers ontwikkelen door middel van interactieve oefeningen, rollenspellen en improvisatie meer zelfvertrouwen, effectieve communicatiestijlen en een betere teamdynamiek.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerCopyCompany2() {
  return (
    <div className="absolute h-[288px] left-[471px] top-[48px] w-[406px]" data-name="container/copy">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.021001238375902176)+(var(--transform-inner-height)*0.999779462814331)))] items-center justify-center left-0 top-0 w-[calc(1px*((var(--transform-inner-height)*0.021001238375902176)+(var(--transform-inner-width)*0.999779462814331)))]" style={{ "--transform-inner-width": "400", "--transform-inner-height": "280" } as React.CSSProperties}>
        <div className="flex-none rotate-[358.797deg]">
          <ContainerBackgroundCompany2 />
        </div>
      </div>
    </div>
  );
}

function ContainerBackgroundCompany3() {
  return (
    <div className="bg-[#f4b9de] h-[212px] relative rounded-[18px] w-[404px] backdrop-blur-[8px] opacity-85" data-name="container/background">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.023178691044449806)+(var(--transform-inner-height)*0.9997313618659973)))] items-center justify-center left-[21.71px] top-[194.46px] translate-y-[-100%] w-[calc(1px*((var(--transform-inner-height)*0.023178691044449806)+(var(--transform-inner-width)*0.9997313618659973)))]" style={{ "--transform-inner-width": "352", "--transform-inner-height": "168" } as React.CSSProperties}>
        <div className="flex-none rotate-[358.672deg]">
          <div className="flex flex-col font-['Poppins:Light',sans-serif] h-[168px] justify-end leading-[0] not-italic relative text-[#010000] text-[24px] w-[352px]">
            <p className="leading-[33.6px]">Onder leiding van Annemieke Buijs worden deze trainingen op maat gemaakt om aan te sluiten bij de specifieke behoeften van elk bedrijf.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerCopyCompany3() {
  return (
    <div className="absolute h-[221px] left-[19px] top-[82px] w-[404px]" data-name="container/copy">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.023178691044449806)+(var(--transform-inner-height)*0.9997313618659973)))] items-center justify-center left-[-2px] top-0 w-[calc(1px*((var(--transform-inner-height)*0.023178691044449806)+(var(--transform-inner-width)*0.9997313618659973)))]" style={{ "--transform-inner-width": "404", "--transform-inner-height": "212" } as React.CSSProperties}>
        <div className="flex-none rotate-[1.328deg]">
          <ContainerBackgroundCompany3 />
        </div>
      </div>
    </div>
  );
}

function ColumnCompany2() {
  return (
    <div className="h-[384px] relative shrink-0 w-[896px]" data-name="column/2">
      <ContainerCopyCompany2 />
      <ContainerCopyCompany3 />
    </div>
  );
}

function ContainerBackgroundCompany4() {
  return (
    <div className="bg-[#8de6d7] h-[227px] relative rounded-[18px] w-[896px] backdrop-blur-[8px] opacity-85" data-name="container/background">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.027130497619509697)+(var(--transform-inner-height)*0.9996318817138672)))] items-center justify-center left-[16.97px] top-[209.57px] translate-y-[-100%] w-[calc(1px*((var(--transform-inner-height)*0.027130497619509697)+(var(--transform-inner-width)*0.9996318817138672)))]" style={{ "--transform-inner-width": "858", "--transform-inner-height": "134.375" } as React.CSSProperties}>
        <div className="flex-none rotate-[1.555deg]">
          <div className="flex flex-col font-['Poppins:Light',sans-serif] justify-end leading-[0] not-italic relative text-[#010000] text-[24px] w-[858px]">
            <p className="leading-[33.6px] mt-[-30px]">Of het nu gaat om het versterken van presentatievaardigheden, het stimuleren van creatieve samenwerking of het effectief voeren van uitdagende professionele gesprekken, de bedrijfscursussen van AAA bieden een unieke en impactvolle ervaring die zowel professionele als persoonlijke groei bevordert.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerCopyCompany4() {
  return (
    <div className="absolute h-[251px] left-0 top-0 w-[896px]" data-name="container/copy">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.02704930305480957)+(var(--transform-inner-height)*0.9996340870857239)))] items-center justify-center left-[-3px] top-0 w-[calc(1px*((var(--transform-inner-height)*0.02704930305480957)+(var(--transform-inner-width)*0.9996340870857239)))]" style={{ "--transform-inner-width": "896", "--transform-inner-height": "227" } as React.CSSProperties}>
        <div className="flex-none rotate-[358.45deg]">
          <ContainerBackgroundCompany4 />
        </div>
      </div>
    </div>
  );
}

function ColumnCompany3() {
  return (
    <div className="h-[251px] relative shrink-0 w-[896px]" data-name="column/3">
      <ContainerCopyCompany4 />
    </div>
  );
}

function ContainerCompany({ activeContent, onContentChange }: { activeContent: ContentType; onContentChange: (content: ContentType) => void }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[896px]" data-name="container/company">
      <Menu activeContent={activeContent} onContentChange={onContentChange} />
      <ColumnCompany1 />
      <ColumnCompany2 />
      <ColumnCompany3 />
    </div>
  );
}

export default function ContentTablet() {
  const [activeContent, setActiveContent] = useState<ContentType>("school");

  return (
    <div className="relative w-full" data-name="section/content">
      <div className="flex flex-row justify-center w-full">
        <div className="box-border content-stretch flex items-start justify-center px-[48px] py-[72px] relative w-full">
          {activeContent === "school" && <ContainerSchool activeContent={activeContent} onContentChange={setActiveContent} />}
          {activeContent === "anlies" && <ContainerAnlies activeContent={activeContent} onContentChange={setActiveContent} />}
          {activeContent === "company" && <ContainerCompany activeContent={activeContent} onContentChange={setActiveContent} />}
        </div>
      </div>
    </div>
  );
}