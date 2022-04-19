import React from 'react';

import {Modal} from "../Modal";
import {HSForm} from "../HSForm";

interface MoreToolsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface HSFormProps {
  title?: string;
  hsFormClassName?: string;
  modalClassName?: string;
  formHeadingText?: string;
  region: string;
  portalId: string;
  formId: string;
  sfdcCampaignId: string;
  submitButtonText: string;
  conversionPage: string;
}

export const MoreToolsModal = ({
                                 isOpen, onClose, hsFormClassName,
                                 modalClassName,
                                 submitButtonText = 'Get More Tools',
                                 formHeadingText = 'Fill out the form below to get more information on this and other free tools',
                                 conversionPage,
                                 region,
                                 portalId,
                                 formId,
                                 sfdcCampaignId,
                               }: MoreToolsModalProps & HSFormProps) => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const hsProps = {
    region,
    portalId,
    formId,
    sfdcCampaignId,
    onFormReady() {
      // this hack is needed to update value properly because this method is called is updating the value after running it, we need to pop it out from callstack and run afterwards
      setTimeout(() => {
        (
          document.querySelector(
            'input[type="submit"].hs-button'
          ) as HTMLInputElement
        ).value = submitButtonText;
      }, 50);
    },
    onFormSubmit() {
      const conversionPageInput = document.querySelector(
        'input[name="conversion_page"]'
      ) as HTMLInputElement;

      if (!conversionPageInput.value) {
        conversionPageInput.value = conversionPage;
        conversionPageInput.dispatchEvent(
          new Event('input', {bubbles: true})
        );
      }
    },
    onFormSubmitted() {
      setIsSubmitted(true);
    },
  }

  return (
    <Modal onClose={onClose} isOpen={isOpen} className={modalClassName}>
      <HSForm
        {...hsProps}
        className={hsFormClassName}
        title={isSubmitted ? '' : formHeadingText}/>
    </Modal>
  );
};
