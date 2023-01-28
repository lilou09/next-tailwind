const getError = (error) => {
  error.response && error.response.data && error.response.data.message
    ? error.data.message
    : error.message;
};

export { getError };
