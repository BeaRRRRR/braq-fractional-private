const withAuth = (gssp) => {
  return async (context) => {
    const response = await fetch('http://localhost:4000/user/me');
    const data = await response.json();

    if (!data) {
      return {
        redirect: {
          destination: '/login',
        },
      };
    }

    const gsspData = await gssp(context); // Run `getServerSideProps` to get page-specific data

    // Pass page-specific props along with user data from `withAuth` to component
    return {
      props: {
        ...gsspData.props,
        data,
      },
    };
  };
};

export default withAuth;
