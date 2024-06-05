// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file was generated by:
//   tools/json_schema_compiler/compiler.py.
// NOTE: The format of types has changed. 'FooType' is now
//   'chrome.settingsPrivate.FooType'.
// Please run the closure compiler before committing changes.
// See https://chromium.googlesource.com/chromium/src/+/main/docs/closure_compilation.md

/**
 * @fileoverview Externs generated from namespace: settingsPrivate
 * @externs
 */

/** @const */
chrome.settingsPrivate = {};

/**
 * @enum {string}
 */
chrome.settingsPrivate.PrefType = {
  BOOLEAN: 'BOOLEAN',
  NUMBER: 'NUMBER',
  STRING: 'STRING',
  URL: 'URL',
  LIST: 'LIST',
  DICTIONARY: 'DICTIONARY',
};

/**
 * @enum {string}
 */
chrome.settingsPrivate.ControlledBy = {
  DEVICE_POLICY: 'DEVICE_POLICY',
  USER_POLICY: 'USER_POLICY',
  OWNER: 'OWNER',
  PRIMARY_USER: 'PRIMARY_USER',
  EXTENSION: 'EXTENSION',
  PARENT: 'PARENT',
  CHILD_RESTRICTION: 'CHILD_RESTRICTION',
};

/**
 * @enum {string}
 */
chrome.settingsPrivate.Enforcement = {
  ENFORCED: 'ENFORCED',
  RECOMMENDED: 'RECOMMENDED',
  PARENT_SUPERVISED: 'PARENT_SUPERVISED',
};

/**
 * @typedef {{
 *   key: string,
 *   type: !chrome.settingsPrivate.PrefType,
 *   value: (*|undefined),
 *   controlledBy: (!chrome.settingsPrivate.ControlledBy|undefined),
 *   controlledByName: (string|undefined),
 *   enforcement: (!chrome.settingsPrivate.Enforcement|undefined),
 *   recommendedValue: (*|undefined),
 *   userSelectableValues: (!Array<*>|undefined),
 *   userControlDisabled: (boolean|undefined),
 *   extensionId: (string|undefined),
 *   extensionCanBeDisabled: (boolean|undefined)
 * }}
 */
chrome.settingsPrivate.PrefObject;

/**
 * Sets a pref value.
 * @param {string} name The name of the pref.
 * @param {*} value The new value of the pref.
 * @param {string=} pageId An optional user metrics identifier.
 * @param {function(boolean): void=} callback The callback for whether the pref
 *     was set or not.
 */
chrome.settingsPrivate.setPref = function(name, value, pageId, callback) {};

/**
 * Gets an array of all the prefs.
 * @param {function(!Array<!chrome.settingsPrivate.PrefObject>): void} callback
 */
chrome.settingsPrivate.getAllPrefs = function(callback) {};

/**
 * Gets the value of a specific pref.
 * @param {string} name
 * @param {function(!chrome.settingsPrivate.PrefObject): void} callback
 */
chrome.settingsPrivate.getPref = function(name, callback) {};

/**
 * Gets the default page zoom factor. Possible values are currently between 0.25
 * and 5. For a full list, see zoom::kPresetZoomFactors.
 * @param {function(number): void} callback
 */
chrome.settingsPrivate.getDefaultZoom = function(callback) {};

/**
 * Sets the page zoom factor. Must be less than 0.001 different than a value in
 * zoom::kPresetZoomFactors.
 * @param {number} zoom
 * @param {function(boolean): void=} callback
 */
chrome.settingsPrivate.setDefaultZoom = function(zoom, callback) {};

/**
 * <p>Fired when a set of prefs has changed.</p><p>|prefs| The prefs that
 * changed.</p>
 * @type {!ChromeEvent}
 */
chrome.settingsPrivate.onPrefsChanged;
