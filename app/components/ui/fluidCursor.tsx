'use client';

import { useEffect } from 'react';
import { useTheme } from '../../themeContext';
import useFluidCursor from '../../hooks/useFluidCursor';

const FluidCursor = () => {
  const { theme } = useTheme();

  useEffect(() => {
    if (theme === 'light') {
      useFluidCursor();
    }
  }, [theme]);

  return theme === 'light' ? (
    <div className="fixed top-0 left-0 z-2">
      <canvas id="fluid" className="w-screen h-screen" />
    </div>
  ) : null;
};

export default FluidCursor;