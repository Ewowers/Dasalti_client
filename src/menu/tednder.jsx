import tenders from "../image/tenders.svg";
import obrasheniya from "../image/obrasheniya.svg";
import { Li } from "../component/li";
export const Tender = () => {
  return (
    <>
      {ul.map((item, i) => (
        <Li img={item.img} title={item.title} key={i} />
      ))}
    </>
  );
};
let ul = [
  { title: "Земельные торги", img: tenders },
  { title: "Обращения", img: obrasheniya },
];
