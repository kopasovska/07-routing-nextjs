'use client';

import { useRouter } from 'next/navigation';
import css from './PreviewModal.module.css';

interface PreviewModalProps {
  children: React.ReactNode;
}

const PreviewModal = ({ children }: PreviewModalProps) => {
  const router = useRouter();

  const close = () => router.back();

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      close();
    }
  };

  return (
    <div
      className={css.backdrop}
      role="dialog"
      aria-modal="true"
      onClick={handleBackdropClick}
    >
      <div className={css.modal}>
        <button
          className={css.closeBtn}
          aria-label="Close modal"
          onClick={close}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default PreviewModal;
