import { createContext, useContext, useState, useCallback } from 'react';
import { brands } from '../data/brandData';

const BrandContext = createContext();

export function BrandProvider({ children }) {
  const [activeBrand, setActiveBrand] = useState('frigorifico');

  const toggleBrand = useCallback(() => {
    setActiveBrand(prev => prev === 'frigorifico' ? 'logistica' : 'frigorifico');
  }, []);

  const brand = brands[activeBrand];

  return (
    <BrandContext.Provider value={{ brand, activeBrand, setActiveBrand, toggleBrand }}>
      {children}
    </BrandContext.Provider>
  );
}

export const useBrand = () => useContext(BrandContext);
