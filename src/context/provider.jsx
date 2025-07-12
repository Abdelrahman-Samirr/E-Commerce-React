import { CounterContext } from './context';
import { useCounter } from './useCounter';

export function CounterProvider({ children }) {
  const counter = useCounter();

  return (
    <CounterContext.Provider value={counter}>
      {children}
    </CounterContext.Provider>
  );
}