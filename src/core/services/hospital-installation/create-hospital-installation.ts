import type { HospitalInstallationRepository } from "../../interfaces";
import type { HospitalInstallationRequest } from "../../schemas/requests";

export class CreateHospitalInstallation {
    private repo: HospitalInstallationRepository;
    constructor(repo: HospitalInstallationRepository) {
        this.repo = repo;
    }

    async execute(request: HospitalInstallationRequest, signal?: AbortSignal): Promise<void> {
        return this.repo.Create(request, signal);
    }
}