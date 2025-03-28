import React from "react";
import AdvantagesSection from "../../../Component/AdvantagesSection/AdvantagesSection";
import { IAdv, Iwarrantly } from "../../../Component/AdvantagesSection/advantage.interface";
import { diagram, wheel, dataAnalytics, } from '../../../images';

interface IStateAdvantage {
  adv: IAdv;
  warrantly: Iwarrantly;
}
const AdvantagesMainSectionContainer: React.FC = () => {
  const data: IStateAdvantage = {
    adv: {
      title: "create-site",
      list: [
        {
          id: 0,
          title: "up-sell",
          icon: diagram,
          description: "up-sell.desc",
        },
        {
          id: 1,
          title: "up-status",
          icon: wheel,
          description: "up-status.desc",
        },
        {
          id: 2,
          title: "up-loylnost ",
          icon: dataAnalytics,
          description: "Сайт упрощает коммуникацию с клиентами. Позволяет понять, что им интересно и важно.",
        },
      ]
      },
    warrantly: {
      title: "we-warrantly",
      list: [
        {
          id: 0,
          title: "fixed-price",
          description: "fixed-price.desc",
        },
        {
          id: 1,
          title: "det-tame",
          description: "det-tame.desc",
        },
        {
          id: 2,
          title: "high-quality",
          description: "high-quality.desc",
        },
      ]
    }        
  }
  return (
    <AdvantagesSection 
    
    />
  )
}

export default AdvantagesMainSectionContainer;