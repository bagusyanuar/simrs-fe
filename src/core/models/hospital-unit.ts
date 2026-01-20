import type { HospitalInstallation } from "./hospital-installation";

export class HospitalUnit {
    readonly id?: string;
    readonly name?: string;
    readonly createdAt?: string;
    readonly updatedAt?: string;
    readonly deletedAt?: string;
    readonly installation?: HospitalInstallation;

    constructor(props?: Partial<HospitalUnit>) {
        Object.assign(this, props);
    }
}