import { createContext, useContext } from "react";

export const CounterContext = createContext();

export const CounterProvier = CounterContext.Provider;

export const useCounterStore = () => useContext(CounterContext);
