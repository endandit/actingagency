import imgImageCompany1 from "figma:asset/eb8c7c7ca631a3fd0b67e594e4f0d4255a5fc0ad.png";

function Menu() {
  return <div className="h-[154px] rounded-[18px] shrink-0 w-full" data-name="menu" />;
}

function ContainerImage() {
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

function ContainerBackground() {
  return (
    <div className="bg-[#b9cef4] h-[350px] relative rounded-[18px] w-[400px]" data-name="container/background">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.03177317976951599)+(var(--transform-inner-height)*0.9994950890541077)))] items-center justify-center left-[18.81px] top-[332.23px] translate-y-[-100%] w-[calc(1px*((var(--transform-inner-height)*0.03177317976951599)+(var(--transform-inner-width)*0.9994950890541077)))]" style={{ "--transform-inner-width": "352", "--transform-inner-height": "268.75" } as React.CSSProperties}>
        <div className="flex-none rotate-[1.821deg]">
          <div className="flex flex-col font-['Poppins:Light',sans-serif] justify-end leading-[0] not-italic relative text-[#010000] text-[24px] w-[352px]">
            <p className="leading-[33.6px]">Annemieke’s Acting Agency biedt professionele bedrijfscursussen waarbij drama- en theatertechnieken worden ingezet om communicatie, samenwerking en presentatievaardigheden te versterken.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerCopy() {
  return (
    <div className="absolute h-[363px] left-0 top-0 w-[412px]" data-name="container/copy">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.03177317976951599)+(var(--transform-inner-height)*0.9994950890541077)))] items-center justify-center left-0 top-0 w-[calc(1px*((var(--transform-inner-height)*0.03177317976951599)+(var(--transform-inner-width)*0.9994950890541077)))]" style={{ "--transform-inner-width": "400", "--transform-inner-height": "350" } as React.CSSProperties}>
        <div className="flex-none rotate-[358.179deg]">
          <ContainerBackground />
        </div>
      </div>
    </div>
  );
}

function Column() {
  return (
    <div className="h-[363px] relative shrink-0 w-[896px]" data-name="column/1">
      <ContainerImage />
      <ContainerCopy />
    </div>
  );
}

function ContainerBackground1() {
  return (
    <div className="bg-[#b9cef4] h-[280px] relative rounded-[18px] w-[400px]" data-name="container/background">
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

function ContainerCopy1() {
  return (
    <div className="absolute h-[288px] left-[471px] top-[48px] w-[406px]" data-name="container/copy">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.021001238375902176)+(var(--transform-inner-height)*0.999779462814331)))] items-center justify-center left-0 top-0 w-[calc(1px*((var(--transform-inner-height)*0.021001238375902176)+(var(--transform-inner-width)*0.999779462814331)))]" style={{ "--transform-inner-width": "400", "--transform-inner-height": "280" } as React.CSSProperties}>
        <div className="flex-none rotate-[358.797deg]">
          <ContainerBackground1 />
        </div>
      </div>
    </div>
  );
}

function ContainerBackground2() {
  return (
    <div className="bg-[#f4b9de] h-[212px] relative rounded-[18px] w-[404px]" data-name="container/background">
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

function ContainerCopy2() {
  return (
    <div className="absolute h-[221px] left-[19px] top-[82px] w-[404px]" data-name="container/copy">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.023178691044449806)+(var(--transform-inner-height)*0.9997313618659973)))] items-center justify-center left-[-2px] top-0 w-[calc(1px*((var(--transform-inner-height)*0.023178691044449806)+(var(--transform-inner-width)*0.9997313618659973)))]" style={{ "--transform-inner-width": "404", "--transform-inner-height": "212" } as React.CSSProperties}>
        <div className="flex-none rotate-[1.328deg]">
          <ContainerBackground2 />
        </div>
      </div>
    </div>
  );
}

function Column1() {
  return (
    <div className="h-[384px] relative shrink-0 w-[896px]" data-name="column/2">
      <ContainerCopy1 />
      <ContainerCopy2 />
    </div>
  );
}

function ContainerBackground3() {
  return (
    <div className="bg-[#8de6d7] h-[227px] relative rounded-[18px] w-[896px]" data-name="container/background">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.027130497619509697)+(var(--transform-inner-height)*0.9996318817138672)))] items-center justify-center left-[16.97px] top-[209.57px] translate-y-[-100%] w-[calc(1px*((var(--transform-inner-height)*0.027130497619509697)+(var(--transform-inner-width)*0.9996318817138672)))]" style={{ "--transform-inner-width": "858", "--transform-inner-height": "134.375" } as React.CSSProperties}>
        <div className="flex-none rotate-[1.555deg]">
          <div className="flex flex-col font-['Poppins:Light',sans-serif] justify-end leading-[0] not-italic relative text-[#010000] text-[24px] w-[858px]">
            <p className="leading-[33.6px]">Of het nu gaat om het versterken van presentatievaardigheden, het stimuleren van creatieve samenwerking of het effectief voeren van uitdagende professionele gesprekken, de bedrijfscursussen van AAA bieden een unieke en impactvolle ervaring die zowel professionele als persoonlijke groei bevordert.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerCopy3() {
  return (
    <div className="absolute h-[251px] left-0 top-0 w-[896px]" data-name="container/copy">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.02704930305480957)+(var(--transform-inner-height)*0.9996340870857239)))] items-center justify-center left-[-3px] top-0 w-[calc(1px*((var(--transform-inner-height)*0.02704930305480957)+(var(--transform-inner-width)*0.9996340870857239)))]" style={{ "--transform-inner-width": "896", "--transform-inner-height": "227" } as React.CSSProperties}>
        <div className="flex-none rotate-[358.45deg]">
          <ContainerBackground3 />
        </div>
      </div>
    </div>
  );
}

function Column2() {
  return (
    <div className="h-[251px] relative shrink-0 w-[896px]" data-name="column/3">
      <ContainerCopy3 />
    </div>
  );
}

function ContainerCompany() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[896px]" data-name="container/company">
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
        <div className="box-border content-stretch flex flex-col items-center px-[48px] py-[72px] relative size-full">
          <ContainerCompany />
        </div>
      </div>
    </div>
  );
}