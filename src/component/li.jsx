export const Li = ({ img, title, callback }) => {
  if (callback)
    return (
      <p onClick={callback}>
        <img src={img} alt={title} width={32} height={32} />
        {title}
      </p>
    );
  else {
    return (
      <p>
        <img src={img} alt={title} width={32} height={32} />
        {title}
      </p>
    );
  }
};
