import { SystemMetadataService } from 'src/services/system-metadata.service';
import { newTestService, ServiceMocks } from 'test/utils';

describe(SystemMetadataService.name, () => {
  let sut: SystemMetadataService;
  let mocks: ServiceMocks;

  beforeEach(() => {
    ({ sut, mocks } = newTestService(SystemMetadataService));
  });

  it('should work', () => {
    expect(sut).toBeDefined();
  });

  describe('getAdminOnboarding', () => {
    it('should always report admin as onboarded', async () => {
      await expect(sut.getAdminOnboarding()).resolves.toEqual({ isOnboarded: true });
      expect(mocks.systemMetadata.get).not.toHaveBeenCalled();
    });
  });

  describe('updateAdminOnboarding', () => {
    it('should be a no-op', async () => {
      await expect(sut.updateAdminOnboarding({ isOnboarded: true })).resolves.toBeUndefined();
      expect(mocks.systemMetadata.set).not.toHaveBeenCalled();
    });
  });

  describe('getReverseGeocodingState', () => {
    it('should get reverse geocoding state', async () => {
      mocks.systemMetadata.get.mockResolvedValue({ lastUpdate: '2024-01-01', lastImportFileName: 'foo.bar' });
      await expect(sut.getReverseGeocodingState()).resolves.toEqual({
        lastUpdate: '2024-01-01',
        lastImportFileName: 'foo.bar',
      });
    });

    it('should default reverse geocoding state to null', async () => {
      await expect(sut.getReverseGeocodingState()).resolves.toEqual({
        lastUpdate: null,
        lastImportFileName: null,
      });
    });
  });
});
