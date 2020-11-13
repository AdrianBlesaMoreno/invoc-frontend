import { DashpaneType } from './dashpane-type.enum';

export interface Dashpane {
    id: number;
    column?: number;
    size: {
        width: number;
        height: number;
    };
    type: DashpaneType;
    config?: any;
}
