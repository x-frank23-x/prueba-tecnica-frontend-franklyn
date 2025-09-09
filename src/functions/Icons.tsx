// src/components/Icono.tsx
import { useState, useEffect } from 'react';
import type { FunctionComponent, HTMLAttributes } from 'react';

interface IconoProps extends HTMLAttributes<HTMLSpanElement> {
  name: string;
}

const Icono: FunctionComponent<IconoProps> = ({ name, ...props }) => {
  const [svgContent, setSvgContent] = useState<string | null>(null);

  useEffect(() => {
    const loadSvg = async () => {
      try {
        // Importa el contenido del SVG como una cadena de texto
        const { default: content } = await import(`../assets/${name}.svg?raw`);
        setSvgContent(content);
      } catch (error) {
        console.error(`Error al cargar el icono: ${name}`, error);
        setSvgContent(null);
      }
    };
    loadSvg();
  }, [name]);

  if (!svgContent) {
    return null;
  }

  return (
    <span
      {...props}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
};

export default Icono;