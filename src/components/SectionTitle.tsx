interface SectionTitlePorps {
  text: string;
}

const SectionTitle = ({ text }: SectionTitlePorps) => {
  return (
    <h1
      style={{
        color: "hsl(14, 45%, 36%)",
        textTransform: "capitalize",
      }}
    >
      {text}
    </h1>
  );
};

export default SectionTitle;
