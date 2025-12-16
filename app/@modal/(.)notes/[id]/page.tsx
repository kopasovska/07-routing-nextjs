import PreviewModal from '@/components/PreviewModal/PreviewModal';
import { fetchNoteById } from '@/lib/api';

interface NotePreviewProps {
  params: Promise<{ id: string }>;
}

const NotePreview = async ({ params }: NotePreviewProps) => {
  const { id } = await params;
  const note = await fetchNoteById(id);

  return (
    <>
      <PreviewModal>
        <h2>{note.title}</h2>
        <p>{note.content}</p>
      </PreviewModal>
    </>
  );
};

export default NotePreview;
