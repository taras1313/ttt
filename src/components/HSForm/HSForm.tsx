import React from 'react';
import {useHubspotForm, HubspotProvider, UseHubSpotFormProps} from '@aaronhayes/react-use-hubspot-form';

import './index.css';

interface HSFormProps extends Omit<UseHubSpotFormProps, 'target'> {
  title?: string;
  className?: string;
}

declare global {
  interface Window {
    jQuery: (nodeOrSelector: string) => HTMLElement | string;
  }
}

const patchJQuery = () => {
  window.jQuery =
    window.jQuery ||
    function (nodeOrSelector: unknown) {
      if (typeof nodeOrSelector === 'string') {
        return document.querySelector(nodeOrSelector);
      }
      return nodeOrSelector;
    };
};

patchJQuery();

const RawHSForm = ({title, className, ...hsProps}: HSFormProps) => {
  useHubspotForm({target: '#hubspotForm', ...hsProps});

  return (
    <div className={`form-wrapper ${className}`}>
      {!!title && (
        <div className="form-heading">
          {title}
        </div>
      )}
      <div id="hubspotForm"/>
    </div>
  )
}

export const HSForm = (props: HSFormProps) => (
  <HubspotProvider>
    <RawHSForm {...props} />
  </HubspotProvider>
)
