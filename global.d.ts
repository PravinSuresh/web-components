import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'my-modal': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        label?: string; // if you have a 'label' attribute
      };
    }
  }
}
