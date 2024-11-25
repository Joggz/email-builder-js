import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Modal,
  InputLabel,
  FormControl,
  MenuItem,
  Select,
} from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { Subject } from '@mui/icons-material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};
;
interface Props{
    showModal: boolean;
    close: () => void;
    code: string;
}

const FormModal = ({showModal, close, code}: Props) => {
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    subject: '',
    category: '',
    dateTime: dayjs(),
    html : code,
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleDateTimeChange = (newDateTime : any) => {
    setFormValues({ ...formValues, dateTime: newDateTime });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log('Form Submitted:', formValues);
    // Perform form submission logic here (e.g., send data to backend)
    handleClose();
  };
//   alert(showModal)

  const categories = [
    { value: 'all_dway_customer', label: 'All Dwayremit Customer' },
    { value: 'all_hop_customer', label: 'All HOP Customer' },
    { value: 'all_hq_customer', label: 'All HQ Customer' },
    { value: 'all_refferals', label: 'All Refferals' },
  ];

  return (
    <>
      {/* <Button variant="contained" color="primary" onClick={handleOpen}>
        Open Form
      </Button> */}
      <Modal open={showModal} onClose={() => close()}>
        <Box sx={style}>
          <Typography variant="h6" component="h2" gutterBottom>
            Email Blast
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="subject"
              name="subject"
              value={formValues.subject}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
              sx={{ mb: 2, }}
            />
             <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                labelId="category-label"
                id="Receiver Category"
                name="category"
                value={formValues.category}
                onChange={handleChange}
                required
                displayEmpty
                
              >
                 <MenuItem value="" disabled>
                  Select a category
                </MenuItem>
                {categories.map((item: any) => (
                  <MenuItem key={item.value} value={item.value}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {/* <TextField
              label="Email"
              name="email"
              type="email"
              value={formValues.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
              sx={{ mb: 2, p: 1 }}
            /> */}
            {/* <TextField
              label="Message"
              name="message"
              value={formValues.message}
              onChange={handleChange}
              fullWidth
              multiline
              rows={4}
              margin="normal"
              required
              sx={{ mb: 2, p: 1 }}
            /> */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                label="Select Date and Time"
                value={formValues.dateTime}
                sx={{ mb: 2, p: 1 }}
                onChange={handleDateTimeChange}
                renderInput={(params) => (
                  <TextField {...params} fullWidth margin="normal" required />
                )}
              />
            </LocalizationProvider>
            <Box mt={2} display="flex" justifyContent="space-between"  sx={{ mb: 2,}}>
              <Button onClick={close} color="secondary">
                Cancel
              </Button>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default FormModal;



// import * as React from 'react';
// import dayjs, { Dayjs } from 'dayjs';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

// export default function DateTimePickerValue() {
//   const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17T15:30'));

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
//         <DateTimePicker
//           label="Uncontrolled picker"
//           defaultValue={dayjs('2022-04-17T15:30')}
//         />
//         <DateTimePicker
//           label="Controlled picker"
//           value={value}
//           onChange={(newValue) => setValue(newValue)}
//         />
//       </DemoContainer>
//     </LocalizationProvider>
//   );
// }
