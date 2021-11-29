import { Menu } from "./menu";
export const Map = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Menu />
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A87f750877ab9fe5f09bdf546736bd7ec852210df5bdda9b6923c043bb0bb6bb0&amp;source=constructor"
        width={100 + "%"}
        height={100 + "%"}
        frameBorder="0"
      />
    </div>
  );
};
