interface SectionHeadingProps {
  title: string;
  id?: string;
}

const SectionHeading = ({ title, id }: SectionHeadingProps) => (
  <h2 id={id} className="section-title">{title}</h2>
);

export default SectionHeading;
