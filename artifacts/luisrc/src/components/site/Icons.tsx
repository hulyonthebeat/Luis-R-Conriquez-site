import type { ReactElement } from "react";

export type IconId =
  | "arrow"
  | "play"
  | "spotify"
  | "apple"
  | "youtube"
  | "amazon"
  | "deezer"
  | "instagram"
  | "tiktok"
  | "facebook"
  | "x";

/**
 * Icons ported verbatim from the prototype (assets/app.js).
 * Rendered without width/height so CSS controls sizing, matching the prototype.
 */
export function Icon({ id }: { id: IconId }): ReactElement | null {
  switch (id) {
    case "arrow":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      );
    case "play":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
      );
    case "spotify":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0a12 12 0 100 24 12 12 0 000-24zm5.5 17.3a.75.75 0 01-1 .25c-2.8-1.7-6.3-2.1-10.4-1.16a.75.75 0 11-.33-1.46c4.5-1 8.4-.55 11.5 1.37.36.22.47.69.23 1zm1.47-3.27a.94.94 0 01-1.29.31c-3.2-2-8.1-2.54-11.9-1.4a.94.94 0 11-.54-1.8c4.3-1.3 9.7-.7 13.4 1.6.44.27.58.85.33 1.29zm.13-3.4C15.8 8.2 8.9 7.97 5.2 9.1a1.12 1.12 0 11-.65-2.15C8.8 5.65 16.4 5.92 20.5 8.3a1.12 1.12 0 11-1.14 1.93z" />
        </svg>
      );
    case "apple":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M16.4 12.6c0-2 1.6-3 1.7-3-1-1.4-2.4-1.6-2.9-1.6-1.2-.1-2.4.7-3 .7-.6 0-1.6-.7-2.6-.7-1.3 0-2.6.8-3.3 2-1.4 2.4-.4 6 1 8 .7 1 1.4 2 .4 2-.9 1.1-1.9.4-2.6.4-.7 0-1.4.7-2.4.7v-.1c.1 0 .1 0 0 0z" />
          <path d="M14.5 6.3c.6-.7 1-1.7.9-2.7-.9 0-1.9.6-2.5 1.3-.5.6-1 1.6-.9 2.6 1 .1 1.9-.5 2.5-1.2z" />
        </svg>
      );
    case "youtube":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M23 7.5a3 3 0 00-2.1-2.1C19 4.9 12 4.9 12 4.9s-7 0-8.9.5A3 3 0 001 7.5C.5 9.4.5 12 .5 12s0 2.6.5 4.5a3 3 0 002.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 002.1-2.1c.5-1.9.5-4.5.5-4.5s0-2.6-.5-4.5zM9.7 15.5v-7l6 3.5-6 3.5z" />
        </svg>
      );
    case "amazon":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.4 17.6c-2.3 1.7-5.6 2.6-8.5 2.6-4 0-7.6-1.5-10.3-4-.2-.2 0-.5.2-.3 2.9 1.7 6.5 2.7 10.2 2.7 2.6 0 5.4-.5 8-1.6.4-.2.7.3.4.6zM19.3 16.5c-.3-.4-1.9-.2-2.6-.1-.2 0-.3-.2-.1-.3 1.3-.9 3.4-.6 3.6-.3.2.3-.1 2.4-1.3 3.4-.2.2-.4.1-.3-.1.3-.7.9-2.2.7-2.6z" />
          <path d="M16.8 13.5V8.2c0-2.3-1.6-3.9-4.7-3.9-2.4 0-4.8 1-5.4 3.9l3.1.3c.1-.8.7-1.6 1.8-1.6 1.2 0 1.8.9 1.8 2v.6c-2.6 0-6.3.4-6.3 3.9 0 1.8 1.4 2.8 3.1 2.8 1.5 0 2.4-.4 3.4-1.4.3.5.5 1 1.4 1.7.2.1.4.1.6-.1l1.7-1.5c.2-.1.1-.4 0-.6-.5-.6-.6-.9-.6-2zm-3.6.3c-.5.9-1.3 1.4-2.2 1.4-1.1 0-1.7-.8-1.7-1.9 0-1.7 1.7-2.1 3.3-2.1v.4c0 .8 0 1.4-.3 2z" />
        </svg>
      );
    case "deezer":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.8 5.4h4.5v2.4h-4.5zM18.8 9.1h4.5v2.4h-4.5zM12.5 9.1H17v2.4h-4.5zM18.8 12.8h4.5v2.4h-4.5zM12.5 12.8H17v2.4h-4.5zM6.3 12.8h4.5v2.4H6.3zM18.8 16.5h4.5v2.4h-4.5zM12.5 16.5H17v2.4h-4.5zM6.3 16.5h4.5v2.4H6.3zM0 16.5h4.5v2.4H0z" />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
          <rect x={3} y={3} width={18} height={18} rx={5} />
          <circle cx={12} cy={12} r={4} />
          <circle cx={17.5} cy={6.5} r={1} fill="currentColor" stroke="none" />
        </svg>
      );
    case "tiktok":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M16.5 3c.3 2.2 1.6 3.7 3.8 3.9v2.6c-1.3.1-2.5-.3-3.8-1v5.6c0 3.6-2.6 6-5.8 6-2.9 0-5.2-2-5.2-5 0-3.2 2.6-5 5.6-4.7v2.7c-.4-.1-.9-.2-1.3-.2-1.3 0-2.2.9-2.2 2.2 0 1.3 1 2.2 2.3 2.2 1.5 0 2.4-1.1 2.4-2.9V3h3.2z" />
        </svg>
      );
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0022 12z" />
        </svg>
      );
    case "x":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.2 2H21l-6.4 7.3L22 22h-6l-4.7-6-5.3 6H3l6.9-7.8L2 2h6.2l4.2 5.6L18.2 2zm-2.1 18h1.6L7.9 3.7H6.2L16.1 20z" />
        </svg>
      );
    default:
      return null;
  }
}
