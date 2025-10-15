import {
	BadgeInfo,
	CircleCheck,
	OctagonX,
	TriangleAlert,
	type IconProps,
} from '@lucide/svelte';
import type { Component } from 'svelte';

type Toast = {
	id: number;
	Icon: Component<IconProps>;
	message: string;
	type?: 'info' | 'success' | 'warning' | 'error';
	duration?: number;
};

let counter = 0;

export const toasts: Toast[] = $state([]);

export function showToast(options: Omit<Toast, 'id' | 'Icon'>) {
	const id = ++counter;
	let Icon: Component<IconProps>;
	switch (options.type) {
		case 'success':
			Icon = CircleCheck;
			break;
		case 'warning':
			Icon = TriangleAlert;
			break;
		case 'error':
			Icon = OctagonX;
			break;
		case 'info':
		default:
			Icon = BadgeInfo;
			break;
	}

	const toast: Toast = { id, Icon, ...options };
	toasts.push(toast);
	removeAfterDelay(id, toast.duration ?? 3000);
}

export function dismissToast(id: number) {
	const index = toasts.findIndex((t) => t.id === id);
	if (index !== -1) toasts.splice(index, 1);
}

function removeAfterDelay(id: number, delay: number) {
	setTimeout(() => dismissToast(id), delay);
}
