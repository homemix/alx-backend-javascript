import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all(
    [
      uploadPhoto(),
      createUser().then(
        (user) => {
          console.log(`${user.firstName} ${user.lastName}`);
        },
      ),
    ],
  ).catch(() => new Error('Signup system offline'));
}
