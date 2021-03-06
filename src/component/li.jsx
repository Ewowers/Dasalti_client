export const Li = ({ img, title, callback, map, mes }) => {
  if (callback) {
    return (
      <p onClick={callback}>
        <img src={img} alt={title} width={32} height={32} />
        {title}
      </p>
    );
  } else if (map) {
    return (
      <p onClick={map}>
        <img src={img} alt={title} width={32} height={32} />
        {title}
      </p>
    );
  } else if (mes) {
    return (
      <p onClick={mes}>
        <img src={img} alt={title} width={32} height={32} />
        {title}
      </p>
    );
  } else {
    return (
      <p>
        <img src={img} alt={title} width={32} height={32} />
        {title}
      </p>
    );
  }
};
