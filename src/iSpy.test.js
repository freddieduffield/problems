const spyOn = require('./iSpy');

const dummyFun = (n1, n2) => n1 + n2;

describe('iSpy', () => {
  describe('spyOn', () => {
    // callable in the same way the spied on function
    // .callCount() — returns the number of times spy has been called
    // .wasCalledWith(val) – returns true if spy was ever called with val, else returns false.
    // .returned(val) — returns true if spy ever returned val, else returns false

    it('should be callable in the same way the function argument', () => {
      const expected = dummyFun(2, 2);
      const spy = spyOn(dummyFun);
      const result = spy(2, 2);

      expect(result).toEqual(expected);
    });

    it('should have call count', () => {
      const spy = spyOn(dummyFun);
      spy(2, 2);

      expect(spy.callCount()).toEqual(1);
    });

    it('wasCalledWith', () => {
      const spy = spyOn(dummyFun);
      spy(2, 2);

      expect(spy.wasCalledWith(2)).toEqual(true);
      expect(spy.wasCalledWith(3)).toEqual(false);
    });

    it('returns', () => {
      const spy = spyOn(dummyFun);
      spy(2, 2);

      expect(spy.returned(4)).toEqual(true);
      expect(spy.returned(5)).toEqual(false);
    });
  });
});
