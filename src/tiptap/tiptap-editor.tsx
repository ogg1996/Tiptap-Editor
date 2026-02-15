import './styles/tiptap.css';

import { EditorContent, useEditor } from '@tiptap/react';

import { tiptapConfig } from './config/tiptap-config';
import TiptapToolbar from './toolbar/tiptap-toolbar';

export default function TiptapEditor() {
  const editor = useEditor(tiptapConfig);
  if (!editor) return <div>에디터 로딩중...</div>;

  return (
    <div className="relative w-full rounded-sm border border-slate-300 p-2 select-text">
      <TiptapToolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
