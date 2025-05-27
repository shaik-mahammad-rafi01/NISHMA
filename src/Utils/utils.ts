import readline from 'readline';
import process from 'process';

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

export const ask = (question: string): Promise<string> => {
  return new Promise(resolve => input.question(question, answer => resolve(answer.trim())));
};

export const close = () => input.close();