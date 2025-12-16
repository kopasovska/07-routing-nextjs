import { fetchNoteById } from '@/lib/api';
import NotePreview from './NotePreview.client';

interface NotePreviewPageProps {
  params: Promise<{ id: string }>;
}

const NotePreviewPage = async ({ params }: NotePreviewPageProps) => {
  const { id } = await params;
  const note = await fetchNoteById(id);

  return <NotePreview note={note} />;
};

export default NotePreviewPage;
