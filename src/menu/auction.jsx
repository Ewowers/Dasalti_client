import { DatePicker, Radio, Typography, Space, Button } from "antd";
import { useState } from "react";
export const Auction = () => {
  const [value, setValue] = useState();
  const { Title } = Typography;
  const dateFormat = "DD/MM/YYYY";
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const destroy = () => setValue(null);
  return (
    <div style={{ padding: "0px 10px" }}>
      <Title level={4} style={{ textAlign: "center" }}>
        Аукцион
      </Title>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <DatePicker format={dateFormat} placeholder="01/01/1993" />
        <DatePicker format={dateFormat} placeholder="01/01/1993" />
      </div>
      <div style={{ marginTop: 20 }}>
        <Radio.Group onChange={onChange} value={value}>
          <Space direction="vertical">
            <Radio value={1}>Все</Radio>
            <Radio value={2}>Предстоящий</Radio>
            <Radio value={3}>Состоявшийся</Radio>
            <Radio value={4}>Несостоявшийся</Radio>
          </Space>
        </Radio.Group>
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 15 }}>
          <Button style={{ marginRight: 10 }} onClick={destroy}>
            Сбросить
          </Button>
          <Button>Применить</Button>
        </div>
      </div>
      <div style={{ borderTop: "1px solid", marginTop: 10 }}>
        <Space direction="vertical">
          <p>Случайный дом</p>
        </Space>
      </div>
    </div>
  );
};
