'use server';

import { signIn } from '@shared/lib/auth';

export default async function signInAction() {
  await signIn('google');
}
