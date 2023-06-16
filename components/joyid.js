import React from 'react';
import { Button } from 'react-bootstrap';
import { authWithPopup } from '@joyid/core';
import { useRouter } from 'next/navigation';

import { useContext } from 'react';
import AppContext from '@/components/AppContext';

export default function JoyID() {
  const [joyidInfo, setJoyidInfo] = React.useState(null);

  const context = useContext(AppContext);

  const { push } = useRouter();

  const authOnClick = async () => {
    const res = await authWithPopup({
      redirectURL: location.origin + '/',
      name: 'Awesome App',
      challenge: 'Sign this for me',
      logo: 'https://reactjs.org/logo-180x180.png',
    });
    if (res.error == null) {
      setJoyidInfo(res.data);

      console.log(res.data);
      context.setUserData((prevState) => ({
        ...prevState,
        address: res.data.address,
        system: 'joyid',
      }));

      push('/assets');
    }
  };

  return (
    <Button onClick={authOnClick} className="connectButton" size="lg" variant="light">
      <img style={{ transform: 'scale(2)' }} src="logo_joyid.png" />
    </Button>
  );
}
