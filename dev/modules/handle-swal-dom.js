import { hexToRgb } from './utils';
import { removeClass, getTopMargin, fadeIn, show, addClass } from './handle-dom';
import defaultParams from './default-params';

var modalClass   = '.sweet-alert';
var overlayClass = '.sweet-overlay';
var inputHtml = `<fieldset>
                  <input type="text" tabIndex="3" />
                  <div class="sa-input-error"></div>
                </fieldset>`;

/*
 * Add modal + overlay to DOM
 */
import injectedHTML from './injected-html';

var sweetAlertInitialize = function() {
  var sweetWrap = document.createElement('div');
  sweetWrap.innerHTML = injectedHTML;

  // Append elements to body
  while (sweetWrap.firstChild) {
    document.body.appendChild(sweetWrap.firstChild);
  }
};

/*
 * Get DOM element of modal
 */
var getModal = function() {
  var $modal = document.querySelector(modalClass);

  if (!$modal) {
    sweetAlertInitialize();
    $modal = getModal();
  }

  return $modal;
};

/*
 * Build Input DOM
 */
var buildInput = function() {
  var $modal = getModal();
  var $inputContainer = $modal.querySelector('.sa-input-container');
  $inputContainer.innerHTML = inputHtml;
};

/*
 * Get DOM element of input (in modal)
 */
var getInput = function() {
  var $modal = getModal();
  if ($modal) {
    return $modal.querySelector('input');
  }
};

/*
 * Get DOM element of overlay
 */
var getOverlay = function() {
  return document.querySelector(overlayClass);
};

/*
 * Add box-shadow style to button (depending on its chosen bg-color)
 */
var setFocusStyle = function($button, bgColor) {
  // var rgbColor = hexToRgb(bgColor);
  // $button.style.boxShadow = '0 0 2px rgba(' + rgbColor + ', 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)';
};

/*
 * Animation when opening modal
 */
var openModal = function(callback) {
  var $modal = getModal();
  fadeIn(getOverlay(), 10);
  show($modal);
  addClass($modal, 'showSweetAlert');
  removeClass($modal, 'hideSweetAlert');

  window.previousActiveElement = document.activeElement;

  setTimeout(function () {
    addClass($modal, 'visible');
    var $okButton = $modal.querySelector('button.confirm');
    $okButton.focus();
  }, 100);

  var timer = $modal.getAttribute('data-timer');

  if (timer !== 'null' && timer !== '') {
    var timerCallback = callback;
    $modal.timeout = setTimeout(function() {
      var doneFunctionExists = ((timerCallback || null) && $modal.getAttribute('data-has-done-function') === 'true');
      if (doneFunctionExists) {
        timerCallback(null);
      }
      else {
        sweetAlert.close();
      }
    }, timer);
  }
};

/*
 * Reset the styling of the input
 * (for example if errors have been shown)
 */
var resetInput = function() {
  var $modal = getModal();
  var $input = getInput();

  removeClass($modal, 'show-input');
  if($input !== null) {
    $input.value = defaultParams.inputValue;
    $input.setAttribute('type', defaultParams.inputType);
    $input.setAttribute('placeholder', defaultParams.inputPlaceholder);
  }

  resetInputError();
};


var resetInputError = function(event) {
  // If press enter => ignore
  if (event && event.keyCode === 13) {
    return false;
  }

  var $modal = getModal();

  var $errorIcon = $modal.querySelector('.sa-input-error');
  if ($errorIcon !== null) {
    removeClass($errorIcon, 'show');
  }

  var $errorContainer = $modal.querySelector('.sa-error-container');
  removeClass($errorContainer, 'show');
};


/*
 * Set "margin-top"-property on modal based on its computed height
 */
var fixVerticalPosition = function() {
  var $modal = getModal();
  $modal.style.marginTop = getTopMargin(getModal());
};


export {
  sweetAlertInitialize,
  getModal,
  getOverlay,
  buildInput,
  getInput,
  setFocusStyle,
  openModal,
  resetInput,
  resetInputError,
  fixVerticalPosition
};
