// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file was generated by:
//   tools/json_schema_compiler/compiler.py.
// NOTE: The format of types has changed. 'FooType' is now
//   'chrome.speechRecognitionPrivate.FooType'.
// Please run the closure compiler before committing changes.
// See https://chromium.googlesource.com/chromium/src/+/main/docs/closure_compilation.md

/**
 * @fileoverview Externs generated from namespace: speechRecognitionPrivate
 * @externs
 */

/** @const */
chrome.speechRecognitionPrivate = {};

/**
 * @enum {string}
 */
chrome.speechRecognitionPrivate.SpeechRecognitionType = {
  ON_DEVICE: 'onDevice',
  NETWORK: 'network',
};

/**
 * @typedef {{
 *   clientId: (number|undefined)
 * }}
 */
chrome.speechRecognitionPrivate.SpeechRecognitionStopEvent;

/**
 * @typedef {{
 *   clientId: (number|undefined),
 *   transcript: string,
 *   isFinal: boolean
 * }}
 */
chrome.speechRecognitionPrivate.SpeechRecognitionResultEvent;

/**
 * @typedef {{
 *   clientId: (number|undefined),
 *   message: string
 * }}
 */
chrome.speechRecognitionPrivate.SpeechRecognitionErrorEvent;

/**
 * @typedef {{
 *   clientId: (number|undefined),
 *   locale: (string|undefined),
 *   interimResults: (boolean|undefined)
 * }}
 */
chrome.speechRecognitionPrivate.StartOptions;

/**
 * @typedef {{
 *   clientId: (number|undefined)
 * }}
 */
chrome.speechRecognitionPrivate.StopOptions;

/**
 * Starts listening to audio from the user. The callback is invoked when speech
 * recognition has started. If speech recognition is already active when calling
 * start(), the callback is run with an error.
 * @param {!chrome.speechRecognitionPrivate.StartOptions} options
 * @param {function(!chrome.speechRecognitionPrivate.SpeechRecognitionType): void}
 *     callback Called when speech recognition has begun listening to the user's
 *     audio. The callback's parameter specifies which type of speech
 *     recognition is being used.
 */
chrome.speechRecognitionPrivate.start = function(options, callback) {};

/**
 * Stops listening to audio from the user. The callback is invoked when speech
 * recognition has stopped. If speech recognition has already stopped when
 * calling stop(), the callback is run with an error.
 * @param {!chrome.speechRecognitionPrivate.StopOptions} options
 * @param {function(): void} callback Called when speech recognition has stopped
 *     listening to the user's audio.
 */
chrome.speechRecognitionPrivate.stop = function(options, callback) {};

/**
 * Fired when speech recognition stops.
 * @type {!ChromeEvent}
 */
chrome.speechRecognitionPrivate.onStop;

/**
 * Fired when a speech recognition result is returned.
 * @type {!ChromeEvent}
 */
chrome.speechRecognitionPrivate.onResult;

/**
 * Fired when a speech recognition error occurs.
 * @type {!ChromeEvent}
 */
chrome.speechRecognitionPrivate.onError;
