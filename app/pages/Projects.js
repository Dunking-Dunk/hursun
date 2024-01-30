import Page from "../classes/Page.js";

export default class Projects extends Page {
    constructor() {
        super({
            element: '.projects',
            elements: {
                wrapper: '.projects__wrapper'
            },
            id: 'projects'
        })

    }   


}