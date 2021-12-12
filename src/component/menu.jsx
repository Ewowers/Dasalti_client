import React, { useRef, useState } from "react";
import { Modal, Button, Input, Form, Typography, message } from "antd";
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
import obrasheniya from "../image/obrasheniya.svg";
import kartaprestupnosti from "../image/kartaprestupnosti.svg";
import stat from "../image/stat.svg";
import thematicMap from "../image/thematicMap.svg";
import water from "../image/water.png";
import road from "../image/road.png";
import home from "../image/home.png";
import { OrganizationId } from "../menu/organizationId";
import pravOrg from "../image/pravOrg.svg";
import obrazUch from "../image/obrazUch.svg";
import zdravohran from "../image/zdravohran.svg";
import axios from "axios";
import { baseUrl } from "../util";
export const Menu = ({ setMap }) => {
  const [state, setState] = useState("home");
  const [message, setMessage] = useState(false);
  const { Title } = Typography;
  const back = () => setState("home");
  const callback = (arg) => {
    console.log(arg);
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
        {state === "home" ? <Home callback={callback} map={map} mes={() => setMessage(true)} /> : null}
        {state === "tender" ? <Tender callback={callback} /> : null}
        {state === "organization" ? <Organization callback={callback} /> : null}
        {state === "auction" ? <Auction /> : null}
        {state === "contest" ? <Сontest /> : null}
        {state.indexOf("organizationP") !== -1 ? <OrganizationId title={state} /> : null}
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
          <Message isModalVisible={message} setIsModalVisible={setMessage} />
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

const Home = ({ callback, map, mes }) => {
  let ul = [
    { title: "Земельные торги", img: tenders, callback: () => callback("tender") },
    { title: "Обращения", img: obrasheniya, mes: mes },
    { title: "Справочник организаций", img: spravochnik, callback: () => callback("organization") },
    { title: "Карта правонарушений", img: kartaprestupnosti },
    { title: "Мероприятия города", img: meropriyatia },
    { title: "Статистика", img: stat },
    { title: "Маршруты автобусов", img: marshroty },
    { title: "Тематические карты", img: thematicMap },
    { title: "Свободные земельные участки", img: thematicMap },
    { title: "Дорога", img: road, map: () => map("rouads") },
    { title: "Река", img: water, map: () => map("water") },
    { title: "Контур населенного пункта", img: home, map: () => map("home") },
    { title: "Полицейский участок", img: pravOrg, map: () => map("police") },
    { title: "Объекты здравоохранения", img: zdravohran, map: () => map("hospital") },
    { title: "Образовательные учреждения", img: obrazUch, map: () => map("school") },
  ];
  return (
    <div className="grid">
      {ul.map((item, i) => (
        <Li img={item.img} title={item.title} key={i} callback={item.callback} map={item.map} mes={item.mes} />
      ))}
    </div>
  );
};
const success = (string) => {
  message.success(string);
};
const Message = ({ isModalVisible, setIsModalVisible }) => {
  const ref = useRef(null);
  const handleOk = () => {
    ref.current.click();
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onFinish = (values) => {
    axios.post(baseUrl + "/api/message/", values).then((res) => {
      console.log(res.data);
      setIsModalVisible(false);
      success("Ваша обращение отправленно");
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Modal width={700} title="Обращение" okText="Отправить" cancelText="Отмена" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <Form name="basic" layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
        <Form.Item label="Ваша почта" name="email" rules={[{ required: true, message: "Пожалуйста, введите адрес электронной почты!" }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Ваше Фио" name="fullName" rules={[{ required: true, message: "Пожалуйста, введите ваше ФИО!" }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Загаловок" name="subject" rules={[{ required: true, message: "Пожалуйста, введите ваше ФИО!" }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Обращение" name="message" rules={[{ required: true, message: "Пожалуйста, введите ваше ФИО!" }]}>
          <Input.TextArea rows={5} />
        </Form.Item>
        <Form.Item style={{ display: "none" }}>
          <Button type="primary" htmlType="submit" ref={ref}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
