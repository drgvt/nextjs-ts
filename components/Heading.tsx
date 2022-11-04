const Heading = ({ text, tag }) => {
  const Tag = tag || "h1";
  return <Tag>{text}</Tag>;
};

export default Heading;
