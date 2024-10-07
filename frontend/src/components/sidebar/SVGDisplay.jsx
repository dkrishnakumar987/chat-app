const SvgDisplay = ({ svgData }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: svgData }} />
  );
};

export default SvgDisplay;
