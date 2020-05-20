export declare class Form {
    id: string;
    name: string;
    realm: string;
    version: number;
    type: 'hard' | 'dynamic' | 'stepper';
    config?: any;
    definition: any[];
    relationsProps?: any[];
    contextName?: string;
    hideInitialDisplay?: boolean;
}
