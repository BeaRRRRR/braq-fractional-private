import { getServerSession } from 'next-auth/next';
import { authOptions } from './api/auth/[...nextauth]';

export default function Home() {
  return (
    <>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = getServerSession(context.req, context.res, authOptions);

  // redirect if not authenticated
  if (!session || session == null) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    redirect: {
      destination: "/assets",
      permanent: false,
    }
  }
}
