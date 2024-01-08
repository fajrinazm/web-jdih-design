import StatistikChart from "../components/Chart";
import Galeri from "../components/Galeri"

import  "../style/ContentSection.css"



const ContentSection = () => {
    return (
        <div className="main-content">
          <div className="center-content">
            <StatistikChart/>
          </div>
          <div className="side-content">
            <Galeri/>
          </div>
        </div>
      );
    };
  
  export default ContentSection;