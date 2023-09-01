const Icon = ({ name, dataset }: { name: string; dataset?: any }) => {
  return (
    <svg aria-hidden="true" version="1.1" alt="name" {...dataset}>
      <use xlinkHref={`/icons.svg#${name}`} {...dataset} />
    </svg>
  );
};

export default Icon;
