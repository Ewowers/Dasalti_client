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
let ul = [
  { title: "Земельные торги", img: admUch },
  { title: "Культура", img: culture },
  { title: "Правоохранительные органы", img: pravOrg },
  { title: "Объекты здравоохранения", img: zdravohran },
  { title: "Услуги", img: services },
  { title: "Пожарные станции", img: pojslujb },
  { title: "Транспорт", img: transport },
  { title: "Банки", img: banks },
  { title: "Образовательные учреждения", img: obrazUch },
];
export const Organization = () => {
  const { Title } = Typography;
  return (
    <>
      <Title level={3} style={{ textAlign: "center" }}>
        справочник организаций
      </Title>
      <div className="grid">
        {ul.map((item, i) => (
          <Li title={item.title} img={item.img} key={i} />
        ))}
      </div>
    </>
  );
};
