import svgPaths from "../imports/svg-uyo9eujr3p";
import svgPathsLinkedin from "../imports/svg-xxlau4uw7b";
import imgQrCode from "figma:asset/09181c3174dc4952bd51307aa2329cec0ae78109.png";
import { useState } from "react";
import QRCode from "react-qr-code";
import { projectId, publicAnonKey } from "../utils/supabase/info";
import { toast } from "sonner@2.0.3";

function BlockTitle() {
  return (
    <div className="h-[46px] relative shrink-0 w-full" data-name="block/title">
      <div className="[text-shadow:#010000_2px_2px_0px] absolute flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] left-0 text-[#fff7e4] text-[38px] text-nowrap top-[23px] translate-y-[-50%]">
        <p className="leading-[45.6px] whitespace-pre">Contact</p>
      </div>
    </div>
  );
}

function BlockSubTitle() {
  return (
    <div className="h-[34px] relative shrink-0 w-full" data-name="block/sub-title">
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] left-0 not-italic text-[#fff7e4] text-[24px] text-nowrap top-[17px] translate-y-[-50%]">
        <p className="leading-[33.6px] whitespace-pre">Ik heb interesse in:</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[12px] items-start left-[48px] px-[24px] py-0 top-[48px] w-[378px]" data-name="heading">
      <BlockTitle />
      <BlockSubTitle />
    </div>
  );
}

function Clip({ text }: { text: string }) {
  return (
    <div className="h-[23px] overflow-clip relative shrink-0 w-[307.333px]" data-name="clip">
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] left-0 not-italic text-[16px] text-blue-500 text-nowrap top-[11.5px] translate-y-[-50%]">
        <p className="leading-[22.4px] whitespace-pre">{text}</p>
      </div>
    </div>
  );
}

function IconDropdown() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="icon/dropdown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="icon/dropdown">
          <path d={svgPaths.p1c739b80} fill="var(--fill-0, #3B82F6)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DropdownContent({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const options = [
    "Dramacursus voor kinderen",
    "An&Lies",
    "Bedrijfstraining",
    "Show: Niets is wat het lijkt"
  ];

  return (
    <div className="absolute left-[48px] top-[176px] w-[378px]">
      <div 
        className="bg-[#fff7e4] box-border content-stretch flex h-[60px] items-center pl-[24px] pr-[12px] py-[12px] rounded-[30px] shadow-[4px_4px_0px_0px_#f4b9de] cursor-pointer" 
        data-name="dropdown/content"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Clip text={value} />
        <IconDropdown />
      </div>
      {isOpen && (
        <div className="absolute bg-[#fff7e4] box-border content-stretch flex flex-col mt-[8px] rounded-[20px] shadow-[4px_4px_0px_0px_#f4b9de] w-full z-50">
          {options.map((option, index) => (
            <div
              key={option}
              className={`cursor-pointer font-['Poppins:Medium',sans-serif] not-italic px-[24px] py-[16px] text-[16px] text-blue-500 hover:bg-[#f4b9de] transition-colors ${
                index === 0 ? 'rounded-t-[20px]' : ''
              } ${
                index === options.length - 1 ? 'rounded-b-[20px]' : ''
              }`}
              onClick={(e) => {
                e.stopPropagation();
                onChange(option);
                setIsOpen(false);
              }}
            >
              <p className="leading-[22.4px]">{option}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Clip1({ value, onChange, isFocused, onFocus, onBlur }: { value: string; onChange: (value: string) => void; isFocused: boolean; onFocus: () => void; onBlur: () => void }) {
  return (
    <div className="basis-0 grow h-[23px] min-h-px min-w-px overflow-clip relative shrink-0" data-name="clip">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={!isFocused && !value ? "Naam" : ""}
        className="absolute bg-transparent border-none font-['Poppins:Medium',sans-serif] left-0 not-italic outline-none text-[#fff7e4] text-[16px] top-[11.5px] translate-y-[-50%] w-full placeholder:text-[#fff7e4]"
        style={{ lineHeight: '22.4px' }}
      />
    </div>
  );
}

function IconUser() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="icon/user">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="icon/user">
          <path d={svgPaths.p351a7180} id="Vector" stroke="var(--stroke-0, #FFF7E4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1848f500} id="Vector_2" stroke="var(--stroke-0, #FFF7E4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconPadding() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip p-[3px] relative shrink-0 size-[36px]" data-name="icon/padding">
      <IconUser />
    </div>
  );
}

function InputName({ value, onChange, isFocused, onFocus, onBlur }: { value: string; onChange: (value: string) => void; isFocused: boolean; onFocus: () => void; onBlur: () => void }) {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="input/name">
      <div aria-hidden="true" className="absolute border-[#fff7e4] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[60px] items-center pl-[12px] pr-0 py-[6px] relative w-full">
          <Clip1 value={value} onChange={onChange} isFocused={isFocused} onFocus={onFocus} onBlur={onBlur} />
          <IconPadding />
        </div>
      </div>
    </div>
  );
}

function Clip2({ value, onChange, isFocused, onFocus, onBlur }: { value: string; onChange: (value: string) => void; isFocused: boolean; onFocus: () => void; onBlur: () => void }) {
  return (
    <div className="basis-0 grow h-[23px] min-h-px min-w-px overflow-clip relative shrink-0" data-name="clip">
      <input
        type="tel"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={!isFocused && !value ? "+31 6" : ""}
        className="absolute bg-transparent border-none font-['Poppins:Medium',sans-serif] left-0 not-italic outline-none text-[#fff7e4] text-[16px] top-[11.5px] translate-y-[-50%] w-full placeholder:text-[#fff7e4]"
        style={{ lineHeight: '22.4px' }}
      />
    </div>
  );
}

function IconPhone() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="icon/phone">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
          <g id="icon/phone">
            <path d={svgPaths.p40d1700} id="Vector" stroke="var(--stroke-0, #FFF7E4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconPadding1() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip p-[3px] relative shrink-0 size-[36px]" data-name="icon/padding">
      <IconPhone />
    </div>
  );
}

function InputPhone({ value, onChange, isFocused, onFocus, onBlur }: { value: string; onChange: (value: string) => void; isFocused: boolean; onFocus: () => void; onBlur: () => void }) {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="input/phone">
      <div aria-hidden="true" className="absolute border-[#fff7e4] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[60px] items-center pl-[12px] pr-0 py-[6px] relative w-full">
          <Clip2 value={value} onChange={onChange} isFocused={isFocused} onFocus={onFocus} onBlur={onBlur} />
          <IconPadding1 />
        </div>
      </div>
    </div>
  );
}

function Clip3({ value, onChange, isFocused, onFocus, onBlur }: { value: string; onChange: (value: string) => void; isFocused: boolean; onFocus: () => void; onBlur: () => void }) {
  return (
    <div className="basis-0 grow h-[23px] min-h-px min-w-px overflow-clip relative shrink-0" data-name="clip">
      <input
        type="email"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={!isFocused && !value ? "uw@email.nl" : ""}
        className="absolute bg-transparent border-none font-['Poppins:Medium',sans-serif] left-0 not-italic outline-none text-[#fff7e4] text-[16px] top-[11.5px] translate-y-[-50%] w-full placeholder:text-[#fff7e4]"
        style={{ lineHeight: '22.4px' }}
      />
    </div>
  );
}

function IconMail() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="icon/mail">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="icon/mail">
          <path d={svgPaths.p242cba00} id="Vector" stroke="var(--stroke-0, #FFF7E4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1ed89640} id="Vector_2" stroke="var(--stroke-0, #FFF7E4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function IconPadding2() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip p-[3px] relative shrink-0 size-[36px]" data-name="icon/padding">
      <IconMail />
    </div>
  );
}

function InputEmail({ value, onChange, isFocused, onFocus, onBlur }: { value: string; onChange: (value: string) => void; isFocused: boolean; onFocus: () => void; onBlur: () => void }) {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="input/email">
      <div aria-hidden="true" className="absolute border-[#fff7e4] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[60px] items-center pl-[12px] pr-0 py-[6px] relative w-full">
          <Clip3 value={value} onChange={onChange} isFocused={isFocused} onFocus={onFocus} onBlur={onBlur} />
          <IconPadding2 />
        </div>
      </div>
    </div>
  );
}

function IconMail1() {
  return (
    <div className="relative shrink-0 size-[100px]" data-name="icon/mail">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
        <g id="icon/mail">
          <g filter="url(#filter0_d_mail)" id="Vector">
            <path d={svgPaths.p20ff5600} stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
            <path d={svgPaths.p26c82500} stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="110" id="filter0_d_mail" width="110" x="0" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="2" dy="2" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.00392157 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_mail" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_mail" mode="normal" result="shape" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function IconPadding5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="icon/padding">
      <IconMail1 />
    </div>
  );
}

function ContainerMail() {
  return (
    <div className="absolute box-border content-stretch flex gap-[48px] h-[100px] items-center left-[46px] top-[279px] w-[382px]" data-name="container/mail">
      <IconPadding5 />
      <div className="[text-shadow:#010000_2px_2px_0px] basis-0 flex flex-col font-['Montserrat:Bold',sans-serif] font-bold grow justify-center leading-[33.6px] min-h-px min-w-px relative shrink-0 text-[24px] text-blue-500">
        <p className="mb-0">Annemieke@</p>
        <p>ActingAgency.nl</p>
      </div>
    </div>
  );
}

function ContainerInput({ 
  name, 
  phone, 
  email, 
  onNameChange, 
  onPhoneChange, 
  onEmailChange 
}: { 
  name: string; 
  phone: string; 
  email: string; 
  onNameChange: (value: string) => void; 
  onPhoneChange: (value: string) => void; 
  onEmailChange: (value: string) => void; 
}) {
  const [isNameFocused, setNameFocused] = useState(false);
  const [isPhoneFocused, setPhoneFocused] = useState(false);
  const [isEmailFocused, setEmailFocused] = useState(false);

  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[36px] items-start left-[48px] px-[12px] py-0 top-[272px] w-[378px]" data-name="container/input">
      <InputName value={name} onChange={onNameChange} isFocused={isNameFocused} onFocus={() => setNameFocused(true)} onBlur={() => setNameFocused(false)} />
      <InputPhone value={phone} onChange={onPhoneChange} isFocused={isPhoneFocused} onFocus={() => setPhoneFocused(true)} onBlur={() => setPhoneFocused(false)} />
      <InputEmail value={email} onChange={onEmailChange} isFocused={isEmailFocused} onFocus={() => setEmailFocused(true)} onBlur={() => setEmailFocused(false)} />
    </div>
  );
}

function Clip4() {
  return (
    <div className="basis-0 grow h-[23px] min-h-px min-w-px overflow-clip relative shrink-0" data-name="clip">
      <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] left-0 not-italic text-[16px] text-blue-500 text-nowrap top-[11.5px] translate-y-[-50%]">
        <p className="leading-[22.4px] whitespace-pre font-semibold">Verstuur gegevens</p>
      </div>
    </div>
  );
}

function IconSend() {
  return (
    <div className="relative size-[22px]" data-name="icon/send">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g clipPath="url(#clip0_7_280)" id="icon/send">
          <path d={svgPaths.p1b262000} id="Vector" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pf277380} id="Vector_2" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_7_280">
            <rect fill="white" height="22" width="22" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconPadding3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[36px]" data-name="icon/padding">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.7071067690849304)+(var(--transform-inner-height)*0.7071067690849304)))] items-center justify-center left-[0.44px] top-[2.44px] w-[calc(1px*((var(--transform-inner-height)*0.7071067690849304)+(var(--transform-inner-width)*0.7071067690849304)))]" style={{ "--transform-inner-width": "22", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-[45deg]">
          <IconSend />
        </div>
      </div>
    </div>
  );
}

function ButtonSend({ onClick, isSubmitting }: { onClick: () => void; isSubmitting: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={isSubmitting}
      className="absolute bg-[#d0f4b9] box-border content-stretch flex h-[60px] items-center left-[48px] pl-[24px] pr-[12px] py-[6px] rounded-[40px] shadow-[4px_4px_0px_0px_#5dbdce] top-[560px] w-[378px] cursor-pointer border-none hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed" 
      data-name="button/send"
    >
      <Clip4 />
      <IconPadding3 />
    </button>
  );
}

function FormContact() {
  const [interest, setInterest] = useState("Dramacursus voor kinderen");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    // Validate fields
    if (!name.trim()) {
      toast.error("Vul alstublieft uw naam in");
      return;
    }
    if (!email.trim()) {
      toast.error("Vul alstublieft uw email in");
      return;
    }
    if (!phone.trim()) {
      toast.error("Vul alstublieft uw telefoonnummer in");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-7ad3da34/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({
            name: name.trim(),
            email: email.trim(),
            phone: phone.trim(),
            interest: interest,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        toast.success("Uw gegevens zijn succesvol verzonden!");
        // Clear form
        setName("");
        setPhone("");
        setEmail("");
        setInterest("Dramacursus voor kinderen");
      } else {
        console.error("Contact form submission error:", data.error);
        toast.error(data.error || "Er is een fout opgetreden bij het verzenden");
      }
    } catch (error) {
      console.error("Contact form submission error:", error);
      toast.error("Er is een fout opgetreden bij het verzenden");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="backdrop-blur-sm backdrop-filter bg-[rgba(208,244,185,0.25)] h-[668px] relative rounded-[24px] shrink-0 w-[474px]" data-name="form/contact">
      <Heading />
      <DropdownContent value={interest} onChange={setInterest} />
      <ContainerInput 
        name={name}
        phone={phone}
        email={email}
        onNameChange={setName}
        onPhoneChange={setPhone}
        onEmailChange={setEmail}
      />
      <ButtonSend onClick={handleSubmit} isSubmitting={isSubmitting} />
    </div>
  );
}

function QrCode() {
  const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Annemieke Buijs
ORG:Annemieke's Acting Agency
TEL:+31622375622
EMAIL:annemieke@actingagency.nl
END:VCARD`;

  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 size-[300px] flex items-center justify-center bg-[#FDE9F5] p-[10px]" data-name="QR/code">
      <QRCode value={vCardData} size={280} fgColor="#3B82F6" bgColor="#FDE9F5" />
    </div>
  );
}

function QrCode1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative" data-name="QR/code">
      <QrCode />
    </div>
  );
}

function QrBackground() {
  return (
    <div className="bg-[#fde9f5] box-border content-stretch flex h-[390.347px] items-center justify-center p-[36px] relative rounded-[24px] shadow-[6px_6px_0px_0px_#3b82f6] w-[378px]" data-name="QR/background">
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*0.0631512701511383)+(var(--transform-inner-height)*0.9980039596557617)))] items-center justify-center leading-[0] relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*0.0631512701511383)+(var(--transform-inner-width)*0.9980039596557617)))]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "300" } as React.CSSProperties}>
        <div className="flex-none rotate-[356.379deg]">
          <QrCode1 />
        </div>
      </div>
    </div>
  );
}

function ContainerQr() {
  return (
    <div className="backdrop-blur-sm backdrop-filter bg-[rgba(143,210,244,0.25)] h-[667.439px] relative rounded-[24px] shrink-0 w-[474px]" data-name="container/QR">
      <div className="[text-shadow:#010000_2px_2px_0px] absolute flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] left-[237px] text-[#fff7e4] text-[38px] text-center top-[103px] translate-x-[-50%] translate-y-[-50%] w-[378px]">
        <p className="leading-[45.6px]">Scan mij!</p>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.0631512701511383)+(var(--transform-inner-height)*0.9980039596557617)))] items-center justify-center left-[36.05px] top-[174px] w-[calc(1px*((var(--transform-inner-height)*0.0631512701511383)+(var(--transform-inner-width)*0.9990039596557617)))]" style={{ "--transform-inner-width": "378", "--transform-inner-height": "390.34375" } as React.CSSProperties}>
        <div className="flex-none rotate-[3.621deg]">
          <QrBackground />
        </div>
      </div>
    </div>
  );
}

function IconPhoneCall() {
  return (
    <div className="relative shrink-0 size-[100px]" data-name="icon/phone-call">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
        <g id="icon/phone-call">
          <g filter="url(#filter0_d_phone)" id="Vector">
            <path d={svgPaths.p3e1a6a00} stroke="var(--stroke-0, #F987CF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="110" id="filter0_d_phone" width="110" x="0" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="2" dy="2" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.00392157 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_phone" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_phone" mode="normal" result="shape" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function IconPadding4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="icon/padding">
      <IconPhoneCall />
    </div>
  );
}

function ContainerPhone() {
  return (
    <div className="absolute box-border content-stretch flex gap-[48px] h-[100px] items-center left-[46px] top-[131px] w-[382px]" data-name="container/phone">
      <IconPadding4 />
      <div className="[text-shadow:#010000_2px_2px_0px] basis-0 flex flex-col font-['Montserrat:Bold',sans-serif] font-bold grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#f987cf] text-[30px]">
        <p className="leading-[42px]">06 22 37 56 22</p>
      </div>
    </div>
  );
}

function IconLinkedin() {
  return (
    <div className="relative shrink-0 size-[100px]" data-name="icon/linkedin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
        <g id="icon/linkedin">
          <g filter="url(#filter0_d_7_346)" id="Vector">
            <path clipRule="evenodd" d={svgPathsLinkedin.p3aa6a900} fill="var(--fill-0, #94D751)" fillRule="evenodd" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="85.3333" id="filter0_d_7_346" width="85.3333" x="8.33333" y="8.33333">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="2" dy="2" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.00392157 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_7_346" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_7_346" mode="normal" result="shape" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function IconPadding6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="icon/padding">
      <IconLinkedin />
    </div>
  );
}

function ContainerLinkedin() {
  return (
    <a 
      href="https://www.linkedin.com/in/annemieke-buijs-a13b3517/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="absolute box-border content-stretch flex gap-[48px] h-[110px] items-center left-[46px] top-[427px] w-[382px] cursor-pointer no-underline" 
      data-name="container/linkedin"
    >
      <IconPadding6 />
      <div className="[text-shadow:#010000_2px_2px_0px] basis-0 flex flex-col font-['Montserrat:Bold',sans-serif] font-bold grow justify-center leading-[33.6px] min-h-px min-w-px relative shrink-0 text-[#94d751] text-[24px]">
        <p className="mb-0">/ annemieke-buijs</p>
        <p>-a13b3517</p>
      </div>
    </a>
  );
}

function ContainerInfo() {
  return (
    <div className="backdrop-blur-sm backdrop-filter bg-[rgba(249,135,207,0.25)] h-[668px] relative rounded-[24px] shrink-0 w-[474px]" data-name="container/info">
      <ContainerPhone />
      <ContainerMail />
      <ContainerLinkedin />
    </div>
  );
}

function ContainerMain() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full max-w-[1920px] mx-auto" data-name="container/main">
      <FormContact />
      <ContainerQr />
      <ContainerInfo />
    </div>
  );
}

export default function SectionContact() {
  return (
    <div className="h-[764px] relative shrink-0 w-full bg-transparent z-10" data-name="section/contact">
      <div className="flex flex-col items-center size-full bg-transparent">
        <div className="box-border content-stretch flex flex-col items-center px-[72px] py-[48px] relative size-full">
          <ContainerMain />
        </div>
      </div>
    </div>
  );
}