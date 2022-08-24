import './Button.css'

type Props = {
  children: string;
  variant?: "signIn" | "signUp";
};

export default function Button({ children, variant, ...rest }: Props) {
    let style: any = {
      colour: "black", 
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem",
      cursor: "pointer"
    };
  
    if (variant === "signIn") {
      style.backgroundColor = "rgb(83, 189, 83)";
  
      
    }
  
    if (variant === "signUp") {
      style.backgroundColor = "#6c757d";
      style.paddingBottom = "0.7rem";
      style.paddingBottom = "0.7rem";
      
    }

    return (
        <button className='button' style={style} {...rest}>
        {children}
      </button>);
    }