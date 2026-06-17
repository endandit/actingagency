import svgPaths from "../../imports/svg-13xu1d3sva";
import { useState } from "react";
import QRCode from "react-qr-code";
import { projectId, publicAnonKey } from "../../utils/supabase/info";
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
    <div className="relative shrink-0 w-full" data-name="heading">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start px-[24px] py-0 relative w-full">
          <BlockTitle />
          <BlockSubTitle />
        </div>
      </div>
    </div>
  );
}

function Clip({ text }: { text: string }) {
  return (
    <div className="basis-0 grow h-[23px] min-h-px min-w-px overflow-clip relative shrink-0" data-name="clip">
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
          <path d={svgPaths.p3c239e00} fill="var(--fill-0, #3B82F6)" id="Vector" />
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
    <div className="relative w-full">
      <div 
        className="bg-[#fff7e4] h-[60px] relative rounded-[30px] shadow-[4px_4px_0px_0px_#f4b9de] shrink-0 w-full cursor-pointer" 
        data-name="dropdown/content"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex h-[60px] items-center pl-[24px] pr-[12px] py-[6px] relative w-full">
            <Clip text={value} />
            <IconDropdown />
          </div>
        </div>
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
          <path d={svgPaths.p10f53c00} id="Vector" stroke="var(--stroke-0, #FFF7E4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2c484580} id="Vector_2" stroke="var(--stroke-0, #FFF7E4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
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

function ContainerInput({ 
  name, 
  phone, 
  email,
  onNameChange,
  onPhoneChange,
  onEmailChange,
  nameFocused,
  phoneFocused,
  emailFocused,
  onNameFocus,
  onPhoneFocus,
  onEmailFocus,
  onNameBlur,
  onPhoneBlur,
  onEmailBlur
}: {
  name: string;
  phone: string;
  email: string;
  onNameChange: (value: string) => void;
  onPhoneChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  nameFocused: boolean;
  phoneFocused: boolean;
  emailFocused: boolean;
  onNameFocus: () => void;
  onPhoneFocus: () => void;
  onEmailFocus: () => void;
  onNameBlur: () => void;
  onPhoneBlur: () => void;
  onEmailBlur: () => void;
}) {
  return (
    <div className="relative shrink-0 w-full" data-name="container/input">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[36px] items-start px-[12px] py-0 relative w-full">
          <InputName value={name} onChange={onNameChange} isFocused={nameFocused} onFocus={onNameFocus} onBlur={onNameBlur} />
          <InputPhone value={phone} onChange={onPhoneChange} isFocused={phoneFocused} onFocus={onPhoneFocus} onBlur={onPhoneBlur} />
          <InputEmail value={email} onChange={onEmailChange} isFocused={emailFocused} onFocus={onEmailFocus} onBlur={onEmailBlur} />
        </div>
      </div>
    </div>
  );
}

function Clip4() {
  return (
    <div className="basis-0 grow h-[23px] min-h-px min-w-px overflow-clip relative shrink-0" data-name="clip">
      <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] left-0 not-italic text-[16px] text-blue-500 text-nowrap top-[11.5px] translate-y-[-50%]">
        <p className="leading-[22.4px] whitespace-pre">Verstuur gegevens</p>
      </div>
    </div>
  );
}

function IconSend() {
  return (
    <div className="relative size-[22px]" data-name="icon/send">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g clipPath="url(#clip0_15_1851)" id="icon/send">
          <path d={svgPaths.p31c65c00} id="Vector" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pf277380} id="Vector_2" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_15_1851">
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

function ButtonSend({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#d0f4b9] h-[60px] relative rounded-[40px] shadow-[4px_4px_0px_0px_#5dbdce] shrink-0 w-full cursor-pointer border-none p-0"
      data-name="button/send"
    >
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[60px] items-center pl-[24px] pr-[12px] py-[6px] relative w-full">
          <Clip4 />
          <IconPadding3 />
        </div>
      </div>
    </button>
  );
}

function FormContact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [nameFocused, setNameFocused] = useState(false);
  const [phoneFocused, setPhoneFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [interest, setInterest] = useState("Dramacursus voor kinderen");
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
    <div className="backdrop-blur-sm backdrop-filter bg-[rgba(208,244,185,0.25)] relative rounded-[24px] shrink-0 w-full" data-name="form/contact">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[18px] relative w-full">
          <Heading />
          <DropdownContent value={interest} onChange={setInterest} />
          <ContainerInput
            name={name}
            phone={phone}
            email={email}
            onNameChange={setName}
            onPhoneChange={setPhone}
            onEmailChange={setEmail}
            nameFocused={nameFocused}
            phoneFocused={phoneFocused}
            emailFocused={emailFocused}
            onNameFocus={() => setNameFocused(true)}
            onPhoneFocus={() => setPhoneFocused(true)}
            onEmailFocus={() => setEmailFocused(true)}
            onNameBlur={() => setNameFocused(false)}
            onPhoneBlur={() => setPhoneFocused(false)}
            onEmailBlur={() => setEmailFocused(false)}
          />
          <ButtonSend onClick={handleSubmit} />
        </div>
      </div>
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
    <div className="[grid-area:1_/_1] aspect-square flex items-center justify-center bg-[#FDE9F5] ml-0 mt-0 w-full" data-name="QR/code">
      <QRCode value={vCardData} size={256} style={{ height: "auto", maxWidth: "100%", width: "100%" }} fgColor="#3B82F6" bgColor="#FDE9F5" />
    </div>
  );
}

function QrPlaceholder() {
  return (
    <div className="grid grid-cols-1 grid-rows-1 place-items-stretch relative w-full max-w-[276px]" data-name="QR/PLACEHOLDER">
      <QrCode />
    </div>
  );
}

function QrBackground() {
  return (
    <div className="bg-[#fde9f5] relative rounded-[24px] shadow-[6px_6px_0px_0px_#3b82f6] w-full" data-name="QR/background">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center p-[36px] relative w-full">
          <div className="flex items-center justify-center leading-[0] relative shrink-0 w-full">
            <div className="flex-none rotate-[356.379deg] w-full">
              <QrPlaceholder />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Wrapper() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative size-full max-w-[348px]" data-name="wrapper">
      <div className="flex items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[3.621deg] w-full">
          <QrBackground />
        </div>
      </div>
    </div>
  );
}

function ContainerQr() {
  return (
    <div className="backdrop-blur-sm backdrop-filter bg-[rgba(143,210,244,0.25)] relative rounded-[24px] shrink-0 w-full" data-name="container/QR">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[36px] items-center justify-center p-[36px] relative w-full">
          <div className="[text-shadow:#010000_2px_2px_0px] flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#fff7e4] text-[38px] text-nowrap">
            <p className="leading-[45.6px] whitespace-pre\">Scan mij!</p>
          </div>
          <Wrapper />
        </div>
      </div>
    </div>
  );
}

function IconPhoneCall() {
  return (
    <div className="relative shrink-0 size-[50px] [filter:drop-shadow(2px_2px_0px_#010000)]" data-name="icon/phone-call">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g id="icon/phone-call">
          <path d={svgPaths.p1ba0fcc0} id="Vector" stroke="var(--stroke-0, #F987CF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
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
    <div className="box-border content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="container/phone">
      <IconPadding4 />
      <div className="basis-0 flex flex-col font-['Montserrat:Bold',sans-serif] font-bold grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#f987cf] text-[24px] [filter:drop-shadow(2px_2px_0px_#010000)]">
        <p className="leading-[39.2px]">06 22 37 56 22</p>
      </div>
    </div>
  );
}

function IconMail1() {
  return (
    <div className="relative shrink-0 size-[50px] [filter:drop-shadow(2px_2px_0px_#010000)]" data-name="icon/mail">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g id="icon/mail">
          <path d={svgPaths.p34154f80} id="Vector" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.p3b12f00} id="Vector_2" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
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
    <div className="box-border content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="container/mail">
      <IconPadding5 />
      <div className="basis-0 flex flex-col font-['Montserrat:Bold',sans-serif] font-bold grow justify-center leading-[25.2px] min-h-px min-w-px relative shrink-0 text-[18px] text-blue-500 [filter:drop-shadow(2px_2px_0px_#010000)]">
        <p className="mb-0">Annemieke@</p>
        <p>ActingAgency.nl</p>
      </div>
    </div>
  );
}

function IconLinkedin() {
  return (
    <div className="relative shrink-0 size-[50px] [filter:drop-shadow(2px_2px_0px_#010000)]" data-name="icon/linkedin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g clipPath="url(#clip0_15_1862)" id="icon/linkedin">
          <path clipRule="evenodd" d={svgPaths.p12bbb800} fill="var(--fill-0, #94D751)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_15_1862">
            <rect fill="white" height="50" width="50" />
          </clipPath>
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
    <div className="box-border content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="container/linkedin">
      <IconPadding6 />
      <div className="basis-0 flex flex-col font-['Montserrat:Bold',sans-serif] font-bold grow justify-center leading-[25.2px] min-h-px min-w-px relative shrink-0 text-[#94d751] text-[18px] [filter:drop-shadow(2px_2px_0px_#010000)]">
        <p className="mb-0">/ annemieke-buijs</p>
        <p>-a13b3517</p>
      </div>
    </div>
  );
}

function ContainerInfo() {
  return (
    <div className="backdrop-blur-sm backdrop-filter bg-[rgba(249,135,207,0.25)] relative rounded-[24px] shrink-0 w-full" data-name="container/info">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[36px] items-start justify-center px-[36px] py-[36px] relative w-full">
          <ContainerPhone />
          <ContainerMail />
          <ContainerLinkedin />
        </div>
      </div>
    </div>
  );
}

function ContainerMain() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start justify-center max-w-[768px] relative shrink-0 w-full" data-name="container/main">
      <FormContact />
      <ContainerQr />
      <ContainerInfo />
    </div>
  );
}

export default function ContactMobile() {
  return (
    <div className="relative w-full bg-transparent" data-name="section/contact">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col items-center p-[24px] py-[36px] relative w-full">
          <ContainerMain />
        </div>
      </div>
    </div>
  );
}