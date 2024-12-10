export const getPasswordStrength = (password: string): string => {
    if (!password) return 'Weak';
    if (password.length < 6) return 'Weak';
    if (password.length < 10) return 'Moderate';
    return 'Strong';
  };
  