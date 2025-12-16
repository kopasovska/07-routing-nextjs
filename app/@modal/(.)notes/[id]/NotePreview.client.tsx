'use client';

import Modal from '@/components/Modal/Modal';
import { Note } from '@/types/note';
import { useRouter } from 'next/navigation';

interface NotePreviewProps {
  note: Note;
}

const NotePreview = ({ note }: NotePreviewProps) => {
  const router = useRouter();

  const close = () => router.back();

  return (
    <Modal onClose={close}>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </Modal>
  );
};

export default NotePreview;
