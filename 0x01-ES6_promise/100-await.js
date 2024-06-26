import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let user = {};

  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    user = { photo, user };
  } catch (err) {
    user = { photo: null, user: null };
  }
  return user;
}

