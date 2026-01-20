import type { HospitalInstallationRepository } from "../../interfaces";
import type { HospitalInstallation } from "../../models";

export class GetHospitalInstallationByID {
    private repo: HospitalInstallationRepository;
    constructor(repo: HospitalInstallationRepository) {
        this.repo = repo
    }

    async execute(id: string, signal?: AbortSignal): Promise<HospitalInstallation | null> {
        return this.repo.FindByID(id, signal);
    }
}