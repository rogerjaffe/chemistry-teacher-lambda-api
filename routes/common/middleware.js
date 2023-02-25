/**
 * Reconfigure the event parameters
 *  ...event.body
 *  event.params.path.route: HTTP route
 *  event.params.querystring: Query string
 *  event.context.source-ip: Client IP address
 *
 * @param event
 * @returns {*&{route, sourceIP, querystring, ...event.body}}
 */
module.exports = (event) => {
  return {
    ...event.body,
    route: event.params.path.route,
    querystring: event.params.querystring,
    sourceIP: event.context["source-ip"],
  };
};
