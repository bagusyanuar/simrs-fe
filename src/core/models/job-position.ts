export class JobPosition {
    readonly id?: string;
    readonly name?: string;
    readonly code?: string;
    readonly description?: string;
    readonly isMedical?: boolean;
    readonly createdAt?: string
    readonly updatedAt?: string
    readonly deletedAt?: string

    constructor(props?: Partial<JobPosition>) {
        Object.assign(this, props)
    }
}