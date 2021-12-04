import axios from "axios";
import { Form, Input, Button, Space, Typography } from "antd";
import { useEffect, useState } from "react";
export const OrganizationId = ({ title }) => {
  const [state, setState] = useState([]);
  const { Title, Paragraph } = Typography;
  let param = title.split("-");
  param = param[param.length - 1];
  let titles = params(param);
  const onFinish = (values) => {
    console.log(values);
    axios.post("http://localhost:5000/api/directory/create/" + param, { ...values, category: param }).then((res) => get());
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const get = () => {
    axios.get("http://localhost:5000/api/directory/" + param).then((res) => setState(res.data));
  };
  useEffect(() => {
    get();
  }, []);
  return (
    <>
      <Title level={3} style={{ textAlign: "center" }}>
        {titles}
      </Title>
      <Space direction="vertical">
        {state.map((item, i) => {
          return <Paragraph key={i}>{item.title}</Paragraph>;
        })}
      </Space>
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <div style={{ display: "flex" }}>
          <Form.Item name="title" style={{ width: "100%" }}>
            <Input size="small" style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item>
            <Button size="small" htmlType="submit" style={{ background: "#cec7eb" }}>
              Создать
            </Button>
          </Form.Item>
        </div>
      </Form>
    </>
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
