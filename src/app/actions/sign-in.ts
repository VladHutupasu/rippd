'use server';

import { signIn } from '@shared/lib/auth';

export default async function signInGoogle() {
  await signIn('google');
}
