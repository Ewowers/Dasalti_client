import React, { useState } from "react";
import { Modal, Button, Input, Typography } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Li } from "./li";
import "./menu.css";
import { Tender } from "../menu/tednder";
import { Organization } from "../menu/organizations";
import { Auction } from "../menu/auction.jsx";
import { Сontest } from "../menu/contest";
import tenders from "../image/tenders.svg";
import spravochnik from "../image/spravochnik.svg";
import meropriyatia from "../image/meropriyatia.svg";
import marshroty from "../image/marshroty.svg";
import accessible_medium from "../image/accessible_medium.png";
import eatyrau from "../image/eatyrau.svg";
import obrasheniya from "../image/obrasheniya.svg";
import kartaprestupnosti from "../image/kartaprestupnosti.svg";
import stat from "../image/stat.svg";
import thematicMap from "../image/thematicMap.svg";
import pollingStations from "../image/pollingStations.svg";
import water from "../image/water.png";
import road from "../image/road.png";
import home from "../image/home.png";
export const Menu = ({ setMap }) => {
  const [state, setState] = useState("home");
  const { Title } = Typography;
  const back = () => setState("home");
  const callback = (arg) => {
    setState(arg);
  };
  const map = (arg) => {
    console.log(arg);
    setMap(arg);
  };
  return (
    <div className="menu">
      <header>
        <div style={{ display: "flex", alignItems: "center" }}>
          <ArrowLeftOutlined style={{ fontSize: "1rem" }} onClick={back} />
          <Title level={3} style={{ margin: 0 }}>
            Dasalti
          </Title>
        </div>
        <Input placeholder="Пойск" />
      </header>
      <div className="container" style={{ minHeight: 400 }}>
        {state === "home" ? <Home callback={callback} map={map} /> : null}
        {state === "tender" ? <Tender callback={callback} /> : null}
        {state === "organization" ? <Organization callback={callback} /> : null}
        {state === "auction" ? <Auction /> : null}
        {state === "contest" ? <Сontest /> : null}
      </div>
      <footer>
        <div>
          <span className="me-1 pointor">ru</span>
          <span className="me-1 pointor">kz</span>
          <span className="pointor">en</span>
        </div>
        <div>
          <Phone />
          <Faq />
        </div>
      </footer>
    </div>
  );
};

const Faq = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <Button type="ghost" onClick={showModal}>
        <i className="fas fa-info"></i>
      </Button>
      <Modal
        title="О ПРОЕКТЕ"
        visible={isModalVisible}
        type="primary"
        onCancel={handleCancel}
        footer={[
          <Button key="back" type="primary" onClick={handleCancel}>
            Закрыть
          </Button>,
        ]}
      >
        <p>
          <strong>Цель Проекта</strong> - является предоставление населению доступа к электронным картам и справочникам по Атырауской области. <br />
        </p>
        <p>
          Здесь вы найдете информацию о местонахождении различных организаций с их контактными данными, режимами работ, а также интернет-адресами. Помимо этого,
          для гостей города будет полезна информация по автобусным маршрутам и остановкам, расположению ЦОНов, больниц, поликлиник, аптек, гостиниц, ресторанов,
          кафе, банкоматов, АЗС и других социально важных объектов. Предпринимателей заинтересует информация о планируемых земельных торгах с месторасположением
          земельных участков, условиями участия и местами приема заявок.
        </p>
        <p>
          Также для населения доступна информация о местах выявления фактов правонарушений и дорожно-транспортных происшествий (согласно официальным данным
          Комитета правовой статистики и специальным учетам Генеральной прокуратуры РК)
        </p>
        <p>
          Помимо этого каждый житель и гость города с помощью сервиса «Обратная связь» могут сообщить о проблемных ситуациях (открытых люках, незаконных
          свалках, ямах и др.), с возможностью прикрепления фото и указания на карте мест их возникновения, тем самым присоединяясь к процессу управления
          любимым городом!
        </p>
      </Modal>
    </>
  );
};
const Phone = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <Button type="ghost" onClick={showModal}>
        <i className="fas fa-phone-alt"></i>
      </Button>
      <Modal
        title="О ПРОЕКТЕ"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="back" type="primary" onClick={handleCancel}>
            Закрыть
          </Button>,
        ]}
      >
        <p>Коммунальное Государственное учреждение «Ситуационный центр» Аппарат акима Атырауской области</p>
        <p>Адрес Оператора: 060000, г. Атырау, улица Айтеке би, 77</p>
        <p>Телефон: 8(7122) 31-62-14, 8(7122) 31-62-16</p>
      </Modal>
    </>
  );
};

const Home = ({ callback, map }) => {
  let ul = [
    { title: "Земельные торги", img: tenders, callback: () => callback("tender") },
    { title: "Обращения", img: obrasheniya },
    { title: "Справочник организаций", img: spravochnik, callback: () => callback("organization") },
    { title: "Карта правонарушений", img: kartaprestupnosti },
    { title: "Мероприятия города", img: meropriyatia },
    { title: "Статистика", img: stat },
    { title: "Маршруты автобусов", img: marshroty },
    { title: "Тематические карты", img: thematicMap },
    { title: "Доступная среда", img: accessible_medium },
    { title: "Свободные земельные участки", img: thematicMap },
    { title: "Госуслуги и сервисы", img: eatyrau },
    { title: "Избирательные участки", img: pollingStations },
    { title: "Дорога", img: road, map: () => map("rouads") },
    { title: "Река", img: water, map: () => map("water") },
    { title: "Контур деревни", img: home, map: () => map("home") },
  ];
  return (
    <div className="grid">
      {ul.map((item, i) => (
        <Li img={item.img} title={item.title} key={i} callback={item.callback} map={item.map} />
      ))}
    </div>
  );
};
