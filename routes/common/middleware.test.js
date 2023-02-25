const index  = require('./middleware');

describe('middleware', () => {

  test('returns event', async () => {
    const event =  {
      body: {
        p1: 'abc',
        p2: 'def'
      },
      params: {
        path: {
          route: "APIroute"
        },
        querystring: "querystring",
        header: [
          {"HEADERS": 'header values'}
        ]
      },
      stageVariables: "stage variables",
      context: {
        "source-ip": "1.2.3.4"
      }
    }

    const expected = {
      ...event.body,
      route: event.params.path.route,
      querystring: event.params.querystring,
      sourceIP: event.context['source-ip']
    }
    const response = await index(event)
    expect(response).toEqual(expected);
  })

})
