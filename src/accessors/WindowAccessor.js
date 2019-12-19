/**
 * @summary when building the window object is not yet available, causing static errors
 * @param {*} window 
 */
class WindowAccessor {

  constructor(window) {
    this._window = window;
  }

  get() {
    if (typeof this._window === 'undefined')
      throw new Error('Trying to access window but window is not defined yet. Is this a build?');
    
    return this._window;
  }

  isDefined() {
    return this.get() !== undefined;
  }
}

export default WindowAccessor;