import { getSession } from 'next-auth/react';

export default function Home() {
  return (
    <>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = getSession(context);

  // redirect if not authenticated
  if (!session) {
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
