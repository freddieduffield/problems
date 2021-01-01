const { rot13, createEncryptedDictionary, checkUpperCase } = require('./rot13.js');

describe('rot13.js', () => {
  describe('createEncryptedDictionary', () => {
    it('returns an dictionary encrypted by 13', () => {
      const expected = {
        a: 'n',
        b: 'o',
        c: 'p',
        d: 'q',
        e: 'r',
        f: 's',
        g: 't',
        h: 'u',
        i: 'v',
        j: 'w',
        k: 'x',
        l: 'y',
        m: 'z',
        n: 'a',
        o: 'b',
        p: 'c',
        q: 'd',
        r: 'e',
        s: 'f',
        t: 'g',
        u: 'h',
        v: 'i',
        w: 'j',
        x: 'k',
        y: 'l',
        z: 'm',
      };

      const result = createEncryptedDictionary(13);

      expect(result).toEqual(expected);
    });
  });

  describe('rot13', () => {
    it('ciphers normal string, no special charaters', () => {
      const result = rot13('test');

      expect(result).toEqual('grfg');
    });

    it('ciphers string with capital letters', () => {
      const result = rot13('Test');

      expect(result).toEqual('Grfg');
    });

    it('cipher string with special characters', () => {
      const result = rot13('Te$t');

      expect(result).toEqual('Gr$g');
    })
  });

  describe('checkUpperCase', () => {
    it('returns true if letter uppercase', () => {
      expect(checkUpperCase('T')).toEqual(true);
    });

    it('returns false if letter lowercase', () => {
      expect(checkUpperCase('t')).toEqual(false);
    });
  })
});
