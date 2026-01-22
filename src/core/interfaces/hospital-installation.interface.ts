import type { HospitalInstallation } from "../models";
import type { HospitalInstallationQuery } from "../schemas/queries";
import type { HospitalInstallationRequest } from "../schemas/requests";
import type { PaginatedResult } from "../utils/pagination";

export interface HospitalInstallationRepository {
    Find(params?: HospitalInstallationQuery, signal?: AbortSignal): Promise<PaginatedResult<HospitalInstallation>>;
    FindByID(id: string, signal?: AbortSignal): Promise<HospitalInstallation | null>;
    Create(request: HospitalInstallationRequest, signal?: AbortSignal): Promise<void>;
    Update(id: string, request: HospitalInstallationRequest, signal?: AbortSignal): Promise<void>;
    Delete(id: string, signal?: AbortSignal): Promise<void>
}