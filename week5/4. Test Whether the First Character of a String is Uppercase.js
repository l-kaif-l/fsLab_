function isFirstCharUppercase(str) {
    return /^[A-Z]/.test(str);
}

// Example usage:
console.log(isFirstCharUppercase("Hello World")); // Output: true
console.log(isFirstCharUppercase("hello World")); // Output: false