import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({fetch}) => {
  const res = await fetch('/quran.json');

  if (res.ok) {
    return {
      status: res.status,
      quran: await res.json()
    };
  }

  return {
    status: res.status,
    error: 'Something went wrong'
  };
};
