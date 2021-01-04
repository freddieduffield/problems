module.exports = function spyOn(func) {
  let callCount = 0;
  let calls = [];
  let returns;

  const spyFunc = (...args) => {
    callCount++;
    calls.push(...args);
    returns = func(...args);
    return returns;
  };

  spyFunc.callCount = () => callCount;
  spyFunc.wasCalledWith = (val) => calls.includes(val);
  spyFunc.returned = (val) => returns === val;

  return spyFunc;
};
