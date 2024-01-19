import { error, redirect } from '@sveltejs/kit';



export const load = async ({ parent, depends, url }) => {
  const { session, supabase } = await parent();
  const userId = session?.user?.id;

  depends('app:users');

  if (!userId && url.pathname !== '/admin/login') {
    throw redirect(307, '/admin/login');
  }
};
