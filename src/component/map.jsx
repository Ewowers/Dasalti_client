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
      {state === "school" ? (
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A3502ed8513a46ebc0c72a8f6452dc5ab84f3fd1063455644b10b5b275d69e140&amp;source=constructor"
          width="100%"
          height="100%"
          frameBorder="0"
        />
      ) : null}
      {state === "hospital" ? (
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A8a4d507f79fffda2040cc2f1b4720c3868ae840f979073cf5291ce11e4b224e4&amp;source=constructor"
          width="100%"
          height="100%"
          frameBorder="0"
        />
      ) : null}
      {state === "police" ? (
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A54911db4bb71e175507f7e2d3270ea72e720881d522927cce438a626a89366de&amp;source=constructor"
          width="100%"
          height="100%"
          frameBorder="0"
        />
      ) : null}
    </div>
  );
};
