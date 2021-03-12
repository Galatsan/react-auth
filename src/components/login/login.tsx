import SignUp from '../signUp/signUp';
import SignIn from '../signIn/signIn';
import { useState } from 'react';

export default function Login() {

  const [signVisiblity, toggleSignVisiblity] = useState(true)

  const toggleSignInVisiblity = () => { toggleSignVisiblity(true) }
  const toggleSingUpVisiblity = () => { toggleSignVisiblity(false) }

  return (
    <div>
      <span className="tabs">
        <button className={signVisiblity ? 'activeButton' : 'inactiveButton'} onClick={toggleSignInVisiblity}>Sign In</button>
        <button className={!signVisiblity ? 'activeButton' : 'inactiveButton'} onClick={toggleSingUpVisiblity}>Sign Up</button>
      </span>
      <div>
        <div style={{ display: (signVisiblity ? 'block' : 'none') }}>
          <SignIn />
        </div>
      </div>
      <div>
        <div style={{ display: (!signVisiblity ? 'block' : 'none') }}>
          < SignUp />
        </div>
      </div>
    </div>

  );
}