import axios from "axios";

export const OrganizationId = ({ title }) => {
  let param = title.split("-");
  let titles = "";
  param = param[param.length - 1];
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
  axios.get("http://localhost:5000/api/directory/" + param).then((res) => console.log(res.data));
  return <h1>{titles}</h1>;
};
