import React, { useState } from 'react';

import { BorderAll, IosShareOutlined,  } from '@mui/icons-material';
import { IconButton, Snackbar, Tooltip , Button} from '@mui/material';

import { useDocument } from '../../documents/editor/EditorContext';
import FormModal from './requestCommunicationDetail';

// ChildB Component
interface Props {
    onTriggerLog: () => void;
    shareFile: (code: string) => void
    code: string
  }
  
export default function ShareButton({ onTriggerLog, shareFile, code }: Props) {
  const document = useDocument();
  const [message, setMessage] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean | null>(false);

//   const onClick = async () => {
//     const c = encodeURIComponent(JSON.stringify(document));
//     location.hash = `#code/${btoa(c)}`;
//     setMessage('The URL was updated. Copy it to share your current template.');
//   };

  const onClose = () => {
    setMessage(null);
  };

  return (
    <>
   
      <IconButton onClick={()=> null} className={BorderAll}>
        {/* <span>Send Template</span> */}
        <Tooltip title="Send template to Users">
        <Button variant="contained" fontSize="sm" color="primary" onClick={() => setShowModal(!showModal)}>
        Submit Email Blast
      </Button>
        </Tooltip>
      </IconButton>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={message !== null}
        onClose={onClose}
        message={message}
      />
      {showModal && <FormModal showModal={showModal} close={() => setShowModal(!showModal)} code={code}/>}
    </>
  );
}
