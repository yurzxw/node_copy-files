'use strict';
import fs from 'fs';

const copyFile = () => {
  try {
    const params = process.argv.slice(2);
    const file = params[0];
    const fileCopy = params[1];

    if (!file || !fileCopy) {
      return;
    }

    fs.readFile(file, 'utf8', (error, data) => {
      if (error) {
        return error.message;
      }

      fs.writeFile(fileCopy, data, 'utf8', (err) => {
        if (err) {
          return err.message;
        }
      });
    });
  } catch (e) {
    return e.message;
  }
};

copyFile();
