import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all(
    [
      uploadPhoto().then(result => {
        console.log(`${result.body} `);
      }),
      createUser().then(
        (user) => {
          console.log(`${user.firstName} ${user.lastName}`);
        },
      ),
    ],
  ).catch(() => new Error('Signup system offline'));
}
