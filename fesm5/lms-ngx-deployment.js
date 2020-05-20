import { NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Form = /** @class */ (function () {
    function Form() {
        this.type = 'dynamic';
        this.config = {};
        this.definition = [];
        this.relationsProps = [];
    }
    return Form;
}());
if (false) {
    /** @type {?} */
    Form.prototype.id;
    /** @type {?} */
    Form.prototype.name;
    /** @type {?} */
    Form.prototype.realm;
    /** @type {?} */
    Form.prototype.version;
    /** @type {?} */
    Form.prototype.type;
    /** @type {?} */
    Form.prototype.config;
    /** @type {?} */
    Form.prototype.definition;
    /** @type {?} */
    Form.prototype.relationsProps;
    /** @type {?} */
    Form.prototype.contextName;
    /** @type {?} */
    Form.prototype.hideInitialDisplay;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function Deployment() { }
if (false) {
    /** @type {?} */
    Deployment.prototype.id;
    /** @type {?} */
    Deployment.prototype.name;
    /** @type {?} */
    Deployment.prototype.description;
    /** @type {?} */
    Deployment.prototype.contacts;
    /** @type {?} */
    Deployment.prototype.active;
    /** @type {?} */
    Deployment.prototype.jurisdiction;
    /** @type {?} */
    Deployment.prototype.landingPage;
    /** @type {?} */
    Deployment.prototype.formStore;
    /** @type {?} */
    Deployment.prototype.workflowStore;
    /** @type {?} */
    Deployment.prototype.fhirStore;
    /** @type {?} */
    Deployment.prototype.processStore;
    /** @type {?} */
    Deployment.prototype.settingsStore;
    /** @type {?} */
    Deployment.prototype.fhircqrs;
    /** @type {?} */
    Deployment.prototype.documentTemplatesStore;
    /** @type {?} */
    Deployment.prototype.printerService;
    /** @type {?} */
    Deployment.prototype.commonDataApi;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Settings = /** @class */ (function () {
    function Settings() {
    }
    return Settings;
}());
if (false) {
    /** @type {?} */
    Settings.prototype.id;
    /** @type {?} */
    Settings.prototype.owner;
    /** @type {?} */
    Settings.prototype.deployment;
    /** @type {?} */
    Settings.prototype.value;
    /** @type {?} */
    Settings.prototype.templateSettings;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DocumentTemplate = /** @class */ (function () {
    function DocumentTemplate() {
    }
    return DocumentTemplate;
}());
if (false) {
    /** @type {?} */
    DocumentTemplate.prototype.id;
    /** @type {?} */
    DocumentTemplate.prototype.realm;
    /** @type {?} */
    DocumentTemplate.prototype.name;
    /** @type {?} */
    DocumentTemplate.prototype.version;
    /** @type {?} */
    DocumentTemplate.prototype.purpose;
    /** @type {?} */
    DocumentTemplate.prototype.definition;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BProcess = /** @class */ (function () {
    function BProcess(name, url, definition) {
        this.config = {};
        this.name = name;
        this.url = url;
        this.definition = definition;
    }
    return BProcess;
}());
if (false) {
    /** @type {?} */
    BProcess.prototype.id;
    /** @type {?} */
    BProcess.prototype.name;
    /** @type {?} */
    BProcess.prototype.url;
    /** @type {?} */
    BProcess.prototype.realm;
    /** @type {?} */
    BProcess.prototype.version;
    /** @type {?} */
    BProcess.prototype.type;
    /** @type {?} */
    BProcess.prototype.config;
    /** @type {?} */
    BProcess.prototype.definition;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LmsNgxDeploymentModule = /** @class */ (function () {
    function LmsNgxDeploymentModule() {
    }
    LmsNgxDeploymentModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [],
                    imports: [],
                    exports: [],
                },] }
    ];
    return LmsNgxDeploymentModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BProcess, DocumentTemplate, Form, LmsNgxDeploymentModule, Settings };
//# sourceMappingURL=lms-ngx-deployment.js.map
