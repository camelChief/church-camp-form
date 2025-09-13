<div class="flex items-center justify-center h-screen w-screen fixed z-2">
    <div class="flex flex-col gap-4 items-center p-4 backdrop-blur-xs">
        <p class="text-center mt-8">
            Form submitted.<br />
            Expect an email with extra details shortly.
        </p>
        <p>Can't wait to join you at camp!</p>
    </div>
</div>

<div class="tiling-background"></div>

<style>
    .tiling-background {
        animation: slide 32s linear infinite;
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tent-tree-icon lucide-tent-tree"><circle cx="4" cy="4" r="2"/><path d="m14 5 3-3 3 3"/><path d="m14 10 3-3 3 3"/><path d="M17 14V2"/><path d="M17 14H7l-5 8h20Z"/><path d="M8 14v8"/><path d="m9 14 5 8"/></svg>');
        height: 200vh;
        opacity: 0.05;
        position: fixed;
        top: -50vh;
        transform: rotate(-15deg);
        width: 200vw;
    }

    @keyframes slide {
        from {
            left: -50vw;
            top: -50vh;
        }
        
        to {
            left: calc(-50vw + 495px);
            top: calc(-50vh - 132px)
        }
    }
</style>