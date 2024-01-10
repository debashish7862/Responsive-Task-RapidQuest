import React from "react";
import "./retirementStatergy.css";
import Slider from "@mui/material/Slider";

function RetirmentStatergy() {
  return (
    <div className="retStg">
      <div className="retStgTop">
        <p>Retirment Statergy</p>

        <div className="employeeContribution">
          <p>Employee Contribution</p>
          <div className="slider1">
          <Slider
          className="sliderWidth"
            aria-label="Temperature"
            defaultValue={12}
            getAriaValueText={0}
            color="primary"
            sx={{
                width: 250,
              }}
          />
          <p>12%</p>
          </div>
          
        </div>
        <div className="retirementAge">
          <p>Retirement Age</p>
          <div className="slider2">
          <Slider
            aria-label="Temperature"
            defaultValue={65}
            getAriaValueText={0}
            color="primary"
            sx={{
                width: 250,
              }}
          />
          <p>65</p>
          </div>
          
        </div>
        <div className="employerContribution">
          <p>Employer Contributation</p>
          <p>8.4%</p>
        </div>
        <div className="interestRate">
          <p>Interest Rate</p>
          <p>5%</p>
        </div>
        <div className="buttonUpdate">
          <button className="updateButton">Update</button>
        </div>
        <div className="viewHelp">
          <a href="" className="linkViewHelp">View Help Docs <i class='fas fa-chevron-right'></i></a>
        </div>
      </div>

      <div className="retStgBottom retStgBottomDnone">
        <div className="vertical line">
        <div class="vl"></div>
        </div>
        <div className="quest">

        <p>Are you considering a</p>
        <p className="houseInAdv">Housing Advance ?</p>
        <p className="limitedTime">Limited time reduce interest.</p>
        <a href="/" className="learnMore">Learn More <i class='fas fa-chevron-right'></i> </a>
        </div>
        
      </div>
    </div>
  );
}

export default RetirmentStatergy;
