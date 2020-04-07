function POST(path: string) {
  return function (target: object, name: string) {
    const constructor = target.constructor as any;

    if (!constructor.__ROUTES__) {
      constructor.__ROUTES__ = {};
    }

    const metadata = constructor.__ROUTES__;

    metadata[name] = {
      method: 'POST',
      path
    };
  }
}

export { POST };
