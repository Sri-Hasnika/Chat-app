import { FaUserCheck, FaSignInAlt, FaKey, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiReact, SiSocketdotio, SiJsonwebtokens } from "react-icons/si";
import { AiOutlineCloud } from "react-icons/ai"; 

const AuthImagePattern = ({ title, subtitle }) => {
  const icons = [
    <FaSignInAlt />,       
    <FaUserCheck />,       
    <FaKey />,             
    <SiMongodb />,         
    <SiReact />,           
    <FaNodeJs />,          
    <SiSocketdotio />,     
    <SiJsonwebtokens />,  
    <AiOutlineCloud />,    
  ];

  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        <div className="grid grid-cols-3 gap-3 mb-8">
          {icons.map((icon, i) => (
            <div
              key={i}
              className={`flex items-center justify-center aspect-square rounded-2xl bg-primary/10 transform transition-transform duration-500 hover:scale-110 hover:rotate-3`}
            >
              <div className="text-3xl text-primary">{icon}</div>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
