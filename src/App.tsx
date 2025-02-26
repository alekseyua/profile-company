import { RouterProvider } from "react-router";
import { router } from "./routers/router";
import { createContext } from "react";


export const LangContext = createContext < { handleChangeCode: (code: string) => void } | null >(null);

interface IApp{
  handleChangeCode: (code: string) => void;
}

const App:React.FC<IApp> = ({ ...props }: IApp) => {
  return (
    <LangContext.Provider value={{ handleChangeCode: props.handleChangeCode }}>
      <RouterProvider router={router}/>
    </LangContext.Provider>
  );
}

export default App;
