import { JWT } from 'google-auth-library';
import sa from './sa';

export async function authenticate() {
  const auth = new JWT({
    email: sa.client_email,
    key: sa.private_key,
    scopes: ['https://www.googleapis.com/auth/drive']
  });

  await auth.authorize();
  return auth;
}