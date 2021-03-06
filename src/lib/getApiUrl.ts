import { isEnvProduction } from './enviroment';

const getApiUrl = (): string => {
  if (isEnvProduction() && process.env.REACT_APP_BACKEND_API_URL) {
    return process.env.REACT_APP_BACKEND_API_URL;
  }
  // Return localhost API URL
  return 'http://localhost:8000/graphql';
};

export default getApiUrl;
