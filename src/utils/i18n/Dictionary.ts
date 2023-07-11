export interface Dictionary {
  getHello: (name: string) => string;
  errors: {
    notFound: string;
  };
}
