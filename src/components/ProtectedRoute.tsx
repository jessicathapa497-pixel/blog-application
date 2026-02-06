import { type JSX } from 'react';

const isAuthenticated = false;    //Placeholder for authentication login

function ProtectedRoute({children}: {children: JSX.Element}) {
  return isAuthenticated ? children : <div> Access Denied</div>
}

export default ProtectedRoute;