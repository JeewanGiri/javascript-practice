function expect(actual) {
  return {
    toBe(expected) {
      if (actual === expected) {
        return true;
      } else {
        throw new Error("not equal");
      }
    },
    notToBe(expected) {
      if (actual !== expected) {
        return true;
      } else {
        throw new Error("equal");
      }
    },
  };
}
