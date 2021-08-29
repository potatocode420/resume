let AjaxCalls = {
    getMyContact() {
        let data = require("@/assets/data/data.json")
        data = data.contact
        return data
    },
    getMyEducation() {
        let data = require("@/assets/data/data.json");
        data = data.education
        return data
    },
    getMyProfile() {
        let data = require("@/assets/data/data.json");
        data = data.profile
        return data
    },
    getMyExperience() {
        let data = require("@/assets/data/data.json");
        data = data.experience
        return data
    },
    getMyProject() {
        let data = require("@/assets/data/data.json");
        data = data.projects
        return data
    },
}

export default AjaxCalls