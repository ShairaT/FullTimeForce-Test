import { ConfigObject } from '@nestjs/config';

export const appConfig = (): ConfigObject => {
  const appConfig = {
    app: {
      port: Number(process.env.SERVER_PORT) || 3000,
    },
  };
  return appConfig;
};
