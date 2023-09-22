import cn from "classnames";
import styles from "./Modal.module.scss";
import { ModalProps } from "../types/Modal.props";
import { useCallback, useEffect, useRef, useState } from "react";
import { Portal } from "shared/ui/portal";

const ANIMATION_DELAY = 300;

export const Modal: React.FC<ModalProps> = ({
  className,
  children,
  isOpen,
  onClose,
  ...props
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }
    return () => {
      clearTimeout(timerRef.current);
    };
  }, []);

  const closeHeandler = useCallback(() => {
    setIsClosing(true);
    timerRef.current = setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, ANIMATION_DELAY);
  }, [setIsClosing, onClose, ANIMATION_DELAY]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeHeandler();
      }
    },
    [closeHeandler]
  );

  const onClickCounter = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const mods: Record<string, boolean> = {
    [styles.opened]: isOpen,
    [styles.isClosing]: isClosing,
  };

  return (
    <Portal>
      <div
        className={cn(className, styles.Modal, mods)}
        onClick={closeHeandler}
        {...props}
      >
        <div className={styles.overlay}>
          <div className={cn(styles.content)} onClick={onClickCounter}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
