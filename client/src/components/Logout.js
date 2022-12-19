import Auth from '../utils/auth';

const Logout = () => {
    try {
      Auth.logout();
    } catch (e) {
      console.error(e);
    }
  
    return (
        <></>
    );
}

export default Logout;
