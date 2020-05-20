export interface Deployment {
    id: string;
    name: string;
    description: string;
    contacts: string[];
    active: boolean;
    jurisdiction: any;
    landingPage: string;
    formStore: string;
    workflowStore: string;
    fhirStore: string;
    processStore: string;
    settingsStore: string;
    fhircqrs: string;
    documentTemplatesStore: string;
    printerService: string;
    commonDataApi: string;
}
