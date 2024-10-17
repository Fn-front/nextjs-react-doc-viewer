'use client'

import { useState } from 'react';
import "@cyntler/react-doc-viewer/dist/index.css";
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';

export default function Home() {

  const [selectedDocs, setSelectedDocs] = useState<File[]>([]);

  return (
    <>
      <h2 className="c_h2">テンプレ</h2>
      <input
        type="file"
        // accept=".pdf"
        multiple
        onChange={(el) =>
          el.target.files?.length &&
          setSelectedDocs(Array.from(el.target.files))
        }
      />
      <DocViewer
        documents={selectedDocs.map((file) => ({
          uri: window.URL.createObjectURL(file),
          fileName: file.name,
        }))}
        pluginRenderers={DocViewerRenderers}
      />
    </>
  );
}
