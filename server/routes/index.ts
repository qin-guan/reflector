export default eventHandler((event) => {
  const ip = getHeader(event, 'x-forwarded-for')
  return ip
});
