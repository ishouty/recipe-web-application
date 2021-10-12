
jest.setTimeout(10000); // in milliseconds

window.ResizeObserver =
window.ResizeObserver ||
jest.fn().mockImplementation(() => ({
  disconnect: jest.fn(),
  observe: jest.fn(),
  unobserve: jest.fn(),
}));

var localStorageMock = (function() {
  var store = {};

  return {
    getItem: function(key) {
        return store[key] || null;
    },
    setItem: function(key, value) {
        store[key] = value.toString();
    },
    clear: function() {
        store = {};
    }
  }; 
})();

Object.defineProperty(window, 'localStorage', {
 value: localStorageMock
});