import { Box, Button, Rating, TextField, Typography } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useEffect, useState } from 'react';
// import html

type Inputs = {
  title: string;
  description: string;
};

interface Question {
  questionId: string;
  questionType: string;
  label: string;
  required: boolean;
  attributes: any;
}

interface Attributes {
  title: string;
  description: string;
  questions: Question[];
}

interface SurveyData {
  data: {
    type: string;
    id: string;
    attributes: Attributes;
  };
}

const inputCss = { marginBottom: 1 };

export default function SurveyForm() {
  const [surveyData, setSurveyData] = useState<SurveyData | null>(null);
  const [loaded, setLoaded] = useState<boolean>(false);

  console.log('[SurveyForm.js] - Render');
  console.log('loaded: - ', loaded);

  useEffect(() => {
    fetch('/api/v1/survey')
      .then((response) => response.json())
      .then((data) => {
        setSurveyData(data);
        setLoaded(true);
      });
    // TODO: show data in a form
  }, []);

  // TODO: uncomment 'register' an 'formState: { errors }'
  const {
    // register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  // console.log(watch('title')); // watch input value by passing the name of it

  console.log('surveyData');
  console.log(surveyData);
  // console.log('formState.errors:');
  // console.log(formState.errors);

  // TODO: add loading skeleton
  if (surveyData === null) return <div>Loading...</div>;

  const titleHtml = (
    <Typography variant='h4' component='h1'>
      {surveyData.data.attributes.title}
    </Typography>
  );

  const descriptionHtml = (
    <div
      dangerouslySetInnerHTML={{
        __html: surveyData.data.attributes.description,
      }}
    />
  );

  const questionsHtml = surveyData.data.attributes.questions.map((question) => {
    switch (question.questionType) {
      case 'text':
        const questionId = question.questionId;
        console.log(questionId);
        return (
          <TextField
            id={question.questionId}
            label={question.label}
            // {...register(question.questionId, { required: true })}
            variant='outlined'
            fullWidth
            sx={inputCss}
            key={question.questionId}
          />
        );
      case 'rating':
        return (
          <div key={question.questionId}>
            <Typography variant='body1' component='legend'>
              {question.label}
            </Typography>
            <Rating
              name='simple-controlled'
              value={0}
              // onChange={(event, newValue) => {
              //   setValue(newValue);
              // }}
            />
          </div>
        );
      default:
        return (
          <TextField
            id={question.questionId}
            label={question.label}
            variant='outlined'
            fullWidth
            sx={inputCss}
            key={question.questionId}
            // {...props}
          />
        );
    }
  });

  return (
    <>
      {titleHtml}
      {descriptionHtml}

      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <Box component='form' onSubmit={handleSubmit(onSubmit)} sx={{ py: 3 }}>
        {questionsHtml}

        {/* TODO: check this code below to see how to register input hook */}
        {/* register your input into the hook by invoking the "register" function */}
        {/* <TextField
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
        {errors.description && <span>This field is required</span>} */}
        {/* include validation with required or other standard HTML validation rules */}
        {/* errors will return when field validation fails  */}

        <Button type='submit'>Submit</Button>
      </Box>
    </>
  );
}
