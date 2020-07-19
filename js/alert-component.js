class AlertComponent {
    alertComponent;

    constructor(alertComponent) {
        this.alertComponent = alertComponent;
    }

    success(title, message) {
        this.alertComponent.showSuccessMessage(title, message);
    }

    error(title, message) {
        this.alertComponent.showErrorMessage(title, message)
    }

    warning(title, message) {
        this.alertComponent.showWarningMessage(title, message);
    }

    info(title, message) {
        this.alertComponent.showInfoMessage(title, message);
    }

    primary(title, message) {
        this.alertComponent.showPrimaryMessage(title, message);
    }

    secondary(title, message) {
        this.alertComponent.showSecondaryMessage(title, message);
    }

    light(title, message) {
        this.alertComponent.showLightMessage(title, message);
    }

    dark(title, message) {
        this.alertComponent.showDarkMessage(title, message);
    }
}