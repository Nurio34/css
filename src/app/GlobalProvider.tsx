"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

type Window = {
  block: number;
  window: number;
};

type Angle = {
  x: number;
  y: number;
};

type ContextType = {
  page: string;
  setPage: Dispatch<SetStateAction<string>>;
  window: Window[];
  setWindow: Dispatch<SetStateAction<Window[]>>;
  angle: Angle;
  setAngle: Dispatch<SetStateAction<Angle>>;
  isRotating: boolean;
  setIsRotating: Dispatch<SetStateAction<boolean>>;
};

const GlobalContext = createContext<ContextType | null>(null);

type Props = {
  children: React.ReactNode;
};

let int: NodeJS.Timeout;
let int2: NodeJS.Timeout;

function GlobalProvider({ children }: Props) {
  //** --- header highlight */
  const [page, setPage] = useState<string>("");

  //** -------------------- */

  //** --- rotating-cube --- */
  const [window, setWindow] = useState([] as Window[]);
  const [angle, setAngle] = useState({} as Angle);
  const [isRotating, setIsRotating] = useState(false);

  useEffect(() => {
    if (page === "/rotating-cube") {
      int = setInterval(() => {
        setWindow((pre) => [
          ...pre,
          {
            block: Math.floor(Math.random() * 6),
            window: Math.floor(Math.random() * 100),
          },
        ]);
      }, 1000);
    }

    if (page === "/rotating-cube") {
      int2 = setInterval(() => {
        setWindow((pre) => pre.filter((item, ind) => ind !== 0));
      }, 5000);
    }

    return () => {
      clearInterval(int);
      clearInterval(int2);
    };
  }, [page]);
  //** --------------------- */

  return (
    <GlobalContext.Provider
      value={{
        page,
        setPage,
        window,
        setWindow,
        angle,
        setAngle,
        isRotating,
        setIsRotating,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    console.log("Error with 'useGlobalContext'");
    throw new Error("Error with 'useGlobalContext'");
  }

  return context;
};

export default GlobalProvider;
