import { Menu } from "./menu";
import "./map.css";
export const Map = ({ state, setState }) => {
  return (
    <div id="map">
      <Menu setMap={setState} />
      {state === "home" || !state ? (
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Acd596a3dbb46095d4c328f00bdc7963b61db1053fe2aac367e7cec2168780414&amp;source=constructor"
          width="100%"
          height="100%"
          frameBorder="0"
        />
      ) : null}
      {state === "rouads" ? (
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A4337f23c496ac2946c430e2643c7b65b639ebe30480699698927890eb9b9be5c&amp;source=constructor"
          width="100%"
          height="100%"
          frameBorder="0"
        />
      ) : null}
      {state === "water" ? (
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A9d08498cb1a61d61f5d726f836478be2d57386d0e60148aa4b236d8740bd3a8d&amp;source=constructor"
          width="100%"
          height="100%"
          frameBorder="0"
        />
      ) : null}
    </div>
  );
};
