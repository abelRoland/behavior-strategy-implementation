function digital_root(n) {
    let result  = (n === 0) ? 0 : n % 9 || 9;
    return result;
  }