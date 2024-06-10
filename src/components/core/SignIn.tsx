import { UserIcon } from '@heroicons/react/24/outline';
import signInAction from '@shared/app/actions/sign-in';
import { auth } from '@shared/lib/auth';
import Image from 'next/image';

// The SignIn component makes all app dynamic rendered
export default async function SignIn() {
  // This part of await auth() creates the dynamic render for the whole app since SingIn component is used in Header component
  // and Header component imports it via {children} prop
  const session = await auth();
  if (session?.user) {
    const userImage = session.user.image as string;
    return (
      <div className="avatar mr-4">
        <div className="w-7 rounded-full">
          <Image src={userImage} alt="avatar" height={28} width={28} />
        </div>
      </div>
    );
  }

  return (
    <form action={signInAction}>
      <button className="btn btn-ghost font-medium" type="submit">
        <UserIcon strokeWidth={2} className="h-5 w-5" />
        <span className="hidden sm:block">Sign in</span>
      </button>
    </form>
  );
}
