const requiresToken = (url: string) => {
  const tokenRequiredPaths: string[] = [
    "/user/update",
    "/transition/deposit",
    "/transition/balance",
    "/transition/buy-sound",
    "/sound/create",
    "/history",
    "/history/create",
    "/history/delete/:id",
    "/playlist/create",
    "/playlist/delete/:id",
    "/playlist/update/:id",
  ];

  // Function to convert a path with :param to a regex
  const pathToRegex = (path: string) => {
    const escapedPath = path.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'); // Escape special regex characters
    const regexPath = escapedPath.replace(/\/:id/g, '/[^/]+'); // Replace /:id with regex to match dynamic segments
    return new RegExp(`^${regexPath}$`);
  };

  return tokenRequiredPaths.some((path) => pathToRegex(path).test(url));
};

export default requiresToken;
