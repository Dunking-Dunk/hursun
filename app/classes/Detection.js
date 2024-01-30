class Detection {
    isPhone() {
        this.isPhoneCheck = document.documentElement.classList.contains('phone');
        return this.isPhoneCheck
    }
    
    isDesktop() {
        this.DesktopCheck = document.documentElement.classList.contains('desktop')

        return this.DesktopCheck
    }


    isTablet() {
        if (this.TabletChecked) {
            this.TabletChecked = true

            this.TabletCheck = document.documentElement.classList.contains('tablet')
        }

        return this.TabletCheck
    }

}

const DetectionManager = new Detection()

export default DetectionManager