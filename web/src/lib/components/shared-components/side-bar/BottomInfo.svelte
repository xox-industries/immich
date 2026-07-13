<script lang="ts">
  import { authManager } from '$lib/managers/auth-manager.svelte';
  import PurchaseInfo from './PurchaseInfo.svelte';
  import ServerStatus from './ServerStatus.svelte';
  import StorageSpace from './StorageSpace.svelte';
</script>

{#if authManager.user.isAdmin}
  <div class="mt-auto">
    <StorageSpace />
  </div>
{/if}

<PurchaseInfo />

{#if authManager.user.isAdmin}
  <div class="mt-2 mb-6">
    <ServerStatus />
  </div>
{/if}
