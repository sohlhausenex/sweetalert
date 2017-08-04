var injectedHTML =

  // Dark overlay
  `<div class="sweet-overlay" tabIndex="-1"></div>` +

  // Modal
  `<div class="sweet-alert uscis-alert">` +

    // Error icon
    `<div class="sa-icon sa-error">
      <span class="sa-x-mark">
        <span class="sa-line sa-left"></span>
        <span class="sa-line sa-right"></span>
      </span>
    </div>` +

    // Warning icon
    `<div class="sa-icon sa-warning">
      <span class="sa-body"></span>
      <span class="sa-dot"></span>
    </div>` +

    // Info icon
    `<div class="sa-icon sa-info"></div>` +

    // Success icon
    `<div class="sa-icon sa-success">
      <span class="sa-line sa-tip"></span>
      <span class="sa-line sa-long"></span>

      <div class="sa-placeholder"></div>
      <div class="sa-fix"></div>
    </div>` +

    `<div class="sa-icon sa-custom"></div>` +

    // Title, text and input
    `<h2 class="uscis-alert-title">Title</h2>
    <p class="uscis-alert-content">Text</p>
    <fieldset>
      <input type="text" tabIndex="3" />
      <div class="sa-input-error"></div>
    </fieldset>` +

    // Input errors
    `<div class="sa-error-container">
    </div>` +

    // Cancel and confirm buttons
    `<div class="sa-button-container uscis-alert-buttons">
      <button class="cancel uscis-button uscis-button-clear" tabIndex="2">Cancel</button>
      <div class="sa-confirm-button-container">
        <button class="confirm uscis-button uscis-button-blue" tabIndex="1">OK</button>` + 
        // Loading animation
        `<div class="la-ball-fall">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>` +

  // End of modal
  `</div>`;

export default injectedHTML;
