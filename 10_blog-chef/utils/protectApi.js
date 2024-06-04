const protectApi = (req, res, next) => {
  const authorization = req.header("Authorization");
  if (authorization) {
    return next();
  }

  return res.status(403).json({ message: "Unauthorized access to the API" });
};

export default protectApi;
