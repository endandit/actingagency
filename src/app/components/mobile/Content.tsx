import imgImageSchool1 from "figma:asset/07c868c45111ef8b110b7252e86a855b2342499b.png";
import imgImageSchool2 from "figma:asset/31492db7fcd82ccf5d550b7838dc2df4375eb91c.png";
import imgImageSchool3 from "figma:asset/a68c03b73728afb87f1ce20b43c4a93ceeae1bd0.png";
import imgImageAnlies1 from "figma:asset/f0e76d8e1f48eb8c7db6da8f0f8349a3e8a4026b.png";
import imgImageCompany1 from "figma:asset/eb8c7c7ca631a3fd0b67e594e4f0d4255a5fc0ad.png";
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

type MenuOption = "school" | "anlies" | "company";

// Nav Components
function NavSchool({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative shrink-0 aspect-square w-[30%] max-w-[154px] bg-transparent border-none cursor-pointer p-0"
      data-name="nav/school"
    >
      <div 
        className="absolute left-0 size-full top-0" 
        data-name="nav/school/default"
        style={{ opacity: !isHovered && !isActive ? 1 : 0 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgNavSchoolDefault} />
      </div>
      <div 
        className="absolute left-0 size-full top-0" 
        data-name="nav/school/hover"
        style={{ opacity: isHovered && !isActive ? 1 : 0 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgNavSchoolHover} />
      </div>
      <div 
        className="absolute left-0 size-full top-0" 
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
      className="relative shrink-0 aspect-square w-[30%] max-w-[154px] bg-transparent border-none cursor-pointer p-0"
      data-name="nav/anlies"
    >
      <div 
        className="absolute left-0 size-full top-0" 
        data-name="nav/anlies/default"
        style={{ opacity: !isHovered && !isActive ? 1 : 0 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgNavAnliesDefault} />
      </div>
      <div 
        className="absolute left-0 size-full top-0" 
        data-name="nav/anlies/hover"
        style={{ opacity: isHovered && !isActive ? 1 : 0 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgNavAnliesPressed} />
      </div>
      <div 
        className="absolute left-0 size-full top-0" 
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
      className="relative shrink-0 aspect-square w-[30%] max-w-[154px] bg-transparent border-none cursor-pointer p-0"
      data-name="nav/company"
    >
      <div 
        className="absolute left-0 size-full top-0" 
        data-name="nav/company/default"
        style={{ opacity: !isHovered && !isActive ? 1 : 0 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgNavCompanyDefault} />
      </div>
      <div 
        className="absolute left-0 size-full top-0" 
        data-name="nav/company/hover"
        style={{ opacity: isHovered && !isActive ? 1 : 0 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgNavCompanyHover} />
      </div>
      <div 
        className="absolute left-0 size-full top-0" 
        data-name="nav/company/pressed"
        style={{ opacity: isActive ? 1 : 0 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgNavCompanyPressed} />
      </div>
    </button>
  );
}

function Menu({ activeMenu, onMenuChange }: { activeMenu: MenuOption; onMenuChange: (menu: MenuOption) => void }) {
  return (
    <div className="content-stretch flex flex-row items-center justify-between relative rounded-[18px] shrink-0 w-full" data-name="menu">
      <NavSchool isActive={activeMenu === "school"} onClick={() => onMenuChange("school")} />
      <NavAnlies isActive={activeMenu === "anlies"} onClick={() => onMenuChange("anlies")} />
      <NavCompany isActive={activeMenu === "company"} onClick={() => onMenuChange("company")} />
    </div>
  );
}

// SCHOOL PANEL
function ContainerBackgroundSchool1() {
  return (
    <div className="bg-[#d0f4b9] h-[423.163px] relative rounded-[18px] w-full backdrop-blur-[8px] opacity-85" data-name="container/background">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[423.163px] items-center justify-center px-[24px] py-[18px] relative w-full">
          <div className="basis-0 flex grow h-[calc(1px*((var(--transform-inner-width)*0.04352821037173271)+(var(--transform-inner-height)*0.9990522265434265)))] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "1116", "--transform-inner-height": "75.1875" } as React.CSSProperties}>
            <div className="flex-none rotate-[2.495deg] w-full">
              <div className="flex flex-col font-['Poppins:Light',sans-serif] justify-end not-italic relative text-[#010000] text-[0px] w-full">
                <p className="leading-[33.6px] text-[22px]">
                  <span className="font-['Poppins:Medium',sans-serif] not-italic">A</span>
                  <span>nnemieke's </span>
                  <span className="font-['Poppins:Medium',sans-serif] not-italic">A</span>
                  <span>cting </span>
                  <span className="font-['Poppins:Medium',sans-serif] not-italic">A</span>
                  <span>gency biedt dynamische dramacursussen en sociale vaardigheidstrainingen aan die speciaal zijn ontworpen voor kinderen, waarin plezier en creativiteit centraal staan.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerCopySchool1() {
  return (
    <div className="h-[515.372px] relative shrink-0 w-full" data-name="container/copy">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[515.372px] items-center pl-0 pr-0 py-0 relative w-full">
          <div className="basis-0 flex grow h-[calc(1px*((var(--transform-inner-width)*0.04352821037173271)+(var(--transform-inner-height)*0.9990522265434265)))] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "1164", "--transform-inner-height": "503.15625" } as React.CSSProperties}>
            <div className="flex-none rotate-[357.505deg] w-full">
              <ContainerBackgroundSchool1 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerImageSchool1() {
  return (
    <div className="box-border content-stretch flex flex-col h-[250px] items-end px-[12px] py-0 relative shrink-0 w-full" data-name="container/image">
      <div className="flex h-[250px] items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[1.289deg] w-full">
          <div className="h-[250px] relative rounded-[12px] shadow-[0px_0px_0px_12px_#fbf8a4] w-full" data-name="image/school1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[12px] size-full" src={imgImageSchool1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ColumnSchool1() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start justify-center relative shrink-0 w-full" data-name="column/1">
      <ContainerCopySchool1 />
      <ContainerImageSchool1 />
    </div>
  );
}

function ContainerBackgroundSchool2() {
  return (
    <div className="bg-[#f4b9de] h-[515.198px] relative rounded-[18px] w-full backdrop-blur-[8px] opacity-85" data-name="container/background">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[515.198px] items-center justify-center px-[24px] py-[18px] relative w-full">
          <div className="basis-0 flex grow h-[calc(1px*((var(--transform-inner-width)*0.030151931568980217)+(var(--transform-inner-height)*0.9995453357696533)))] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "1152", "--transform-inner-height": "101" } as React.CSSProperties}>
            <div className="flex-none rotate-[1.728deg] w-full">
              <div className="flex flex-col font-['Poppins:Light',sans-serif] justify-end leading-[0] not-italic relative text-[#010000] text-[22px] w-full">
                <p className="leading-[33.6px]">Door middel van theateroefeningen, improvisatie en korte optredens leren kinderen zich uiten, samenwerken en hun emoties vormgeven. De cursussen zijn afgestemd op verschillende leeftijdsgroepen, waardoor elk kind op zijn eigen niveau kan groeien en stralen.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerCopySchool2() {
  return (
    <div className="content-stretch flex h-[524.824px] items-start relative shrink-0 w-full" data-name="container/copy">
      <div className="basis-0 flex grow h-[calc(1px*((var(--transform-inner-width)*0.030151931568980217)+(var(--transform-inner-height)*0.9995453357696533)))] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "515" } as React.CSSProperties}>
        <div className="flex-none rotate-[358.272deg] w-full">
          <ContainerBackgroundSchool2 />
        </div>
      </div>
    </div>
  );
}

function ContainerImageSchool2() {
  return (
    <div className="content-stretch flex flex-col h-[250px] items-start px-[6px] relative shrink-0 w-full" data-name="container/image">
      <div className="basis-0 flex grow items-center justify-center min-h-px min-w-px relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "250" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.661deg] size-full">
          <div className="relative rounded-[12px] shadow-[0px_0px_0px_12px_#8de6d8] size-full" data-name="image/school2">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[12px] size-full" src={imgImageSchool2} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ColumnSchool2() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-end justify-end relative shrink-0 w-full" data-name="column/2">
      <ContainerCopySchool2 />
      <ContainerImageSchool2 />
    </div>
  );
}

function ContainerBackgroundSchool3() {
  return (
    <div className="bg-[#b9cef4] h-[381.592px] relative rounded-[18px] w-full backdrop-blur-[8px] opacity-85" data-name="container/background">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[381.592px] items-center justify-center px-[24px] py-[18px] relative w-full">
          <div className="basis-0 flex grow h-[calc(1px*((var(--transform-inner-width)*0.035123132169246674)+(var(--transform-inner-height)*0.9993830323219299)))] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "1152", "--transform-inner-height": "67.1875" } as React.CSSProperties}>
            <div className="flex-none rotate-[357.987deg] w-full">
              <div className="flex flex-col font-['Poppins:Light',sans-serif] justify-end leading-[0] not-italic relative text-[#010000] text-[22px] w-full">
                <p className="leading-[33.6px]">Met haar uitgebreide ervaring als docent in het onderwijs creëert Annemieke een veilige en speelse omgeving waarin kinderen hun verbeelding, zelfvertrouwen en sociale interactie ontwikkelen.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerCopySchool3() {
  return (
    <div className="content-stretch flex h-[392.842px] items-start relative shrink-0 w-full" data-name="container/copy">
      <div className="basis-0 flex grow h-[calc(1px*((var(--transform-inner-width)*0.035123132169246674)+(var(--transform-inner-height)*0.9993829727172852)))] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "381.578125" } as React.CSSProperties}>
        <div className="flex-none rotate-[2.013deg] w-full">
          <ContainerBackgroundSchool3 />
        </div>
      </div>
    </div>
  );
}

function ContainerImageSchool3() {
  return (
    <div className="content-stretch flex flex-col h-[250px] items-end px-[12px] relative shrink-0 w-full" data-name="container/image">
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*0.004567770753055811)+(var(--transform-inner-height)*0.9999895691871643)))] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "250" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.262deg] w-full">
          <div className="h-[250px] relative rounded-[18px] shadow-[0px_0px_0px_12px_#cb92de] w-full" data-name="image/school3">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[18px] size-full" src={imgImageSchool3} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ColumnSchool3() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full" data-name="column/3">
      <ContainerCopySchool3 />
      <ContainerImageSchool3 />
    </div>
  );
}

function ContainerSchool() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start max-w-[768px] relative shrink-0 w-full" data-name="container/school">
      <ColumnSchool1 />
      <ColumnSchool2 />
      <ColumnSchool3 />
    </div>
  );
}

// ANLIES PANEL
function ContainerBackgroundAnlies1() {
  return (
    <div className="bg-[#cb92de] h-[413.73px] relative rounded-[18px] w-full backdrop-blur-[8px] opacity-85" data-name="container/background">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[413.73px] items-center justify-center px-[24px] py-[18px] relative w-full">
          <div className="basis-0 flex grow h-[calc(1px*((var(--transform-inner-width)*0.02823586016893387)+(var(--transform-inner-height)*0.9996013045310974)))] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "1152", "--transform-inner-height": "67.1875" } as React.CSSProperties}>
            <div className="flex-none rotate-[358.382deg] w-full">
              <div className="flex flex-col font-['Poppins:Light',sans-serif] justify-end leading-[0] not-italic relative text-[#010000] text-[22px] w-full">
                <p className="leading-[33.6px]">{`Annemieke Buijs vormt samen met Elise Fernandez het dynamische theaterduo 'An&Lies'. Het gepassioneerde tweetal produceert en speelt in diverse voorstellingen voor (speciaal) basisonderwijs.`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerCopyAnlies1() {
  return (
    <div className="content-stretch flex h-[422.798px] items-start relative shrink-0 w-full" data-name="container/copy">
      <div className="basis-0 flex grow h-[calc(1px*((var(--transform-inner-width)*0.028235862031579018)+(var(--transform-inner-height)*0.9996013641357422)))] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "413.71875" } as React.CSSProperties}>
        <div className="flex-none rotate-[1.618deg] w-full">
          <ContainerBackgroundAnlies1 />
        </div>
      </div>
    </div>
  );
}

function ContainerImageAnlies1() {
  return (
    <div className="h-[250px] relative shrink-0 w-full" data-name="container/image">
      <div className="flex flex-col items-end size-full">
        <div className="box-border content-stretch flex flex-col h-[250px] items-end px-[12px] py-0 relative w-full">
          <div className="flex h-[calc(1px*((var(--transform-inner-width)*0.025642002001404762)+(var(--transform-inner-height)*0.9996711611747742)))] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1176", "--transform-inner-height": "250" } as React.CSSProperties}>
            <div className="flex-none rotate-[358.531deg] w-full">
              <div className="h-[250px] relative rounded-[12px] shadow-[0px_0px_0px_12px_#b9cef4] w-full" data-name="image/anlies1">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[12px] size-full" src={imgImageAnlies1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ColumnAnlies1() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start justify-center relative shrink-0 w-full" data-name="column/1">
      <ContainerCopyAnlies1 />
      <ContainerImageAnlies1 />
    </div>
  );
}

function ContainerBackgroundAnlies2() {
  return (
    <div className="bg-[#fbf8a4] h-[215.022px] relative rounded-[18px] w-full backdrop-blur-[8px] opacity-85" data-name="container/background">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[215.022px] items-center justify-center px-[24px] py-[18px] relative w-full">
          <div className="basis-0 flex grow h-[calc(1px*((var(--transform-inner-width)*0.025403883308172226)+(var(--transform-inner-height)*0.999677300453186)))] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "1152", "--transform-inner-height": "33.59375" } as React.CSSProperties}>
            <div className="flex-none rotate-[358.544deg] w-full">
              <div className="flex flex-col font-['Poppins:Light',sans-serif] justify-end leading-[0] not-italic relative text-[#010000] text-[22px] w-full">
                <p className="leading-[33.6px]">{`An&Lies is ook als team inzetbaar voor zowel dramacursussen als sociale vaardigsheidstrainingen.`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerCopyAnlies2() {
  return (
    <div className="content-stretch flex h-[253.25px] items-start relative shrink-0 w-full" data-name="container/copy">
      <div className="basis-0 flex grow h-[calc(1px*((var(--transform-inner-width)*0.025403883308172226)+(var(--transform-inner-height)*0.999677300453186)))] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "245.015625" } as React.CSSProperties}>
        <div className="flex-none rotate-[1.456deg] w-full">
          <ContainerBackgroundAnlies2 />
        </div>
      </div>
    </div>
  );
}

function ColumnAnlies2() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-end justify-end relative shrink-0 w-full pt-[12px]" data-name="column/2">
      <ContainerCopyAnlies2 />
    </div>
  );
}

function ContainerAnlies() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start max-w-[768px] relative shrink-0 w-full" data-name="container/anlies">
      <ColumnAnlies1 />
      <ColumnAnlies2 />
    </div>
  );
}

// COMPANY PANEL
function ContainerBackgroundCompany1() {
  return (
    <div className="bg-[#b9cef4] h-[404.678px] relative rounded-[18px] w-full backdrop-blur-[8px] opacity-85" data-name="container/background">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[404.678px] items-center justify-center px-[24px] py-[18px] relative w-full">
          <div className="basis-0 flex grow h-[calc(1px*((var(--transform-inner-width)*0.03177317976951599)+(var(--transform-inner-height)*0.9994950890541077)))] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "1152", "--transform-inner-height": "75.1875" } as React.CSSProperties}>
            <div className="flex-none rotate-[1.821deg] w-full">
              <div className="flex flex-col font-['Poppins:Light',sans-serif] justify-end leading-[0] not-italic relative text-[#010000] text-[0px] w-full">
                <p className="leading-[33.6px] text-[22px]">
                  Annemieke's Acting Agency biedt professionele bedrijfscursussen waarbij drama- en theatertechnieken worden ingezet om communicatie, samenwerking en presentatievaardigheden te versterken.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerCopyCompany1() {
  return (
    <div className="content-stretch flex h-[444.858px] items-start relative shrink-0 w-full" data-name="container/copy">
      <div className="basis-0 flex grow h-[calc(1px*((var(--transform-inner-width)*0.03177317976951599)+(var(--transform-inner-height)*0.9994950890541077)))] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "414.671875" } as React.CSSProperties}>
        <div className="flex-none rotate-[358.179deg] w-full">
          <ContainerBackgroundCompany1 />
        </div>
      </div>
    </div>
  );
}

function ContainerImageCompany1() {
  return (
    <div className="h-[250px] relative shrink-0 w-full" data-name="container/image">
      <div className="flex flex-col items-end size-full">
        <div className="box-border content-stretch flex flex-col h-[250px] items-end px-[12px] py-0 relative w-full">
          <div className="flex h-[calc(1px*((var(--transform-inner-width)*0.01948852464556694)+(var(--transform-inner-height)*0.9998100996017456)))] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1176", "--transform-inner-height": "250" } as React.CSSProperties}>
            <div className="flex-none rotate-[1.117deg] w-full">
              <div className="h-[250px] relative rounded-[12px] shadow-[0px_0px_0px_12px_#cb92de] w-full" data-name="image/company1">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[12px] size-full" src={imgImageCompany1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ColumnCompany1() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start justify-center relative shrink-0 w-full" data-name="column/1">
      <ContainerCopyCompany1 />
      <ContainerImageCompany1 />
    </div>
  );
}

function ContainerBackgroundCompany2() {
  return (
    <div className="bg-[#f4b9de] h-[281.395px] relative rounded-[18px] w-full backdrop-blur-[8px] opacity-85" data-name="container/background">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[281.395px] items-center justify-center px-[24px] py-[18px] relative w-full">
          <div className="basis-0 flex grow h-[calc(1px*((var(--transform-inner-width)*0.023178691044449806)+(var(--transform-inner-height)*0.9997313618659973)))] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "1152", "--transform-inner-height": "67.1875" } as React.CSSProperties}>
            <div className="flex-none rotate-[358.672deg] w-full">
              <div className="flex flex-col font-['Poppins:Light',sans-serif] justify-end leading-[0] not-italic relative text-[#010000] text-[22px] w-full">
                <p className="leading-[33.6px]">Onder leiding van Annemieke Buijs worden deze trainingen op maat gemaakt om aan te sluiten bij de specifieke behoeften van elk bedrijf.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerCopyCompany2() {
  return (
    <div className="content-stretch flex h-[318.89px] items-start relative shrink-0 w-full" data-name="container/copy">
      <div className="basis-0 flex grow h-[calc(1px*((var(--transform-inner-width)*0.023178691044449806)+(var(--transform-inner-height)*0.9997313618659973)))] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "311.390625" } as React.CSSProperties}>
        <div className="flex-none rotate-[1.328deg] w-full">
          <ContainerBackgroundCompany2 />
        </div>
      </div>
    </div>
  );
}

function ContainerBackgroundCompany3() {
  return (
    <div className="bg-[#b9cef4] h-[375.77px] relative rounded-[18px] w-full backdrop-blur-[8px] opacity-85" data-name="container/background">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[375.77px] items-center justify-center px-[24px] py-[18px] relative w-full">
          <div className="basis-0 flex grow h-[calc(1px*((var(--transform-inner-width)*0.021001238375902176)+(var(--transform-inner-height)*0.999779462814331)))] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "1152", "--transform-inner-height": "67.1875" } as React.CSSProperties}>
            <div className="flex-none rotate-[1.203deg] w-full">
              <div className="flex flex-col font-['Poppins:Light',sans-serif] justify-end leading-[0] not-italic relative text-[#010000] text-[22px] w-full">
                <p className="leading-[33.6px]">Deelnemers ontwikkelen door middel van interactieve oefeningen, rollenspellen en improvisatie meer zelfvertrouwen, effectieve communicatiestijlen en een betere teamdynamiek.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerCopyCompany3() {
  return (
    <div className="content-stretch flex flex-col h-[452.539px] items-start relative shrink-0 w-full" data-name="container/copy">
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*0.021001238375902176)+(var(--transform-inner-height)*0.999779462814331)))] items-center justify-center relative shrink-0 w-full" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "445.765625" } as React.CSSProperties}>
        <div className="flex-none rotate-[358.797deg] w-full">
          <ContainerBackgroundCompany3 />
        </div>
      </div>
    </div>
  );
}

function ColumnCompany2() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start justify-center relative shrink-0 w-full" data-name="column/2">
      <ContainerCopyCompany2 />
      <ContainerCopyCompany3 />
    </div>
  );
}

function ContainerBackgroundCompany4() {
  return (
    <div className="bg-[#8de6d7] h-[595.359px] relative rounded-[18px] w-full backdrop-blur-[8px] opacity-85" data-name="container/background">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[595.359px] items-center justify-center px-[24px] py-[18px] relative w-full">
          <div className="basis-0 flex grow h-[calc(1px*((var(--transform-inner-width)*0.027130497619509697)+(var(--transform-inner-height)*0.9996318817138672)))] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "1152", "--transform-inner-height": "109" } as React.CSSProperties}>
            <div className="flex-none rotate-[1.555deg] w-full">
              <div className="flex flex-col font-['Poppins:Light',sans-serif] justify-end leading-[0] not-italic relative text-[#010000] text-[0px] w-full">
                <p className="leading-[33.6px]">
                  <span className="text-[22px]">Of het nu gaat om het versterken van presentatievaardigheden, het stimuleren van creatieve samenwerking of het effectief voeren van uitdagende professionele gesprekken, de bedrijfscursussen van AAA bieden een unieke en impactvolle ervaring die zowel professionele als persoonlijke groei bevordert.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerCopyCompany4() {
  return (
    <div className="basis-0 content-stretch flex grow h-[643.979px] items-start min-h-px min-w-px relative shrink-0" data-name="container/copy">
      <div className="basis-0 flex grow h-[calc(1px*((var(--transform-inner-width)*0.02704930305480957)+(var(--transform-inner-height)*0.9996340870857239)))] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "615" } as React.CSSProperties}>
        <div className="flex-none rotate-[358.45deg] w-full">
          <ContainerBackgroundCompany4 />
        </div>
      </div>
    </div>
  );
}

function ColumnCompany3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="column/3">
      <ContainerCopyCompany4 />
    </div>
  );
}

function ContainerCompany() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start max-w-[768px] relative shrink-0 w-full" data-name="container/company">
      <ColumnCompany1 />
      <ColumnCompany2 />
      <ColumnCompany3 />
    </div>
  );
}

export default function ContentMobile() {
  const [activeMenu, setActiveMenu] = useState<MenuOption>("school");

  return (
    <div className="relative w-full bg-transparent" data-name="section/content">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col items-center px-[24px] py-[36px] relative w-full">
          <div className="content-stretch flex flex-col gap-[36px] items-start max-w-[768px] relative shrink-0 w-full">
            <Menu activeMenu={activeMenu} onMenuChange={setActiveMenu} />
            {activeMenu === "school" && <ContainerSchool />}
            {activeMenu === "anlies" && <ContainerAnlies />}
            {activeMenu === "company" && <ContainerCompany />}
          </div>
        </div>
      </div>
    </div>
  );
}