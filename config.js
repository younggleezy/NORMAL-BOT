const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA61V2Y6ruBb9F79WThPCEIhU0iVMmcgAIQm5ug8OGHAYY0wIOcq/t6hUqUq6p09XS82TZey119577eWfIC9wheaoBaOfoCT4CinqlrQtERiBcR2GiIAeCCCFYAT6y2V7sYQsimf39lKYaJnx2iS0HUu5mxEveTsGtgOd9w78K3j0QFmfUuz/BvCkT6bKUMjjAWyXqh/xnLFKDUXWEm8/Y5b6fsIvSdycisx/BY8OEWKC80gvY5QhAtM5atcQk+/R9/TKKvDENofVy/261s4S2RtrhMUxMrmTHzDH0mcaO5640vfoqxNuk5qO1ue9yZJNhuNLfSyl4ykbb1Kx9PsrczpDt1glePqkX+EoR8E0QDnFtP123S9aY+fq+riylqaoxflFGhunjewFB0MplkdGnIerttxzNVd9j/hSVbTtDrbM+HywkfcSexHrruSjQdMcHxdVbjba9pCcs0z5SnxNPrSS/JO6KyspC6J1Ge2HfnG+xp4RJazIZO7xzMMDc1QtEiSQPVhZ9D36Wni4vbRKOtk5gsls7pWCnWSM76h/qff6/LyomSV8iUxGbT7pQ1qT37HU1xehCI6rfOe45GWLa6aWCqOoClkTohsTMa533CUX/jzertp9sjhRQYI3EzLsfTW/tmSmMufjXijDdqocF5zoBhaNo9e3jBLUTgMwYh89QFCEK0ogxUXe7Q24HoDB1UE+QfStukBqjK2rC/vtgVuLl4Hr2euLeKZ6Es3GMJdf1kM2YcvSGV/cV9ADJSl8VFUomOCKFqS1UFXBCFVg9N+3RnU5E5QVFM1wAEZgIHJDieXYAc8P/lP90cSQVrAs/8gRBT0QkiKzEBhRUqMeeLugcIKsq8rQ4Hhd1llVGwiqyLF9Reb7/b4qdhlmz6BbnKGKwqwEI3bIcbwkysLg0ft3eMiqwQ4EWVMNjdMMUVN5zZAVXpS1oaAbqvQ3PLjH/3ogRzf6lHFXfI7tgRCTirp5XaYFDD40/vET+n5R59Rpc1/tFoiA0ZdtRCnOo6rLrM4h8WN8RWqXBxiFMK3QowcCdMU+6vBAvUVyTdqtfWqDc5ujCzd3najrYFzkzyMBkviBBMUfiJfQD57l+j8krj/8IQsnXzwFwvAkC6Arx9NBujt/KegdCqnt6VLDJGm/8obU8VGaLGyIrTdRPpWICAo+qnyCflKX2yJB+W9ww8ba3zl2OZzOwgsbHTS4v3gvy7Zhmi+4T4WD0c9P11aLoMOb2XOL8wQVdN3q4vyfGka/0EMOu8NglcC2C/Lege56gCjEadX58RRd02ml68vQaYeFaSrTSFEjBXx27MMInpO215LV3FzZpe0fLh5jLeY+dlsr5JqVoVTlgtsFBbGnfdPdvP4CBIzALbtZdVXdyKEIucxr1pjIKkebinNMbrJnYxrScWgI84ImnhGR7bYsJ87V4QZeIu2thkT2Brup7c9kJjPsbbSpY2Xz2kV7KudrMFvQZ9npljS7pklTcVqbIbdzcfbCr3J0de5esInCsty0cirFCz08R6HmrtEi4ap2Oj6rZ7eQ4FmXScjIi0s/FdYTFTdPi3qzyPT9acLv7vHUWYjRm9O/t+DvOvWp+P6j9wXi/en4C1WNd5Gg4ficQPdgiNn6rrb5NLXOE1nS4s1i7sjsAc77znKc6uDRjXKZQhoWJAMjAPOAFDgAPZDCiiqfQ/srH+j3QNYqZelQSD9mHSjdN9+b4PEnIzMoARUJAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adam",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

