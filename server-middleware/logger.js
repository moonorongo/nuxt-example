export default function (req, res, next) {
  console.log("LOGGER: ", req.url);
  next();
}
