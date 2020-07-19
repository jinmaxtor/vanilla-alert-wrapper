class ToastrAlertComponent {
    toastr;

    constructor(configuration) {
        let scripts = [...document.scripts];
        let toastrScript = scripts.find(script =>
            script.src.includes('toastr.js') ||
            script.src.includes('toastr.min.js')
        );

        if (!toastrScript || !window.toastr) {
            throw 'No se cargo el plugin toastr js';
        }

        if (!configuration) {
            configuration = {
                closeButton: true,
                debug: false,
                newestOnTop: false, // las alertas se apilan
                progressBar: true,
                showDuration: 300,
                hideDuration: 1000,
                timeOut: 5000, // 0 -> indefinido
                extendedTimeOut: 1000,
                showEasing: "swing",
                hideEasing: "linear",
                showMethod: "fadeIn",
                hideMethod: "fadeOut"
            }
        }

        this.toastr = window.toastr;
        this.toastr.options = configuration;
    }

    showSuccessMessage(title, message) {
        this.toastr.success(title, message);
    }

    showErrorMessage(title, message) {
        this.toastr.error(title, message);
    }

    showWarningMessage(title, message) {
        this.toastr.warning(title, message);
    }

    showInfoMessage(title, message) {
        this.toastr.info(title, message);
    }

    showPrimaryMessage(title, message) {
        const customToastrPrimary = {
            type: 'primary',
            iconClass: 'icon-success',
            message: message,
            optionsOverride: undefined,
            title: title
        }
        this.toastr.custom(customToastrPrimary);
    }

    showSecondaryMessage(title, message) {
        const customToastrSecondary = {
            type: 'secondary',
            iconClass: 'icon-success',
            message: message,
            optionsOverride: undefined,
            title: title
        }
        this.toastr.custom(customToastrSecondary);
    }

    showLightMessage(title, message) {
        const customToastrLight = {
            type: 'light',
            iconClass: 'icon-success',
            message: message,
            optionsOverride: undefined,
            title: title
        }
        this.toastr.custom(customToastrLight);
    }

    showDarkMessage(title, message) {
        const customToastrDark = {
            type: 'dark',
            iconClass: 'icon-success',
            message: message,
            optionsOverride: undefined,
            title: title
        }
        this.toastr.custom(customToastrDark);
        // console.error(`El método ${this.showDarkMessage.name} en la clase ${this.constructor.name} no esta implementado`);
    }
}