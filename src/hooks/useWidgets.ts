import { useEffect, useState } from 'react';
import { ProductWidget } from '../types';

export const useWidgets = () => {
  const [widgets, setWidgets] = useState<ProductWidget[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWidgets = async () => {
      try {
        const response = await fetch('https://api.mocki.io/v2/016d11e8/product-widgets');
        const data: ProductWidget[] = await response.json();
        setWidgets(data);
      } catch (error) {
        console.error("Failed to fetch widgets:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWidgets();
  }, []);

  return { widgets, setWidgets, loading };
};
