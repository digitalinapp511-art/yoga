import React from 'react';

/**
 * FormattedText:
 * Ensures all headings and descriptions (whether hardcoded or uploaded by admin)
 * render in the exact same typography, font-family, and contrast.
 *
 * Supports:
 *  - *word* or _word_ for brand primary highlight (e.g. "Our *Philosophy*")
 *  - HTML spans (e.g. "Our <span class='text-primary'>Philosophy</span>")
 *  - Plain text
 */
export default function FormattedText({
  text,
  defaultText = '',
  highlightClass = 'text-primary',
  as: Component = React.Fragment,
  className = '',
}) {
  const raw = text ?? defaultText;
  if (!raw || typeof raw !== 'string') {
    return raw ? <Component className={className}>{raw}</Component> : null;
  }

  // If text has HTML tags like <span> or <br>
  if (raw.includes('<span') || raw.includes('</span>') || raw.includes('<br')) {
    return (
      <span
        className={className}
        dangerouslySetInnerHTML={{ __html: raw }}
      />
    );
  }

  // If text has markdown *word* or _word_ syntax
  if (raw.includes('*') || raw.includes('_')) {
    const tokens = raw.split(/(\*[^\*]+\*|_[^_]+_)/g);
    const content = tokens.map((token, idx) => {
      if (
        (token.startsWith('*') && token.endsWith('*') && token.length > 2) ||
        (token.startsWith('_') && token.endsWith('_') && token.length > 2)
      ) {
        return (
          <span key={idx} className={highlightClass}>
            {token.slice(1, -1)}
          </span>
        );
      }
      return token;
    });

    if (Component === React.Fragment) {
      return <>{content}</>;
    }
    return <Component className={className}>{content}</Component>;
  }

  if (Component === React.Fragment) {
    return <>{raw}</>;
  }
  return <Component className={className}>{raw}</Component>;
}
