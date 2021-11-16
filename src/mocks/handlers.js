import { rest } from 'msw';

export const handlers = [
  // Handles a GET /api/v1/survey request
  rest.get('/api/v1/survey', (req, res, ctx) => {
    console.log('GET survey ...');
    return res(
      ctx.status(200),
      ctx.json({
        data: {
          type: 'surveys',
          id: '2660dd24-e2db-42c1-8093-284b1df2664c',
          attributes: {
            title: 'Film feedback form',
            description: `<p>Thank you for participating in the film
            festival!</p><p>Please fill out this short survey so we can record your
            feedback.</p>`,
            questions: [
              {
                questionId: 'film',
                questionType: 'text',
                label: 'What film did you watch?',
                required: true,
                attributes: null,
              },
              {
                questionId: 'review',
                questionType: 'rating',
                label: `How would you rate the film? (1 - Very bad, 5 - Very
                good)`,
                required: true,
                attributes: {
                  min: 1,
                  max: 5,
                },
              },
            ],
          },
        },
      })
    );
  }),

  // Handles a GET /api/v1/survey request
  rest.get('/api/v1/survey', (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({
        errors: [
          {
            title: 'Internal Server Error',
            detail: "Something went wrong. We're working on it!",
          },
        ],
      })
    );
  }),
];
