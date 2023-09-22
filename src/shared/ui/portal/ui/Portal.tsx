import { createPortal } from "react-dom";
import { PortalProps } from "../types/Portal.props";

export const Portal: React.FC<PortalProps> = ({
  children,
  element = document.body,
}) => {
  return createPortal(children, element);
};
