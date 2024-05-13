import { signOut } from '@shared/lib/auth';

export default async function signOutAction() {
  await signOut();
}
