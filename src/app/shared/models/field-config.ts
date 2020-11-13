export interface FieldConfig {
    field: string;
    nombre: string;
    sort: boolean;
    filter: boolean;
    permissions?: string[];
    type?: string;
}
