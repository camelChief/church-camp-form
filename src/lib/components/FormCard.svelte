<script lang="ts">
    import { type IconProps } from "@lucide/svelte";
    import type { Component, Snippet } from "svelte";
    import type { CardProps } from "../types";

    let {
        imageSrc,
        Icon,
        title,
        children,
        active,
        visited,
        onback,
        onnext,
        onsubmit,
    }: {
        imageSrc?: string,
        Icon: Component<IconProps>,
        title: string,
        children?: Snippet,
    } & CardProps = $props();
</script>

<div class="card-wrapper w-lg max-w-full" class:active class:visited>
    <div
        class="card w-lg max-w-full relative bg-base-100"
        class:shadow-md={active}
        class:bg-base-200={!active}
    >
        {#if imageSrc}
            <figure>
                <img src={imageSrc} alt={title} />
            </figure>
        {/if}
        <div class="card-body gap-4 relative">
            <div class="step" class:shadow-sm={active}>
                {#if active}<Icon size="16" />{/if}
            </div>
            <div class="step-bar"></div>
            <h2 class="card-title">{title}</h2>
            {#if active}
                {@render children?.()}

                <div class="flex flex-row self-end gap-2 mt-4">
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

<style>
    .card-wrapper:last-of-type {
        min-height: calc(100vh - 3rem);
    }

    .scroll-catch {
        position: absolute;
        top: -2rem;
    }

    .step {
        align-items: center;
        background-color: var(--color-base-content);
        border-radius: 50%;
        color: var(--color-primary-content);
        display: flex;
        height: 1rem;
        justify-content: center;
        left: -2.5rem;
        opacity: .1;
        position: absolute;
        top: 1.75rem;
        width: 1rem;
        z-index: 2;
    }

    .active .step {
        background-color: var(--color-primary);
        height: 2rem;
        left: -3rem;
        opacity: 1;
        top: 1.25rem;
        width: 2rem;
    }

    .step-bar {
        border-left: 2px dashed var(--color-base-content);
        height: 100%;
        left: -2rem;
        opacity: .1;
        position: absolute;
        top: 2.75rem;
        z-index: 1;
    }

    .card-wrapper:last-of-type .step-bar {
        display: none;
    }

    .visited .step {
        background-color: var(--color-primary);
        opacity: 1;
    }

    .visited .step-bar {
        border-left: 2px solid var(--color-primary);
        opacity: 1;
    }
</style>