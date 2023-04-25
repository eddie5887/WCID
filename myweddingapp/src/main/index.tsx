import { FC } from "react";
import invitationCard from "../image/invitationCard.jpg";
import bainianhaohe from "../image/bainianhaohe.png";
import { Image, Space } from "antd-mobile";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
const Main: FC = () => {
  return (
    <div >
      <Parallax pages={4}>
        <ParallaxLayer offset={0} >
          <Image src={invitationCard} fit="fill" />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1}>
          <Image src={invitationCard} fit="fill" style={{paddingLeft:200,paddingRight:200}}/>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1.5}>
          <Image src={bainianhaohe} fit="fill" />
        </ParallaxLayer>
      </Parallax>
      <Parallax pages={4}>
      <ParallaxLayer offset={0} >
          <Image src={invitationCard} fit="fill" />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Main;
