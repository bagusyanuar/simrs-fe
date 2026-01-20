import type { HospitalInstallationRepository } from '../../interfaces'
import type { HospitalInstallation } from '../../models';
import type { HospitalInstallationQuery } from '../../schemas/queries';
import type { PaginatedResult } from '../../utils/pagination';

export class GetAllHospitalInstallations {
    private readonly repo: HospitalInstallationRepository;
    constructor(repo: HospitalInstallationRepository) {
        this.repo = repo
    }

    async execute(query: HospitalInstallationQuery, signal?: AbortSignal): Promise<PaginatedResult<HospitalInstallation>> {
        return await this.repo.Find(query, signal);
    }
}