import imgCarousel from "figma:asset/f49b759157f0a4301fabbdeed7f046668edaecb0.png";
import imgCarousel2 from "figma:asset/f4f714522e765aa770f9fcf441bc2acb1f53edf7.png";
import { useState } from "react";

interface CarouselItem {
  image: string;
  title: string;
  description: string;
  callToAction: string;
}

const carouselData: CarouselItem[] = [
  {
    image: imgCarousel2,
    title: "Maak RUIMTE! (4+)",
    description: "An&Lies zitten elkaar op aarde behoorlijk in de weg. Ze gaan op zoek naar meer ruimte en waar kan dat beter dan in het heelal. Een muzikale zoektocht volgt. In de ruimte doen ze een belangrijke ontdekking...",
    callToAction: "Geïnteresseerd in een voorstelling op uw school? Neem contact op om de mogelijkheden te bespreken!"
  },
  {
    image: imgCarousel,
    title: "Niets is wat het lijkt (6+)",
    description: "Aladdin heeft het duurste vliegende tapijt van de wereld. Op een dag wordt het gestolen. Dat heeft vast de wolf gedaan... Een spannende zoektocht naar de dader volgt waarin niets is wat het lijkt!",
    callToAction: "Geïnteresseerd in een voorstelling op uw school? Neem contact op om de mogelijkheden te bespreken!"
  }
];

function ContainerAbout() {
  return (
    <div className="backdrop-blur-sm backdrop-filter bg-[rgba(192,102,102,0.25)] relative rounded-[24px] shrink-0 w-full" data-name="container/about">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center px-[36px] py-[24px] relative w-full">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#fdfdfd] text-[0px] w-full">
            <p className="leading-[36.4px] text-[#fff7e4] text-[26px]">
              <span className="font-['Poppins:Medium',sans-serif]">A</span>
              <span className="font-['Poppins:Light',sans-serif]">{`nnemieke's `}</span>
              <span className="font-['Poppins:Medium',sans-serif]">A</span>
              <span className="font-['Poppins:Light',sans-serif]">{`cting `}</span>
              <span className="font-['Poppins:Medium',sans-serif]">A</span>
              <span className="font-['Poppins:Light',sans-serif]">gency biedt inspirerende dramacursussen voor zowel het onderwijs als het bedrijfsleven. Met ruim 25 jaar gecertificeerde ervaring als (drama)docent in het onderwijs en als (trainings)acteur in diverse producties en bedrijven verzorgt Annemieke Buijs boeiende lessen die leerlingen en professionals helpen hun creativiteit, zelfvertrouwen en expressie te ontwikkelen.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

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

function ChevronLeft({ onClick }: { onClick: () => void }) {
  return (
    <div 
      className="box-border content-stretch flex h-full items-center justify-center px-[24px] py-0 relative shrink-0 cursor-pointer" 
      data-name="chevron/left"
      onClick={onClick}
    >
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

function ChevronRight({ onClick }: { onClick: () => void }) {
  return (
    <div 
      className="box-border content-stretch flex h-full items-center justify-center px-[24px] py-0 relative shrink-0 cursor-pointer" 
      data-name="chevron/right"
      onClick={onClick}
    >
      <IconChevronRight />
    </div>
  );
}

function Carousel({ currentIndex, onPrev, onNext, item }: { currentIndex: number; onPrev: () => void; onNext: () => void; item: CarouselItem }) {
  return (
    <div className="content-stretch flex h-[556px] items-start justify-between overflow-clip relative rounded-[9px] shrink-0 w-[400px]" data-name="carousel">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[9px] size-full" src={item.image} />
      <ChevronLeft onClick={onPrev} />
      <ChevronRight onClick={onNext} />
      <div className="absolute inset-0 pointer-events-none shadow-[-10px_-10px_30px_0px_inset_rgba(255,247,228,0.45),10px_10px_30px_0px_inset_rgba(255,247,228,0.45)]" />
    </div>
  );
}

function ContainerFixed() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-center relative shrink-0 w-full" data-name="container/fixed">
      <div className="[text-shadow:rgba(255,247,228,0.9)_0px_0px_20px] flex flex-col font-['Montserrat_Subrayada:Bold',sans-serif] h-[44px] justify-center leading-[0] not-italic relative shrink-0 text-[#fff7e4] text-[36px] text-center w-[400px]">
        <p className="leading-[43.2px]">NU IN HET THEATER</p>
      </div>
    </div>
  );
}

function BlockDescription({ item }: { item: CarouselItem }) {
  return (
    <div className="backdrop-blur-sm backdrop-filter basis-0 bg-[rgba(255,247,228,0.05)] grow min-h-px min-w-px relative rounded-[9px] shrink-0 w-full" data-name="block/description">
      <div className="size-full rounded-[9px] overflow-clip">
        <div className="box-border content-stretch flex flex-col gap-[18px] items-start leading-[0] p-[24px] relative size-full text-[#fff7e4]">
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[24px] w-[352px]">
            <p className="leading-[28.8px]">{item.title}</p>
          </div>
          <div className="flex flex-col font-['Poppins:Light_Italic',sans-serif] italic justify-center min-w-full relative shrink-0 text-[20px] w-[min-content]">
            <p className="leading-[28px]">{item.description}</p>
          </div>
          <div className="basis-0 flex flex-col font-['Poppins:Light',sans-serif] grow justify-end min-h-px min-w-px not-italic relative shrink-0 text-[20px] w-full">
            <p className="leading-[28px]">
              <span>{item.callToAction.split('contact')[0]}</span>
              <span className="font-['Poppins:Medium',sans-serif] not-italic cursor-pointer hover:underline" onClick={() => {
                const contactSections = document.querySelectorAll('[data-name="section/contact"]');
                const contactSection = Array.from(contactSections).find(el => {
                  const htmlEl = el as HTMLElement;
                  return htmlEl.offsetParent !== null;
                });
                
                if (contactSection) {
                  const elementPosition = contactSection.getBoundingClientRect().top + window.scrollY;
                  const offsetPosition = elementPosition - 210;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}>contact</span>
              <span>{item.callToAction.split('contact')[1]}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[9px] shadow-[-10px_-10px_30px_0px_inset_rgba(255,247,228,0.25),10px_10px_30px_0px_inset_rgba(255,247,228,0.25)]" />
    </div>
  );
}

function ItemDescription({ item }: { item: CarouselItem }) {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[36px] grow h-[556px] items-center min-h-px min-w-px pb-0 pt-[24px] px-0 relative rounded-[18px] shrink-0" data-name="item/description">
      <ContainerFixed />
      <BlockDescription item={item} />
    </div>
  );
}

function WrapperCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? carouselData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === carouselData.length - 1 ? 0 : prev + 1));
  };

  const currentItem = carouselData[currentIndex];

  return (
    <div className="backdrop-blur-sm backdrop-filter bg-[rgba(208,123,70,0.25)] relative rounded-[24px] shrink-0 w-full" data-name="wrapper/carousel">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center gap-[48px] p-[24px] relative w-full">
          <Carousel currentIndex={currentIndex} onPrev={handlePrev} onNext={handleNext} item={currentItem} />
          <ItemDescription item={currentItem} />
        </div>
      </div>
    </div>
  );
}

function Wrapper() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-[896px]" data-name="wrapper">
      <ContainerAbout />
      <WrapperCarousel />
    </div>
  );
}

export default function HeaderContentTablet() {
  return (
    <div className="flex flex-row items-start w-full">
      <div className="box-border content-stretch flex flex-col items-center p-[48px] relative w-full">
        <Wrapper />
      </div>
    </div>
  );
}