// TODO: Refactor validation function to follow the defined validations rules
const isValid = (gamertag) => {
    if (gamertag === undefined) {
        return false;
    }
    if (gamertag.length < 8) {
        return 'Invalid - gamertag length must be at least 8 characters';
    }
    return true;
};

exports.isValid = isValid;
