import { type Editor } from '@tiptap/core';
import { useEditorState } from '@tiptap/react';

import {
  blockToolbarItems,
  headingToolbarItems,
  markToolbarItems,
  mediaToolbarItems
} from '../consts/consts';
import type { EditorKey, EditorState, ToolbarItem } from '../types/types';
import ToolbarButton from './toolbar-button';
import ToolbarGroup from './toolbar-group';
import ToolbarLine from './toolbar-line';

interface Props {
  editor: Editor;
}

export default function TiptapToolbar({ editor }: Props) {
  const editorState: EditorState | null = useEditorState({
    editor,
    selector: snapshot => {
      const { editor } = snapshot;

      if (!editor) return null;

      return {
        active: {
          heading1: editor.isActive('heading', { level: 1 }),
          heading2: editor.isActive('heading', { level: 2 }),
          heading3: editor.isActive('heading', { level: 3 }),
          bold: editor.isActive('bold'),
          italic: editor.isActive('italic'),
          strike: editor.isActive('strike'),
          underline: editor.isActive('underline'),
          blockquote: editor.isActive('blockquote'),
          bulletList: editor.isActive('bulletList'),
          orderedList: editor.isActive('orderedList'),
          link: editor.isActive('link')
        }
      };
    }
  });

  if (!editor || !editorState) return null;

  return (
    <div className="flex flex-wrap justify-center gap-2 border-b border-slate-300 pb-3">
      <ToolbarGroup>
        {headingToolbarItems.map(
          ({ key, text, icon: Icon, action }: ToolbarItem) => (
            <ToolbarButton
              key={key}
              title={text}
              isActive={editorState.active[key as EditorKey]}
              icon={Icon}
              size={24}
              onClick={() => {
                action(editor);
              }}
            />
          )
        )}
      </ToolbarGroup>
      <ToolbarLine />
      <ToolbarGroup>
        {markToolbarItems.map(
          ({ key, text, icon: Icon, action }: ToolbarItem) => (
            <ToolbarButton
              key={key}
              title={text}
              isActive={editorState.active[key as EditorKey]}
              icon={Icon}
              size={20}
              onClick={() => {
                action(editor);
              }}
            />
          )
        )}
      </ToolbarGroup>
      <ToolbarLine />
      <ToolbarGroup>
        {blockToolbarItems.map(
          ({ key, text, icon: Icon, action }: ToolbarItem) => (
            <ToolbarButton
              key={key}
              title={text}
              isActive={editorState.active[key as EditorKey]}
              icon={Icon}
              size={24}
              onClick={() => {
                action(editor);
              }}
            />
          )
        )}
      </ToolbarGroup>
      <ToolbarLine />
      <ToolbarGroup>
        {mediaToolbarItems.map(
          ({ key, text, icon: Icon, action }: ToolbarItem) => (
            <ToolbarButton
              key={key}
              title={text}
              isActive={editorState.active[key as EditorKey]}
              icon={Icon}
              size={18}
              onClick={() => {
                if (key === 'image') {
                  action(editor);
                } else {
                  action(editor);
                }
              }}
            />
          )
        )}
      </ToolbarGroup>
    </div>
  );
}
