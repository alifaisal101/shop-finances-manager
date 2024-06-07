import { Injectable } from '@nestjs/common';
import { question, keyInSelect } from 'readline-sync';
import { systemError } from 'src/utils/functions/error';
import { isAlpha, isNumberString } from 'class-validator';
import { warnLog } from 'src/utils/functions/log';

export interface InAdminPromptData {
  phoneNumber?: string;
  fullName: string;
  password: string;
}

@Injectable()
export class PromptService {
  phoneNumberPrompt(): string {
    while (true) {
      const phoneNumber = question("Enter admin's phone number: ");

      if (!isNumberString(phoneNumber)) {
        warnLog(
          'Phone number is invalid. Please use only numbers. Format should be similar to: 0xxxxxxxx',
        );
        console.log('Re-Enter Phone number');
        continue;
      }

      return phoneNumber;
    }
  }
  fullNamePrompt(): string {
    while (true) {
      const fullName = question("Enter admin's fullName: ");

      // If the full name is not Arabic or English Alpha only, then an error msg is thrown, and the input is refused.
      if (
        !isAlpha(fullName.replace(/\s/g, ''), 'en-US') &&
        !isAlpha(fullName.replace(/\s/g, ''), 'ar')
      ) {
        console.warn(
          '\x1b[33m%s\x1b[0m',
          'Fullname is invalid, please only use alphabetic characters',
        );
        console.log('Re-Enter Fullname');

        continue;
      }

      return fullName;
    }
  }
  sexPrompt(): string {
    const sexes = ['male', 'female'];
    try {
      return sexes[keyInSelect(sexes, 'Male or Female ? ')];
    } catch (err) {
      systemError('Error while selecting sex.', err);
    }
  }

  passwordPrompt(): string {
    while (true) {
      const password = question('Enter Admin Password: ', {
        hideEchoBack: true,
        mask: '',
      });
      const cPassword = question('ReEnter Password: ', {
        hideEchoBack: true,
        mask: '',
      });

      if (password !== cPassword) {
        console.warn('\x1b[33m%s\x1b[0m', "Passwords don't match!");
        console.log('Re-Enter passwords');
        continue;
      }

      return password;
    }
  }

  adminPromptData(): InAdminPromptData {
    return {
      fullName: this.fullNamePrompt(),
      password: this.passwordPrompt(),
    };
  }
}
