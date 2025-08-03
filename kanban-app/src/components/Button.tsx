interface Props {
  children: string;
  onClick: () => void;
  id: string;
}

const Button = ({ children, onClick, id }: Props) => {
  return (
    <button className="btn btn-secondary" onClick={onClick} id={id}>
      {children}
    </button>
  );
};

export default Button;
