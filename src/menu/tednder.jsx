import tenders from "../image/tenders.svg";
import obrasheniya from "../image/obrasheniya.svg";
import { Li } from "../component/li";
export const Tender = ({ callback }) => {
  let ul = [
    { title: "Земельные торги", img: tenders, callback: () => callback("auction") },
    { title: "Обращения", img: obrasheniya, callback: () => callback("contest") },
  ];
  return (
    <div className="grid">
      {ul.map((item, i) => (
        <Li img={item.img} title={item.title} key={i} callback={item.callback} />
      ))}
    </div>
  );
};
