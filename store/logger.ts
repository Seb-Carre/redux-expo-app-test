const logger = (destination) => (store) => (next) => (action) => {
  console.log("[" + 32 + "m" + "action from logger : " + "[0m", action);
  next(action);
};

export default logger;
