<script lang="ts">
    import type { Snippet } from "svelte";

    export interface ActionProps {
        card?: HTMLDivElement;
        active: boolean;
        visited: boolean;
        onback?: () => void;
        onnext?: () => void;
        onsubmit?: () => void;
    }

    let {
        imageSrc,
        title,
        children,
        card = $bindable(),
        active,
        visited,
        onback,
        onnext,
        onsubmit,
    }: {
        imageSrc?: string,
        title: string,
        children?: Snippet,
    } & ActionProps = $props();
</script>

{#if visited}
    <div class="card-wrapper w-lg max-w-full">
        <div
            bind:this={card}
            class="card bg-base-100 w-lg max-w-full relative border-primary"
            class:shadow-sm={active}
            class:opacity-75={!active}
        >
            {#if imageSrc}
                <figure>
                    <img src={imageSrc} alt={title} />
                </figure>
            {/if}
            <div class="card-body gap-4">
                <h2 class="card-title">{title}</h2>
                {@render children?.()}

                {#if active}
                    <div class="flex flex-row self-end gap-2 mt-8">
                        {#if onback}<button onclick={onback} class="btn">Back</button>{/if}
                        {#if onnext}<button onclick={onnext} class="btn btn-primary">Next</button>{/if}
                        {#if onsubmit}<button onclick={onsubmit} class="btn btn-primary">Submit</button>{/if}
                    </div>
                {/if}
            </div>

            <!-- catches the scroll -->
            <div class="scroll-catch"></div>
        </div>
    </div>
{/if}

<style>
    .card-wrapper:last-of-type {
        /* border: 1px dashed blue; */
        min-height: calc(100vh - 3rem);
    }

    .scroll-catch {
        /* border: 1px dashed red; */
        position: absolute;
        top: -2rem;
    }
</style>