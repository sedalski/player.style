import { codeToHtml } from 'shiki';
import clsx from 'clsx';

type CodeProps = {
  code: string;
  lang: string;
  className?: string;
};

export default async function Code({ code, lang = 'html', className }: CodeProps) {
  const html = await codeToHtml(code, {
    lang,
    themes: {
      light: 'github-light',
      dark: 'github-dark',
    },
    transformers: [
      {
        pre(node: any) {
          this.addClassToHast(node, ['p-1', 'font-mono', 'text-sm', 'overflow-x-auto']);
        },
      },
    ],
  });
  return <div
    className={clsx(className)}
    dangerouslySetInnerHTML={{ __html: html }}
  />;
}
