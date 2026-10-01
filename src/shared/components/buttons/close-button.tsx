type Props = {
  onClose: () => void;
};

export const CloseButton = ({ onClose }: Props) => {
  return (
    <img
      className="cursor-pointer"
      onClick={onClose}
      src="/assets/images/icon-close-modal.svg"
      alt="close button"
    />
  );
};
