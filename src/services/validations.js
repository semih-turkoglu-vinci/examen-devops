// TODO: Refactor validation function to follow the defined validations rules
const isValid = (gamertag) => {
    if (gamertag === undefined) {
        return false;
    }
    if (gamertag.length < 8) {
        return 'Invalid - gamertag length must be at least 8 characters';
    }
    if (
        !(
            gamertag.includes('&') ||
            gamertag.includes('$') ||
            gamertag.includes('!') ||
            gamertag.includes('è') ||
            gamertag.includes('§') ||
            gamertag.includes('à')
        )
    ) {
        return 'Invalid - gamertag must contain at least a special character';
    }
    if (
        !(
            gamertag.includes('1') ||
            gamertag.includes('2') ||
            gamertag.includes('3') ||
            gamertag.includes('4') ||
            gamertag.includes('5') ||
            gamertag.includes('6') ||
            gamertag.includes('7') ||
            gamertag.includes('8') ||
            gamertag.includes('9') ||
            gamertag.includes('0')
        )
    ) {
        return 'Invalid - gamertag must contain at least a number';
    } else {
        return true;
    }
};

exports.isValid = isValid;
