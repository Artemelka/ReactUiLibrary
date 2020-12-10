import { createContext } from 'react';
import { StoreContextValue } from './types';

export const StoreContext = createContext<StoreContextValue>({});
