export class HospitalInstallation {
    readonly id?: string;
    readonly name?: string;
    readonly createdAt?: string;
    readonly updatedAt?: string;
    readonly deletedAt?: string;

    constructor(props?: Partial<HospitalInstallation>) {
        Object.assign(this, props);
    }
}