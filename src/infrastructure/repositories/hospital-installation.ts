import type { HospitalInstallationRepository } from '@/core/interfaces'
import type { HospitalInstallation } from '@/core/models';
import type { HospitalInstallationQuery } from '@/core/schemas/queries';
import type { HospitalInstallationRequest } from '@/core/schemas/requests';
import type { PaginatedResult } from '@/core/utils/pagination';
import api from '@/infrastructure/sources/api/api'

export class ApiHospitalInstallationRepository implements HospitalInstallationRepository {
    async Find(params?: HospitalInstallationQuery, signal?: AbortSignal): Promise<PaginatedResult<HospitalInstallation>> {
        const response = await api.get('/hospital-installations', {
            params, signal
        })
        console.log(response);
        return {
            items: [],
            perPage: params?.perPage || 10,
            currentPage: params?.page || 0,
            total: 10
        }
    }
    FindByID(id: string, signal?: AbortSignal): Promise<HospitalInstallation | null> {
        console.log(id, signal);
        throw new Error('Method not implemented.');
    }
    Create(request: HospitalInstallationRequest, signal?: AbortSignal): Promise<void> {
        console.log(request, signal);
        throw new Error('Method not implemented.');
    }
    Update(id: string, request: HospitalInstallationRequest, signal?: AbortSignal): Promise<void> {
        console.log(id, request, signal)
        throw new Error('Method not implemented.');
    }
    Delete(id: string, signal?: AbortSignal): Promise<void> {
        console.log(id, signal)
        throw new Error('Method not implemented.');
    }

}