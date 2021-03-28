import './App.css';
// import Login from './components/login/login';
import Tabs from './components/Shared/Tabs/Tabs'
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'

function App() {
  return (
    <div className="App">
      <Tabs nav={[
          'Sign in',
          'Sign up'
        ]}
        content={{
          'Sign in': <SignIn />,
          'Sign up': <SignUp />
        }} />
    </div>
  );
}

export default App;
