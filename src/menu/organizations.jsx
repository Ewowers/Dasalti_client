import { Typography } from "antd";
import { Li } from "../component/li";
import admUch from "../image/admUch.svg";
import culture from "../image/culture.svg";
import pravOrg from "../image/pravOrg.svg";
import zdravohran from "../image/zdravohran.svg";
import services from "../image/services.svg";
import pojslujb from "../image/pojslujb.svg";
import transport from "../image/transport.svg";
import banks from "../image/banks.svg";
import obrazUch from "../image/obrazUch.svg";

export const Organization = ({ callback }) => {
  const { Title } = Typography;
  let ul = [
    { title: "Земельные торги", img: admUch, callback: () => callback("organizationP-land") },
    { title: "Культура", img: culture, callback: () => callback("organizationP-culture") },
    { title: "Правоохранительные органы", img: pravOrg, callback: () => callback("organizationP-law") },
    { title: "Объекты здравоохранения", img: zdravohran, callback: () => callback("organizationP-healthe") },
    { title: "Услуги", img: services, callback: () => callback("organizationP-service") },
    { title: "Пожарные станции", img: pojslujb, callback: () => callback("organizationP-fire") },
    { title: "Транспорт", img: transport, callback: () => callback("organizationP-transport") },
    { title: "Банки", img: banks, callback: () => callback("organizationP-bank") },
    { title: "Образовательные учреждения", img: obrazUch, callback: () => callback("organizationP-college") },
  ];
  return (
    <>
      <Title level={3} style={{ textAlign: "center" }}>
        справочник организаций
      </Title>
      <div className="grid">
        {ul.map((item, i) => (
          <Li title={item.title} img={item.img} key={i} callback={item.callback} />
        ))}
      </div>
    </>
  );
};
