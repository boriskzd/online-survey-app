import { Typography } from '@mui/material';
import SurveyForm from '../components/SurveyForm';

export default function SurveyPage() {
  return (
    <>
      <Typography variant='h4' component='h1'>
        Survey page
      </Typography>
      <SurveyForm />
    </>
  );
}
