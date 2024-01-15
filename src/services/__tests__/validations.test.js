// TODO: Create tests suite for validation function
const { isValid } = require('../validations');

describe('validations tests suites - isValid', () => {
    test('should return true or false as the function is defined', () => {
        const result = isValid();
        expect(result).toBe(false);
    });

    test('should return "Invalid - gamertag length must be at least 8 characters"', () => {
        const result = isValid('short');
        expect(result).toBe(
            'Invalid - gamertag length must be at least 8 characters'
        );
    });

    test('should return “Invalid - gamertag must contain at least a special character”', () => {
        const result = isValid('gamertag');
        expect(result).toBe(
            'Invalid - gamertag must contain at least a special character'
        );
    });

    test('should return “Invalid - gamertag must contain at least a number”', () => {
        const result = isValid('gamertag$');
        expect(result).toBe(
            'Invalid - gamertag must contain at least a special character'
        );
    });
    test('should return true if the gamertag is valid', () => {
        const result = isValid('gamertag&1');
        expect(result).toBe(true);
    });
});
