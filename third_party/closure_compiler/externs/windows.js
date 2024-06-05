// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file was generated by:
//   tools/json_schema_compiler/compiler.py.
// NOTE: The format of types has changed. 'FooType' is now
//   'chrome.windows.FooType'.
// Please run the closure compiler before committing changes.
// See https://chromium.googlesource.com/chromium/src/+/main/docs/closure_compilation.md

// TODO(crbug.com/543822): Disable automatic extern generation until fixed.
// s/chrome.windows.tabs.Tab/chrome.tabs.Tab/

/**
 * @fileoverview Externs generated from namespace: windows
 * @externs
 */

/** @const */
chrome.windows = {};

/**
 * @enum {string}
 * @see https://developer.chrome.com/extensions/windows#type-WindowType
 */
chrome.windows.WindowType = {
  NORMAL: 'normal',
  POPUP: 'popup',
  PANEL: 'panel',
  APP: 'app',
  DEVTOOLS: 'devtools',
};

/**
 * @enum {string}
 * @see https://developer.chrome.com/extensions/windows#type-WindowState
 */
chrome.windows.WindowState = {
  NORMAL: 'normal',
  MINIMIZED: 'minimized',
  MAXIMIZED: 'maximized',
  FULLSCREEN: 'fullscreen',
  LOCKED_FULLSCREEN: 'locked-fullscreen',
};

/**
 * @typedef {{
 *   id: (number|undefined),
 *   focused: boolean,
 *   top: (number|undefined),
 *   left: (number|undefined),
 *   width: (number|undefined),
 *   height: (number|undefined),
 *   tabs: (!Array<!chrome.tabs.Tab>|undefined),
 *   incognito: boolean,
 *   type: (!chrome.windows.WindowType|undefined),
 *   state: (!chrome.windows.WindowState|undefined),
 *   alwaysOnTop: boolean,
 *   sessionId: (string|undefined)
 * }}
 * @see https://developer.chrome.com/extensions/windows#type-Window
 */
chrome.windows.Window;

/**
 * @enum {string}
 * @see https://developer.chrome.com/extensions/windows#type-CreateType
 */
chrome.windows.CreateType = {
  NORMAL: 'normal',
  POPUP: 'popup',
  PANEL: 'panel',
};

/**
 * @typedef {{
 *   populate: (boolean|undefined),
 *   windowTypes: (!Array<!chrome.windows.WindowType>|undefined)
 * }}
 * @see https://developer.chrome.com/extensions/windows#type-QueryOptions
 */
chrome.windows.QueryOptions;

/**
 * The windowId value that represents the absence of a Chrome browser window.
 * @type {number}
 * @see https://developer.chrome.com/extensions/windows#type-WINDOW_ID_NONE
 */
chrome.windows.WINDOW_ID_NONE;

/**
 * The windowId value that represents the <a href='windows#current-window'>current window</a>.
 * @type {number}
 * @see https://developer.chrome.com/extensions/windows#type-WINDOW_ID_CURRENT
 */
chrome.windows.WINDOW_ID_CURRENT;

/**
 * Gets details about a window.
 * @param {number} windowId
 * @param {?chrome.windows.QueryOptions|undefined} queryOptions
 * @param {function(!chrome.windows.Window): void} callback
 * @see https://developer.chrome.com/extensions/windows#method-get
 */
chrome.windows.get = function(windowId, queryOptions, callback) {};

/**
 * Gets the <a href='#current-window'>current window</a>.
 * @param {?chrome.windows.QueryOptions|undefined} queryOptions
 * @param {function(!chrome.windows.Window): void} callback
 * @see https://developer.chrome.com/extensions/windows#method-getCurrent
 */
chrome.windows.getCurrent = function(queryOptions, callback) {};

/**
 * Gets the window that was most recently focused &mdash; typically the window
 * 'on top'.
 * @param {?chrome.windows.QueryOptions|undefined} queryOptions
 * @param {function(!chrome.windows.Window): void} callback
 * @see https://developer.chrome.com/extensions/windows#method-getLastFocused
 */
chrome.windows.getLastFocused = function(queryOptions, callback) {};

/**
 * Gets all windows.
 * @param {?chrome.windows.QueryOptions|undefined} queryOptions
 * @param {function(!Array<!chrome.windows.Window>): void} callback
 * @see https://developer.chrome.com/extensions/windows#method-getAll
 */
chrome.windows.getAll = function(queryOptions, callback) {};

/**
 * Creates (opens) a new browser window with any optional sizing, position, or
 * default URL provided.
 * @param {{
 *   url: ((string|!Array<string>)|undefined),
 *   tabId: (number|undefined),
 *   left: (number|undefined),
 *   top: (number|undefined),
 *   width: (number|undefined),
 *   height: (number|undefined),
 *   focused: (boolean|undefined),
 *   incognito: (boolean|undefined),
 *   type: (!chrome.windows.CreateType|undefined),
 *   state: (!chrome.windows.WindowState|undefined),
 *   setSelfAsOpener: (boolean|undefined)
 * }=} createData
 * @param {function((!chrome.windows.Window|undefined)): void=} callback
 * @see https://developer.chrome.com/extensions/windows#method-create
 */
chrome.windows.create = function(createData, callback) {};

/**
 * Updates the properties of a window. Specify only the properties that to be
 * changed; unspecified properties are unchanged.
 * @param {number} windowId
 * @param {{
 *   left: (number|undefined),
 *   top: (number|undefined),
 *   width: (number|undefined),
 *   height: (number|undefined),
 *   focused: (boolean|undefined),
 *   drawAttention: (boolean|undefined),
 *   state: (!chrome.windows.WindowState|undefined)
 * }} updateInfo
 * @param {function(!chrome.windows.Window): void=} callback
 * @see https://developer.chrome.com/extensions/windows#method-update
 */
chrome.windows.update = function(windowId, updateInfo, callback) {};

/**
 * Removes (closes) a window and all the tabs inside it.
 * @param {number} windowId
 * @param {function(): void=} callback
 * @see https://developer.chrome.com/extensions/windows#method-remove
 */
chrome.windows.remove = function(windowId, callback) {};

/**
 * Fired when a window is created.
 * @type {!ChromeEvent}
 * @see https://developer.chrome.com/extensions/windows#event-onCreated
 */
chrome.windows.onCreated;

/**
 * Fired when a window is removed (closed).
 * @type {!ChromeEvent}
 * @see https://developer.chrome.com/extensions/windows#event-onRemoved
 */
chrome.windows.onRemoved;

/**
 * Fired when the currently focused window changes. Returns
 * <code>chrome.windows.WINDOW_ID_NONE</code> if all Chrome windows have lost
 * focus. <b>Note:</b> On some Linux window managers,
 * <code>WINDOW_ID_NONE</code> is always sent immediately preceding a switch
 * from one Chrome window to another.
 * @type {!ChromeEvent}
 * @see https://developer.chrome.com/extensions/windows#event-onFocusChanged
 */
chrome.windows.onFocusChanged;

/**
 * Fired when a window has been resized; this event is only dispatched when the
 * new bounds are committed, and not for in-progress changes.
 * @type {!ChromeEvent}
 * @see https://developer.chrome.com/extensions/windows#event-onBoundsChanged
 */
chrome.windows.onBoundsChanged;
