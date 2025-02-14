const nonFoundHandler = (_req, _res, next) => {
  const err = new Error("not found");
  err.status = 404;
  next(err);
};

const errorHandler = (err, _req, res, _next) => {
  if (err.status) {
    res.status(err.status).json({
      message: err.message,
    });
  } else {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = { nonFoundHandler, errorHandler };
