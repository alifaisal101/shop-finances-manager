import { question } from 'readline-sync';

export const yToContinuePrompt = (qstString: string) => {
  const ans = question(qstString + ' (Type y to continue):');
  if (ans === 'y') {
    return true;
  }

  return false;
};

export const YEStoProceed = (qstString: string) => {
  const ans = question(qstString + ' (Type YES to continue):');
  if (ans === 'YES') {
    return true;
  }

  return false;
};
