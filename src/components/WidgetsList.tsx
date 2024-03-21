import React from 'react';
import { useWidgets } from '../hooks/useWidgets';
import { ProductWidget, WidgetColor } from '../types';
import { Widget } from './Widget';

export const WidgetsList: React.FC = () => {
  const { widgets, setWidgets, loading } = useWidgets();

  if (loading) return <div>Loading...</div>;

  const updateWidget = (id: number, updates: Partial<ProductWidget>) => {
    setWidgets(prev =>
      prev.map(widget => (widget.id === id ? { ...widget, ...updates } : widget))
    );
  };

  const handleColorChange = (id: number, color: WidgetColor) => {
    updateWidget(id, { selectedColor: color });
  };

  const handleActiveChange = (id: number) => {
    setWidgets(prev =>
      prev.map(widget => {
        // Toggle the active state off if the widget is already active.
        if (widget.active && widget.id === id) {
          return { ...widget, active: false };
        }
        // Activate the selected widget and deactivate all others.
        return { ...widget, active: widget.id === id };
      })
    );
  };

  const handleLinkedChange = (id: number, linked: boolean) => {
    updateWidget(id, { linked });
  };

  return (
    <>
      {widgets.map((widget) => (
        <Widget
          key={widget.id}
          widget={widget}
          onColorChange={handleColorChange}
          onActiveChange={handleActiveChange}
          onLinkedChange={handleLinkedChange}
        />
      ))}
    </>
  );
};
