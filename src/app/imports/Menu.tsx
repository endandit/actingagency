import imgNavSchoolDefault from "figma:asset/fae9dc288df5ae5acb07ac84cf921dce2dcc93b6.png";
import imgNavAnliesDefault from "figma:asset/69a1c6c10de78bdea8ea0cd9f9c461dcf2e5d480.png";
import imgNavCompanyDefault from "figma:asset/503ff2eeaa3c9fb8c476ac04c8822b9c9d8aeb79.png";

function NavSchool() {
  return (
    <div className="relative shrink-0 size-[154px]" data-name="nav/school">
      <div className="absolute left-0 size-[154px] top-0" data-name="nav/school/default">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgNavSchoolDefault} />
      </div>
    </div>
  );
}

function NavAnlies() {
  return (
    <div className="relative shrink-0 size-[154px]" data-name="nav/anlies">
      <div className="absolute left-0 size-[154px] top-0" data-name="nav/anlies/default">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgNavAnliesDefault} />
      </div>
    </div>
  );
}

function NavCompany() {
  return (
    <div className="relative shrink-0 size-[154px]" data-name="nav/company">
      <div className="absolute left-0 size-[154px] top-0" data-name="nav/company/default">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgNavCompanyDefault} />
      </div>
    </div>
  );
}

export default function Menu() {
  return (
    <div className="content-stretch flex flex-col items-center justify-between relative rounded-[18px] size-full" data-name="menu">
      <NavSchool />
      <NavAnlies />
      <NavCompany />
    </div>
  );
}