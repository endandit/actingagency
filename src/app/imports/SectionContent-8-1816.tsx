import imgImageAnlies1 from "figma:asset/f0e76d8e1f48eb8c7db6da8f0f8349a3e8a4026b.png";
import imgImageAnlies2 from "figma:asset/af23e8bb7f9ce3e72671c0a45ae52125bbb0818d.png";

function Menu() {
  return <div className="h-[154px] rounded-[18px] shrink-0 w-[896px]" data-name="menu" />;
}

function ContainerImage() {
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

function ContainerBackground() {
  return (
    <div className="bg-[#cb92de] h-[282px] relative rounded-[18px] w-[400px]" data-name="container/background">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.02823586016893387)+(var(--transform-inner-height)*0.9996013045310974)))] items-center justify-center left-[20.85px] top-[264.33px] translate-y-[-100%] w-[calc(1px*((var(--transform-inner-height)*0.02823586016893387)+(var(--transform-inner-width)*0.9996013045310974)))]" style={{ "--transform-inner-width": "352", "--transform-inner-height": "235" } as React.CSSProperties}>
        <div className="flex-none rotate-[358.382deg]">
          <div className="flex flex-col font-['Poppins:Light',sans-serif] justify-end leading-[0] not-italic relative text-[#010000] text-[24px] w-[352px]">
            <p className="leading-[33.6px]">{`Annemieke Buijs vormt samen met Elise Fernandez het dynamische theaterduo ‘An&Lies’. Het gepassioneerde tweetal produceert en speelt in diverse voorstellingen voor (speciaal) basisonderwijs.`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContainerCopy() {
  return (
    <div className="absolute h-[293px] left-0 top-[5px] w-[400px]" data-name="container/copy">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.028235862031579018)+(var(--transform-inner-height)*0.9996013641357422)))] items-center justify-center left-[-4px] top-0 w-[calc(1px*((var(--transform-inner-height)*0.028235862031579018)+(var(--transform-inner-width)*0.9996013641357422)))]" style={{ "--transform-inner-width": "400", "--transform-inner-height": "282" } as React.CSSProperties}>
        <div className="flex-none rotate-[1.618deg]">
          <ContainerBackground />
        </div>
      </div>
    </div>
  );
}

function Column() {
  return (
    <div className="h-[303px] relative shrink-0 w-[896px]" data-name="column/1">
      <ContainerImage />
      <ContainerCopy />
    </div>
  );
}

function ContainerBackground1() {
  return (
    <div className="bg-[#fbf8a4] h-[180px] relative rounded-[18px] w-[399px]" data-name="container/background">
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

function ContainerCopy1() {
  return (
    <div className="absolute h-[190px] left-[492px] top-[69px] w-[404px]" data-name="container/copy">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.025403883308172226)+(var(--transform-inner-height)*0.999677300453186)))] items-center justify-center left-0 top-0 w-[calc(1px*((var(--transform-inner-height)*0.025403883308172226)+(var(--transform-inner-width)*0.999677300453186)))]" style={{ "--transform-inner-width": "399", "--transform-inner-height": "180" } as React.CSSProperties}>
        <div className="flex-none rotate-[1.456deg]">
          <ContainerBackground1 />
        </div>
      </div>
    </div>
  );
}

function ContainerImage1() {
  return (
    <div className="absolute h-[259px] left-0 top-0 w-[444px]" data-name="container/image">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.011542635038495064)+(var(--transform-inner-height)*0.9999333620071411)))] items-center justify-center left-[-1px] top-[48px] w-[calc(1px*((var(--transform-inner-height)*0.011542635038495064)+(var(--transform-inner-width)*0.9999333620071411)))]" style={{ "--transform-inner-width": "444", "--transform-inner-height": "206" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.661deg]">
          <div className="h-[206px] relative rounded-[12px] shadow-[0px_0px_0px_12px_#f4b9de] w-[444px]" data-name="image/anlies2">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[12px] size-full" src={imgImageAnlies2} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Column1() {
  return (
    <div className="h-[259px] relative shrink-0 w-[896px]" data-name="column/2">
      <ContainerCopy1 />
      <ContainerImage1 />
    </div>
  );
}

function ContainerAnlies() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[896px]" data-name="container/anlies">
      <Menu />
      <Column />
      <Column1 />
    </div>
  );
}

export default function SectionContent() {
  return (
    <div className="relative size-full" data-name="section/content">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col items-center px-[48px] py-[72px] relative size-full">
          <ContainerAnlies />
        </div>
      </div>
    </div>
  );
}