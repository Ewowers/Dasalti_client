import { Menu } from "./menu";
import "./map.css";
export const Map = () => {
  return (
    <div id="map">
      <Menu />
      {/*<iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A87f750877ab9fe5f09bdf546736bd7ec852210df5bdda9b6923c043bb0bb6bb0&amp;source=constructor"
        width={100 + "%"}
        height={100 + "%"}
        frameBorder="0"
      />*/}
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A4337f23c496ac2946c430e2643c7b65b639ebe30480699698927890eb9b9be5c&amp;source=constructor"
        width="100%"
        height="100%"
        frameBorder="0"
      ></iframe>
    </div>
  );
};
