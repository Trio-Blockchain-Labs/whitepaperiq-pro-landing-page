import type { ReactNode } from "react";

function renderInline(text: string, keyPrefix: string): ReactNode[] {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
            return <strong key={`${keyPrefix}-${i}`}>{part.slice(2, -2)}</strong>;
        }
        return <span key={`${keyPrefix}-${i}`}>{part}</span>;
    });
}

/** Minimal renderer for the subset of markdown used in AI insight text: ##/### headings, bullet lists, **bold**, paragraphs. */
export function renderMarkdownLite(markdown: string): ReactNode[] {
    const lines = markdown.split("\n");
    const blocks: ReactNode[] = [];
    let listItems: string[] = [];
    let key = 0;

    const flushList = () => {
        if (listItems.length === 0) return;
        blocks.push(
            <ul key={`ul-${key++}`}>
                {listItems.map((item, i) => (
                    <li key={i}>{renderInline(item, `li-${key}-${i}`)}</li>
                ))}
            </ul>
        );
        listItems = [];
    };

    for (const rawLine of lines) {
        const line = rawLine.trim();
        if (line === "") {
            flushList();
            continue;
        }
        if (line.startsWith("### ")) {
            flushList();
            blocks.push(<h3 key={`h3-${key++}`}>{line.slice(4)}</h3>);
        } else if (line.startsWith("## ")) {
            flushList();
            blocks.push(<h2 key={`h2-${key++}`}>{line.slice(3)}</h2>);
        } else if (line.startsWith("- ")) {
            listItems.push(line.slice(2));
        } else {
            flushList();
            blocks.push(<p key={`p-${key++}`}>{renderInline(line, `p-${key}`)}</p>);
        }
    }
    flushList();
    return blocks;
}
