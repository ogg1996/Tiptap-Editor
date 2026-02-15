import { all, createLowlight } from 'lowlight';

import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import Image from '@tiptap/extension-image';
import Youtube from '@tiptap/extension-youtube';
import StarterKit from '@tiptap/starter-kit';
import bash from 'highlight.js/lib/languages/bash';
import js from 'highlight.js/lib/languages/javascript';
import ts from 'highlight.js/lib/languages/typescript';
import html from 'highlight.js/lib/languages/xml';

const lowlight = createLowlight(all);

lowlight.register('bash', bash);
lowlight.register('html', html);
lowlight.register('js', js);
lowlight.register('ts', ts);

export const tiptapConfig = {
  extensions: [
    StarterKit.configure({
      // codeBlock(블록 코드) 기능 비활성화
      codeBlock: false,
      heading: {
        // 사용할 heading 레벨 목록
        levels: [1, 2, 3]
      },
      link: {
        // 편집 중 링크 클릭 시 이동 방지
        openOnClick: false,
        // 입력 중 URL 자동 링크 변환 비활성화
        autolink: false,
        // URL 붙여넣기 시 링크 자동 생성
        linkOnPaste: true,
        // 프로토콜이 없는 URL에 기본으로 붙일 프로토콜
        defaultProtocol: 'https',
        // 허용할 프로토콜 목록
        protocols: ['http', 'https'],
        // 렌더링되는 <a> 태그에 기본으로 추가할 속성
        HTMLAttributes: {
          target: '_blank',
          rel: 'noopener noreferrer'
        }
      },
      bulletList: {
        // 리스트로 전환 시 기존 서식(bold/italic/link 등) 유지
        keepMarks: true,
        // 노드 속성(정렬 등)은 리스트 전환 시 유지하지 않음
        keepAttributes: false
      },
      orderedList: {
        keepMarks: true,
        keepAttributes: false
      }
    }),
    Image,
    Youtube.configure({
      inline: false,
      nocookie: true,
      interfaceLanguage: 'kr'
    }),
    CodeBlockLowlight.configure({
      lowlight,
      enableTabIndentation: true,
      tabSize: 2
    })
  ],
  // 초기 에디터 텍스트
  content: '<p>내용을 입력하세요.</p>',
  editorProps: {
    attributes: {
      class: 'editor prose focus:outline-none max-w-none'
    }
  }
  // Next.js 같은 SSR 환경에서 hydration 이슈가 있으면 사용
  // immediatelyRender: false,
};
