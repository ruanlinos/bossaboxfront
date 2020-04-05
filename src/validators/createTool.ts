import * as Yup from 'yup';

export const schema = Yup.object().shape({
  title: Yup.string().required(),
  link: Yup.string().required(),
  description: Yup.string().required(),
  tags: Yup.array(Yup.string()).required(),
});
