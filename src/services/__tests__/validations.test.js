// TODO: Create tests suite for validation function
const { isValid } = require('../validations');

describe('validations tests suites - isValid', () => {
    test('should return true or false as the function is defined', () => {
        const result = isValid();
        expect(result).toBe(false);
    });

    test('should return true or false as the function is defined', () => {
        const result = isValid('gamertag');
        expect(result).toBe(true);
    });

    test('should return "Invalid - gamertag length must be at least 8 characters"', () => {
        const result = isValid('short');
        expect(result).toBe(
            'Invalid - gamertag length must be at least 8 characters'
        );
    });

    
});
