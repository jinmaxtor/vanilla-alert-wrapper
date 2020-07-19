class SweetAlertComponent {

    constructor(configuration) {
        const scripts = [...document.scripts];
        const sweetAlertScript = scripts.find(script =>
            script.src.includes('sweetalert2.js') ||
            script.src.includes('sweetalert2.min.js')
        );

        if (!sweetAlertScript || !window.Swal) {
            throw 'No se cargo el plugin sweetalert2 js';
        }

        if (!configuration) {
            configuration = {
                title: 'Title',
                icon: 'info',
                html: 'Html Text Content',
                allowOutsideClick: false, // true => permite cerrar la modal dando click fuera del mismo.
                showCloseButton: true,
                showCancelButton: false,
                focusConfirm: false,
                confirmButtonText: 'OK',
                confirmButtonAriaLabel: 'Acept',
                cancelButtonText: 'Cancel',
                cancelButtonAriaLabel: 'Cancel'
            }
        }

        this.sweetalert = window.Swal;
        this.configuration = configuration;
    }

    showSuccessMessage(title, message) {
        this.configuration.icon = 'success';
        this.configuration.title = title;
        this.configuration.html = message;
        this.sweetalert.fire(this.configuration);
    }

    showErrorMessage(title, message) {
        this.configuration.icon = 'success';
        this.configuration.title = title;
        this.configuration.html = message;
        this.sweetalert.fire(this.configuration);
    }

    showWarningMessage(title, message) {
        this.configuration.icon = 'warning';
        this.configuration.title = title;
        this.configuration.html = message;
        this.sweetalert.fire(this.configuration);
    }

    showInfoMessage(title, message) {
        this.configuration.icon = 'info';
        this.configuration.title = title;
        this.configuration.html = message;
        this.sweetalert.fire(this.configuration);
    }

    showPrimaryMessage(title, message) {
        this.configuration.icon = 'question';
        this.configuration.title = title;
        this.configuration.html = message;
        this.sweetalert.fire(this.configuration);
    }

    showSecondaryMessage(title, message) {
        this.configuration.icon = '';
        this.configuration.title = title;
        this.configuration.html = message;
        this.sweetalert.fire(this.configuration);
    }

    showLightMessage(title, message) {
        this.configuration.icon = '';
        this.configuration.title = title;
        this.configuration.html = message;
        this.sweetalert.fire(this.configuration);
    }

    showDarkMessage(title, message) {
        this.configuration.icon = '';
        this.configuration.title = title;
        this.configuration.html = message;
        this.sweetalert.fire(this.configuration);
        // console.error(`El método ${this.showDarkMessage.name} en la clase ${this.constructor.name} no esta implementado`);
    }
}