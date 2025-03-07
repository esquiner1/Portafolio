export {}; // Asegura que es un módulo

declare global {
  interface Window {
    dataLayer: any[];
  }

  function gtag(...args: any[]): void;
}
