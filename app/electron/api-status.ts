import { API_URL } from './config';

export const checkApiConnection = async (): Promise<Boolean | void> => {
  try {
    const fetchResult = await fetch(`${API_URL}/status`);
    const { status, statusCode } = await fetchResult.json();

    if (statusCode == 200 && status) {
      return true;
    }
    return false;
  } catch (err) {
    throw new Error(
      err +
        ' Failed to send a connection request to the API. The configuration might be invalid or the API is down.'
    );
  }
};
