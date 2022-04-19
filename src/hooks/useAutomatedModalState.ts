import React from 'react';

export const useAutomatedModalState = (
  numberOfActionsToTriggerModal: number
) => {
  const [userFacedModal, setUserFacedModal] = React.useState(false);
  const [changeDataTimes, setChangeDataTimes] = React.useState(0);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  React.useEffect(() => {
    if (!userFacedModal && changeDataTimes === numberOfActionsToTriggerModal) {
      setUserFacedModal(true);
      setIsModalOpen(true);
    }
  }, [changeDataTimes, userFacedModal, numberOfActionsToTriggerModal]);

  const triggerActionCounter =
    <CallbackArgs, CallbackReturn>(
      actionFunction: (...args: CallbackArgs[]) => CallbackReturn
    ) =>
    (...actionFunctionArgs: CallbackArgs[]) => {
      actionFunction(...actionFunctionArgs);
      setChangeDataTimes((prevChangeDataTimes) => prevChangeDataTimes + 1);
    };

  const onModalClose = () => setIsModalOpen(false);

  return {
    isModalOpen,
    onModalClose,
    triggerActionCounter,
  };
};
