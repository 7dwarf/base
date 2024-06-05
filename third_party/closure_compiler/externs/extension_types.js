// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file was generated by:
//   tools/json_schema_compiler/compiler.py.
// NOTE: The format of types has changed. 'FooType' is now
//   'chrome.extensionTypes.FooType'.
// Please run the closure compiler before committing changes.
// See https://chromium.googlesource.com/chromium/src/+/main/docs/closure_compilation.md

/**
 * @fileoverview Externs generated from namespace: extensionTypes
 * @externs
 */

/** @const */
chrome.extensionTypes = {};

/**
 * @enum {string}
 * @see https://developer.chrome.com/extensions/extensionTypes#type-ImageFormat
 */
chrome.extensionTypes.ImageFormat = {
  JPEG: 'jpeg',
  PNG: 'png',
};

/**
 * Details about the format and quality of an image.
 * @typedef {{
 *   format: (!chrome.extensionTypes.ImageFormat|undefined),
 *   quality: (number|undefined)
 * }}
 * @see https://developer.chrome.com/extensions/extensionTypes#type-ImageDetails
 */
chrome.extensionTypes.ImageDetails;

/**
 * @enum {string}
 * @see https://developer.chrome.com/extensions/extensionTypes#type-RunAt
 */
chrome.extensionTypes.RunAt = {
  DOCUMENT_START: 'document_start',
  DOCUMENT_END: 'document_end',
  DOCUMENT_IDLE: 'document_idle',
};

/**
 * @enum {string}
 * @see https://developer.chrome.com/extensions/extensionTypes#type-CSSOrigin
 */
chrome.extensionTypes.CSSOrigin = {
  AUTHOR: 'author',
  USER: 'user',
};

/**
 * Details of the script or CSS to inject. Either the code or the file property must be set, but both may not be set at the same time.
 * @typedef {{
 *   code: (string|undefined),
 *   file: (string|undefined),
 *   allFrames: (boolean|undefined),
 *   frameId: (number|undefined),
 *   matchAboutBlank: (boolean|undefined),
 *   runAt: (!chrome.extensionTypes.RunAt|undefined),
 *   cssOrigin: (!chrome.extensionTypes.CSSOrigin|undefined)
 * }}
 * @see https://developer.chrome.com/extensions/extensionTypes#type-InjectDetails
 */
chrome.extensionTypes.InjectDetails;

/**
 * Details of the CSS to remove. Either the code or the file property must be set, but both may not be set at the same time.
 * @typedef {{
 *   code: (string|undefined),
 *   file: (string|undefined),
 *   allFrames: (boolean|undefined),
 *   frameId: (number|undefined),
 *   matchAboutBlank: (boolean|undefined),
 *   cssOrigin: (!chrome.extensionTypes.CSSOrigin|undefined)
 * }}
 * @see https://developer.chrome.com/extensions/extensionTypes#type-DeleteInjectionDetails
 */
chrome.extensionTypes.DeleteInjectionDetails;

/**
 * @enum {string}
 * @see https://developer.chrome.com/extensions/extensionTypes#type-FrameType
 */
chrome.extensionTypes.FrameType = {
  OUTERMOST_FRAME: 'outermost_frame',
  FENCED_FRAME: 'fenced_frame',
  SUB_FRAME: 'sub_frame',
};

/**
 * @enum {string}
 * @see https://developer.chrome.com/extensions/extensionTypes#type-DocumentLifecycle
 */
chrome.extensionTypes.DocumentLifecycle = {
  PRERENDER: 'prerender',
  ACTIVE: 'active',
  CACHED: 'cached',
  PENDING_DELETION: 'pending_deletion',
};

/**
 * @enum {string}
 * @see https://developer.chrome.com/extensions/extensionTypes#type-ExecutionWorld
 */
chrome.extensionTypes.ExecutionWorld = {
  ISOLATED: 'ISOLATED',
  MAIN: 'MAIN',
};
