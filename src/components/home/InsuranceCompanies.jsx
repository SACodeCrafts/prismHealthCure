import React from "react";
import AetnaLogo from "../../assets/images/Aetna-logo.png";
import BCBSLogo from "../../assets/images/BCBS-logo.png";
import HumanaLogo from "../../assets/images/Humana.png";
import CignaLogo from "../../assets/images/Cigna-logo.png";
import WellCareLogo from "../../assets/images/Well-Care-logo.png";

const InsuranceCompanies = () => {
  return (
    <div className="flex items-center max-w-[1140px] m-auto space-x-[56px] bg-[#f3f6f6] py-10">
      <div className="flex flex-col items-start ">
        <div className="flex items-center  gap-3 ">
          <p className="text-[15px] ">Insurance companies approved by</p>
          <span className="block h-[2px] w-14 mt-1 bg-primary"></span>
        </div>
        <img src={HumanaLogo} alt="HumanaLogo" className="w-[151px]" />
      </div>

      <img src={AetnaLogo} alt="AetnaLogo" className="w-[151px]" />
      <img src={BCBSLogo} alt="BCBSLogo" className="w-[151px]" />
      <img src={WellCareLogo} alt="WellCareLogo" className="w-[151px]" />
      <img src={CignaLogo} alt="CignaLogo" className="w-[151px]" />
    </div>
  );
};

export default InsuranceCompanies;
