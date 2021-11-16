import { Box, Button, TextField } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useEffect, useState } from 'react';

type Inputs = {
  title: string;
  description: string;
};

const inputCss = { marginBottom: 1 };

export default function SurveyForm() {
  const [surveyData, setSurveyData] = useState(null);

  useEffect(() => {
    fetch('/api/v1/survey')
      .then((response) => response.json())
      .then((data) => setSurveyData(data));
    // TODO: show data in a form
  }, []);

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  // console.log(watch('title')); // watch input value by passing the name of it

  console.log('[SurveyForm.js] Render');
  console.log('surveyData');
  console.log(surveyData);

  if (surveyData === null) return <div>Loading...</div>;

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <Box component='form' onSubmit={handleSubmit(onSubmit)} sx={{ py: 3 }}>
      {/* register your input into the hook by invoking the "register" function */}
      <TextField
        id='title'
        label='Movie title'
        {...register('title', { required: true })}
        variant='outlined'
        fullWidth
        sx={inputCss}
      />

      <TextField
        error={false}
        id='description'
        label='Description'
        {...register('description', { required: true })}
        // helperText={'ERRORRRRRRRRRR'} // TODO: add error handling
        multiline
        rows={4}
        fullWidth
        sx={inputCss}
      />
      {errors.description && <span>This field is required</span>}
      {/* include validation with required or other standard HTML validation rules */}
      {/* errors will return when field validation fails  */}

      <Button type='submit'>Submit</Button>
    </Box>
  );
}
