
class Theme {
    constructor() {
        this.themeTypes = {
            LIGHT: 'light-theme',
            DARK: 'dark-theme',
        }

      this.defaultSettings = {
        theme: this.themeTypes.LIGHT,
      }

      this.refs = {
        themeSwitchCtrl: document.querySelector('input.js-switch-input'),
        themeCntr: document.querySelector('body'),
      }

      this.init();
      this.handle();
    }

    init() {
        this.setDefaultSettings();
        this.setTheme();
    }

    handle() {
        this.refs.themeSwitchCtrl.addEventListener('change', e => this.changeTheme(e));
    }

    setDefaultSettings() {
        if (!localStorage.getItem('settings')) {
            localStorage.setItem('settings', JSON.stringify(this.defaultSettings));
        }
    }


    setTheme() {
        const settings = JSON.parse( localStorage.getItem('settings'));

        if (settings.theme === this.themeTypes.LIGHT) {
            this.refs.themeCntr.classList.add(this.themeTypes.LIGHT);
            this.refs.themeSwitchCtrl.checked = false;
        }

        if (settings.theme === this.themeTypes.DARK) {
            this.refs.themeCntr.classList.add(this.themeTypes.DARK);
            this.refs.themeSwitchCtrl.checked = true;
        }
    }

    changeTheme(evt) {
        const settings = JSON.parse( localStorage.getItem('settings'));

        if (evt.target.checked) {
            if(this.refs.themeCntr.classList.contains(this.themeTypes.LIGHT)) {
                this.refs.themeCntr.classList.remove(this.themeTypes.LIGHT);
            }

            this.refs.themeCntr.classList.add(this.themeTypes.DARK);
            settings.theme = this.themeTypes.DARK;
        } else {
            if(this.refs.themeCntr.classList.contains(this.themeTypes.DARK)) {
                this.refs.themeCntr.classList.remove(this.themeTypes.DARK);
            }

            this.refs.themeCntr.classList.add(this.themeTypes.LIGHT);
            settings.theme = this.themeTypes.LIGHT;
        }

        localStorage.setItem('settings', JSON.stringify(settings));
    }

}

new Theme();
