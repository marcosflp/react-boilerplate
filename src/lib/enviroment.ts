import * as R from 'ramda';

export const getStringEnvVar = (varName: string): string => {
  const envVar = process.env[varName];
  if (R.isNil(envVar) || ['true', 'false'].includes(envVar!)) {
    throw new Error(`Environment variable ${varName} is not defined and a string`);
  }
  return envVar!;
};

export const isEnvProduction = () => getStringEnvVar('NODE_ENV') === 'production';
