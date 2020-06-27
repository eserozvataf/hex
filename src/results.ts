import HexFunctionResult from "./types/functionResult.ts";

const ok: HexFunctionResult = {
  payload: undefined,
};

function text(body: string): HexFunctionResult {
  return {
    payload: body,
  };
}

const results = {
  ok,
  text,        // text/plain
  // object(), // application/json, application/xml depending on request headers
  // file(),   // application/octet-stream
  // sound(),  // sends a sound file, dependending on platform
  // media(),  // ?

  // preconditionFailed(),
  // unauthorized(),
  // unsupported(), // unprocessable() // notAllowed()
  // unavailable(),
  // timedout(),
  // error(),
  // notFound(),
  // notImplemented(),
};

export {
  results as default,
  ok,
  text,
};
