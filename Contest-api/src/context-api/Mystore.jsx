import { createContext } from "react";

// create context
export const MyContext = createContext();


const inc = ()=>{
  
}
// provider component
const MyStore = ({ children }) => {
  return (
    <MyContext.Provider value={{}}>
      {children}
      
    </MyContext.Provider>
  );
};

export default MyStore;

XMLDocument


