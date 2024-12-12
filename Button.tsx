type ButtonProps = {
    text: string;
    onClick?: () => void;
    className?: string;
  };
  
  const Button = ({ text, onClick, className }: ButtonProps) => {
    return (
      <button
        onClick={onClick}
        className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 ${className}`}
      >
        {text}
      </button>
    );
  };
  
  export default Button;
  