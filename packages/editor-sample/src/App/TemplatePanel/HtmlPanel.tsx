import React, { useMemo,forwardRef, useImperativeHandle, useState  } from 'react';

import { renderToStaticMarkup } from '@usewaypoint/email-builder';

import { useDocument } from '../../documents/editor/EditorContext';

import HighlightedCodePanel from './helper/HighlightedCodePanel';

// interface Props {
//   copyHtml: (html: string) =>  void;
//  }



 const HtmlPanel = forwardRef<{ logProperty: () => void }>((props, ref) => {
  const document = useDocument();  
  const code = useMemo(() => renderToStaticMarkup(document, { rootBlockId: 'root' }), [document]);
  // copyHtml(code)
  useImperativeHandle(ref, () => ({
    logProperty() {
      alert("tiggered in child A")
      console.log(code);
    },
  }));


  
  
  return <HighlightedCodePanel type="html" value={code} />;
})

export default HtmlPanel