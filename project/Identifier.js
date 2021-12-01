class Identifier {
  validateIdentifier = (s) => {
    let achar;
    let valid_id = false;
    achar = s[0];
    valid_id = valid_s(achar);
    if (s.length > 1) {
      achar = s[1];
      let i = 1;
      while (i < s.length - 1) {
        achar = s[i];
        if (!valid_f(achar)) valid_id = false;
        i++;
      }
    }

    return valid_id && s.length >= 1 && s.length < 6;
  };

  valid_s = (ch) => {
    return (ch >= "A" && ch <= "Z") || (ch >= "a" && ch <= "z");
  };

  valid_f = (ch) => {
    return (
      (ch >= "A" && ch <= "Z") ||
      (ch >= "a" && ch <= "z") ||
      (ch >= "0" && ch <= "9")
    );
  };
}
