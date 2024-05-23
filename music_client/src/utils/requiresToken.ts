const requiresToken = (url: string) => {
  const tokenRequiredPaths: string[] = [
   '/user/update',
   '/transition/deposit',
   '/transition/balance',
   '/transition/buy-sound',
   '/sound/create'
  ];

  return tokenRequiredPaths.some((path) => url.startsWith(path));
};

export default requiresToken;
