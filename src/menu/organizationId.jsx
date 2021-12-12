import axios from "axios";
import { Form, Input, Button, Typography, Modal } from "antd";
import { useEffect, useState } from "react";
import { baseUrl } from "../util";
export const OrganizationId = ({ title }) => {
  const [modal, setModal] = useState(false);
  const [state, setState] = useState([]);
  const { Title } = Typography;
  let param = title.split("-");
  param = param[param.length - 1];
  let titles = params(param);
  const onFinish = (values) => {
    axios.post(baseUrl + "api/directory/create/" + param, { ...values, category: param }).then((res) => get());
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const get = () => {
    axios.get("http://localhost:5000/api/directory/" + param).then((res) => setState(res.data));
  };
  const showModal = () => {
    setModal(true);
  };
  useEffect(() => {
    get();
  }, []);
  return (
    <>
      <Title level={3} style={{ textAlign: "center" }}>
        {titles}
      </Title>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {/*{state.map((item, i) => {
          return (
            <p key={i} onClick={showModal} style={{ marginBottom: 5, borderBottom: "1px solid", width: "100%" }}>
              {item.title}
            </p>
          );
        })}*/}
        {state.map((item, i) => {
          return (
            <p key={i} onClick={showModal} style={{ marginBottom: 5, background: "rgb(206, 199, 235)", width: "100%", borderRadius: 10 }}>
              {item.title}
            </p>
          );
        })}
      </div>
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <div style={{ display: "flex" }}>
          <Form.Item name="title" style={{ width: "100%" }} rules={[{ required: true, message: "Поле пустое!" }]}>
            <Input size="small" style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item>
            <Button size="small" htmlType="submit" style={{ background: "#cec7eb" }}>
              Создать
            </Button>
          </Form.Item>
        </div>
      </Form>
      <Info state={modal} setState={setModal} />
    </>
  );
};
const Info = ({ state, setState, title }) => {
  const handleCancel = () => setState(false);
  return (
    <Modal
      title="Информация о объекте"
      visible={state}
      onCancel={handleCancel}
      footer={[
        <Button key="close" onClick={handleCancel}>
          Закрыть
        </Button>,
      ]}
    >
      1
    </Modal>
  );
};
const params = (param) => {
  let titles = "";
  switch (param) {
    case "land":
      titles = "Земельные отношения";
      break;
    case "culture":
      titles = "Культура";
      break;
    case "law":
      titles = "Правоохранительные органы";
      break;
    case "healthe":
      titles = "Объекты здравоохранения";
      break;
    case "transport":
      titles = "Транспорт";
      break;
    case "bank":
      titles = "Банки";
      break;
    case "college":
      titles = "Образовательные учреждения";
      break;
    case "service":
      titles = "Услуги";
      break;
  }
  return titles;
};
