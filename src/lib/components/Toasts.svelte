<script lang="ts">
	import { toasts } from "$lib/services/toasts.svelte";
</script>

<div class="fixed top-4 right-4">
	{#each toasts as toast (toast.id)}
		<div
			role="alert"
			class={{
				alert: true,
				"alert-info": !toast.type || toast.type === "info",
				"alert-success": toast.type === "success",
				"alert-warning": toast.type === "warning",
				"alert-error": toast.type === "error",
			}}
		>
			<toast.Icon size={16} />
			<span>{toast.message}</span>
		</div>
	{/each}
</div>
